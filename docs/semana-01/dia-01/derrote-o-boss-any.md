# 📘 Dia 01 — Derrote o Boss Any!

> "O tipo any é como um inimigo disfarçado — parece facilitar sua vida, mas esconde os bugs que vão te atacar depois."

## 🧠 Tema: Tipos Básicos, Type Annotation & Interfaces

---

## 📚 Parte Teórica

### 🟦 Tipos Primitivos

| Tipo        | Exemplo             | Descrição                    |
|-------------|---------------------|------------------------------|
| `string`    | `"Anna"`            | Texto                        |
| `number`    | `42`, `3.14`        | Números inteiros e decimais  |
| `boolean`   | `true`, `false`     | Verdadeiro ou falso          |
| `null`      | `null`              | Valor nulo                   |
| `undefined` | `undefined`         | Valor não definido           |

```typescript
let nome: string = "Anna";
let idade: number = 30;
let ativo: boolean = true;
```

---

## 🔍 Type Annotation vs Inference

### 📝 Type Annotation (Explícito)
Quando você declara o tipo explicitamente:

```typescript
let pontos: number = 10;
let nomeHeroi: string = "Aragorn";
let vivo: boolean = true;
```

### 🧠 Type Inference (Automático)
O TypeScript deduz o tipo automaticamente:

```typescript
let pontos = 10;           // TS infere number
let nomeHeroi = "Aragorn"; // TS infere string
let vivo = true;           // TS infere boolean
```

> **💡 Dica:** Use annotation para deixar o código mais legível e explícito, especialmente em funções e objetos complexos.

---

## ⚠️ O Perigo do `any`

### ☠️ Por que `any` é perigoso?

O `any` é o tipo que **desliga o TypeScript** — você perde o benefício da verificação de tipos.

```typescript
// ❌ PERIGOSO - Evite any
let dadosUsuario: any = "texto";
dadosUsuario = 123;                    // ok, mas perigoso
dadosUsuario.metodoQueNaoExiste();     // compila mas quebra em runtime
```

### ✅ Use `unknown` como alternativa

```typescript
// ✅ SEGURO - Use unknown
let dadosDesconhecidos: unknown = "algum valor";

// Precisa verificar o tipo antes de usar
if (typeof dadosDesconhecidos === "string") {
  console.log(dadosDesconhecidos.toUpperCase()); // ✅ Seguro
}
```

---

## 🥊 any vs unknown — Quem ganha?

### 🟥 any — O tipo que desliga o TypeScript

Quando você usa `any`, está dizendo:
> "Confia em mim, TypeScript. Eu sei o que estou fazendo."

E o TypeScript responde:
> "Tá bom então..." 😶

**Problema:** com `any`, o TypeScript não verifica mais nada. Você perde completions, segurança, validação... vira JavaScript puro.

```typescript
let coisa: any = "Texto";
coisa.toUpperCase();      // ok
coisa.nãoExiste();        // também ok 😱
coisa.qualquerCoisa.outra.propriedade; // tudo "funciona"
```

### 🟦 unknown — O tipo cauteloso

Já o `unknown` é o tipo que diz:
> "Eu não sei ainda o que isso é. Você vai ter que me provar."

Ele **exige checagem de tipo** antes do uso. E isso é uma bênção! 🙏

```typescript
let coisa: unknown = "Texto";

// coisa.toUpperCase(); // ❌ Erro: Object is of type 'unknown'

// ✅ Checagem de tipo necessária
if (typeof coisa === "string") {
  coisa.toUpperCase(); // ✅ Agora funciona e é seguro!
}
```

### 📊 Comparação Completa

| **Critério**           | **any** | **unknown** |
|------------------------|---------|-------------|
| 🛡️ **Segurança**      | ❌ Nenhuma | ✅ Alta |
| 🔍 **Controle de tipos** | ❌ Não exige | ✅ Sim |
| 💡 **IntelliSense**    | ❌ Perde | ✅ Mantém |
| 🔄 **Refatoração segura** | ❌ Complica | ✅ Ajuda |
| 🐛 **Debug e manutenção** | ❌ Traz bugs | ✅ Previne erros |
| ⚡ **Velocidade inicial** | ✅ Rápida | ⚠️ Mais código |

### 💡 Quando usar `unknown`?

1. **Valores de APIs externas:**
```typescript
async function fetchUser(): Promise<unknown> {
  const response = await fetch('/api/user');
  return response.json(); // Não sabemos o formato ainda
}

function processUser(userData: unknown) {
  if (typeof userData === 'object' && userData !== null && 'name' in userData) {
    console.log(`Nome: ${(userData as any).name}`);
  }
}
```

2. **Input do usuário:**
```typescript
function handleInput(dado: unknown) {
  if (typeof dado === "number") {
    console.log(`Dobro: ${dado * 2}`);
  } else if (typeof dado === "string") {
    console.log(`Maiúsculo: ${dado.toUpperCase()}`);
  } else {
    console.log("Tipo não suportado");
  }
}
```

3. **JSON.parse() e dados dinâmicos:**
```typescript
function parseConfig(jsonString: string): unknown {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

function useConfig(config: unknown) {
  if (
    typeof config === 'object' && 
    config !== null && 
    'apiUrl' in config &&
    typeof (config as any).apiUrl === 'string'
  ) {
    // Agora podemos usar config.apiUrl com segurança
    console.log(`API URL: ${(config as any).apiUrl}`);
  }
}
```

### 🎯 Técnicas para trabalhar com `unknown`

#### 1. **Type Guards (Guardas de Tipo)**
```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isPersonagem(value: unknown): value is PersonagemRTS {
  return (
    typeof value === 'object' &&
    value !== null &&
    'nome' in value &&
    'classe' in value &&
    'vida' in value
  );
}

// Uso
const dadoDesconhecido: unknown = { nome: "Legolas", classe: "arqueiro", vida: 100 };

if (isPersonagem(dadoDesconhecido)) {
  // Agora TypeScript sabe que é PersonagemRTS
  console.log(dadoDesconhecido.nome); // ✅ Seguro!
}
```

#### 2. **Assertion com validação**
```typescript
function processarPersonagem(data: unknown) {
  // Primeiro validamos
  if (
    typeof data === 'object' && 
    data !== null &&
    'nome' in data &&
    'vida' in data
  ) {
    // Depois fazemos assertion consciente
    const personagem = data as PersonagemRTS;
    console.log(`${personagem.nome} tem ${personagem.vida} de vida`);
  }
}
```

### 📜 Conclusão Raiz

> **any é a gambiarra da pressa.**  
> **unknown é o escudo da consciência.**

#### ✅ **Regras de Ouro:**

1. **Use `any` apenas em último caso** - quando não tiver jeito, documente e isole
2. **Prefira `unknown`** quando estiver lidando com valores incertos
3. **`unknown` exige validação** - o que te protege de erros bobos lá na frente
4. **Migração gradual** - substitua `any` por `unknown` + validação aos poucos

#### 🚨 **Quando `any` pode ser aceitável:**
- Migrando código JavaScript legado (temporariamente)
- Bibliotecas terceiras sem tipagem
- Protótipos rápidos (mas mude depois!)
- APIs complexas que você não controla (com TODO para melhorar)

```typescript
// ❌ Evite
let data: any = await fetch('/api').then(r => r.json());

// ✅ Melhor
let data: unknown = await fetch('/api').then(r => r.json());

// 🏆 Ideal
interface ApiResponse {
  users: User[];
  total: number;
}
let data: ApiResponse = await fetch('/api').then(r => r.json());
```

---

## 🔑 Union Types & Literal Types

### 🔗 Union Types
Permite múltiplos tipos:

```typescript
let id: string | number = "user123";
id = 456; // ✅ Também aceita number

function processarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID numérico: ${id * 2}`);
  }
}
```

### 📌 Literal Types
Define valores específicos:

```typescript
type Status = 'ativo' | 'inativo' | 'morto';
type Direcao = 'norte' | 'sul' | 'leste' | 'oeste';

let statusPersonagem: Status = 'ativo';  // ✅
// statusPersonagem = 'fugindo';         // ❌ Erro de compilação
```

---

## 🛡️ Type Alias vs Interface

### 🏷️ Type Alias
Use para tipos compostos, union e literais:

```typescript
type Guerreiro = {
  nome: string;
  arma: string;
  classe: 'arqueiro' | 'mago' | 'guerreiro';
};

type ID = string | number;
type StatusJogo = 'pausado' | 'jogando' | 'game-over';
```

### 🏗️ Interface
Use para modelar objetos e entidades:

```typescript
interface IGuerreiro {
  nome: string;
  arma: string;
}

// ✅ Interface pode ser estendida
interface IGuerreiroAvancado extends IGuerreiro {
  nivel: number;
  habilidades: string[];
  experiencia: number;
}
```

### 🆚 Quando usar cada um?

| **Type Alias**              | **Interface**                |
|------------------------------|------------------------------|
| ✅ Union types              | ✅ Objetos e entidades       |
| ✅ Intersection types       | ✅ Extensão (extends)        |
| ✅ Tipos primitivos         | ✅ Declaration merging       |
| ✅ Tipos computados         | ✅ Classes e implementação   |

---

## 🧩 Propriedades Especiais

### ❓ Optional Properties
Use `?` para propriedades opcionais:

```typescript
interface Personagem {
  nome: string;
  classe?: string;        // opcional
  vida: number;
  mana?: number;          // opcional
}

const heroi: Personagem = {
  nome: "Legolas",
  vida: 100
  // classe e mana são opcionais
};
```

### 🔒 Readonly Properties
Use `readonly` para propriedades imutáveis:

```typescript
interface PersonagemImutavel {
  readonly id: number;       // não pode ser alterado
  readonly criadoEm: Date;   // não pode ser alterado
  nome: string;              // pode ser alterado
}

const personagem: PersonagemImutavel = {
  id: 1,
  criadoEm: new Date(),
  nome: "Gandalf"
};

// personagem.id = 2; // ❌ Erro - readonly
personagem.nome = "Gandalf, o Cinzento"; // ✅ OK
```

---

## 🎯 Enums

### 🔢 Enum Numérico
```typescript
enum Classe {
  Arqueiro,    // 0
  Mago,        // 1
  Guerreiro,   // 2
}

let minhaClasse = Classe.Mago; // 1
```

### 📝 Enum String (Recomendado)
```typescript
enum ClasseString {
  Arqueiro = "ARQUEIRO",
  Mago = "MAGO",
  Guerreiro = "GUERREIRO",
}

let classeEscolhida = ClasseString.Arqueiro; // "ARQUEIRO"
```

---

## 🧙 Exemplo Prático: Sistema RTS

### 🏗️ Interface Principal

```typescript
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
```

### ⚔️ Funções Utilitárias

```typescript
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
    guerreiro: { vida: 120, ataque: 70, defesa: 40 }
  };

  return {
    id: Math.floor(Math.random() * 1000),
    nome,
    classe,
    ...statsBase[classe]
  };
}

/**
 * Verifica se personagem está vivo
 */
function estaVivo(personagem: PersonagemRTS): boolean {
  return personagem.vida > 0;
}
```

---

## 🎮 Exemplos de Uso

```typescript
// Criando personagens
const legolas = criarPersonagem("Legolas", "arqueiro");
const gandalf = criarPersonagem("Gandalf", "mago");
const aragorn = criarPersonagem("Aragorn", "guerreiro");

// Calculando dano
const danoLegolas = calcularDano(legolas);   // 70
const danoGandalf = calcularDano(gandalf);   // 90
const danoAragorn = calcularDano(aragorn);   // 30

// Verificando status
console.log(`${legolas.nome} causa ${danoLegolas} de dano`);
console.log(`${gandalf.nome} está vivo: ${estaVivo(gandalf)}`);

// Simulando batalha
function simularBatalha(atacante: PersonagemRTS, defensor: PersonagemRTS): string {
  const dano = calcularDano(atacante);
  defensor.vida -= dano;
  
  if (estaVivo(defensor)) {
    return `${atacante.nome} causou ${dano} de dano em ${defensor.nome}`;
  } else {
    return `${atacante.nome} derrotou ${defensor.nome}!`;
  }
}
```

---

## 🎯 Hora de Praticar!

**💪 Agora é sua vez!** Coloque em prática tudo que aprendeu com exercícios especialmente criados para reforçar os conceitos.

👉 **[Acesse os Exercícios Práticos](./exercicios.md)**

Os exercícios estão organizados em 3 níveis de dificuldade:
- � **Iniciante:** Interfaces básicas e declarações de variáveis
- 🥈 **Intermediário:** Extensão de interfaces e enums  
- 🥇 **Avançado:** Sistema completo de inventário com type alias e funções tipadas

**💡 Dica:** Use o arquivo `exemplos.ts` para testar seus códigos!

---

## 🤓 Boas Práticas - Resumo

### ✅ Faça

1. **Evite `any`** — sempre prefira tipagem explícita
2. **Use `interface`** para modelar objetos e entidades  
3. **Use `type`** para tipos compostos, union e literais
4. **Declare tipos** em funções públicas sempre
5. **Use `readonly`** para propriedades imutáveis
6. **Use `?`** para propriedades opcionais
7. **Prefira `unknown`** ao invés de `any` quando o tipo for desconhecido
8. **Use enums** para constantes relacionadas
9. **Documente** seus tipos com comentários TSDoc
10. **Lembre-se:** Tipos = documentação + segurança de código

### ❌ Evite

- ❌ `any` em qualquer lugar
- ❌ Tipos muito genéricos
- ❌ Interfaces vazias
- ❌ Enums numéricos quando strings são mais claras
- ❌ Type annotation desnecessária em valores óbvios

---

## 🎊 Parabéns!

Você derrotou o Boss Any! 🎉

Agora você domina:
- ✅ Tipos básicos do TypeScript
- ✅ Diferença entre annotation e inference  
- ✅ Union e literal types
- ✅ Interfaces vs Type alias
- ✅ Propriedades opcionais e readonly
- ✅ Boas práticas de tipagem

**🚀 Próximos passos:**
1. Complete os **[Exercícios Práticos](./exercicios.md)** para fixar o aprendizado
2. **Próximo desafio:** Dia 02 - Classes, Herança e o exército SOLID! ⚔️
