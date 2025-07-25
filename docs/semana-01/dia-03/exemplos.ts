/**
 * @fileoverview Template de Exercícios do Dia 03 - Itens Místicos e Reutilizáveis
 * @description Arquivo para os alunos implementarem os conceitos de Generics & Utility Types
 *
 * 📋 INSTRUÇÕES:
 * 1. Complete os exercícios marcados com "// TODO:"
 * 2. Consulte o arquivo "exercicios.md" para as instruções detalhadas
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia03 (na raiz do projeto)
 *    🔧 MANUAL: npx ts-node docs/semana-01/dia-03/exemplos.ts
 * 4. Use o arquivo "README.md" como referência teórica
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

// =============================================================================
// 🟦 FUNDAMENTOS DE GENERICS (EXEMPLO FORNECIDO)
// =============================================================================

// Exemplo de função genérica simples
function exemploContainer<T>(valor: T): { valor: T; tipo: string } {
  return {
    valor,
    tipo: typeof valor,
  };
}

// Testando o exemplo
const exemploString = exemploContainer('Zanpakuto');
console.log('📦 Exemplo:', exemploString);

// =============================================================================
// 🏋️ EXERCÍCIOS NÍVEL INICIANTE - GENERICS BÁSICOS
// =============================================================================

// TODO: Exercício 1 - Função Genérica Simples
// Crie uma função chamada 'criarContainer' que:
// - Aceite um parâmetro genérico T
// - Retorne um objeto com propriedades: conteudo (T) e tipo (string)
// - Teste com diferentes tipos: string, number, objeto
function criarContainer<T>(param: T): { conteudo: T; tipo: string } {
  return { conteudo: param, tipo: typeof param };
}
// TODO: Exercício 2 - Array Genérico
// Crie uma função 'processarLista' que:
// - Aceite um array genérico T[] e uma função de processamento
// - Retorne um array de strings processadas
// - Teste com array de animes e array de números
function processarLista<T>(array: Array<T>): string[] {
  return array.map((item) => `${item}`);
}

console.log(processarLista([1, 2, 3, 4, 5]));
console.log(
  processarLista(['Reginaldo Rossi', 'Evandro Mesquita', 'Luciano Pavaroti'])
);
// =============================================================================
// ⚡ EXERCÍCIOS NÍVEL INTERMEDIÁRIO - CLASSES GENÉRICAS
// =============================================================================

// TODO: Exercício 3 - Classe Genérica
// Crie uma classe 'ColecaoMagica<T>' que:
// - Tenha uma propriedade privada 'itens: T[]'
// - Método 'adicionar(item: T): void'
// - Método 'obterTodos(): T[]'
// - Método 'filtrar(predicado: (item: T) => boolean): T[]'
// - Getter 'tamanho: number'

class ColecaoMagica<T> {
  private itens: T[] = [];
  private tamanho: number;

  adicionar(item: T): void {
    this.itens.push(item);
    this.tamanho = this.itens.length;
  }

  obterTodos(): T[] {
    return [...this.itens];
  }

  filtrar(predicado: (item: T) => boolean): T[] {
    return this.itens.filter(predicado);
  }

  get tamanhoColecao() {
    return this.tamanho;
  }
}

// TODO: Exercício 4 - Interface de Personagem
// Crie uma interface 'PersonagemAnime' com:
// - nome: string
// - anime: string
// - poder: number
// - habilidade: string
// Depois teste sua ColecaoMagica com essa interface

interface PersonagemAnime {
  nome: string;
  anime: string;
  poder: number;
  habilidade: string;
}

const colecao = new ColecaoMagica<PersonagemAnime>();

const goku: PersonagemAnime = {
  nome: 'Son Goku',
  anime: 'Dragon Ball Z',
  poder: 9999,
  habilidade: 'pai ausente',
};

colecao.adicionar(goku);
console.log(colecao.obterTodos());
console.log(colecao.tamanhoColecao);

// =============================================================================
// 🛠️ EXERCÍCIOS NÍVEL INTERMEDIÁRIO - UTILITY TYPES
// =============================================================================

// Interface base para os exercícios (fornecida)
interface AnimeCompleto {
  id: number;
  titulo: string;
  episodios: number;
  status: 'assistindo' | 'concluido' | 'pausado' | 'planejo-assistir';
  nota: number;
  generos: string[];
  estudio: string;
  anoLancamento: number;
  sinopse: string;
}

// TODO: Exercício 5 - Utility Type Partial
// Crie um tipo 'AtualizacaoAnime' usando Partial<AnimeCompleto>
// Crie uma função 'atualizarAnime(id: number, updates: AtualizacaoAnime): void'

type AtualizacaoAnime = Partial<AnimeCompleto>;
const atualizarAnime = (id: number, updates: AtualizacaoAnime): void => {
  let animes: AnimeCompleto[] = [];

  for (const key in updates) {
    if (updates[key] === undefined || updates[key] === null)
      delete updates[key];
  }
  animes = [
    ...animes,
    { ...animes.find((anime) => anime.id === id), ...updates },
  ];
};

// TODO: Exercício 6 - Utility Type Pick
// Crie um tipo 'ResumoAnime' usando Pick para selecionar:
// 'titulo', 'episodios', 'nota', 'status'
// Crie uma função 'exibirResumo(anime: ResumoAnime): void'

type ResumoAnime = Pick<
  AnimeCompleto,
  'titulo' | 'episodios' | 'nota' | 'status'
>;
const exibirResumo = (anime: ResumoAnime): void => {
  console.log(
    `${anime.titulo} - episódios: ${anime.episodios} | nota: ${anime.nota} | status: ${anime.status}`
  );
};

// TODO: Exercício 7 - Utility Type Omit
// Crie um tipo 'CriarAnime' usando Omit para excluir 'id'
// Crie uma função 'criarNovoAnime(dados: CriarAnime): AnimeCompleto'

type CriarAnime = Omit<AnimeCompleto, 'id'>;
const criarNovoAnime = (dados: CriarAnime): AnimeCompleto => {
  return { id: Math.floor(Math.random() * 1000), ...dados };
};

// =============================================================================
// 🚀 EXERCÍCIOS NÍVEL AVANÇADO - CONSTRAINTS E MÚLTIPLOS GENERICS
// =============================================================================

// TODO: Exercício 8 - Constraints
// Crie uma função 'buscarPorNome<T extends { nome: string }>' que:
// - Aceite uma lista T[] e um nome para buscar
// - Retorne T | undefined
// - Use case-insensitive search
function buscarPorNome<T extends { nome: string }>(
  lista: T[],
  nome: string
): T | undefined {
  return lista.find(
    (item: T) => item.nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
  );
}

// TODO: Exercício 9 - Múltiplos Generics
// Crie uma função 'mapear<TInput, TOutput>' que:
// - Aceite uma lista TInput[] e uma função de mapeamento
// - Retorne TOutput[]
// - Teste transformando array de objetos em array de strings

function mapear<TInput, TOutput>(lista: TInput[], mapeamento: (i: TInput) => TOutput): TOutput[] {
  return lista.map(mapeamento)
}

const mapeamento = (i: {nome: string}): string => {
  return i.nome
}

const nomes = [{nome: 'José'}, {nome: 'Izaltino'}, {nome: 'Cleusa'}]

console.log(mapear(nomes, mapeamento))
// =============================================================================
// 🎯 EXERCÍCIOS EXTRAS - DESAFIO
// =============================================================================

// TODO: Exercício 10 - Serviço Genérico (DESAFIO)
// Crie uma interface 'ApiResponse<T>' com:
// - data: T
// - success: boolean
// - message: string
// - timestamp: number
//
// Crie uma classe 'ApiService' com método:
// - async buscar<T>(endpoint: string): Promise<ApiResponse<T>>

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: number;
}

class ApiService {

  async buscar<T>(endpoint: string): Promise<ApiResponse<T>> {
    return fetch(endpoint).then(r => r.json())
  }
}

// =============================================================================
// 🧪 ÁREA DE TESTES
// =============================================================================

// Use esta área para testar suas implementações
console.log('🎯 === INICIANDO TESTES ===');

// Exemplo de como testar suas funções:
const meuContainer = criarContainer('Teste');
console.log('Resultado:', meuContainer);

console.log('✅ Testes concluídos!');

// =============================================================================
// 📤 EXPORTS (mantenha comentado até completar os exercícios)
// =============================================================================

export {
  criarContainer,
  processarLista,
  ColecaoMagica,
  buscarPorNome,
  mapear,
  ApiService,
  type PersonagemAnime,
  type AnimeCompleto,
  type AtualizacaoAnime,
  type ResumoAnime,
  type CriarAnime,
  type ApiResponse,
};
