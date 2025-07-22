/**
 * @fileoverview Template de Exercícios do Dia 02 - Comande seu Exército!
 * @description Arquivo para os alunos implementarem os conceitos de Classes e POO
 *
 * 📋 INSTRUÇÕES:
 * 1. Complete os exercícios marcados com "// TODO:"
 * 2. Consulte o arquivo "exercicios.md" para as instruções detalhadas
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia02 (na raiz do projeto)
 * 4. Use o arquivo "comande-seu-exercito.md" como referência teórica
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

// =============================================================================
// 🧱 CLASSE BASE (FORNECIDA COMO EXEMPLO)
// =============================================================================

abstract class UnidadeBase {
  nome: string;
  vida: number;
  ataque: number;
  readonly tipo: string;

  constructor(nome: string, vida: number, ataque: number, tipo: string) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.tipo = tipo;
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }

  abstract habilidadeEspecial(): string;

  atacar(alvo: UnidadeBase): string {
    const dano = this.ataque;
    alvo.vida -= dano;
    return `${this.nome} causa ${dano} de dano em ${alvo.nome}`;
  }
}

// =============================================================================
// � EXERCÍCIOS NÍVEL INICIANTE
// =============================================================================

// TODO: Exercício 1 - Crie sua primeira classe Soldado
class Soldado {
  // TODO: Adicione as propriedades:
  // - nome: string
  // - vida: number (padrão 100)
  // - ataque: number (padrão 20)
  // TODO: Implemente o constructor que receba nome e opcionalmente ataque
  // TODO: Implemente o método atacar() que retorna string "Nome ataca com força X!"
  // TODO: Implemente o método estaVivo() que retorna boolean se vida > 0
}

// TODO: Exercício 2 - Herança básica
class Escudeiro extends Soldado {
  // TODO: Adicione propriedade escudo: number (padrão 10)
  // TODO: Implemente constructor que aceite nome, ataque e escudo
  // TODO: Implemente método defender() que retorna "Nome levanta o escudo! Defesa: X"
}

// TODO: Exercício 3 - Métodos com parâmetros opcionais
class Curandeiro {
  nome: string;
  mana: number;

  constructor(nome: string, mana: number = 50) {
    // TODO: Inicialize as propriedades
    this.nome = nome;
    this.mana = mana;
  }

  curar(alvo?: string, quantidade: number = 20): string {
    // TODO: Implemente a lógica:
    // - Se não tiver mana suficiente (mínimo 10), retorne erro
    // - Se não especificar alvo, cure "aliado"
    // - Reduza a mana em 10
    // - Retorne: "Nome cura [alvo] em [quantidade] pontos"
    return 'TODO: Implementar método curar';
  }
}

// =============================================================================
// 🥈 EXERCÍCIOS NÍVEL INTERMEDIÁRIO
// =============================================================================

// TODO: Exercício 4 - Encapsulamento com private
class TesouroImperial {
  // TODO: Declare propriedades privadas _ouro e _joias

  constructor(ouro: number = 1000, joias: number = 50) {
    // TODO: Inicialize as propriedades privadas
  }

  // TODO: Implemente getter para ouro
  get ouro(): number {
    return 0; // TODO: Substituir
  }

  // TODO: Implemente getter para joias
  get joias(): number {
    return 0; // TODO: Substituir
  }

  // TODO: Implemente método gastar que verifica recursos e desconta se possível
  gastar(ouro: number, joias: number = 0): boolean {
    return false; // TODO: Implementar lógica
  }

  // TODO: Implemente método adicionar que soma recursos
  adicionar(ouro: number, joias: number = 0): string {
    return ''; // TODO: Implementar
  }
}

// TODO: Exercício 5 - Classes abstratas e herança
abstract class Veiculo {
  nome: string;
  velocidade: number;
  combustivel: number;

  constructor(nome: string, velocidade: number) {
    this.nome = nome;
    this.velocidade = velocidade;
    this.combustivel = 100;
  }

  abstract mover(): string; // TODO: Deve ser implementado pelas subclasses

  abastecer(): string {
    this.combustivel = 100;
    return `${this.nome} foi abastecido!`;
  }
}

class Cavalo extends Veiculo {
  constructor(nome: string) {
    super(nome, 30);
  }

  // TODO: Implemente o método mover()
  mover(): string {
    // TODO: Se não tiver combustível, retorne erro
    // TODO: Reduza combustível em 10
    // TODO: Retorne: "Nome galopa a X km/h!"
    return '';
  }
}

class Navio extends Veiculo {
  tripulacao: number;

  constructor(nome: string, tripulacao: number) {
    super(nome, 20);
    this.tripulacao = tripulacao;
  }

  // TODO: Implemente o método mover()
  mover(): string {
    // TODO: Similar ao cavalo, mas "navega"
    // TODO: Inclua informação da tripulação
    return '';
  }
}

// TODO: Exercício 6 - Sobrescrita de métodos
class Animal {
  nome: string;
  energia: number;

  constructor(nome: string) {
    this.nome = nome;
    this.energia = 100;
  }

  dormir(): string {
    this.energia = 100;
    return `${this.nome} dormiu e recuperou energia!`;
  }

  fazerSom(): string {
    return `${this.nome} faz um som`;
  }
}

class Lobo extends Animal {
  matilha: string[];

  constructor(nome: string, matilha: string[] = []) {
    super(nome);
    this.matilha = matilha;
  }

  // TODO: Sobrescreva fazerSom()
  fazerSom(): string {
    // TODO: Retorne: "Nome uiva para a matilha: [nomes]"
    // TODO: Se não tiver matilha: "Nome uiva sozinho"
    return '';
  }

  // TODO: Sobrescreva dormir()
  dormir(): string {
    // TODO: Chame super.dormir() primeiro
    // TODO: Adicione: "A matilha descansa junta"
    return '';
  }
}

// =============================================================================
// 🥇 EXERCÍCIOS NÍVEL AVANÇADO
// =============================================================================

// TODO: Exercício 7 - Sistema de batalha completo
interface AcaoCombate {
  executar(atacante: UnidadeBase, defensor: UnidadeBase): string;
}

class Paladino extends UnidadeBase {
  fe: number;

  constructor(nome: string) {
    super(nome, 150, 50, 'Paladino');
    this.fe = 100;
  }

  habilidadeEspecial(): string {
    // TODO: Se for um aliado (vida < vida máxima), cure 40 pontos
    // TODO: Se for inimigo (vida > 0), cause dano sagrado de 70
    // TODO: Gaste 20 de fé
    // TODO: Retorne descrição da ação
    return 'TODO: Implementar habilidade especial';
  }

  orarParaForça(): string {
    // TODO: Aumente ataque em 10 e fé em 20
    // TODO: Retorne: "Nome ora e ganha força divina!"
    return '';
  }
}

class Assassino extends UnidadeBase {
  furtividade: number;

  constructor(nome: string) {
    super(nome, 80, 80, 'Assassino');
    this.furtividade = 90;
  }

  habilidadeEspecial(): string {
    // TODO: 90% de chance de acerto crítico (dano dobrado)
    // TODO: Se errar, perde 10 de furtividade
    // TODO: Se acertar, mantém furtividade
    return 'TODO: Implementar habilidade especial';
  }

  ocultarNasSombras(): string {
    // TODO: Restaure furtividade para 90
    // TODO: Próximo ataque especial tem 100% de chance crítica
    return '';
  }
}

class Arena {
  private log: string[] = [];

  batalhar(lutador1: UnidadeBase, lutador2: UnidadeBase): string {
    // TODO: Implemente sistema de batalha
    // TODO: Máximo 10 turnos
    // TODO: Cada lutador ataca alternadamente
    // TODO: Retorne log completo da batalha
    return '';
  }

  obterLog(): string[] {
    return [...this.log];
  }
}

// =============================================================================
// 🧪 EXERCÍCIOS BÔNUS
// =============================================================================

// TODO: Exercício 9 - Factory Pattern
class FabricaUnidades {
  static criarUnidade(
    tipo: 'guerreiro' | 'mago' | 'arqueiro',
    nome: string
  ): UnidadeBase {
    // TODO: Implemente o padrão Factory
    // TODO: Retorne a unidade apropriada baseada no tipo
    throw new Error('Não implementado');
  }

  static criarEsquadrao(
    composicao: Array<{ tipo: string; nome: string }>
  ): UnidadeBase[] {
    // TODO: Use o método criarUnidade para criar um esquadrão completo
    return [];
  }
}

// TODO: Exercício 10 - Observer Pattern
interface Observador {
  notificar(evento: string): void;
}

class SistemaBatalha {
  private observadores: Observador[] = [];

  adicionarObservador(observador: Observador): void {
    // TODO: Adicione observador à lista
  }

  removerObservador(observador: Observador): void {
    // TODO: Remova observador da lista
  }

  private notificarObservadores(evento: string): void {
    // TODO: Notifique todos os observadores
  }

  executarBatalha(atacante: UnidadeBase, defensor: UnidadeBase): string {
    // TODO: Execute a batalha
    // TODO: Notifique observadores de eventos importantes
    return '';
  }
}

class LogObservador implements Observador {
  private eventos: string[] = [];

  notificar(evento: string): void {
    // TODO: Adicione evento ao log com timestamp
  }

  obterLog(): string[] {
    return this.eventos;
  }
}

// =============================================================================
// 🎮 ÁREA DE TESTES - COMPLETE CONFORME IMPLEMENTA
// =============================================================================

console.log('='.repeat(60));
console.log('🎮 TESTE: Comande seu Exército - Classes & POO');
console.log('='.repeat(60));

// TODO: Teste Exercício 1 - Soldado
// const soldado1 = new Soldado("Marcus", 25);
// console.log(soldado1.atacar());
// console.log(soldado1.estaVivo());

// TODO: Teste Exercício 2 - Escudeiro
// const escudeiro1 = new Escudeiro("Lúcio", 15, 20);
// console.log(escudeiro1.atacar());
// console.log(escudeiro1.defender());

// TODO: Teste Exercício 3 - Curandeiro
// const medico = new Curandeiro("Ana");
// console.log(medico.curar());
// console.log(medico.curar("João", 30));

// TODO: Teste Exercício 4 - Tesouro
// const tesouro = new TesouroImperial();
// console.log(tesouro.gastar(500, 10));
// console.log(tesouro.adicionar(200, 5));

// TODO: Teste Exercício 5 - Veículos
// const rocinante = new Cavalo("Rocinante");
// const perola = new Navio("Pérola Negra", 50);
// console.log(rocinante.mover());
// console.log(perola.mover());

// TODO: Teste Exercício 6 - Lobo
// const fenrir = new Lobo("Fenrir", ["Alfa", "Beta"]);
// console.log(fenrir.fazerSom());
// console.log(fenrir.dormir());

// TODO: Teste Exercício 7 - Sistema de Batalha
// const arthur = new Paladino("Arthur");
// const altair = new Assassino("Altaïr");
// const arena = new Arena();
// console.log(arena.batalhar(arthur, altair));

// TODO: Teste Exercício 9 - Factory
// const esquadrao = FabricaUnidades.criarEsquadrao([
//   { tipo: 'guerreiro', nome: 'Tank' },
//   { tipo: 'mago', nome: 'Healer' },
//   { tipo: 'arqueiro', nome: 'Sniper' }
// ]);
// console.log(`Esquadrão criado com ${esquadrao.length} membros`);

// TODO: Teste Exercício 10 - Observer
// const sistema = new SistemaBatalha();
// const logger = new LogObservador();
// sistema.adicionarObservador(logger);
// const heroi = new Paladino("Herói");
// const vilao = new Assassino("Vilão");
// sistema.executarBatalha(heroi, vilao);
// console.log(logger.obterLog());

console.log(
  '\n✅ Implemente os exercícios e descomente os testes gradualmente!'
);
