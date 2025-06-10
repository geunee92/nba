export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export interface Player {
  id: string;
  name: string;
  position: Position;
  team: string;
  dollar: 1 | 2 | 3 | 4 | 5;
  imageUrl: string;
}
