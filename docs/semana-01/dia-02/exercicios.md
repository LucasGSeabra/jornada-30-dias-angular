# 🎯 Exercícios Práticos - Comande seu Exército!

> **📋 Instruções Gerais**
> 
> - Complete todos os exercícios no arquivo `exemplos.ts` do mesmo diretório
> - Use as classes e conceitos explicados em `comande-seu-exercito.md`
> - Teste seu código executando:
>   ```bash
>   # 🚀 Método Fácil (na raiz do projeto):
>   npm run exemplos:dia02
>   ```
> - **Dica:** Consulte o arquivo `comande-seu-exercito.md` sempre que tiver dúvidas!

---

## 🥉 Nível Iniciante

### 1. Crie sua Primeira Classe

Crie uma classe `Soldado` com as seguintes características:

```typescript
class Soldado {
  // Propriedades:
  // - nome: string
  // - vida: number (padrão 100)
  // - ataque: number (padrão 20)
  nome: string;
  vida: number;
  ataque: number;

  // Constructor que receba nome e opcionalmente ataque
  constructor(nome: string, ataque = 20) {
    this.nome = nome;
    this.vida = 100;
    this.ataque = ataque;
  }

  // Métodos:
  // - atacar(): retorna string "Nome ataca com força X!"
  // - estaVivo(): retorna boolean se vida > 0

  public atacar() {
    return `${this.nome} ataca com forća ${this.forca}` 
  }

  public estaVivo() {
    return this.vida > 0 ? true : false
  }
}

const soldado1 = new Soldado("Marcus", 25);
console.log(soldado1.atacar());
console.log(soldado1.estaVivo());


// Teste criando um soldado
const soldado1 = new Soldado("Marcus", 25);
console.log(soldado1.atacar());
console.log(soldado1.estaVivo());
```

### 2. Herança Básica

Crie uma classe `Escudeiro` que herda de `Soldado`:

```typescript
class Escudeiro extends Soldado {
  // Propriedade adicional:
  // - escudo: number (defesa, padrão 10)
  
  // Constructor que aceite nome, ataque e escudo
  
  // Método adicional:
  // - defender(): retorna "Nome levanta o escudo! Defesa: X"
}

// Teste
const escudeiro1 = new Escudeiro("Lúcio", 15, 20);
console.log(escudeiro1.atacar());
console.log(escudeiro1.defender());
```

### 3. Métodos com Parâmetros Opcionais

Complete esta classe `Curandeiro`:

```typescript
class Curandeiro {
  nome: string;
  mana: number;

  constructor(nome: string, mana: number = 50) {
    // Complete aqui
  }

  // Método curar com parâmetros opcionais
  curar(alvo?: string, quantidade: number = 20): string {
    // Se não tiver mana suficiente (mínimo 10), retorne erro
    // Se não especificar alvo, cure "aliado"
    // Reduza a mana em 10
    // Retorne: "Nome cura [alvo] em [quantidade] pontos"
  }
}

// Teste todos os casos
const medico = new Curandeiro("Ana");
console.log(medico.curar()); // Cura aliado
console.log(medico.curar("João", 30)); // Cura João
```

---

## 🥈 Nível Intermediário

### 4. Encapsulamento com Private

Crie uma classe `TesouroImperial` que proteja seus recursos:

```typescript
class TesouroImperial {
  // Propriedades privadas:
  // - _ouro: number
  // - _joias: number
  
  constructor(ouro: number = 1000, joias: number = 50) {
    // Inicialize as propriedades privadas
  }

  // Getters
  get ouro(): number {
    // Retorne o ouro
  }

  get joias(): number {
    // Retorne as joias
  }

  // Método público para gastar
  gastar(ouro: number, joias: number = 0): boolean {
    // Verifique se tem recursos suficientes
    // Se sim, desconte e retorne true
    // Se não, retorne false
  }

  // Método público para adicionar recursos
  adicionar(ouro: number, joias: number = 0): string {
    // Adicione aos recursos
    // Retorne: "Adicionado: X ouro, Y joias. Total: A ouro, B joias"
  }
}

// Teste
const tesouro = new TesouroImperial();
console.log(tesouro.gastar(500, 10)); // true
console.log(tesouro.adicionar(200, 5));
```

### 5. Classe Abstrata e Herança

Complete esta hierarquia de classes:

```typescript
abstract class Veiculo {
  nome: string;
  velocidade: number;
  combustivel: number;

  constructor(nome: string, velocidade: number) {
    this.nome = nome;
    this.velocidade = velocidade;
    this.combustivel = 100;
  }

  // Método abstrato - deve ser implementado pelas subclasses
  abstract mover(): string;

  // Método concreto
  abastecer(): string {
    this.combustivel = 100;
    return `${this.nome} foi abastecido!`;
  }
}

class Cavalo extends Veiculo {
  constructor(nome: string) {
    super(nome, 30);
  }

  // Implemente o método abstrato mover()
  mover(): string {
    // Se não tiver combustível, retorne erro
    // Reduza combustível em 10
    // Retorne: "Nome galopa a X km/h!"
  }
}

class Navio extends Veiculo {
  tripulacao: number;

  constructor(nome: string, tripulacao: number) {
    super(nome, 20);
    this.tripulacao = tripulacao;
  }

  // Implemente o método mover()
  mover(): string {
    // Similar ao cavalo, mas "navega"
    // Inclua informação da tripulação
  }
}

// Teste
const rocinante = new Cavalo("Rocinante");
const perola = new Navio("Pérola Negra", 50);
console.log(rocinante.mover());
console.log(perola.mover());
```

### 6. Sobrescrita de Métodos

Crie classes que sobrescrevam métodos da classe pai:

```typescript
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

  // Método que será sobrescrito
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

  // Sobrescreva fazerSom()
  fazerSom(): string {
    // Retorne: "Nome uiva para a matilha: [nomes]"
    // Se não tiver matilha: "Nome uiva sozinho"
  }

  // Sobrescreva dormir()
  dormir(): string {
    // Chame super.dormir() primeiro
    // Adicione: "A matilha descansa junta"
  }
}

// Teste
const fenrir = new Lobo("Fenrir", ["Alfa", "Beta"]);
console.log(fenrir.fazerSom());
console.log(fenrir.dormir());
```

---

## 🥇 Nível Avançado

### 7. Sistema de Batalha Completo

Implemente um sistema de batalha entre diferentes tipos de unidades:

```typescript
// Primeiro, crie uma interface para ações de combate
interface AcaoCombate {
  executar(atacante: UnidadeBase, defensor: UnidadeBase): string;
}

// Classe base para unidades (já fornecida)
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

  abstract habilidadeEspecial(alvo: UnidadeBase): string;

  estaVivo(): boolean {
    return this.vida > 0;
  }

  receberDano(dano: number): void {
    this.vida = Math.max(0, this.vida - dano);
  }
}

// Implemente estas classes especializadas
class Paladino extends UnidadeBase {
  fe: number;
  
  constructor(nome: string) {
    super(nome, 150, 50, 'Paladino');
    this.fe = 100;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    // Se for um aliado (vida < vida máxima), cure 40 pontos
    // Se for inimigo (vida > 0), cause dano sagrado de 70
    // Gaste 20 de fé
    // Retorne descrição da ação
  }

  // Método especial do paladino
  orarParaForça(): string {
    // Aumente ataque em 10 e fé em 20
    // Retorne: "Nome ora e ganha força divina!"
  }
}

class Assassino extends UnidadeBase {
  furtividade: number;

  constructor(nome: string) {
    super(nome, 80, 80, 'Assassino');
    this.furtividade = 90;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    // 90% de chance de acerto crítico (dano dobrado)
    // Se errar, perde 10 de furtividade
    // Se acertar, mantém furtividade
  }

  // Método especial
  ocultarNasSombras(): string {
    // Restaure furtividade para 90
    // Próximo ataque especial tem 100% de chance crítica
  }
}

// Sistema de batalha
class Arena {
  private log: string[] = [];

  batalhar(lutador1: UnidadeBase, lutador2: UnidadeBase): string {
    this.log = [];
    let turno = 1;

    while (lutador1.estaVivo() && lutador2.estaVivo() && turno <= 10) {
      // Lutador 1 ataca
      if (lutador1.estaVivo()) {
        const resultado1 = lutador1.habilidadeEspecial(lutador2);
        this.log.push(`Turno ${turno}: ${resultado1}`);
      }

      // Lutador 2 contra-ataca
      if (lutador2.estaVivo()) {
        const resultado2 = lutador2.habilidadeEspecial(lutador1);
        this.log.push(`Turno ${turno}: ${resultado2}`);
      }

      turno++;
    }

    // Determine o vencedor
    const vencedor = lutador1.estaVivo() ? lutador1 : lutador2;
    this.log.push(`\n🏆 Vencedor: ${vencedor.nome}!`);
    
    return this.log.join('\n');
  }

  obterLog(): string[] {
    return [...this.log];
  }
}

// Teste o sistema completo
const arthur = new Paladino("Arthur");
const altair = new Assassino("Altaïr");
const arena = new Arena();

console.log(arena.batalhar(arthur, altair));
```

### 8. Padrão Strategy com Classes

Implemente diferentes estratégias de IA para unidades:

```typescript
// Interface para estratégias
interface EstrategiaIA {
  decidirAcao(unidade: UnidadeBase, inimigos: UnidadeBase[]): string;
}

// Estratégias específicas
class EstrategiaAgressiva implements EstrategiaIA {
  decidirAcao(unidade: UnidadeBase, inimigos: UnidadeBase[]): string {
    // Sempre atacar o inimigo com menos vida
    // Retorne a descrição da ação
  }
}

class EstrategiaDefensiva implements EstrategiaIA {
  decidirAcao(unidade: UnidadeBase, inimigos: UnidadeBase[]): string {
    // Se vida < 50%, tentar curar ou fugir
    // Senão, atacar o mais próximo
  }
}

class EstrategiaTatica implements EstrategiaIA {
  decidirAcao(unidade: UnidadeBase, inimigos: UnidadeBase[]): string {
    // Atacar baseado em vantagem de tipo
    // Priorizar alvos mais perigosos
  }
}

// Unidade com IA
class UnidadeComIA extends UnidadeBase {
  private estrategia: EstrategiaIA;

  constructor(nome: string, vida: number, ataque: number, tipo: string, estrategia: EstrategiaIA) {
    super(nome, vida, ataque, tipo);
    this.estrategia = estrategia;
  }

  habilidadeEspecial(alvo: UnidadeBase): string {
    // Use this.estrategia.decidirAcao([alvo]) para decidir ação
    return "Ação executada pela IA";
  }

  alterarEstrategia(novaEstrategia: EstrategiaIA): void {
    this.estrategia = novaEstrategia;
  }
}

// Teste
const unidadeIA = new UnidadeComIA("Bot-001", 100, 60, "IA", new EstrategiaAgressiva());
const inimigo = new Paladino("Inimigo");
console.log(unidadeIA.habilidadeEspecial(inimigo));
```

---

## 🧪 Exercícios Bônus

### 9. Factory Pattern

Crie uma fábrica de unidades:

```typescript
class FabricaUnidades {
  static criarUnidade(tipo: 'guerreiro' | 'mago' | 'arqueiro', nome: string): UnidadeBase {
    // Implemente o padrão Factory
    // Retorne a unidade apropriada baseada no tipo
  }

  static criarEsquadrao(composicao: Array<{tipo: string, nome: string}>): UnidadeBase[] {
    // Use o método criarUnidade para criar um esquadrão completo
  }
}

// Teste
const esquadrao = FabricaUnidades.criarEsquadrao([
  { tipo: 'guerreiro', nome: 'Tank' },
  { tipo: 'mago', nome: 'Healer' },
  { tipo: 'arqueiro', nome: 'Sniper' }
]);
console.log(`Esquadrão criado com ${esquadrao.length} membros`);
```

### 10. Observer Pattern

Implemente um sistema de notificações para eventos de batalha:

```typescript
interface Observador {
  notificar(evento: string): void;
}

class SistemaBatalha {
  private observadores: Observador[] = [];

  adicionarObservador(observador: Observador): void {
    // Adicione observador à lista
  }

  removerObservador(observador: Observador): void {
    // Remova observador da lista
  }

  private notificarObservadores(evento: string): void {
    // Notifique todos os observadores
  }

  executarBatalha(atacante: UnidadeBase, defensor: UnidadeBase): string {
    // Execute a batalha
    // Notifique observadores de eventos importantes
    // Exemplo: "Batalha iniciada", "Golpe crítico", "Unidade derrotada"
  }
}

class LogObservador implements Observador {
  private eventos: string[] = [];

  notificar(evento: string): void {
    this.eventos.push(`[${new Date().toLocaleTimeString()}] ${evento}`);
  }

  obterLog(): string[] {
    return this.eventos;
  }
}

// Teste
const sistema = new SistemaBatalha();
const logger = new LogObservador();
sistema.adicionarObservador(logger);

const heroi = new Paladino("Herói");
const vilao = new Assassino("Vilão");
sistema.executarBatalha(heroi, vilao);

console.log(logger.obterLog());
```

---

## 📝 Lista de Verificação

Após completar os exercícios, verifique se você consegue:

- [ ] **Classes Básicas**: Criar classes com constructor, propriedades e métodos
- [ ] **Herança**: Usar `extends` para criar subclasses especializadas
- [ ] **Super**: Chamar constructor e métodos da classe pai com `super`
- [ ] **Encapsulamento**: Usar `private`, `protected` e `public` apropriadamente
- [ ] **Classes Abstratas**: Criar e implementar classes abstratas com métodos abstratos
- [ ] **Sobrescrita**: Fazer override de métodos da classe pai
- [ ] **Parâmetros Opcionais**: Usar parâmetros com valores padrão
- [ ] **Getters/Setters**: Implementar propriedades computadas e validação
- [ ] **Interfaces**: Definir contratos para classes implementarem
- [ ] **Composição**: Preferir composição sobre herança quando apropriado
- [ ] **Polimorfismo**: Usar diferentes implementações através da mesma interface
- [ ] **Padrões de Design**: Aplicar Strategy, Factory e Observer patterns

---

## 🆘 Dicas e Ajuda

### Se você estiver com dificuldades:

1. **Consulte** o arquivo `comande-seu-exercito.md` para revisar os conceitos
2. **Execute** o código frequentemente para ver os erros do TypeScript
3. **Use** o autocomplete do VS Code (Ctrl+Space) para ver métodos disponíveis
4. **Lembre-se:** Herança é "é um", composição é "tem um"
5. **Debug:** Use `console.log()` para entender o que está acontecendo

### Erros comuns:

- **Esquecer de chamar `super()`** no constructor de subclasses
- **Acessar propriedades privadas** fora da classe
- **Não implementar métodos abstratos** em subclasses
- **Confundir `this`** - sempre se refere à instância atual
- **Herança muito profunda** - prefira composição

---

## 🎉 Parabéns, General!

Ao completar estes exercícios, você terá dominado a arte da programação orientada a objetos em TypeScript!

**Próximo passo:** Dia 03 - Generics e o Arsenal Universal! 🛡️

---

> **💡 Lembre-se:** Um exército bem organizado é como código bem estruturado - cada classe tem sua função, mas todas trabalham juntas para alcançar a vitória!
