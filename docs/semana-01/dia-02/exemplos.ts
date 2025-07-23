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

  abstract habilidadeEspecial(alvo?: UnidadeBase): string;

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
  nome: string;
  vida: number;
  ataque: number;

  constructor(nome: string, ataque = 20) {
    this.nome = nome;
    this.vida = 100;
    this.ataque = ataque;
  }

  public atacar() {
    return `${this.nome} ataca com forća ${this.ataque}`;
  }

  public estaVivo() {
    return this.vida > 0 ? true : false;
  }
}

// const soldado1 = new Soldado('Marcus', 25);
// console.log(soldado1.atacar());
// console.log(soldado1.estaVivo());

// TODO: Exercício 2 - Herança básica
class Escudeiro extends Soldado {
  escudo: number;

  constructor(nome: string, ataque: number, escudo = 10) {
    super(nome, ataque);
    this.escudo = escudo;
  }

  public defender() {
    return `${this.nome} levanta o escudo! Defesa: ${this.defender}`;
  }
  // TODO: Adicione propriedade escudo: number (padrão 10)
  // TODO: Implemente constructor que aceite nome, ataque e escudo
  // TODO: Implemente método defender() que retorna "Nome levanta o escudo! Defesa: X"
}

// TODO: Exercício 3 - Métodos com parâmetros opcionais
class Curandeiro {
  nome: string;
  mana: number;

  constructor(nome: string, mana = 50) {
    // TODO: Inicialize as propriedades
    this.nome = nome;
    this.mana = mana;
  }

  curar(alvo?: string, quantidade = 20): string {
    if (this.mana < 10) return 'Não há mana o suficiente';

    this.mana -= 10;

    if (alvo?.trim() !== '') {
      return `${this.nome} cura ${alvo} em ${quantidade} pontos`;
    }
    // TODO: Implemente a lógica:
    // - Se não tiver mana suficiente (mínimo 10), retorne erro
    // - Se não especificar alvo, cure "aliado"
    // - Reduza a mana em 10
    // - Retorne: "Nome cura [alvo] em [quantidade] pontos"
    return `${this.nome} cura aliado em ${quantidade} pontos`;
  }
}

// =============================================================================
// 🥈 EXERCÍCIOS NÍVEL INTERMEDIÁRIO
// =============================================================================

// TODO: Exercício 4 - Encapsulamento com private
class TesouroImperial {
  // TODO: Declare propriedades privadas _ouro e _joias
  private _ouro: number;
  private _joias: number;

  constructor(ouro = 1000, joias = 50) {
    // TODO: Inicialize as propriedades privadas
    this._ouro = ouro;
    this._joias = joias;
  }

  // TODO: Implemente getter para ouro
  get ouro(): number {
    return this._ouro; // TODO: Substituir
  }

  // TODO: Implemente getter para joias
  get joias(): number {
    return this._joias; // TODO: Substituir
  }

  // TODO: Implemente método gastar que verifica recursos e desconta se possível
  gastar(ouro: number, joias = 0): boolean {
    if (this._ouro < ouro || this._joias < joias) {
      return false;
    }

    this._ouro -= ouro;
    this._joias -= joias;

    return true;
  }

  // TODO: Implemente método adicionar que soma recursos
  adicionar(ouro: number, joias = 0): string {
    this._ouro += ouro;
    this._joias += joias;

    return `Ouro: ${this.ouro} Joias: ${this.joias}`; // TODO: Implementar
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
    if (this.combustivel === 0) return 'Erro! Seu cavalo está sem combustível!';
    // TODO: Se não tiver combustível, retorne erro
    // TODO: Reduza combustível em 10
    // TODO: Retorne: "Nome galopa a X km/h!"
    this.combustivel = this.combustivel - 10 < 0 ? 0 : this.combustivel - 10;
    return `${this.nome} galopa a ${this.velocidade} km/h`;
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
    if (this.combustivel === 0) return 'Erro! Seu navio está sem combustível!';
    // TODO: Similar ao cavalo, mas "navega"
    // TODO: Inclua informação da tripulação
    this.combustivel = this.combustivel - 10 < 0 ? 0 : this.combustivel - 10;
    return `${this.nome} navega a ${this.velocidade} km/h com tripulaćão de: ${this.tripulacao}`;
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
    if (this.matilha.length > 0)
      return `${this.nome} uiva para a matilha: ${this.matilha}`;
    // TODO: Retorne: "Nome uiva para a matilha: [nomes]"
    // TODO: Se não tiver matilha: "Nome uiva sozinho"
    return `${this.nome} uiva sozinho`;
  }

  // TODO: Sobrescreva dormir()
  dormir(): string {
    // TODO: Chame super.dormir() primeiro
    // TODO: Adicione: "A matilha descansa junta"
    super.dormir();
    return 'A matilha desscansa junto';
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

  habilidadeEspecial(alvo: UnidadeBase): string {
    if (alvo.tipo === 'inimigo') {
      alvo.vida = alvo.vida - 70 < 0 ? 0 : alvo.vida - 70;
      this.fe -= 20;
      return `O inimigo ${alvo.nome} sofreu dano sagrado!`;
    }

    if (alvo.vida >= 100) return 'Aliado com a vida máxima';
    alvo.vida = alvo.vida + 40 > 100 ? 100 : alvo.vida + 40;
    this.fe -= 20;
    return `O aliado ${alvo.nome} foi curado!`;

    // TODO: Se for um aliado (vida < vida máxima), cure 40 pontos
    // TODO: Se for inimigo (vida > 0), cause dano sagrado de 70
    // TODO: Gaste 20 de fé
    // TODO: Retorne descrição da ação
  }

  orarParaForça(): string {
    this.ataque += 10;
    this.fe += 20;
    // TODO: Aumente ataque em 10 e fé em 20
    // TODO: Retorne: "Nome ora e ganha força divina!"
    return `${this.nome} ora e ganha forća divina!`;
  }
}

class Assassino extends UnidadeBase {
  furtividade: number;
  ocultoNasSombras: boolean;

  constructor(nome: string) {
    super(nome, 80, 80, 'Assassino');
    this.furtividade = 90;
    this.ocultoNasSombras = false;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    if (Math.floor(Math.random() * 101) > 90 || this.ocultoNasSombras) {
      this.ocultoNasSombras = false;
      alvo.vida =
        alvo.vida - this.ataque * 2 < 0 ? 0 : alvo.vida - this.ataque * 2;
      return `${this.nome} causou dano crítico em ${alvo.nome}!`;
    }
    // TODO: 90% de chance de acerto crítico (dano dobrado)
    // TODO: Se errar, perde 10 de furtividade
    // TODO: Se acertar, mantém furtividade
    this.furtividade = this.furtividade - 10 < 0 ? 0 : this.furtividade - 10;
    return `${this.nome} erra o ataque!`;
  }

  ocultarNasSombras(): string {
    // TODO: Restaure furtividade para 90
    // TODO: Próximo ataque especial tem 100% de chance crítica
    this.furtividade = 90;
    this.ocultoNasSombras = true;
    return `${this.nome} está oculto nas sombras`;
  }
}

class Arena {
  private log: string[] = [];

  batalhar(lutador1: UnidadeBase, lutador2: UnidadeBase): string {
    let turno = 1;
    while (lutador1.estaVivo() && lutador2.estaVivo() && turno <= 10) {
      const resultado1 = lutador1.habilidadeEspecial(lutador2);
      this.log.push(`Turno ${turno}: ${resultado1}`);

      const resultado2 = lutador2.habilidadeEspecial(lutador1);
      this.log.push(`Turno ${turno}: ${resultado2}`);

      turno++;
    }

    const empate = !lutador2.estaVivo() && !lutador2.estaVivo();
    const vencedor = lutador1.estaVivo() ? lutador1 : lutador2;

    this.log.push(empate ? 'Houve um empate!' : `Vencedor: ${vencedor.nome}`);
    // TODO: Implemente sistema de batalha
    // TODO: Máximo 10 turnos
    // TODO: Cada lutador ataca alternadamente
    // TODO: Retorne log completo da batalha
    return this.log.join('\n');
  }

  obterLog(): string[] {
    return [...this.log];
  }
}

// =============================================================================
// 🧪 EXERCÍCIOS BÔNUS
// =============================================================================

class Arqueiro extends UnidadeBase {
  flechas: number;

  constructor(nome: string) {
    super(nome, 80, 80, 'Arqueiro');
    this.flechas = 100;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    return `${this.nome} erra o ataque!`;
  }
}

class Guerreiro extends UnidadeBase {
  bonusDeAtaque: number;

  constructor(nome: string) {
    super(nome, 100, 100, 'Guerreiro');
    this.bonusDeAtaque = 15;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    return `${this.nome} erra o ataque!`;
  }
}

class Mago extends UnidadeBase {
  mana: number;

  constructor(nome: string) {
    super(nome, 50, 10, 'Mago');
    this.mana = 15;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    return `${this.nome} erra o ataque!`;
  }
}


// TODO: Exercício 9 - Factory Pattern
class FabricaUnidades {
  static criarUnidade(
    tipo: 'guerreiro' | 'mago' | 'arqueiro',
    nome: string
  ): UnidadeBase {

    let novaUnidade: Guerreiro | Arqueiro | Mago;

    switch (tipo) {
      case 'mago':
        novaUnidade = new Mago(nome)
        break;
      case 'arqueiro':
        novaUnidade = new Arqueiro(nome)
        break;
      default:
        novaUnidade = new Guerreiro(nome)
        break;
    }

    return novaUnidade;
    // TODO: Implemente o padrão Factory
    // TODO: Retorne a unidade apropriada baseada no tipo
  }

  static criarEsquadrao(
    composicao: Array<{ tipo: 'guerreiro' | 'mago' | 'arqueiro'; nome: string }>
  ): UnidadeBase[] {
    const esquadrao = composicao.map(unidade => this.criarUnidade(unidade.tipo, unidade.nome))
    return esquadrao;
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
const soldado1 = new Soldado("Marcus", 25);
console.log(soldado1.atacar());
console.log(soldado1.estaVivo());

// TODO: Teste Exercício 2 - Escudeiro
const escudeiro1 = new Escudeiro("Lúcio", 15, 20);
console.log(escudeiro1.atacar());
console.log(escudeiro1.defender());

// TODO: Teste Exercício 3 - Curandeiro
const medico = new Curandeiro("Ana");
console.log(medico.curar());
console.log(medico.curar("João", 30));

// TODO: Teste Exercício 4 - Tesouro
const tesouro = new TesouroImperial();
console.log(tesouro.gastar(500, 10));
console.log(tesouro.adicionar(200, 5));

// TODO: Teste Exercício 5 - Veículos
const rocinante = new Cavalo("Rocinante");
const perola = new Navio("Pérola Negra", 50);
console.log(rocinante.mover());
console.log(perola.mover());

// TODO: Teste Exercício 6 - Lobo
const fenrir = new Lobo("Fenrir", ["Alfa", "Beta"]);
console.log(fenrir.fazerSom());
console.log(fenrir.dormir());

// TODO: Teste Exercício 7 - Sistema de Batalha
const arthur = new Paladino("Arthur");
const altair = new Assassino("Altaïr");
const arena = new Arena();
console.log(arena.batalhar(arthur, altair));

// TODO: Teste Exercício 9 - Factory
const esquadrao = FabricaUnidades.criarEsquadrao([
  { tipo: 'guerreiro', nome: 'Tank' },
  { tipo: 'mago', nome: 'Healer' },
  { tipo: 'arqueiro', nome: 'Sniper' }
]);
console.log(`Esquadrão criado com ${esquadrao.length} membros`);

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
