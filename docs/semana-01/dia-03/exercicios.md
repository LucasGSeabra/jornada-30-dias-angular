# 🎯 Exercícios Práticos - Dia 03: Generics & Utility Types

## 🏁 Desafio Boss: "Sistema de Inventário Genérico"

### 📝 Contexto
Você é um desenvolvedor de um sistema RPG e precisa criar um inventário que pode armazenar diferentes tipos de itens (armas, armaduras, poções) usando generics e utility types.

---

## 🎮 Exercício 1: Criando Classes Genéricas

### 📋 Objetivo
Implementar uma classe `Inventario<T>` genérica que pode armazenar qualquer tipo de item.

```typescript
// TODO: Complete a interface ItemBase
interface ItemBase {
  // TODO: Adicione as propriedades obrigatórias
  id: string;
  nome: string;
  // TODO: Adicione mais propriedades (raridade, valor, etc.)
}

// TODO: Complete a classe Inventario genérica
class Inventario<T extends ItemBase> {
  private itens: T[] = [];
  private capacidadeMaxima: number;

  constructor(capacidade: number = 50) {
    // TODO: Inicialize a capacidade máxima
  }

  // TODO: Implemente o método adicionar
  adicionar(item: T): boolean {
    // TODO: Verificar se tem espaço
    // TODO: Verificar se o item já existe
    // TODO: Adicionar o item e retornar true/false
  }

  // TODO: Implemente o método remover
  remover(id: string): T | null {
    // TODO: Encontrar o item pelo ID
    // TODO: Remover da lista
    // TODO: Retornar o item removido ou null
  }

  // TODO: Implemente o método buscar
  buscar(id: string): T | undefined {
    // TODO: Encontrar e retornar o item pelo ID
  }

  // TODO: Implemente o método listarTodos
  listarTodos(): T[] {
    // TODO: Retornar cópia dos itens
  }

  // TODO: Implemente getter para estatísticas
  get estatisticas() {
    return {
      // TODO: Retornar total, capacidade, espaço livre
    };
  }
}

// TODO: Teste sua implementação
const inventarioArmas = new Inventario</* TODO: tipo da arma */>();
```

---

## 🎮 Exercício 2: Utility Types em Ação

### 📋 Objetivo
Usar Partial, Pick, Omit e Readonly para manipular tipos de personagens de anime.

```typescript
interface PersonagemAnime {
  id: number;
  nome: string;
  anime: string;
  poder: number;
  habilidades: string[];
  vida: number;
  mana: number;
  experiencia: number;
  nivel: number;
}

// TODO: Crie um tipo para atualização parcial de personagem
type AtualizarPersonagem = /* TODO: Use Partial */;

// TODO: Crie um tipo apenas com dados de combate
type StatusCombate = /* TODO: Use Pick com 'nome', 'poder', 'vida', 'mana' */;

// TODO: Crie um tipo sem dados sensíveis (remova 'experiencia' e 'nivel')
type PersonagemPublico = /* TODO: Use Omit */;

// TODO: Crie um tipo imutável
type PersonagemImutavel = /* TODO: Use Readonly */;

// TODO: Implemente a função de atualização
function atualizarPersonagem(
  id: number, 
  updates: AtualizarPersonagem
): void {
  // TODO: Simular atualização do personagem
  console.log(`Atualizando personagem ${id}:`, updates);
}

// TODO: Implemente função para exibir status de combate
function exibirStatusCombate(status: StatusCombate): void {
  // TODO: Exibir informações de combate formatadas
}

// TODO: Teste suas implementações
const goku: PersonagemAnime = {
  // TODO: Preencha todos os dados do Goku
};

// TODO: Use a função de atualização
atualizarPersonagem(1, { /* TODO: atualizar apenas o poder */ });

// TODO: Use a função de status
exibirStatusCombate(/* TODO: usar Pick no goku */);
```

---

## 🎮 Exercício 3: Funções Genéricas

### 📋 Objetivo
Criar funções genéricas para manipular listas de qualquer tipo.

```typescript
// TODO: Implemente uma função genérica para filtrar arrays
function filtrar<T>(
  lista: T[],
  predicado: (item: T) => boolean
): T[] {
  // TODO: Filtrar a lista usando o predicado
}

// TODO: Implemente uma função genérica para mapear arrays
function mapear<TInput, TOutput>(
  lista: TInput[],
  transformador: (item: TInput) => TOutput
): TOutput[] {
  // TODO: Transformar cada item da lista
}

// TODO: Implemente uma função genérica para buscar item
function buscarPrimeiro<T>(
  lista: T[],
  predicado: (item: T) => boolean
): T | undefined {
  // TODO: Encontrar o primeiro item que satisfaz o predicado
}

// TODO: Implemente uma função genérica para ordenar
function ordenar<T>(
  lista: T[],
  comparador: (a: T, b: T) => number
): T[] {
  // TODO: Ordenar a lista usando o comparador
}

// Dados para teste
const animes = [
  { nome: "Naruto", episodios: 720, nota: 8.5 },
  { nome: "One Piece", episodios: 1000, nota: 9.2 },
  { nome: "Bleach", episodios: 366, nota: 8.8 }
];

// TODO: Teste as funções genéricas
const animesLongos = filtrar(animes, /* TODO: anime => anime.episodios > 500 */);

const nomesAnimes = mapear(animes, /* TODO: anime => anime.nome */);

const melhorAnime = buscarPrimeiro(animes, /* TODO: anime => anime.nota > 9 */);

const animesOrdenados = ordenar(animes, /* TODO: (a, b) => b.nota - a.nota */);

console.log("Animes longos:", animesLongos);
console.log("Nomes:", nomesAnimes);
console.log("Melhor anime:", melhorAnime);
console.log("Ordenados por nota:", animesOrdenados);
```

---

## 🎮 Exercício 4: Repository Pattern Simples

### 📋 Objetivo
Criar um repository genérico simples para gerenciar dados em memória.

```typescript
// TODO: Complete a interface Entity
interface Entity {
  // TODO: Adicione a propriedade id obrigatória
}

// TODO: Complete a classe Repository genérica
class Repository<T extends Entity> {
  private dados: T[] = [];
  private proximoId: number = 1;

  // TODO: Implemente o método criar
  criar(dadosItem: Omit<T, 'id'>): T {
    // TODO: Gerar ID automaticamente
    // TODO: Criar o item completo
    // TODO: Adicionar aos dados
    // TODO: Retornar o item criado
  }

  // TODO: Implemente o método buscarTodos
  buscarTodos(): T[] {
    // TODO: Retornar cópia dos dados
  }

  // TODO: Implemente o método buscarPorId
  buscarPorId(id: number): T | undefined {
    // TODO: Encontrar item pelo ID
  }

  // TODO: Implemente o método atualizar
  atualizar(id: number, updates: Partial<Omit<T, 'id'>>): T | null {
    // TODO: Encontrar o item
    // TODO: Atualizar as propriedades
    // TODO: Retornar item atualizado ou null
  }

  // TODO: Implemente o método deletar
  deletar(id: number): boolean {
    // TODO: Encontrar índice do item
    // TODO: Remover da lista
    // TODO: Retornar true/false
  }
}

// TODO: Crie interface para Anime
interface Anime extends Entity {
  // TODO: Adicione propriedades do anime
}

// TODO: Teste o repository
const animeRepo = new Repository<Anime>();

// TODO: Criar alguns animes
const naruto = animeRepo.criar({
  // TODO: dados do Naruto (sem ID)
});

// TODO: Testar busca, atualização e deleção
```

---

## � Exercício 5: Sistema de Cache Genérico

### � Objetivo
Implementar um sistema de cache que funciona com qualquer tipo de dados.

```typescript
// TODO: Complete a interface CacheEntry
interface CacheEntry<T> {
  // TODO: Adicione propriedades (data, timestamp, ttl)
}

// TODO: Complete a classe Cache genérica
class Cache<TKey, TValue> {
  private storage: Map<TKey, CacheEntry<TValue>> = new Map();
  private readonly TTL_PADRAO = 5 * 60 * 1000; // 5 minutos

  // TODO: Implemente o método set
  set(chave: TKey, valor: TValue, ttl?: number): void {
    // TODO: Criar entrada do cache
    // TODO: Armazenar no Map
  }

  // TODO: Implemente o método get
  get(chave: TKey): TValue | null {
    // TODO: Buscar entrada
    // TODO: Verificar se expirou
    // TODO: Retornar valor ou null
  }

  // TODO: Implemente o método has
  has(chave: TKey): boolean {
    // TODO: Verificar se existe e não expirou
  }

  // TODO: Implemente o método delete
  delete(chave: TKey): boolean {
    // TODO: Remover do storage
  }

  // TODO: Implemente o método cleanup
  cleanup(): number {
    // TODO: Remover entradas expiradas
    // TODO: Retornar quantidade removida
  }
}

// TODO: Teste o cache
const cacheAnimes = new Cache<number, Anime>();

// TODO: Adicionar dados ao cache
cacheAnimes.set(1, /* TODO: dados do anime */, 10000); // 10 segundos

// TODO: Buscar do cache
const animeCache = cacheAnimes.get(1);
console.log("Do cache:", animeCache);

// TODO: Testar expiração (aguardar 11 segundos e buscar novamente)
```

---

## � Desafio Final: Integração Completa

### � Objetivo
Combinar todos os conceitos em um sistema completo de gerenciamento.

```typescript
// TODO: Criar um sistema que combine:
// 1. Inventário genérico
// 2. Repository com cache
// 3. Utility types para transformações
// 4. Funções genéricas para operações

class SistemaGerenciamento<T extends Entity> {
  private repository: Repository<T>;
  private cache: Cache<number, T>;
  private inventario: Inventario<T>;

  constructor() {
    // TODO: Inicializar componentes
  }

  // TODO: Método para buscar com cache
  async buscarComCache(id: number): Promise<T | null> {
    // TODO: Verificar cache primeiro
    // TODO: Se não estiver, buscar do repository
    // TODO: Adicionar ao cache
    // TODO: Retornar resultado
  }

  // TODO: Método para adicionar ao inventário e persistir
  adicionarItem(dadosItem: Omit<T, 'id'>): T {
    // TODO: Criar no repository
    // TODO: Adicionar ao inventário
    // TODO: Cachear
    // TODO: Retornar item
  }

  // TODO: Métodos de busca e filtro usando funções genéricas
}

// TODO: Teste o sistema completo
const sistema = new SistemaGerenciamento<Anime>();
```

---

## ✅ Critérios de Avaliação

| Exercício | Conceito Principal | Pontos |
|-----------|-------------------|---------|
| **Exercício 1** | Classes Genéricas | 20 |
| **Exercício 2** | Utility Types | 20 |
| **Exercício 3** | Funções Genéricas | 20 |
| **Exercício 4** | Repository Pattern | 20 |
| **Exercício 5** | Cache Genérico | 10 |
| **Desafio Final** | Integração | 10 |

### 🎯 Dicas para Sucesso:
- Sempre use tipos explícitos nos generics
- Teste cada função com diferentes tipos
- Use constraints quando necessário (`extends`)
- Documente os métodos com JSDoc
- Mantenha o código limpo e legível

---

*� Boa sorte, jovem TypeScript ninja! 🥷*
