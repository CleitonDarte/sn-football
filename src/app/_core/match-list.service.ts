import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Match {
  id: number,
  date?: number,
  stadium: string,
  team_a: string,
  team_a_shortName: string,
  team_a_sigla: string,
  team_b: string,
  team_b_shortName: string,
  team_b_sigla: string
}

export interface MatchDay {
  matchday: number,
  endDate?: number,
  matches: Match[]
}

@Injectable({
  providedIn: 'root'
})
export class MatchListService {

  public matchList = new BehaviorSubject<MatchDay[]>([
    {
      matchday: 1,
      endDate: 1734192000000,
      matches: [
        {
          id: 1,
          date: 1734184800000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 2,
          date: 1734184800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 3,
          date: 1734192000000,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        },
        {
          id: 4,
          date: 1734192000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        }
      ]
    },
    {
      matchday: 2,
      endDate: 1734883200000,
      matches: [
        {
          id: 5,
          date: 1734789600000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        },
        {
          id: 6,
          date: 1734796800000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        },
        {
          id: 7,
          date: 1734796800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 8,
          date: 1734883200000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        }
      ]
    },
    {
      matchday: 3,
      endDate: 1735401600000,
      matches: [
        {
          id: 9,
          date: 1735394400000,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 10,
          date: 1735394400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        },
        {
          id: 11,
          date: 1735401600000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 12,
          date: 1735401600000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        }
      ]
    },
    {
      matchday: 4,
      endDate: 1736092800000,
      matches: [
        {
          id: 13,
          date: 1736006400000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 14,
          date: 1736006400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 15,
          date: 1736092800000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 16,
          date: 1736092800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        }
      ]
    },
    {
      matchday: 5,
      endDate: 1736697600000,
      matches: [
        {
          id: 17,
          date: 1736604000000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 18,
          date: 1736611200000,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        },
        {
          id: 19,
          date: 1736611200000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 20,
          date: 1736697600000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        }
      ]
    },
    {
      matchday: 6,
      endDate: 1737302400000,
      matches: [
        {
          id: 21,
          date: 1737208800000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        },
        {
          id: 22,
          date: 1737216000000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 23,
          date: 1737216000000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 24,
          date: 1737302400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        }
      ]
    },
    {
      matchday: 7,
      endDate: 1737907200000,
      matches: [
        {
          id: 25,
          date: 1737813600000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 26,
          date: 1737820800000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        },
        {
          id: 27,
          date: 1737820800000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        },
        {
          id: 28,
          date: 1737907200000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        }
      ]
    },
    {
      matchday: 8,
      endDate: 1738425600000,
      matches: [
        {
          id: 29,
          date: 1738418400000,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 30,
          date: 1738418400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 31,
          date: 1738425600000,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 32,
          date: 1738425600000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        }
      ]
    },
    {
      matchday: 9,
      endDate: 1739116800000,
      matches: [
        {
          id: 33,
          date: 1739023200000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        },
        {
          id: 34,
          date: 1739030400000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 35,
          date: 1739030400000,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 36,
          date: 1739116800000,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        }
      ]
    },
    {
      matchday: 10,
      endDate: undefined,
      matches: [
        {
          id: 37,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 38,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        },
        {
          id: 39,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 40,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        }
      ]
    },
    {
      matchday: 11,
      endDate: undefined,
      matches: [
        {
          id: 41,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 42,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 43,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 44,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        }
      ]
    },
    {
      matchday: 12,
      endDate: undefined,
      matches: [
        {
          id: 45,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 46,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 47,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 48,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        }
      ]
    },
    {
      matchday: 13,
      endDate: undefined,
      matches: [
        {
          id: 49,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 50,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 51,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 52,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        }
      ]
    },
    {
      matchday: 14,
      endDate: undefined,
      matches: [
        {
          id: 53,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 54,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 55,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 56,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        }
      ]
    },
    {
      matchday: 15,
      endDate: undefined,
      matches: [
        {
          id: 57,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 58,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 59,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        },
        {
          id: 60,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        }
      ]
    },
    {
      matchday: 16,
      endDate: undefined,
      matches: [
        {
          id: 61,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Belo Horizonte",
          team_a_shortName: "Belo Horizonte",
          team_a_sigla: "fcbh",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 62,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Associação Académica de Preguiça",
          team_b_shortName: "Preguiça",
          team_b_sigla: "aap"
        },
        {
          id: 63,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 64,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        }
      ]
    },
    {
      matchday: 17,
      endDate: undefined,
      matches: [
        {
          id: 65,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Académica de Preguiça",
          team_a_shortName: "Preguiça",
          team_a_sigla: "aap",
          team_b: "Sport Club Atlético",
          team_b_shortName: "Atlético",
          team_b_sigla: "sca"
        },
        {
          id: 66,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação Jovens de Esperança Chã-Poça",
          team_a_shortName: "Chã-Poça",
          team_a_sigla: "ajecp",
          team_b: "Football Club Ultramarina",
          team_b_shortName: "Ultramarina",
          team_b_sigla: "fcu"
        },
        {
          id: 67,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_a_shortName: "A.J.A.T-SN",
          team_a_sigla: "ajatsn",
          team_b: "Associação Comunitária Mancha Verde",
          team_b_shortName: "Mancha Verde",
          team_b_sigla: "acmv"
        },
        {
          id: 68,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Football Club Talho",
          team_a_shortName: "Talho",
          team_a_sigla: "fct",
          team_b: "Football Club Praia Branca",
          team_b_shortName: "Praia Branca",
          team_b_sigla: "fcpb"
        }
      ]
    },
    {
      matchday: 18,
      endDate: undefined,
      matches: [
        {
          id: 69,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Praia Branca",
          team_a_shortName: "Praia Branca",
          team_a_sigla: "fcpb",
          team_b: "Associação de Jovens Amigos de Tarrafal São Nicolau",
          team_b_shortName: "A.J.A.T-SN",
          team_b_sigla: "ajatsn"
        },
        {
          id: 70,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Associação Comunitária Mancha Verde",
          team_a_shortName: "Mancha Verde",
          team_a_sigla: "acmv",
          team_b: "Football Club Belo Horizonte",
          team_b_shortName: "Belo Horizonte",
          team_b_sigla: "fcbh"
        },
        {
          id: 71,
          date: undefined,
          stadium: "Estádio Di Deus",
          team_a: "Sport Club Atlético",
          team_a_shortName: "Atlético",
          team_a_sigla: "sca",
          team_b: "Associação Jovens de Esperança Chã-Poça",
          team_b_shortName: "Chã-Poça",
          team_b_sigla: "ajecp"
        },
        {
          id: 72,
          date: undefined,
          stadium: "Estádio Municipal Orlando Rogrigues",
          team_a: "Football Club Ultramarina",
          team_a_shortName: "Ultramarina",
          team_a_sigla: "fcu",
          team_b: "Football Club Talho",
          team_b_shortName: "Talho",
          team_b_sigla: "fct"
        }
      ]
    }
  ]);

  constructor() { }
}
