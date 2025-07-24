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

// TODO: Exercício 2 - Array Genérico
// Crie uma função 'processarLista' que:
// - Aceite um array genérico T[] e uma função de processamento
// - Retorne um array de strings processadas
// - Teste com array de animes e array de números

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

// TODO: Exercício 4 - Interface de Personagem
// Crie uma interface 'PersonagemAnime' com:
// - nome: string
// - anime: string
// - poder: number
// - habilidade: string
// Depois teste sua ColecaoMagica com essa interface

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

// TODO: Exercício 6 - Utility Type Pick
// Crie um tipo 'ResumoAnime' usando Pick para selecionar:
// 'titulo', 'episodios', 'nota', 'status'
// Crie uma função 'exibirResumo(anime: ResumoAnime): void'

// TODO: Exercício 7 - Utility Type Omit
// Crie um tipo 'CriarAnime' usando Omit para excluir 'id'
// Crie uma função 'criarNovoAnime(dados: CriarAnime): AnimeCompleto'

// =============================================================================
// 🚀 EXERCÍCIOS NÍVEL AVANÇADO - CONSTRAINTS E MÚLTIPLOS GENERICS
// =============================================================================

// TODO: Exercício 8 - Constraints
// Crie uma função 'buscarPorNome<T extends { nome: string }>' que:
// - Aceite uma lista T[] e um nome para buscar
// - Retorne T | undefined
// - Use case-insensitive search

// TODO: Exercício 9 - Múltiplos Generics
// Crie uma função 'mapear<TInput, TOutput>' que:
// - Aceite uma lista TInput[] e uma função de mapeamento
// - Retorne TOutput[]
// - Teste transformando array de objetos em array de strings

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

// =============================================================================
// 🧪 ÁREA DE TESTES
// =============================================================================

// Use esta área para testar suas implementações
console.log('🎯 === INICIANDO TESTES ===');

// Exemplo de como testar suas funções:
// const meuContainer = criarContainer('Teste');
// console.log('Resultado:', meuContainer);

console.log('✅ Testes concluídos!');

// =============================================================================
// 📤 EXPORTS (mantenha comentado até completar os exercícios)
// =============================================================================

// export {
//   criarContainer,
//   processarLista,
//   ColecaoMagica,
//   buscarPorNome,
//   mapear,
//   ApiService,
//   type PersonagemAnime,
//   type AnimeCompleto,
//   type AtualizacaoAnime,
//   type ResumoAnime,
//   type CriarAnime,
//   type ApiResponse,
// };
