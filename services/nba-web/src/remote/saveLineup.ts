// src/api/saveLineup.ts
import { collection, addDoc } from "firebase/firestore";
import { store } from "./firebase";
import { Player } from "../types/player";

export async function updateLineup(players: Player[]) {
  await addDoc(collection(store, "lineups"), {
    players,
    createdAt: new Date().toISOString(),
  });
}
