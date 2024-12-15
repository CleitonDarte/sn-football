import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreService } from './core.service';

export interface Match {
  id: number,
  date?: number,
  stadium: string,
  resultDone: boolean,
  team_a: string,
  team_a_id: number,
  team_a_shortName: string,
  team_a_sigla: string,
  team_a_score: number,
  team_b: string,
  team_b_id: number,
  team_b_shortName: string,
  team_b_sigla: string,
  team_b_score: number
}

export interface MatchDay {
  matchdayId: number,
  endDate?: number,
  matches: Match[]
}

@Injectable({
  providedIn: 'root'
})
export class MatchListService {

  /* public matchList = new BehaviorSubject<MatchDay[]>([
    {
      matchdayId: 1,
      endDate: 1734224400000,
      matches: [
        {
          id: 1,
          date: 1734188400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 2,
          date: 1734188400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 3,
          date: 1734195600000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        },
        {
          id: 4,
          date: 1734195600000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 2,
      endDate: 1734915600000,
      matches: [
        {
          id: 5,
          date: 1734793200000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        },
        {
          id: 6,
          date: 1734800400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        },
        {
          id: 7,
          date: 1734800400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 8,
          date: 1734886800000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 3,
      endDate: 1735434000000,
      matches: [
        {
          id: 9,
          date: 1735398000000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 10,
          date: 1735398000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        },
        {
          id: 11,
          date: 1735405200000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 12,
          date: 1735405200000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 4,
      endDate: 1736125200000,
      matches: [
        {
          id: 13,
          date: 1736010000000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 14,
          date: 1736010000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 15,
          date: 1736096400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 16,
          date: 1736096400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 5,
      endDate: 1736730000000,
      matches: [
        {
          id: 17,
          date: 1736607600000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 18,
          date: 1736614800000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        },
        {
          id: 19,
          date: 1736614800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 20,
          date: 1736701200000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 6,
      endDate: 1737334800000,
      matches: [
        {
          id: 21,
          date: 1737212400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        },
        {
          id: 22,
          date: 1737219600000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 23,
          date: 1737219600000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 24,
          date: 1737306000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 7,
      endDate: 1737939600000,
      matches: [
        {
          id: 25,
          date: 1737817200000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 26,
          date: 1737824400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        },
        {
          id: 27,
          date: 1737824400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        },
        {
          id: 28,
          date: 1737910800000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 8,
      endDate: 1738458000000,
      matches: [
        {
          id: 29,
          date: 1738422000000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 30,
          date: 1738422000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 31,
          date: 1738429200000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 32,
          date: 1738429200000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 9,
      endDate: 1739149200000,
      matches: [
        {
          id: 33,
          date: 1739026800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        },
        {
          id: 34,
          date: 1739034000000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 35,
          date: 1739034000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 36,
          date: 1739120400000,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 10,
      endDate: undefined,
      matches: [
        {
          id: 37,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 38,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        },
        {
          id: 39,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 40,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 11,
      endDate: undefined,
      matches: [
        {
          id: 41,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 42,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 43,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 44,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 12,
      endDate: undefined,
      matches: [
        {
          id: 45,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 46,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 47,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 48,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 13,
      endDate: undefined,
      matches: [
        {
          id: 49,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 50,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 51,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 52,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 14,
      endDate: undefined,
      matches: [
        {
          id: 53,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 54,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 55,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 56,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 15,
      endDate: undefined,
      matches: [
        {
          id: 57,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 58,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 59,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        },
        {
          id: 60,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 16,
      endDate: undefined,
      matches: [
        {
          id: 61,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Belo Horizonte",
          team_a_id: 6,
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 62,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Associação Académica de Preguiça",
          team_b_id: 1,
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap",
          team_b_score: 0
        },
        {
          id: 63,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 64,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 17,
      endDate: undefined,
      matches: [
        {
          id: 65,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Académica de Preguiça",
          team_a_id: 1,
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_a_score: 0,
          team_b: "Sport Club Atlético",
          team_b_id: 10,
          team_b_shortName: "Atlético",
          team_b_sigla: "sca",
          team_b_score: 0
        },
        {
          id: 66,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_id: 4,
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_a_score: 0,
          team_b: "Football Club Ultramarina",
          team_b_id: 9,
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu",
          team_b_score: 0
        },
        {
          id: 67,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_id: 3,
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_a_score: 0,
          team_b: "Associação Comunitária Mancha Verde",
          team_b_id: 2,
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv",
          team_b_score: 0
        },
        {
          id: 68,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Football Club Talho",
          team_a_id: 8,
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_a_score: 0,
          team_b: "Football Club Praia Branca",
          team_b_id: 7,
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb",
          team_b_score: 0
        }
      ]
    },
    {
      matchdayId: 18,
      endDate: undefined,
      matches: [
        {
          id: 69,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Praia Branca",
          team_a_id: 7,
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_a_score: 0,
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_id: 3,
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn",
          team_b_score: 0
        },
        {
          id: 70,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Associação Comunitária Mancha Verde",
          team_a_id: 2,
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_a_score: 0,
          team_b: "Football Club Belo Horizonte",
          team_b_id: 6,
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh",
          team_b_score: 0
        },
        {
          id: 71,
          date: undefined,
          stadium: "Estádio Di Deus",
          resultDone: false,
          team_a: "Sport Club Atlético",
          team_a_id: 10,
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_a_score: 0,
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_id: 4,
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp",
          team_b_score: 0
        },
        {
          id: 72,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          resultDone: false,
          team_a: "Football Club Ultramarina",
          team_a_id: 9,
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_a_score: 0,
          team_b: "Football Club Talho",
          team_b_id: 8,
          team_b_shortName: "Talho",
          team_b_sigla: "fct",
          team_b_score: 0
        }
      ]
    }
  ]); */

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  private userAuth(): string {
    return JSON.parse(localStorage['sd'] || '{}').ut;
  }

  public getMatchDays() {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${this.core.apiBaseUrl}/matches/days`, httpOptions);
  }

  public getAllMatches() {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${this.core.apiBaseUrl}/matches`, httpOptions);
  }

  public getMatchesBiMatchday(matchdayId: number) {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${this.core.apiBaseUrl}/matches/day/${matchdayId}`, httpOptions);
  }

  public setMatcheGoals(matchId: number, request: { team_a_goals: number, team_b_goals: number }) {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', token: this.userAuth() }) };
    return this.http.post<any>(`${this.core.apiBaseUrl}/matches/match/${matchId}`, request, httpOptions);
  }
}
