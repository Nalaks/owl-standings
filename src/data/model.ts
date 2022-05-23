import { ITeam } from "../types/types";

export default class Team implements ITeam {
   id: number;
   name: string;
   icon: string;
   points: number;
   wins: number;
   losses: number;
   mapWins: number;
   mapLosses: number;
   mapTies: number;
   diff: number;

   constructor(id: number, name: string, icon: string, points: number, wins: number, losses: number, mapWins: number, mapLosses: number, mapTies: number) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.points = points;
    this.wins = wins;
    this.losses = losses;
    this.mapWins = mapWins;
    this.mapLosses = mapLosses;
    this.mapTies = mapTies;
    this.diff = this.mapWins - this.mapLosses;
  }
}