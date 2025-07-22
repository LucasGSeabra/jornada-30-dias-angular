/**
 * @fileoverview Exemplos práticos do Dia 01 - Derrote o Boss Any!
 * @description Código TypeScript correspondente à documentação
 *
 * 📋 INSTRUÇÕES:
 * 1. Este arquivo contém exemplos dos conceitos aprendidos
 * 2. Para os exercícios práticos, consulte: exercicios.md
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia01 (na raiz do projeto)
 * 4. Use este arquivo como base para seus exercícios!
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Criando namespace para isolar o código
// =============================================================================
// 🟦 TIPOS BÁSICOS
// =============================================================================

let nome: string = 'Anna';
let idade: number = 30;
let ativo: boolean = true;

// =============================================================================
// 🔍 TYPE ANNOTATION VS INFERENCE
// =============================================================================

// Type Annotation (Explícito)
let pontos: number = 10;
let nomeHeroi: string = 'Aragorn';
let vivo: boolean = true;

// Type Inference (Automático)
let pontosInferidos = 10; // TS infere number
let nomeHeroiInferido = 'Aragorn'; // TS infere string
let vivoInferido = true; // TS infere boolean

// =============================================================================
// ⚠️ ANY vs UNKNOWN
// =============================================================================

// ❌ PERIGOSO - Evite any
let dadosUsuario: any = 'texto';
dadosUsuario = 123;
// dadosUsuario.metodoQueNaoExiste(); // compila mas quebra em runtime

// ✅ SEGURO - Use unknown
let dadosDesconhecidos: unknown = 'algum valor';

if (typeof dadosDesconhecidos === 'string') {
  console.log(dadosDesconhecidos.toUpperCase());
}

// =============================================================================
// 🔑 UNION & LITERAL TYPES
// =============================================================================

// Union Types
let id: string | number = 'user123';
id = 456;

function processarId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(`ID string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID numérico: ${id * 2}`);
  }
}

// Literal Types
type Status = 'ativo' | 'inativo' | 'morto';
type Direcao = 'norte' | 'sul' | 'leste' | 'oeste';

let statusPersonagem: Status = 'ativo';
// statusPersonagem = 'fugindo'; // ❌ Erro de compilação

// =============================================================================
// 🛡️ TYPE ALIAS VS INTERFACE
// =============================================================================

// Type Alias - Exemplos Práticos
type Guerreiro = {
  nome: string;
  arma: string;
  classe: 'arqueiro' | 'mago' | 'guerreiro';
};

type ID = string | number;
type StatusJogo = 'pausado' | 'jogando' | 'game-over';

// ✨ Type Alias para Funções
type CalculadoraDano = (ataque: number, defesa: number) => number;
type ValidadorEmail = (email: string) => boolean;
type ProcessadorId = (id: string | number) => void;

// ✨ Type Alias para Objetos Complexos
type Configuracao = {
  tema: 'claro' | 'escuro';
  idioma: 'pt' | 'en' | 'es';
  notificacoes: boolean;
  volume?: number; // opcional
};

type RespostaAPI = {
  sucesso: boolean;
  dados: unknown;
  erro?: string;
};

// ✨ Type Alias com Union Types
type TipoUsuario = 'admin' | 'moderador' | 'usuario';
type StatusConexao = 'conectado' | 'desconectado' | 'conectando';
type Prioridade = 'baixa' | 'media' | 'alta' | 'critica';

// ✨ Type Alias com Intersection (combinando tipos)
type TempoCarimbo = {
  criadoEm: Date;
  atualizadoEm: Date;
};

type Usuario = {
  id: number;
  nome: string;
  email: string;
} & TempoCarimbo; // Combina com TempoCarimbo

// ✨ Exemplos de uso dos Type Alias
const calcularDanoSimples: CalculadoraDano = (ataque, defesa) => {
  return Math.max(0, ataque - defesa);
};

const validarEmailSimples: ValidadorEmail = (email) => {
  return email.includes('@') && email.includes('.');
};

const config: Configuracao = {
  tema: 'escuro',
  idioma: 'pt',
  notificacoes: true,
  volume: 80,
};

const usuarioCompleto: Usuario = {
  id: 1,
  nome: 'João',
  email: 'joao@teste.com',
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

// Interface
interface IGuerreiro {
  nome: string;
  arma: string;
}

interface IGuerreiroAvancado extends IGuerreiro {
  nivel: number;
  habilidades: string[];
  experiencia: number;
}

// =============================================================================
// 🧩 PROPRIEDADES ESPECIAIS
// =============================================================================

// Optional Properties
interface Personagem {
  nome: string;
  classe?: string; // opcional
  vida: number;
  mana?: number; // opcional
  id?: number; // opcional
  ativo?: boolean; // opcional
}

const heroi: Personagem = {
  nome: 'Legolas',
  vida: 100,
  id: 1,
  ativo: true,
};

// Readonly Properties
interface PersonagemImutavel {
  readonly id: number;
  readonly criadoEm: Date;
  nome: string;
}

const personagem: PersonagemImutavel = {
  id: 1,
  criadoEm: new Date(),
  nome: 'Gandalf',
};

// personagem.id = 2; // ❌ Erro - readonly
personagem.nome = 'Gandalf, o Cinzento'; // ✅ OK

// =============================================================================
// 🎯 ENUMS
// =============================================================================

// Enum Numérico
enum ClasseNumerica {
  Arqueiro, // 0
  Mago, // 1
  Guerreiro, // 2
}

// Enum String (Recomendado)
enum ClasseString {
  Arqueiro = 'ARQUEIRO',
  Mago = 'MAGO',
  Guerreiro = 'GUERREIRO',
}

// =============================================================================
// 🧙 EXEMPLO PRÁTICO: SISTEMA RTS
// =============================================================================

interface PersonagemRTS {
  /** Nome do personagem */
  nome: string;
  /** Classe do personagem */
  classe: 'arqueiro' | 'mago' | 'guerreiro';
  /** Pontos de vida do personagem */
  vida: number;
  /** Poder de ataque */
  ataque: number;
  /** Defesa opcional (padrão 0) */
  defesa?: number;
  /** ID único e imutável */
  readonly id: number;
}

/**
 * Calcula o dano efetivo de um personagem
 */
function calcularDano(personagem: PersonagemRTS): number {
  return personagem.ataque - (personagem.defesa ?? 0);
}

/**
 * Cria um personagem com valores padrão
 */
function criarPersonagem(
  nome: string,
  classe: PersonagemRTS['classe']
): PersonagemRTS {
  const statsBase = {
    arqueiro: { vida: 80, ataque: 90, defesa: 20 },
    mago: { vida: 60, ataque: 100, defesa: 10 },
    guerreiro: { vida: 120, ataque: 70, defesa: 40 },
  };

  return {
    id: Math.floor(Math.random() * 1000),
    nome,
    classe,
    ...statsBase[classe],
  };
}

/**
 * Verifica se personagem está vivo
 */
function estaVivo(personagem: PersonagemRTS): boolean {
  return personagem.vida > 0;
}

/**
 * Simula uma batalha entre dois personagens
 */
function simularBatalha(
  atacante: PersonagemRTS,
  defensor: PersonagemRTS
): string {
  const dano = calcularDano(atacante);
  defensor.vida -= dano;

  if (estaVivo(defensor)) {
    return `${atacante.nome} causou ${dano} de dano em ${defensor.nome}`;
  } else {
    return `${atacante.nome} derrotou ${defensor.nome}!`;
  }
}

// =============================================================================
// 🎮 EXEMPLOS DE USO
// =============================================================================

// Criando personagens
const legolas = criarPersonagem('Legolas', 'arqueiro');
const gandalf = criarPersonagem('Gandalf', 'mago');
const aragorn = criarPersonagem('Aragorn', 'guerreiro');

// Calculando dano
const danoLegolas = calcularDano(legolas);
const danoGandalf = calcularDano(gandalf);
const danoAragorn = calcularDano(aragorn);

// Exibindo informações
console.log(`${legolas.nome} causa ${danoLegolas} de dano`);
console.log(`${gandalf.nome} causa ${danoGandalf} de dano`);
console.log(`${aragorn.nome} causa ${danoAragorn} de dano`);

// Simulando batalhas
console.log(simularBatalha(legolas, gandalf));
console.log(simularBatalha(aragorn, legolas));

// Testando diferentes funcionalidades
processarId('user123');
processarId(456);

console.log(`Status do personagem: ${statusPersonagem}`);
console.log(`Classe escolhida: ${ClasseString.Arqueiro}`);
