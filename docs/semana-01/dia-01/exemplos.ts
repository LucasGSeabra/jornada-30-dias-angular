/**
 * @fileoverview Template de Exercícios do Dia 01 - Derrote o Boss Any!
 * @description Arquivo para os alunos implementarem os conceitos de TypeScript Básico
 *
 * 📋 INSTRUÇÕES:
 * 1. Complete os exercícios marcados com "// TODO:"
 * 2. Consulte o arquivo "exercicios.md" para as instruções detalhadas
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia01 (na raiz do projeto)
 * 4. Use o arquivo "derrote-o-boss-any.md" como referência teórica
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// =============================================================================
// 🟦 TIPOS BÁSICOS (EXEMPLO FORNECIDO)
// =============================================================================

// Exemplo de como declarar variáveis com tipos básicos
let nomeExemplo: string = 'Anna';
let idadeExemplo: number = 30;
let ativoExemplo: boolean = true;

// =============================================================================
// 🏋️ EXERCÍCIOS NÍVEL INICIANTE
// =============================================================================

// TODO: Exercício 1 - Tipos Básicos
// Declare as seguintes variáveis com tipos explícitos:
// - nomeJogador (string) com seu nome
// - pontosVida (number) iniciando com 100
// - temEscudo (boolean) iniciando como false

// TODO: Exercício 2 - Type Annotation vs Inference
// Crie duas versões das mesmas variáveis:
// Version A: Com type annotation explícita
// let nivelA: number = 1;

// Version B: Com type inference (sem tipo explícito)
// let nivelB = 1;

// =============================================================================
// ⚠️ ANY vs UNKNOWN - EXERCÍCIOS
// =============================================================================

// TODO: Exercício 3 - Problema com ANY
// 1. Declare uma variável 'dadosPerigosos' do tipo any
// 2. Atribua qualquer valor a ela
// 3. Tente chamar um método que não existe (para ver o problema)

// TODO: Exercício 4 - Solução com UNKNOWN  
// 1. Declare uma variável 'dadosSeguro' do tipo unknown
// 2. Atribua uma string a ela
// 3. Use type guard para verificar se é string antes de usar métodos de string
// Exemplo:
// if (typeof dadosSeguro === 'string') {
//   console.log(dadosSeguro.toUpperCase());
// }

// =============================================================================
// 🔑 UNION & LITERAL TYPES - EXERCÍCIOS
// =============================================================================

// TODO: Exercício 5 - Union Types
// 1. Crie uma variável 'identificador' que pode ser string ou number
// 2. Atribua primeiro um valor string, depois um número
// 3. Crie uma função 'processarIdentificador' que aceita string|number
//    e usa type guards para tratar cada tipo diferente

// TODO: Exercício 6 - Literal Types
// 1. Crie um type 'EstadoJogo' com os valores: 'menu', 'jogando', 'pausado', 'game-over'
// 2. Crie um type 'DirecaoMovimento' com: 'cima', 'baixo', 'esquerda', 'direita'
// 3. Declare variáveis usando esses tipos

// =============================================================================
// 🛡️ TYPE ALIAS - EXERCÍCIOS
// =============================================================================

// TODO: Exercício 7 - Type Alias Básico
// Crie os seguintes type aliases:
// type NomeUsuario = string;
// type IdadeUsuario = number;
// type EmailUsuario = string;

// TODO: Exercício 8 - Type Alias para Objetos
// Crie um type alias 'Heroi' com:
// - nome: string
// - classe: 'guerreiro' | 'mago' | 'arqueiro'
// - nivel: number
// - experiencia: number

// TODO: Exercício 9 - Type Alias para Funções
// Crie os seguintes type aliases para funções:
// type CalcularDano = (ataque: number, defesa: number) => number;
// type ValidarSenha = (senha: string) => boolean;

// TODO: Exercício 10 - Implementar as Funções
// Implemente as funções usando os type aliases criados acima:
// const calcularDanoReal: CalcularDano = (ataque, defesa) => {
//   // TODO: retorne ataque - defesa, mas nunca menos que 0
// };

// const validarSenhaReal: ValidarSenha = (senha) => {
//   // TODO: retorne true se senha tem pelo menos 6 caracteres
// };

// =============================================================================
// 🎯 INTERFACE - EXERCÍCIOS
// =============================================================================

// TODO: Exercício 11 - Interface Básica
// Crie uma interface 'Jogador' com:
// - nome: string
// - nivel: number
// - classe: string
// - ativo: boolean

// TODO: Exercício 12 - Interface com Propriedades Opcionais
// Crie uma interface 'Personagem' com:
// - nome: string (obrigatório)
// - vida: number (obrigatório)
// - mana?: number (opcional)
// - inventario?: string[] (opcional)

// TODO: Exercício 13 - Interface com Readonly
// Crie uma interface 'Configuracao' com:
// - readonly id: number
// - readonly criadoEm: Date
// - tema: string
// - idioma: string

// TODO: Exercício 14 - Herança de Interface
// Crie uma interface 'PersonagemAvancado' que estende 'Personagem' e adiciona:
// - habilidades: string[]
// - experiencia: number

// =============================================================================
// 🎯 ENUMS - EXERCÍCIOS
// =============================================================================

// TODO: Exercício 15 - Enum String
// Crie um enum 'TipoArma' com valores string:
// - ESPADA = 'espada'
// - ARCO = 'arco'  
// - CAJADO = 'cajado'
// - MACHADO = 'machado'

// TODO: Exercício 16 - Enum Numérico
// Crie um enum 'Dificuldade' com valores numéricos:
// - FACIL = 1
// - MEDIO = 2
// - DIFICIL = 3
// - EXPERT = 4

// =============================================================================
// 🧙 PROJETO PRÁTICO - SISTEMA RPG
// =============================================================================

// TODO: Exercício 17 - Interface Completa para RPG
// Crie uma interface 'PersonagemRPG' que combine todos os conceitos:
// interface PersonagemRPG {
//   readonly id: number;
//   nome: string;
//   classe: 'guerreiro' | 'mago' | 'arqueiro';
//   nivel: number;
//   vida: number;
//   mana?: number;
//   arma: TipoArma; // use o enum criado
//   experiencia: number;
//   ativo: boolean;
// }

// TODO: Exercício 18 - Função de Criação
// Implemente uma função que cria personagens:
// function criarPersonagemRPG(
//   nome: string,
//   classe: PersonagemRPG['classe']
// ): PersonagemRPG {
//   // TODO: retorne um objeto PersonagemRPG com:
//   // - id aleatório (Math.floor(Math.random() * 1000))
//   // - nome recebido por parâmetro
//   // - classe recebida por parâmetro  
//   // - nivel: 1
//   // - vida: 100
//   // - mana: 50 (se for mago), undefined (se não for)
//   // - arma: ESPADA (se guerreiro), ARCO (se arqueiro), CAJADO (se mago)
//   // - experiencia: 0
//   // - ativo: true
// }

// TODO: Exercício 19 - Funções Utilitárias
// Implemente as seguintes funções:

// function calcularDanoPersonagem(personagem: PersonagemRPG): number {
//   // TODO: retorne um valor de dano baseado no nivel e arma
//   // Guerreiro: nivel * 15
//   // Arqueiro: nivel * 12  
//   // Mago: nivel * 10
// }

// function subirNivel(personagem: PersonagemRPG): void {
//   // TODO: aumente o nivel em 1 e a vida em 20
//   // Se for mago, aumente mana em 10
// }

// function personagemEstaVivo(personagem: PersonagemRPG): boolean {
//   // TODO: retorne true se vida > 0 e ativo === true
// }

// =============================================================================
// 🎮 TESTANDO SEU CÓDIGO (DESCOMENTE PARA TESTAR)
// =============================================================================

// TODO: Exercício 20 - Teste Final
// Descomente as linhas abaixo após implementar tudo:

// console.log('🎮 Testando sistema RPG...');

// const heroi1 = criarPersonagemRPG('Aragorn', 'guerreiro');
// const heroi2 = criarPersonagemRPG('Legolas', 'arqueiro');  
// const heroi3 = criarPersonagemRPG('Gandalf', 'mago');

// console.log('Personagens criados:');
// console.log(heroi1);
// console.log(heroi2);
// console.log(heroi3);

// console.log('Calculando dano:');
// console.log(`${heroi1.nome} causa ${calcularDanoPersonagem(heroi1)} de dano`);
// console.log(`${heroi2.nome} causa ${calcularDanoPersonagem(heroi2)} de dano`);
// console.log(`${heroi3.nome} causa ${calcularDanoPersonagem(heroi3)} de dano`);

// console.log('Subindo nível...');
// subirNivel(heroi1);
// subirNivel(heroi2);
// subirNivel(heroi3);

// console.log('Status após subir nível:');
// console.log(`${heroi1.nome} - Nível: ${heroi1.nivel}, Vida: ${heroi1.vida}`);
// console.log(`${heroi2.nome} - Nível: ${heroi2.nivel}, Vida: ${heroi2.vida}`);
// console.log(`${heroi3.nome} - Nível: ${heroi3.nivel}, Vida: ${heroi3.vida}, Mana: ${heroi3.mana}`);

// console.log('Todos estão vivos?');
// console.log(`${heroi1.nome}: ${personagemEstaVivo(heroi1)}`);
// console.log(`${heroi2.nome}: ${personagemEstaVivo(heroi2)}`);
// console.log(`${heroi3.nome}: ${personagemEstaVivo(heroi3)}`);

// console.log('Parabéns! Você completou todos os exercícios do Dia 01!');
