# 📘 Dia 02 — Comande seu Exército: Classes, Herança & Funções

> "Uma classe bem estruturada é como um exército disciplinado — cada membro sabe sua função, mas todos trabalham juntos para alcançar a vitória."

## 🎯 Tema: Classes, Herança, Métodos & Encapsulamento

---

## 📚 Parte Teórica

### 🧱 O que é uma Classe?

Uma **classe** é muito mais que um simples molde (template) — é um **contrato arquitetural** que define a estrutura, comportamento e regras de negócio para criar objetos consistentes e funcionais. É como um "blueprint" militar completo para construir suas tropas!

#### 🎯 Classe = Estrutura + Comportamento + Estado

```typescript
// 🏗️ Uma classe define 3 pilares fundamentais:
class Guerreiro {
  // 📦 1. PROPRIEDADES (Estado/Dados)
  nome: string;          // O que o objeto "tem"
  forca: number;         // Características do objeto
  vida: number;          // Estado atual do objeto
  experiencia: number;   // Dados que evoluem
  
  // 🏗️ 2. CONSTRUCTOR (Inicialização)
  constructor(nome: string, forca: number, vida: number = 100) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.experiencia = 0;
    
    // Validação automática na criação
    this.validarGuerreiro();
  }
  
  // ⚡ 3. MÉTODOS (Comportamentos/Ações)
  atacar(): string {     // O que o objeto "faz"
    this.ganharExperiencia(5);
    return `${this.nome} ataca com força ${this.forca}!`;
  }

  receberDano(dano: number): void {
    this.vida - = dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida: ${this.vida}`);
    
    if (this.vida <= 0) {
      console.log(`💀 ${this.nome} foi derrotado!`);
    }
  }
  
  private validarGuerreiro(): void {
    if (this.vida <= 0) throw new Error('Guerreiro deve estar vivo!');
    if (this.forca <= 0) throw new Error('Guerreiro deve ter força!');
  }
  
  private ganharExperiencia(pontos: number): void {
    this.experiencia += pontos;
    if (this.experiencia >= 100) {
      this.subirNivel();
    }
  }
  
  private subirNivel(): void {
    this.forca += 10;
    this.vida += 20;
    this.experiencia = 0;
    console.log(`🎉 ${this.nome} subiu de nível! Força: ${this.forca}`);
  }
}
```

#### 🤔 Por que Classes são Revolucionárias?

**🔥 Antes das Classes (Programação Procedural):**
```typescript
// ❌ Código procedural - dados e funções separados
let guerreiro1Nome = 'Arthur';
let guerreiro1Vida = 100;
let guerreiro1Forca = 50;

let guerreiro2Nome = 'Lancelot';
let guerreiro2Vida = 120;
let guerreiro2Forca = 60;

// Função separada - não há conexão clara
function atacar(nome: string, forca: number) {
  return `${nome} ataca com força ${forca}!`;
}

// 😰 Problemas:
// - Dados espalhados
// - Sem garantia de consistência
// - Difícil de manter
// - Propenso a erros
```

**✅ Com Classes (Programação Orientada a Objetos):**
```typescript
// ✅ Código orientado a objetos - tudo organizado
class Guerreiro {
  // Dados e comportamentos juntos
  constructor(public nome: string, public vida: number, public forca: number) {}
  
  atacar(): string {
    return `${this.nome} ataca com força ${this.forca}!`;
  }
}

// Criação limpa e consistente
const arthur = new Guerreiro('Arthur', 100, 50);
const lancelot = new Guerreiro('Lancelot', 120, 60);

// 🎉 Benefícios:
// - Dados organizados
// - Comportamento encapsulado
// - Reutilização fácil
// - Manutenção simples
```

#### � Analogia: Classe como Criador de Pokémon

```typescript
// 🌟 Classe = Template para criar Pokémon
class Pokemon {
  // 📋 Stats básicos (propriedades)
  nome: string;
  tipo: string;
  nivel: number;
  private _hp: number;
  private _hpMaximo: number;
  private _energia: number = 100;
  private _capturado: boolean = false;
  
  constructor(nome: string, tipo: string, nivel: number = 1) {
    this.nome = nome;
    this.tipo = tipo;
    this.nivel = nivel;
    
    // HP baseado no nível
    this._hpMaximo = 50 + (nivel * 10);
    this._hp = this._hpMaximo;
  }
  
  // ⚡ Ações do Pokémon (métodos)
  atacar(nomeAtaque: string): string {
    if (this._energia < 20) {
      return `${this.nome} está muito cansado para atacar!`;
    }
    
    if (this._hp <= 0) {
      return `${this.nome} está desmaiado e não pode atacar!`;
    }
    
    this._energia -= 20;
    const dano = Math.floor(Math.random() * 25) + 10;
    return `� ${this.nome} usa ${nomeAtaque}! Causou ${dano} de dano! Energia: ${this._energia}`;
  }
  
  receberDano(dano: number): string {
    this._hp -= dano;
    if (this._hp < 0) this._hp = 0;
    
    if (this._hp === 0) {
      return `💫 ${this.nome} desmaiou!`;
    }
    return `${this.nome} recebeu ${dano} de dano! HP: ${this._hp}/${this._hpMaximo}`;
  }
  
  descansar(): string {
    this._energia = Math.min(this._energia + 30, 100);
    return `😴 ${this.nome} descansou! Energia restaurada: ${this._energia}`;
  }
  
  // Getters para acessar informações privadas
  get hp(): number {
    return this._hp;
  }
  
  get energia(): number {
    return this._energia;
  }
  
  get capturado(): boolean {
    return this._capturado;
  }
  
  // Método para capturar o Pokémon
  capturar(): string {
    if (this._capturado) {
      return `${this.nome} já foi capturado!`;
    }
    this._capturado = true;
    return `🔴 ${this.nome} foi capturado! Adicionado à Pokédex!`;
  }
  
  // Status completo do Pokémon
  obterStatus(): string {
    const status = this._hp > 0 ? 'Ativo' : 'Desmaiado';
    return `${this.nome} (${this.tipo}) - Nível ${this.nivel} | HP: ${this._hp}/${this._hpMaximo} | Status: ${status}`;
  }
}

// � Criando diferentes Pokémon (instanciando objetos)
const pikachu = new Pokemon('Pikachu', 'Elétrico', 25);
const charizard = new Pokemon('Charizard', 'Fogo/Voador', 50);
const blastoise = new Pokemon('Blastoise', 'Água', 45);

// � Cada Pokémon é único mas segue o mesmo padrão
console.log(pikachu.atacar('Thunderbolt'));  // "� Pikachu usa Thunderbolt! Causou 18 de dano!"
console.log(charizard.capturar());           // "🔴 Charizard foi capturado! Adicionado à Pokédex!"
console.log(blastoise.obterStatus());        // "Blastoise (Água) - Nível 45 | HP: 500/500 | Status: Ativo"
```

#### 🎯 Classe vs Objeto: Entendendo a Diferença

```typescript
// 📋 CLASSE = Receita de bolo (como fazer)
class ContaBancaria {
  titular: string;
  private _saldo: number;
  
  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this._saldo = saldoInicial;
  }
  
  depositar(valor: number): string {
    this._saldo += valor;
    return `Depósito de R$ ${valor}. Saldo: R$ ${this._saldo}`;
  }
  
  get saldo(): number {
    return this._saldo;
  }
}

// 🍰 OBJETOS = Bolos feitos (resultado final)
const contaJoao = new ContaBancaria('João', 1000);   // Objeto 1
const contaMaria = new ContaBancaria('Maria', 500);   // Objeto 2
const contaPedro = new ContaBancaria('Pedro');        // Objeto 3

// Cada objeto é independente
console.log(contaJoao.titular);  // "João"
console.log(contaMaria.saldo);   // 500
contaPedro.depositar(200);       // "Depósito de R$ 200. Saldo: R$ 200"
```

#### 🎮 Analogia com RPG: Classe de Personagem

```typescript
// 🧙‍♂️ Classe = Profissão/Classe do RPG
class Mago {
  nome: string;
  nivel: number;
  mana: number;
  magias: string[];
  
  constructor(nome: string) {
    this.nome = nome;
    this.nivel = 1;
    this.mana = 100;
    this.magias = ['Bola de Fogo']; // Magia inicial
  }
  
  // 🔥 Habilidades específicas da classe
  lancarMagia(magia: string): string {
    if (!this.magias.includes(magia)) {
      return `${this.nome} não conhece ${magia}!`;
    }
    
    if (this.mana < 20) {
      return `${this.nome} não tem mana suficiente!`;
    }
    
    this.mana -= 20;
    return `${this.nome} lança ${magia}! Mana restante: ${this.mana}`;
  }
  
  aprenderMagia(novaMagia: string): string {
    if (this.magias.includes(novaMagia)) {
      return `${this.nome} já conhece ${novaMagia}!`;
    }
    
    this.magias.push(novaMagia);
    return `${this.nome} aprendeu ${novaMagia}!`;
  }
  
  meditar(): string {
    this.mana = Math.min(this.mana + 30, 100);
    return `${this.nome} medita e recupera mana: ${this.mana}`;
  }
}

// 🎭 Diferentes magos (objetos) da mesma classe
const gandalf = new Mago('Gandalf');
const merlin = new Mago('Merlin');
const dumbledore = new Mago('Dumbledore');

// Cada mago evolui independentemente
gandalf.aprenderMagia('Raio');
merlin.aprenderMagia('Teleporte');
dumbledore.aprenderMagia('Cura');

console.log(gandalf.magias);    // ['Bola de Fogo', 'Raio']
console.log(merlin.magias);     // ['Bola de Fogo', 'Teleporte']
console.log(dumbledore.magias); // ['Bola de Fogo', 'Cura']
```

#### 💡 Classes: Os Superpoderes da Programação

| **Superpower** | **O que faz** | **Exemplo** |
|---------------|---------------|-------------|
| 🏗️ **Estruturação** | Organiza código de forma lógica | Propriedades agrupadas |
| 🔒 **Encapsulamento** | Protege dados sensíveis | `private _senha` |
| 🧬 **Herança** | Reutiliza código entre classes similares | `Arqueiro extends Guerreiro` |
| 🎭 **Polimorfismo** | Diferentes comportamentos para mesma ação | `atacar()` diferente para cada classe |
| 🔧 **Abstração** | Esconde complexidade interna | Métodos privados |
| 🎯 **Instanciação** | Cria múltiplos objetos do mesmo tipo | `new Guerreiro()` |

#### 🚀 Classes vs Outras Estruturas

```typescript
// 📦 OBJETO LITERAL - Para dados simples e únicos
const configuracao = {
  tema: 'dark',
  idioma: 'pt-br',
  volume: 80
};

// 🏭 CLASSE - Para criar múltiplas instâncias com comportamento
class Usuario {
  constructor(public nome: string, public email: string) {}
  
  enviarEmail(): string {
    return `Email enviado para ${this.email}`;
  }
}

// ⚡ FUNÇÃO - Para operações específicas e stateless
function calcularIdade(nascimento: Date): number {
  return new Date().getFullYear() - nascimento.getFullYear();
}

// 🎯 Cada estrutura tem seu propósito específico!
```

**🎭 Resumo: Classes são como DNA do código** - elas carregam todas as informações necessárias para criar objetos vivos, funcionais e inteligentes que sabem como se comportar no seu sistema!

#### 🔒 Por que usar _ (underscore) em propriedades privadas?

O **underscore (_)** é uma **convenção visual** amplamente adotada para identificar propriedades privadas. Veja a diferença:

```typescript
class PokemonComConvencao {
  // ✅ Propriedades públicas - sem underscore
  nome: string;
  tipo: string;
  nivel: number;
  
  // 🔒 Propriedades privadas - COM underscore (_)
  private _hp: number;           // _hp indica "não acesse diretamente"
  private _energia: number;      // _energia é controlada internamente
  private _capturado: boolean;   // _capturado é estado interno
  
  constructor(nome: string, tipo: string) {
    this.nome = nome;      // ✅ Acesso direto - OK
    this.tipo = tipo;      // ✅ Acesso direto - OK
    this._hp = 100;        // 🔒 Acesso interno - controlado
    this._energia = 100;   // 🔒 Acesso interno - controlado
  }
  
  // 🎯 Getters para acessar dados privados de forma controlada
  get hp(): number {
    return this._hp;  // Retorna o valor, mas não permite modificação direta
  }
  
  get energia(): number {
    return this._energia;
  }
  
  // 🎯 Setters para modificar dados privados com validação
  set hp(novoHp: number) {
    if (novoHp >= 0 && novoHp <= 999) {
      this._hp = novoHp;
    } else {
      throw new Error('HP deve estar entre 0 e 999!');
    }
  }
}

// 📝 Uso prático da convenção:
const pikachu = new PokemonComConvencao('Pikachu', 'Elétrico');

// ✅ Acessos corretos (propriedades públicas)
console.log(pikachu.nome);   // "Pikachu" - ✅ OK
console.log(pikachu.tipo);   // "Elétrico" - ✅ OK

// ✅ Acessos corretos (através de getters)
console.log(pikachu.hp);     // 100 - ✅ OK (via getter)
console.log(pikachu.energia); // 100 - ✅ OK (via getter)

// ❌ Acessos incorretos (propriedades privadas)
// console.log(pikachu._hp);    // ❌ ERRO! Propriedade privada
// pikachu._energia = 50;       // ❌ ERRO! Não deve modificar diretamente
```

#### 🎯 Benefícios da Convenção _underscore:

| **Aspecto** | **Sem Convenção** | **Com Convenção _** |
|-------------|-------------------|---------------------|
| **Identificação** | ❌ Difícil distinguir público/privado | ✅ Visualmente claro |
| **Intenção** | ❌ Ambíguo | ✅ "Não toque aqui!" |
| **Manutenção** | ❌ Propenso a erros | ✅ Código mais seguro |
| **Colaboração** | ❌ Confuso para outros devs | ✅ Intenção clara |
| **Debugging** | ❌ Mais difícil rastrear | ✅ Fácil identificar origem |

#### 🚨 Convenção vs Enforcement

```typescript
// 🔧 TypeScript + Convenção = Proteção Real
class ExemploConvencao {
  public nome: string;        // ✅ Público - sem _
  protected _nivel: number;   // 🟡 Protegido - com _
  private _hp: number;        // 🔒 Privado - com _
  
  constructor(nome: string) {
    this.nome = nome;    // ✅ OK - público
    this._nivel = 1;     // ✅ OK - interno
    this._hp = 100;      // ✅ OK - interno
  }
}

const pokemon = new ExemploConvencao('Charmander');
console.log(pokemon.nome);    // ✅ OK - público
// console.log(pokemon._hp);  // ❌ ERRO! TypeScript bloqueia
// pokemon._hp = 50;          // ❌ ERRO! TypeScript bloqueia
```

**💡 Resumo**: O `_` (underscore) é como uma **"placa de PERIGO"** 🚨 que avisa: *"Esta propriedade é interna da classe - não acesse diretamente!"*

### 🏗️ Constructor: A Fundação da Classe

O **constructor** é o método especial e **obrigatório** que é automaticamente executado no momento exato em que você cria uma nova instância da classe usando a palavra-chave `new`.

#### 🤔 Por que usar Constructor?

**1. 🎯 Inicialização Garantida**
- Sem constructor, suas propriedades ficariam `undefined`
- Garante que todo objeto nasce com dados válidos
- É executado **antes** de qualquer outro método da classe

**2. 🛡️ Validação na Criação**
- Valida dados no momento da criação
- Evita objetos em estado inválido
- Aplica regras de negócio desde o início

**3. 🔧 Configuração Personalizada**
- Permite diferentes formas de criar objetos
- Aceita parâmetros opcionais e valores padrão
- Pode executar lógica complexa de inicialização

#### 💡 Exemplo Didático: Com vs Sem Constructor

```typescript
// ❌ SEM Constructor - Problemático
class GuerreiroSemConstructor {
  nome: string;
  vida: number;
  ataque: number;
}

// Criação problemática - dados não inicializados
const guerreiro1 = new GuerreiroSemConstructor();
console.log(guerreiro1.nome); // undefined - Problemático! 😰
console.log(guerreiro1.vida); // undefined - Como ele vai lutar? 😰

// ✅ COM Constructor - Seguro e Profissional
class GuerreiroComConstructor {
  nome: string;
  vida: number;
  ataque: number;

  constructor(nome: string, vida: number = 100, ataque: number = 50) {
    // Validação automática
    if (!nome || nome.trim() === '') {
      throw new Error('Guerreiro precisa de um nome!');
    }
    if (vida <= 0) {
      throw new Error('Guerreiro precisa estar vivo!');
    }

    // Inicialização garantida
    this.nome = nome.trim();
    this.vida = vida;
    this.ataque = ataque;

    // Lógica de inicialização
    console.log(`⚔️ ${this.nome} se junta ao exército!`);
  }
}

// Criação segura - todos os dados inicializados
const guerreiro2 = new GuerreiroComConstructor('Arthur');
console.log(guerreiro2.nome); // "Arthur" - Perfeito! ✅
console.log(guerreiro2.vida); // 100 - Pronto para batalha! ✅
```

#### 🔄 Ciclo de Vida do Constructor

```typescript
class Cavaleiro {
  readonly id: number;
  nome: string;
  private _resistencia: number;
  private _equipado: boolean;

  constructor(nome: string, resistencia: number = 80) {
    console.log('🚀 1. Constructor iniciado');
    
    // 1️⃣ Inicialização de propriedades
    this.id = Math.floor(Math.random() * 1000);
    this.nome = nome;
    this._resistencia = resistencia;
    this._equipado = false;
    
    console.log('🔧 2. Propriedades inicializadas');
    
    // 2️⃣ Validações
    this.validarDados();
    
    // 3️⃣ Configurações especiais
    this.configurarEquipamentos();
    
    console.log('✅ 3. Constructor finalizado');
  }

  private validarDados(): void {
    if (!this.nome || this.nome.length < 2) {
      throw new Error('Nome do cavaleiro deve ter pelo menos 2 caracteres');
    }
    if (this._resistencia < 0 || this._resistencia > 100) {
      throw new Error('Resistência deve estar entre 0 e 100');
    }
  }

  private configurarEquipamentos(): void {
    // Lógica automática que roda na criação
    this._equipado = true;
    console.log(`🛡️ ${this.nome} foi equipado automaticamente!`);
  }

  // Getter para acessar propriedade privada
  get resistencia(): number {
    return this._resistencia;
  }

  // Setter para modificar com validação
  set resistencia(valor: number) {
    if (valor >= 0 && valor <= 100) {
      this._resistencia = valor;
    } else {
      throw new Error('Resistência deve estar entre 0 e 100');
    }
  }

  get equipado(): boolean {
    return this._equipado;
  }
}
```

#### 🎮 Analogia com games

Imagine que você está criando personagens em um RPG:

```typescript
class PersonagemRPG {
  nome: string;
  nivel: number;
  classe: string;
  atributos: { forca: number, agilidade: number, inteligencia: number };
  inventario: string[];

  constructor(
    nome: string, 
    classe: 'Guerreiro' | 'Mago' | 'Arqueiro' = 'Guerreiro'
  ) {
    // 🎯 Sem constructor: Como o jogo saberia o nome do personagem?
    // 🎯 Como definiria a classe? Como distribuiria os atributos iniciais?
    
    this.nome = nome;
    this.nivel = 1; // Todo personagem começa no nível 1
    this.classe = classe;
    
    // 🎲 Distribui atributos baseado na classe escolhida
    this.atributos = this.distribuirAtributosPorClasse(classe);
    
    // 🎒 Equipamentos iniciais baseados na classe
    this.inventario = this.obterEquipamentosIniciais(classe);
    
    console.log(`🎮 Personagem ${nome} (${classe}) foi criado!`);
  }

  private distribuirAtributosPorClasse(classe: string) {
    const distribuicoes = {
      'Guerreiro': { forca: 18, agilidade: 12, inteligencia: 8 },
      'Mago': { forca: 8, agilidade: 12, inteligencia: 18 },
      'Arqueiro': { forca: 12, agilidade: 18, inteligencia: 8 }
    };
    return distribuicoes[classe] || distribuicoes['Guerreiro'];
  }

  private obterEquipamentosIniciais(classe: string): string[] {
    const kits = {
      'Guerreiro': ['Espada de Ferro', 'Escudo de Madeira', 'Poção de Vida'],
      'Mago': ['Cajado Básico', 'Livro de Magias', 'Poção de Mana'],
      'Arqueiro': ['Arco Élfico', 'Aljava com 50 Flechas', 'Poção de Agilidade']
    };
    return kits[classe] || kits['Guerreiro'];
  }
}

// 🎮 Criação de personagens - tudo configurado automaticamente!
const heroi = new PersonagemRPG('Lancelot', 'Guerreiro');
console.log(heroi.atributos); // { forca: 18, agilidade: 12, inteligencia: 8 }
console.log(heroi.inventario); // ['Espada de Ferro', 'Escudo de Madeira', 'Poção de Vida']
```


#### 💡 Resumo: Por que Constructor é Fundamental?

| **Sem Constructor** | **Com Constructor** |
|-------------------|-------------------|
| ❌ Dados não inicializados | ✅ Dados sempre válidos |
| ❌ Objetos podem estar "quebrados" | ✅ Objetos sempre funcionais |
| ❌ Precisa lembrar de configurar depois | ✅ Configuração automática |
| ❌ Código propenso a erros | ✅ Código seguro e previsível |
| ❌ Sem validação na criação | ✅ Validação garantida |

**🎯 Constructor = Garantia de que seu objeto nasceu pronto para usar!**

#### 🔄 Ciclo de Vida Detalhado do Constructor

O constructor segue uma **ordem específica de execução** que é fundamental para entender como os objetos são criados:

```typescript
class CavaleiroCicloVida {
  readonly id: number;
  nome: string;
  private _energia: number;
  private _equipado: boolean;
  private _nivel: number;

  constructor(nome: string, energia: number = 100) {
    console.log('🚀 1️⃣ INÍCIO: Constructor iniciado');
    console.log('📍 Estado inicial: this =', this); // Objeto vazio {}
    
    // 🔹 FASE 1: Inicialização de propriedades básicas
    console.log('🔧 2️⃣ INICIALIZAÇÃO: Definindo propriedades...');
    this.id = Math.floor(Math.random() * 1000);
    this.nome = nome;
    this._energia = energia;
    this._equipado = false;
    this._nivel = 1;
    
    console.log('📊 Estado após inicialização:', {
      id: this.id,
      nome: this.nome,
      energia: this._energia
    });
    
    // 🔹 FASE 2: Validações
    console.log('✅ 3️⃣ VALIDAÇÃO: Verificando dados...');
    this.validarDados();
    
    // 🔹 FASE 3: Configurações especiais
    console.log('⚙️ 4️⃣ CONFIGURAÇÃO: Executando lógica de setup...');
    this.configurarEquipamentos();
    this.registrarCavaleiro();
    
    // 🔹 FASE 4: Finalização
    console.log('✨ 5️⃣ FINALIZAÇÃO: Constructor concluído');
    console.log('🎯 Estado final do objeto:', this);
  }

  private validarDados(): void {
    console.log('🔍 Validando nome:', this.nome);
    if (!this.nome || this.nome.length < 2) {
      throw new Error('❌ Nome do cavaleiro deve ter pelo menos 2 caracteres');
    }
    
    console.log('🔍 Validando energia:', this._energia);
    if (this._energia < 0 || this._energia > 100) {
      throw new Error('❌ Energia deve estar entre 0 e 100');
    }
    
    console.log('✅ Validações passaram!');
  }

  private configurarEquipamentos(): void {
    console.log('🛡️ Configurando equipamentos...');
    this._equipado = true;
    
    // Simula tempo de equipamento
    const equipamentos = ['Espada', 'Escudo', 'Armadura'];
    equipamentos.forEach(equip => {
      console.log(`   📦 Equipando ${equip}...`);
    });
    
    console.log('✅ Equipamentos configurados!');
  }

  private registrarCavaleiro(): void {
    console.log('📝 Registrando cavaleiro no sistema...');
    // Simula registro em um sistema
    console.log(`   🆔 ID: ${this.id}`);
    console.log(`   👤 Nome: ${this.nome}`);
    console.log(`   ⚡ Energia: ${this._energia}`);
    console.log('✅ Cavaleiro registrado!');
  }

  // Getters para acessar propriedades privadas
  get energia(): number { return this._energia; }
  get equipado(): boolean { return this._equipado; }
  get nivel(): number { return this._nivel; }
}

// 🎯 Demonstração do ciclo de vida
console.log('🎬 === INICIANDO CRIAÇÃO DO CAVALEIRO ===');
const lancelot = new CavaleiroCicloVida('Lancelot', 95);
console.log('🎊 === CAVALEIRO CRIADO COM SUCESSO ===');
console.log('📋 Resultado:', lancelot);
```

#### ⚡ Ordem de Execução: Passo a Passo

| **Fase** | **O que acontece** | **Quando** |
|----------|-------------------|------------|
| 🔥 **1. Criação do Objeto** | TypeScript cria objeto vazio `{}` | Antes do constructor |
| 🏗️ **2. Chamada do Constructor** | Executa código dentro de `constructor()` | Imediatamente após criação |
| 📦 **3. Inicialização** | Atribui valores às propriedades | Primeiro bloco do constructor |
| ✅ **4. Validação** | Verifica se dados são válidos | Segundo bloco do constructor |
| ⚙️ **5. Configuração** | Executa lógica de setup | Terceiro bloco do constructor |
| 🎯 **6. Finalização** | Constructor termina | Objeto pronto para uso |
| 🚀 **7. Retorno** | `new` retorna objeto completo | Após constructor |

#### 🎯 Vantagens dos Factory Methods vs Constructor Direto

| **Aspecto** | **Constructor Direto** | **Factory Methods** |
|-------------|----------------------|-------------------|
| 📝 **Clareza** | `new Cavaleiro(dados)` | `Cavaleiro.criarVeterano()` |
| 🎛️ **Flexibilidade** | Limitada | Multiple opções |
| 🧠 **Semântica** | Genérica | Específica e clara |
| 🔧 **Lógica** | Básica | Pode ser complexa |
| 📊 **Configurações** | Manual | Pré-configuradas |
| 🎲 **Randomização** | Manual | Automática |
| ✅ **Validação** | Genérica | Específica por tipo |

#### 💡 Quando Usar Cada Abordagem

**🏗️ Constructor Direto:**
```typescript
// Quando você tem controle total e dados específicos
const cavaleiro = new CavaleiroAvancado('Nome', { 
  classe: 'Paladino', 
  nivel: 50 
});
```

**🏭 Factory Methods:**
```typescript
// Quando você quer criação especializada e semântica
const iniciante = CavaleiroAvancado.criarIniciante('Nome');
const veterano = CavaleiroAvancado.criarVeterano('Nome', 'Templário');
const lendario = CavaleiroAvancado.criarLendario('Nome');
```

## 🛡️ Boas Práticas e Padrões Avançados do Constructor

##### 1. 🔒 Constructor com Validação Robusta

```typescript
class CavaleiroSeguro {
  private _nome: string;
  private _idade: number;
  private _experiencia: number;
  
  constructor(nome: string, idade: number, experiencia: number = 0) {
    // ✅ Validação antes de atribuir
    this._nome = this.validarNome(nome);
    this._idade = this.validarIdade(idade);
    this._experiencia = this.validarExperiencia(experiencia);
    
    // 🔄 Log do processo de criação
    console.log(`✅ Cavaleiro ${this._nome} criado com sucesso!`);
  }

  private validarNome(nome: string): string {
    if (!nome || typeof nome !== 'string') {
      throw new Error('❌ Nome deve ser uma string válida');
    }
    if (nome.length < 2 || nome.length > 50) {
      throw new Error('❌ Nome deve ter entre 2 e 50 caracteres');
    }
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) {
      throw new Error('❌ Nome deve conter apenas letras e espaços');
    }
    return nome.trim();
  }

  private validarIdade(idade: number): number {
    if (!Number.isInteger(idade) || idade < 16 || idade > 100) {
      throw new Error('❌ Idade deve ser um número inteiro entre 16 e 100');
    }
    return idade;
  }

  private validarExperiencia(experiencia: number): number {
    if (!Number.isInteger(experiencia) || experiencia < 0) {
      throw new Error('❌ Experiência deve ser um número inteiro positivo');
    }
    return experiencia;
  }

  // Getters com lógica adicional
  get nome(): string { return this._nome; }
  get idade(): number { return this._idade; }
  get experiencia(): number { return this._experiencia; }
  get categoria(): string {
    if (this._experiencia < 100) return '🌱 Novato';
    if (this._experiencia < 500) return '⚔️ Experiente';
    if (this._experiencia < 1000) return '🏆 Veterano';
    return '👑 Lendário';
  }
}
```

##### 2. 🏗️ Constructor com Dependency Injection

```typescript
// 🔧 Interfaces para injeção de dependência
interface IArmaService {
  obterArmaAleatoria(): string;
}

interface IEscudoService {
  obterEscudoAleatorio(): string;
}

// 🛠️ Implementações dos serviços
class ArmaService implements IArmaService {
  private armas = ['Excalibur', 'Durandal', 'Joyeuse', 'Curtana'];
  
  obterArmaAleatoria(): string {
    return this.armas[Math.floor(Math.random() * this.armas.length)];
  }
}

class EscudoService implements IEscudoService {
  private escudos = ['Aegis', 'Aspis', 'Scutum', 'Pavise'];
  
  obterEscudoAleatorio(): string {
    return this.escudos[Math.floor(Math.random() * this.escudos.length)];
  }
}

// 🏰 Classe principal com injeção de dependência
class CavaleiroComDependencias {
  nome: string;
  arma: string;
  escudo: string;
  private _nivel: number;

  constructor(
    nome: string,
    private armaService: IArmaService,    // 💉 Injeção de dependência
    private escudoService: IEscudoService, // 💉 Injeção de dependência
    nivel: number = 1
  ) {
    this.nome = nome;
    this._nivel = nivel;
    
    // 🎯 Usa os serviços injetados
    this.arma = this.armaService.obterArmaAleatoria();
    this.escudo = this.escudoService.obterEscudoAleatorio();
    
    console.log(`🏰 ${nome} equipou ${this.arma} e ${this.escudo}`);
  }

  get nivel(): number { return this._nivel; }
  
  levelUp(): void {
    this._nivel++;
    // 🔄 Pode obter novos equipamentos ao subir de nível
    if (this._nivel % 10 === 0) {
      this.arma = this.armaService.obterArmaAleatoria();
      this.escudo = this.escudoService.obterEscudoAleatorio();
      console.log(`🆙 Nível ${this._nivel}! Novos equipamentos!`);
    }
  }
}

// 📊 Uso com injeção de dependência
const armaService = new ArmaService();
const escudoService = new EscudoService();

const cavaleiroInjetado = new CavaleiroComDependencias(
  'Galadriel', 
  armaService, 
  escudoService, 
  5
);
```

##### 3. 🔄 Constructor com Builder Pattern

```typescript
// 🏗️ Builder Pattern para construção complexa
class CavaleiroBuilder {
  private nome?: string;
  private classe?: string;
  private nivel: number = 1;
  private atributos = {
    forca: 10,
    defesa: 10,
    magia: 10,
    velocidade: 10
  };
  private equipamentos: string[] = [];
  private habilidades: string[] = [];

  // 🔧 Métodos fluidos para configuração
  comNome(nome: string): CavaleiroBuilder {
    this.nome = nome;
    return this; // 🔄 Retorna this para chaining
  }

  daClasse(classe: string): CavaleiroBuilder {
    this.classe = classe;
    return this;
  }

  noNivel(nivel: number): CavaleiroBuilder {
    this.nivel = nivel;
    return this;
  }

  comAtributos(forca: number, defesa: number, magia: number, velocidade: number): CavaleiroBuilder {
    this.atributos = { forca, defesa, magia, velocidade };
    return this;
  }

  comEquipamento(equipamento: string): CavaleiroBuilder {
    this.equipamentos.push(equipamento);
    return this;
  }

  comHabilidade(habilidade: string): CavaleiroBuilder {
    this.habilidades.push(habilidade);
    return this;
  }

  // 🏗️ Método build que cria o objeto final
  construir(): CavaleiroCompleto {
    if (!this.nome) {
      throw new Error('❌ Nome é obrigatório para construir o cavaleiro');
    }
    if (!this.classe) {
      throw new Error('❌ Classe é obrigatória para construir o cavaleiro');
    }

    return new CavaleiroCompleto(
      this.nome,
      this.classe,
      this.nivel,
      this.atributos,
      this.equipamentos,
      this.habilidades
    );
  }
}

// 🏰 Classe final que será construída
class CavaleiroCompleto {
  constructor(
    public readonly nome: string,
    public readonly classe: string,
    public readonly nivel: number,
    public readonly atributos: {
      forca: number;
      defesa: number;
      magia: number;
      velocidade: number;
    },
    public readonly equipamentos: string[],
    public readonly habilidades: string[]
  ) {
    console.log(`🎊 Cavaleiro ${nome} da classe ${classe} construído!`);
  }

  obterResumo(): string {
    return `
🏰 === CAVALEIRO COMPLETO ===
👤 Nome: ${this.nome}
⚔️ Classe: ${this.classe}
📊 Nível: ${this.nivel}
💪 Atributos: Força:${this.atributos.forca} | Defesa:${this.atributos.defesa} | Magia:${this.atributos.magia} | Velocidade:${this.atributos.velocidade}
🛡️ Equipamentos: ${this.equipamentos.join(', ') || 'Nenhum'}
✨ Habilidades: ${this.habilidades.join(', ') || 'Nenhuma'}
    `;
  }
}

// 🎯 Uso do Builder Pattern - Sintaxe fluida e legível
const cavaleiroCompleto = new CavaleiroBuilder()
  .comNome('Sir Lancelot')
  .daClasse('Paladino')
  .noNivel(45)
  .comAtributos(35, 30, 20, 25)
  .comEquipamento('Espada Flamejante')
  .comEquipamento('Armadura de Dragão')
  .comEquipamento('Escudo Sagrado')
  .comHabilidade('Cura Divina')
  .comHabilidade('Golpe Devastador')
  .comHabilidade('Proteção Celestial')
  .construir();

console.log(cavaleiroCompleto.obterResumo());
```

##### 🎯 Resumo dos Padrões de Constructor

| **Padrão** | **Quando Usar** | **Vantagens** | **Exemplo** |
|------------|-----------------|---------------|-------------|
| 🔒 **Validação Robusta** | Dados críticos | Segurança, confiabilidade | Dados de usuário |
| 💉 **Dependency Injection** | Sistema complexo | Testabilidade, flexibilidade | Serviços, APIs |
| 🏗️ **Builder Pattern** | Muitos parâmetros | Legibilidade, configuração | Objetos complexos |
| 🏭 **Factory Methods** | Diferentes tipos | Clareza semântica | Tipos especializados |

##### 💡 Dicas Finais para Constructors Eficientes

1. **🔒 Sempre valide:** Nunca confie nos dados de entrada
2. **📝 Seja claro:** Use nomes descritivos para parâmetros
3. **⚡ Seja eficiente:** Evite lógica pesada no constructor
4. **🔄 Use readonly:** Para propriedades que não devem mudar
5. **💉 Injete dependências:** Para código mais testável
6. **🏗️ Use builders:** Para objetos com muitas configurações
7. **🎯 Uma responsabilidade:** Constructor deve apenas inicializar
```

---

## 👥 Herança: Expandindo seu Exército

A **herança** permite criar classes especializadas baseadas em uma classe mais geral.

### 🏹 Classe Base e Subclasses

```typescript
// ✅ Classe base
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

  // Método comum a todas as unidades
  estaVivo(): boolean {
    return this.vida > 0;
  }

  // Método abstrato - deve ser implementado pelas subclasses
  abstract habilidadeEspecial(): string;

  // Método que pode ser sobrescrito
  atacar(alvo: UnidadeBase): string {
    const dano = this.ataque;
    alvo.vida -= dano;
    return `${this.nome} causa ${dano} de dano em ${alvo.nome}`;
  }
}
```

### 🏹 Arqueiro: Especialização com Munição

```typescript
class Arqueiro extends UnidadeBase {
  flechas: number;
  precisao: number;

  constructor(nome: string, flechas: number = 30, precisao: number = 85) {
    super(nome, 80, 70, 'Arqueiro'); // Chama o constructor da classe pai
    this.flechas = flechas;
    this.precisao = precisao;
  }

  // Implementação obrigatória do método abstrato
  habilidadeEspecial(): string {
    if (this.flechas > 0) {
      this.flechas--;
      return `${this.nome} usa Tiro Certeiro! Dano crítico! Flechas restantes: ${this.flechas}`;
    }
    return `${this.nome} está sem flechas!`;
  }

  // Método específico do Arqueiro
  atirarFlecha(alvo: UnidadeBase): string {
    if (this.flechas <= 0) {
      return `${this.nome} não tem flechas!`;
    }

    this.flechas--;
    const acertou = Math.random() * 100 <= this.precisao;
    
    if (acertou) {
      const dano = this.ataque + 10; // Bônus de precisão
      alvo.vida -= dano;
      return `${this.nome} acerta uma flecha em ${alvo.nome}! Dano: ${dano}`;
    } else {
      return `${this.nome} erra o tiro!`;
    }
  }

  // Sobrescreve o método da classe pai
  atacar(alvo: UnidadeBase): string {
    return this.atirarFlecha(alvo);
  }
}
```

### 🧙‍♂️ Mago: Magia e Mana

```typescript
class Mago extends UnidadeBase {
  mana: number;
  manaMaxima: number;
  magias: string[];

  constructor(nome: string, mana: number = 100) {
    super(nome, 60, 90, 'Mago');
    this.mana = mana;
    this.manaMaxima = mana;
    this.magias = ['Bola de Fogo', 'Raio Congelante', 'Cura'];
  }

  habilidadeEspecial(): string {
    const custoMana = 30;
    if (this.mana >= custoMana) {
      this.mana -= custoMana;
      return `${this.nome} lança Meteoro! Dano em área! Mana: ${this.mana}`;
    }
    return `${this.nome} não tem mana suficiente!`;
  }

  lancarMagia(magia: string, alvo?: UnidadeBase): string {
    const custoMana = 20;
    
    if (this.mana < custoMana) {
      return `${this.nome} não tem mana suficiente!`;
    }

    if (!this.magias.includes(magia)) {
      return `${this.nome} não conhece a magia ${magia}`;
    }

    this.mana -= custoMana;

    switch (magia) {
      case 'Bola de Fogo':
        if (alvo) {
          const dano = this.ataque + 20;
          alvo.vida -= dano;
          return `${this.nome} lança Bola de Fogo em ${alvo.nome}! Dano: ${dano}`;
        }
        return `${this.nome} precisa de um alvo para Bola de Fogo!`;
      
      case 'Cura':
        this.vida = Math.min(this.vida + 40, 100);
        return `${this.nome} se cura! Vida: ${this.vida}`;
      
      default:
        return `${this.nome} lança ${magia}!`;
    }
  }

  regenerarMana(quantidade: number = 10): void {
    this.mana = Math.min(this.mana + quantidade, this.manaMaxima);
  }
}
```

### ⚔️ Guerreiro: Tanque e Resistência

```typescript
class Guerreiro extends UnidadeBase {
  armadura: number;
  furia: number;

  constructor(nome: string, armadura: number = 50) {
    super(nome, 120, 60, 'Guerreiro');
    this.armadura = armadura;
    this.furia = 0;
  }

  habilidadeEspecial(): string {
    this.furia += 20;
    const danoExtra = Math.floor(this.furia / 10);
    return `${this.nome} entra em fúria! Ataque aumentado em ${danoExtra}! Fúria: ${this.furia}`;
  }

  // Método para reduzir dano recebido
  receberDano(dano: number): number {
    const danoReduzido = Math.max(1, dano - this.armadura);
    this.vida -= danoReduzido;
    this.furia += 5; // Ganha fúria ao receber dano
    return danoReduzido;
  }

  atacar(alvo: UnidadeBase): string {
    const danoExtra = Math.floor(this.furia / 10);
    const danoTotal = this.ataque + danoExtra;
    alvo.vida -= danoTotal;
    return `${this.nome} ataca com força bruta! Dano: ${danoTotal} (Fúria: ${this.furia})`;
  }
}
```

---

## 🧪 Encapsulamento: Protegendo seus Segredos

### 🔒 Modificadores de Acesso

```typescript
class Comandante {
  public nome: string;           // ✅ Acessível de qualquer lugar
  protected moral: number;       // ✅ Acessível pela classe e subclasses
  private estrategias: string[]; // ✅ Acessível apenas dentro da classe

  constructor(nome: string) {
    this.nome = nome;
    this.moral = 100;
    this.estrategias = ['Ataque Frontal', 'Flanqueamento', 'Emboscada'];
  }

  // Método público
  darOrdem(): string {
    return `${this.nome} comanda: "Avançar!"`;
  }

  // Método protegido - subclasses podem usar
  protected aumentarMoral(quantidade: number): void {
    this.moral = Math.min(this.moral + quantidade, 100);
  }

  // Método privado - só a própria classe pode usar
  private escolherEstrategia(): string {
    const indice = Math.floor(Math.random() * this.estrategias.length);
    return this.estrategias[indice];
  }

  // Método público que usa o método privado
  planejarBatalha(): string {
    const estrategia = this.escolherEstrategia();
    return `${this.nome} planeja: ${estrategia}`;
  }
}

class General extends Comandante {
  experiencia: number;

  constructor(nome: string, experiencia: number) {
    super(nome);
    this.experiencia = experiencia;
  }

  inspirarTropas(): string {
    // ✅ Pode acessar protected
    this.aumentarMoral(20);
    // ❌ Não pode acessar private - this.estrategias
    return `${this.nome} inspira as tropas! Moral: ${this.moral}`;
  }
}
```

### 💎 Getters e Setters

```typescript
class RecursosImperio {
  private _ouro: number;
  private _comida: number;
  private _madeira: number;

  constructor(ouro: number = 1000, comida: number = 500, madeira: number = 300) {
    this._ouro = ouro;
    this._comida = comida;
    this._madeira = madeira;
  }

  // Getter - leitura controlada
  get ouro(): number {
    return this._ouro;
  }

  // Setter - escrita com validação
  set ouro(quantidade: number) {
    if (quantidade < 0) {
      throw new Error('Ouro não pode ser negativo!');
    }
    this._ouro = quantidade;
  }

  // Getter computed - calcula valor dinamicamente
  get recursoTotal(): number {
    return this._ouro + this._comida + this._madeira;
  }

  // Método para gastar recursos
  gastar(ouro: number = 0, comida: number = 0, madeira: number = 0): boolean {
    if (this._ouro >= ouro && this._comida >= comida && this._madeira >= madeira) {
      this._ouro -= ouro;
      this._comida -= comida;
      this._madeira -= madeira;
      return true;
    }
    return false;
  }

  // Método para mostrar status
  status(): string {
    return `Recursos: ${this._ouro} ouro, ${this._comida} comida, ${this._madeira} madeira`;
  }
}
```

---

## ⚙️ Métodos e Parâmetros Avançados

### 🎯 Parâmetros Opcionais e Valores Padrão

```typescript
class Curandeiro extends UnidadeBase {
  poderesCura: number;

  constructor(nome: string, poderesCura: number = 100) {
    super(nome, 70, 30, 'Curandeiro');
    this.poderesCura = poderesCura;
  }

  habilidadeEspecial(): string {
    return `${this.nome} cria um campo de cura em área!`;
  }

  // Parâmetros opcionais e valores padrão
  curar(alvo?: UnidadeBase, quantidade: number = 30, tipo: 'básica' | 'avançada' = 'básica'): string {
    if (this.poderesCura <= 0) {
      return `${this.nome} não tem poderes de cura!`;
    }

    const custo = tipo === 'avançada' ? 20 : 10;
    if (this.poderesCura < custo) {
      return `${this.nome} não tem energia suficiente para cura ${tipo}!`;
    }

    this.poderesCura -= custo;
    const curaReal = tipo === 'avançada' ? quantidade * 1.5 : quantidade;

    if (alvo) {
      alvo.vida = Math.min(alvo.vida + curaReal, 100);
      return `${this.nome} cura ${alvo.nome}! +${curaReal} vida (${tipo})`;
    } else {
      // Se não especificar alvo, cura a si mesmo
      this.vida = Math.min(this.vida + curaReal, 100);
      return `${this.nome} se cura! +${curaReal} vida (${tipo})`;
    }
  }

  // Rest parameters - múltiplos alvos
  curarGrupo(...alvos: UnidadeBase[]): string[] {
    const resultados: string[] = [];
    
    for (const alvo of alvos) {
      if (this.poderesCura >= 10) {
        resultados.push(this.curar(alvo, 20));
      } else {
        resultados.push(`${this.nome} não tem energia para curar ${alvo.nome}`);
      }
    }
    
    return resultados;
  }
}
```

### 🔧 Sobrecarga de Métodos (Method Overloading)

```typescript
class Engenheiro extends UnidadeBase {
  ferramentas: number;

  constructor(nome: string) {
    super(nome, 90, 40, 'Engenheiro');
    this.ferramentas = 100;
  }

  habilidadeEspecial(): string {
    return `${this.nome} constrói uma torre de defesa!`;
  }

  // Sobrecarga de métodos - diferentes assinaturas
  construir(tipo: 'torre'): string;
  construir(tipo: 'muralha', comprimento: number): string;
  construir(tipo: 'catapulta', alcance: number, dano: number): string;
  construir(tipo: string, param1?: number, param2?: number): string {
    const custoBase = 25;
    
    if (this.ferramentas < custoBase) {
      return `${this.nome} não tem ferramentas suficientes!`;
    }

    this.ferramentas -= custoBase;

    switch (tipo) {
      case 'torre':
        return `${this.nome} construiu uma torre de defesa!`;
      
      case 'muralha':
        const comprimento = param1 || 10;
        this.ferramentas -= comprimento * 2;
        return `${this.nome} construiu ${comprimento}m de muralha!`;
      
      case 'catapulta':
        const alcance = param1 || 50;
        const dano = param2 || 80;
        return `${this.nome} construiu catapulta! Alcance: ${alcance}, Dano: ${dano}`;
      
      default:
        return `${this.nome} não sabe construir ${tipo}`;
    }
  }
}
```

---

## 🔁 Classe vs Função: Quando Usar Cada Uma?

### 📊 Comparação Detalhada

| **Critério** | **Função** | **Classe** |
|--------------|------------|------------|
| **Paradigma** | Procedural/Funcional | Orientado a Objetos |
| **Estado** | Stateless (sem estado) | Stateful (com estado) |
| **Herança** | ❌ Não suporta | ✅ Herança nativa |
| **Instanciação** | Chamada direta | `new ClassName()` |
| **Encapsulamento** | ⚠️ Limitado | ✅ private, protected, public |
| **Reutilização** | ✅ Alta | ✅ Alta |
| **Complexidade** | ✅ Simples | ⚠️ Mais complexa |
| **Performance** | ✅ Mais rápida | ⚠️ Overhead de objeto |

### 🎯 Quando Usar Funções

```typescript
// ✅ Bom para: Operações simples, utilitários, transformações
function calcularDano(ataque: number, defesa: number): number {
  return Math.max(1, ataque - defesa);
}

function gerarIdUnico(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ✅ Bom para: Validações
function ehNomeValido(nome: string): boolean {
  return nome.length >= 3 && nome.length <= 20;
}

// ✅ Bom para: Transformações de dados
function formatarStatus(unidade: UnidadeBase): string {
  const status = unidade.estaVivo() ? 'Vivo' : 'Morto';
  return `${unidade.nome} (${unidade.tipo}): ${status} - Vida: ${unidade.vida}`;
}
```

### 🏗️ Quando Usar Classes

```typescript
// ✅ Bom para: Entidades com estado e comportamento complexo
class SistemaInventario {
  private itens: Map<string, number> = new Map();
  readonly capacidadeMaxima: number;

  constructor(capacidade: number = 50) {
    this.capacidadeMaxima = capacidade;
  }

  adicionarItem(item: string, quantidade: number = 1): boolean {
    const quantidadeAtual = this.itens.get(item) || 0;
    const novaQuantidade = quantidadeAtual + quantidade;
    
    if (this.obterCapacidadeUsada() + quantidade <= this.capacidadeMaxima) {
      this.itens.set(item, novaQuantidade);
      return true;
    }
    return false;
  }

  private obterCapacidadeUsada(): number {
    return Array.from(this.itens.values()).reduce((total, qty) => total + qty, 0);
  }
}
```

---

## 🎮 Analogias com RTS

### 🏗️ Estrutura de um RTS

```typescript
// 🏰 Base principal
class BaseRTS {
  nome: string;
  vida: number;
  unidades: UnidadeBase[];
  recursos: RecursosImperio;

  constructor(nome: string) {
    this.nome = nome;
    this.vida = 1000;
    this.unidades = [];
    this.recursos = new RecursosImperio();
  }

  treinarUnidade(tipo: 'Guerreiro' | 'Arqueiro' | 'Mago', nome: string): string {
    const custos = {
      'Guerreiro': { ouro: 100, comida: 50, madeira: 0 },
      'Arqueiro': { ouro: 80, comida: 30, madeira: 20 },
      'Mago': { ouro: 150, comida: 20, madeira: 10 }
    };

    const custo = custos[tipo];
    
    if (!this.recursos.gastar(custo.ouro, custo.comida, custo.madeira)) {
      return `Recursos insuficientes para treinar ${tipo}`;
    }

    let novaUnidade: UnidadeBase;
    
    switch (tipo) {
      case 'Guerreiro':
        novaUnidade = new Guerreiro(nome);
        break;
      case 'Arqueiro':
        novaUnidade = new Arqueiro(nome);
        break;
      case 'Mago':
        novaUnidade = new Mago(nome);
        break;
    }

    this.unidades.push(novaUnidade);
    return `${tipo} ${nome} foi treinado! Exército: ${this.unidades.length} unidades`;
  }

  atacarBase(baseInimiga: BaseRTS): string[] {
    const resultados: string[] = [];
    
    for (const unidade of this.unidades) {
      if (unidade.estaVivo()) {
        baseInimiga.vida -= unidade.ataque;
        resultados.push(`${unidade.nome} ataca a base! Dano: ${unidade.ataque}`);
      }
    }
    
    return resultados;
  }
}
```

---

## 💡 Boas Práticas e Padrões

### ✅ Princípios SOLID Básicos

```typescript
// 🔹 Single Responsibility Principle (SRP)
// ✅ Cada classe tem uma responsabilidade
class LogBatalha {
  private eventos: string[] = [];

  adicionarEvento(evento: string): void {
    const timestamp = new Date().toISOString();
    this.eventos.push(`[${timestamp}] ${evento}`);
  }

  obterLog(): string[] {
    return [...this.eventos]; // Retorna cópia
  }
}

// 🔹 Open/Closed Principle (OCP)
// ✅ Aberto para extensão, fechado para modificação
interface Equipamento {
  nome: string;
  aplicarBonus(unidade: UnidadeBase): void;
}

class Espada implements Equipamento {
  nome = 'Espada de Ferro';
  
  aplicarBonus(unidade: UnidadeBase): void {
    unidade.ataque += 15;
  }
}

class Armadura implements Equipamento {
  nome = 'Armadura de Couro';
  
  aplicarBonus(unidade: UnidadeBase): void {
    unidade.vida += 20;
  }
}
```

### 🎯 Composição vs Herança

```typescript
// ✅ Prefira composição quando possível
class SistemaHabilidades {
  private habilidades: Map<string, () => string> = new Map();

  adicionarHabilidade(nome: string, efeito: () => string): void {
    this.habilidades.set(nome, efeito);
  }

  usar(nome: string): string {
    const habilidade = this.habilidades.get(nome);
    return habilidade ? habilidade() : 'Habilidade não encontrada';
  }
}

class UnidadeCustomizavel extends UnidadeBase {
  private sistemaHabilidades: SistemaHabilidades;

  constructor(nome: string, vida: number, ataque: number, tipo: string) {
    super(nome, vida, ataque, tipo);
    this.sistemaHabilidades = new SistemaHabilidades();
  }

  habilidadeEspecial(): string {
    return this.sistemaHabilidades.usar('especial');
  }

  aprenderHabilidade(nome: string, efeito: () => string): void {
    this.sistemaHabilidades.adicionarHabilidade(nome, efeito);
  }
}
```

---

## 🎯 Hora de Praticar!

**⚔️ Agora é sua vez de comandar!** Aplique todos os conceitos de POO em exercícios práticos.

👉 **[Acesse os Exercícios Práticos](./exercicios.md)**

Os exercícios estão organizados em 3 níveis de dificuldade:
- 🥉 **Iniciante:** Classes básicas e herança simples
- 🥈 **Intermediário:** Encapsulamento e métodos avançados  
- 🥇 **Avançado:** Sistema completo de batalha com polimorfismo

**💡 Dica:** Use o arquivo `exemplos.ts` para testar seus códigos!

---

## 🤓 Boas Práticas - Resumo

### ✅ Faça

1. **Use PascalCase** para nomes de classes (`MinhaClasse`)
2. **Prefira composição** sobre herança complexa
3. **Encapsule** dados sensíveis com `private`
4. **Use `protected`** para herança controlada
5. **Implemente interfaces** para contratos claros
6. **Documente** métodos públicos com TSDoc
7. **Valide parâmetros** no constructor
8. **Use `readonly`** para propriedades imutáveis
9. **Prefira métodos pequenos** e focados
10. **Teste** suas classes isoladamente

### ❌ Evite

- ❌ Herança muito profunda (máximo 3-4 níveis)
- ❌ Classes com muitas responsabilidades
- ❌ Métodos públicos demais
- ❌ Construtores complexos demais
- ❌ Dependências circulares entre classes
- ❌ Mutação direta de propriedades privadas
- ❌ Classes estáticas quando funções bastam

---

## 🎊 Parabéns, Comandante!

Você dominou a arte da liderança orientada a objetos! 🎉

Agora você comanda:
- ✅ Classes e construtores
- ✅ Herança e polimorfismo
- ✅ Encapsulamento (private, protected, public)
- ✅ Métodos e parâmetros avançados
- ✅ Composição vs herança
- ✅ Boas práticas de POO

**🚀 Próximos passos:**
1. Complete os **[Exercícios Práticos](./exercicios.md)** para liderar seu exército
2. **Próximo desafio:** Dia 03 - Generics e o Arsenal Universal! 🛡️
