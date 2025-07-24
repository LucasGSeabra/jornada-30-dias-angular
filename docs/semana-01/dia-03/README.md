# 📘 Dia 03 — Itens Místicos e Reutilizáveis: Generics & Utility Types

## 🎯 Objetivo do Dia
Aprender a criar funções e classes genéricas e utilizar os Utility Types do TypeScript para manipular tipos de forma avançada — tudo com aplicações no seu mundo RTS de animes!

---

## 📚 Parte Teórica

### 🧩 O que são Generics?

Generics permitem que funções, classes e interfaces trabalhem com tipos dinâmicos, mas ainda seguros. É como ter um **baú mágico** que pode guardar qualquer tipo de item do seu inventário!

```typescript
function envolverEmCaixa<T>(item: T): { item: T } {
  return { item };
}
```

Aqui, `<T>` é um tipo genérico que será inferido ou passado ao usar a função:

```typescript
const espada = envolverEmCaixa("Zanpakuto");
// resultado: { item: string }

const nivel = envolverEmCaixa(42);
// resultado: { item: number }

const personagem = envolverEmCaixa({ nome: "Ichigo", poder: 9000 });
// resultado: { item: { nome: string, poder: number } }
```

### 🛡️ Benefícios dos Generics

- **Reutilização com segurança**: Um código que funciona para qualquer tipo
- **Tipagem flexível**: TypeScript ainda sabe que tipo você está usando
- **Evita duplicação de código**: Não precisa criar uma função para cada tipo

### 🧱 Generics em Arrays e Promises

```typescript
// Array de nomes de animes
const animes: Array<string> = ['Naruto', 'Bleach', 'One Piece'];

// Promise que retorna dados de um anime
const animeData: Promise<Anime> = fetch('/api/anime/1').then(res => res.json());

// Alternativa mais comum
const animelist: string[] = ['Attack on Titan', 'Death Note'];
```

### 🧙‍♂️ Classes Genéricas

Imagine um **inventário mágico** que pode guardar qualquer tipo de item:

```typescript
class Inventario<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
    console.log(`🎒 ${JSON.stringify(item)} adicionado ao inventário!`);
  }

  listar(): T[] {
    return [...this.itens]; // cópia defensiva
  }

  buscar(predicate: (item: T) => boolean): T | undefined {
    return this.itens.find(predicate);
  }

  remover(item: T): boolean {
    const index = this.itens.indexOf(item);
    if (index > -1) {
      this.itens.splice(index, 1);
      console.log(`🗑️ ${JSON.stringify(item)} removido do inventário!`);
      return true;
    }
    return false;
  }

  get quantidade(): number {
    return this.itens.length;
  }
}
```

**Uso da Classe Genérica:**

```typescript
// Inventário de armas
const arsenalDeArmas = new Inventario<string>();
arsenalDeArmas.adicionar("Zanpakuto");
arsenalDeArmas.adicionar("Rasengan");

// Inventário de personagens
interface Personagem {
  nome: string;
  anime: string;
  poder: number;
}

const timeDeHerois = new Inventario<Personagem>();
timeDeHerois.adicionar({ nome: "Goku", anime: "Dragon Ball", poder: 9001 });
timeDeHerois.adicionar({ nome: "Saitama", anime: "One Punch Man", poder: Infinity });

// Inventário de números (níveis)
const niveis = new Inventario<number>();
niveis.adicionar(1);
niveis.adicionar(50);
niveis.adicionar(99);
```

---

## 🧰 Utility Types

O TypeScript oferece vários utilitários nativos para criar novos tipos baseados em outros. São como **pergaminhos mágicos** que transformam tipos existentes!

### 🔧 Partial<T> - "Status Incompleto"

Torna todos os campos opcionais - perfeito para atualizações parciais:

```typescript
interface Personagem {
  nome: string;
  anime: string;
  poder: number;
  habilidades: string[];
  vida: number;
}

// Permite atualizar apenas alguns campos
type PersonagemParcial = Partial<Personagem>;

function atualizarPersonagem(id: number, updates: PersonagemParcial): void {
  // Pode receber apenas os campos que você quer atualizar
  console.log(`Atualizando personagem ${id}:`, updates);
}

// Uso
atualizarPersonagem(1, { poder: 8500 }); // ✅ Só o poder
atualizarPersonagem(2, { nome: "Vegeta", poder: 8000 }); // ✅ Nome e poder
```

### 🔍 Pick<T, K> - "Espião Seletivo"

Escolhe apenas algumas propriedades específicas:

```typescript
// Só mostra o que interessa para o combate
type StatusCombate = Pick<Personagem, 'nome' | 'poder' | 'vida'>;

function exibirStatusLuta(personagem: StatusCombate): void {
  console.log(`⚔️ ${personagem.nome} - Poder: ${personagem.poder} - Vida: ${personagem.vida}`);
}

// Só mostra informações básicas
type InfoBasica = Pick<Personagem, 'nome' | 'anime'>;

const info: InfoBasica = { nome: "Luffy", anime: "One Piece" };
```

### 🙈 Omit<T, K> - "Removedor de Segredos"

Remove campos específicos - útil para criar versões "públicas" de dados:

```typescript
// Remove informações sensíveis antes de enviar
type PersonagemPublico = Omit<Personagem, 'vida' | 'habilidades'>;

function compartilharPersonagem(personagem: Personagem): PersonagemPublico {
  const { vida, habilidades, ...dadosPublicos } = personagem;
  return dadosPublicos;
}

// Interface para criação (sem campos auto-gerados)
interface PersonagemCompleto extends Personagem {
  id: number;
  criadoEm: Date;
}

type CriarPersonagem = Omit<PersonagemCompleto, 'id' | 'criadoEm'>;
```

### 🔒 Readonly<T> - "Artefato Lendário Imutável"

Torna todas as propriedades readonly - ninguém pode alterar!

```typescript
type PersonagemImutavel = Readonly<Personagem>;

const lendario: PersonagemImutavel = {
  nome: "Saitama",
  anime: "One Punch Man",
  poder: Infinity,
  habilidades: ["Soco Sério", "Soco Consecutivo"],
  vida: 100
};

// lendario.poder = 1000; // ❌ Erro! Não pode alterar
```

### 🧩 Combinações Avançadas

Você pode compor utility types para criar transformações complexas:

```typescript
// Snapshot readonly apenas com dados essenciais
type SnapshotPersonagem = Readonly<Pick<Personagem, 'nome' | 'anime' | 'poder'>>;

// Atualização parcial sem campos perigosos
type AtualizacaoSegura = Partial<Omit<Personagem, 'vida'>>;

// Só dados mutáveis para edição
type DadosEditaveis = Omit<Personagem, 'nome' | 'anime'>;
```

---

## 🎮 Analogias com Mundo RTS/Anime

| Conceito | Analogia no Mundo Anime |
|----------|-------------------------|
| **Generic** | 🎒 Baú mágico que guarda qualquer tipo de item |
| **Partial** | 🔧 Personagem em treinamento (status incompleto) |
| **Pick** | 👁️ Espião que só vê informações específicas |
| **Omit** | 🤐 Remove segredos antes de compartilhar com aliados |
| **Readonly** | 🏺 Artefato lendário que ninguém pode alterar |

---

## 🧠 Boas Práticas

### ✅ Use Generics quando:
- O tipo muda conforme o uso
- Você quer criar containers, serviços ou repositórios reutilizáveis
- Precisa de type safety mas flexibilidade

### 📝 Nomenclatura Clara:
```typescript
// ❌ Genérico demais
function processar<T, U, V>(a: T, b: U): V { ... }

// ✅ Descritivo
function converterDados<TInput, TOutput>(dados: TInput): TOutput { ... }
function criarRepositorio<TEntity>(config: Config): Repository<TEntity> { ... }
```

### 🎯 Constraints (Restrições):
```typescript
// Garante que T tem uma propriedade 'nome'
function buscarPorNome<T extends { nome: string }>(lista: T[], nome: string): T | undefined {
  return lista.find(item => item.nome === nome);
}
```

---

## 🚀 Missão do Dia: "Transforme sua mochila em um artefato mágico genérico!"

Sua missão é criar um sistema de inventário completo usando Generics e Utility Types. Vamos implementar isso no contexto da nossa aplicação de animes!

### 📋 Checklist da Missão:
- [ ] Criar classe genérica `Inventario<T>`
- [ ] Implementar interfaces usando Utility Types
- [ ] Criar funções genéricas para manipulação de dados
- [ ] Aplicar na aplicação de animes
- [ ] Testar com diferentes tipos de dados

---

## 🔧 Configuração Extra: Angular na Prática

Agora que você dominou Generics & Utility Types, que tal aplicar isso em uma aplicação Angular real?

📄 **[Guia de Configuração Angular](./configuracao-angular.md)**

Neste guia você encontra:
- 🏗️ Como configurar AppModule vs Standalone Components
- 🛣️ Configuração de rotas para renderizar componentes
- 🎨 Exemplo prático: App de Lista de Animes
- 🚨 Troubleshooting de problemas comuns
- 🎯 Como aplicar seus tipos TypeScript no Angular

---

*Prepare-se para dominar os poderes místicos dos tipos genéricos! 🧙‍♂️✨*
