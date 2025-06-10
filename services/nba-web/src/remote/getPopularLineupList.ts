// src/api/getPopularLineups.ts
import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { Player } from "../types/player";

export interface GroupedLineup {
  count: number;
  players: Player[];
}

export async function getPopularLineupList(): Promise<GroupedLineup[]> {
  const snapshot = await getDocs(collection(store, "lineups"));

  const rawLineups = snapshot.docs.map((doc) => doc.data().players as Player[]);

  const lineupMap = new Map<string, GroupedLineup>();

  for (const lineup of rawLineups) {
    const key = lineup
      .map((p) => p.id)
      .sort()
      .join("-");
    if (lineupMap.has(key)) {
      lineupMap.get(key)!.count += 1;
    } else {
      lineupMap.set(key, { count: 1, players: lineup });
    }
  }

  return [...lineupMap.values()].sort((a, b) => b.count - a.count).slice(0, 3);
}
