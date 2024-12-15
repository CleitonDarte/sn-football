import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreService } from './core.service';

export interface Team {
  id: number,
  playing: boolean,
  name: string,
  shortName: string,
  sigla: string,
  homeStadium: string,
  results: {
    points: number,
    wins: number,
    losses: number,
    draws: number,
    goalsFavor: number,
    goalsAgainst: number,
    matchesPlayed: number,
    matchesResults: Array<'w' | 'l' | 'd'>
  }
};

@Injectable({
  providedIn: 'root'
})
export class TeamListService {

  /* public teamList = new BehaviorSubject<Team[]>([
    {
      id: 1,
      playing: true,
      name: "Associação Académica de Preguiça",
      shortName: "Preguiça",
      sigla: "aap",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 2,
      playing: true,
      name: "Associação Comunitária Mancha Verde",
      shortName: "Mancha Verde",
      sigla: "acmv",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 3,
      playing: true,
      name: "Associação de Jovens Amigos de Tarrafal São Nicolau",
      shortName: "A.J.A.T-SN",
      sigla: "ajatsn",
      homeStadium: "Estádio Municipal Orlando Rogrigues",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 4,
      playing: true,
      name: "Associação Jovens de Esperança Chã-Poça",
      shortName: "Chã-Poça",
      sigla: "ajecp",
      homeStadium: "Estádio Municipal Orlando Rogrigues",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 5,
      playing: false,
      name: "Clube Desportivo Ribeira Brava",
      shortName: "Ribeira Brava",
      sigla: "cdrb",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 6,
      playing: true,
      name: "Football Club Belo Horizonte",
      shortName: "Belo Horizonte",
      sigla: "fcbh",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 7,
      playing: true,
      name: "Football Club Praia Branca",
      shortName: "Praia Branca",
      sigla: "fcpb",
      homeStadium: "Estádio Municipal Orlando Rogrigues",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 8,
      playing: true,
      name: "Football Club Talho",
      shortName: "Talho",
      sigla: "fct",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 9,
      playing: true,
      name: "Football Club Ultramarina",
      shortName: "Ultramarina",
      sigla: "fcu",
      homeStadium: "Estádio Municipal Orlando Rogrigues",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    },
    {
      id: 10,
      playing: true,
      name: "Sport Club Atlético",
      shortName: "Atlético",
      sigla: "sca",
      homeStadium: "Estádio Di Deus",
      results: {
        points: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsFavor: 0,
        goalsAgainst: 0,
        matchesPlayed: 0,
        matchesResults: []
      }
    }
  ]); */

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  private userAuth(): string {
    return JSON.parse(localStorage['sd'] || '{}').ut;
  }

  public getTeamsInfo() {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${this.core.apiBaseUrl}/teams`, httpOptions);
  }

  public setMatcheResults(matchId: number, request: { team_a_goals: number, team_b_goals: number }) {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', token: this.userAuth() }) };
    return this.http.post<any>(`${this.core.apiBaseUrl}/teams/match-finish/${matchId}`, request, httpOptions);
  }
}
