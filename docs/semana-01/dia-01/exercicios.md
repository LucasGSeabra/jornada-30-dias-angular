# 🎯 Exercícios Práticos - Derrote o Boss Any!

> **📋 Instruções Gerais**
> 
> - Complete todos os exercícios no arquivo `exemplos.ts` do mesmo diretório
> - Use as interfaces e tipos já criados como base
> - Teste seu código executando:
>   ```bash
>   # 🚀 Método Fácil (na raiz do projeto):
>   npm run exemplos:dia01
>   ```
> - **Dica:** Consulte o arquivo `derrote-o-boss-any.md` sempre que tiver dúvidas!

---

## 🥉 Nível Iniciante

### 1. Tipos Primitivos e Básicos

Declare variáveis usando todos os tipos primitivos do TypeScript:

```typescript
// Complete as declarações com os tipos corretos
let nomeHeroi: /* tipo */ = "Aragorn";
let pontuacao: /* tipo */ = 1500;
let jogoAtivo: /* tipo */ = true;
let dadosCarregados: /* tipo */ = null;
let configuracao: /* tipo */ = undefined;

// Crie um objeto literal com type annotation
let estatisticas: /* tipo do objeto */ = {
  vitorias: 10,
  derrotas: 2,
  empates: 1
};

// Crie um array tipado
let habilidades: /* tipo do array */ = ["Tiro Certeiro", "Invisibilidade", "Cura"];
```

### 2. Crie uma interface `Arma`

Crie uma interface que represente uma arma de um RPG com as seguintes propriedades:

```typescript
interface Arma {
  // Preencha aqui!
}
```

**Requisitos:**
- `nome: string` - Nome da arma
- `dano: number` - Pontos de dano
- `tipo: 'espada' | 'arco' | 'cajado'` - Tipo usando literal types
- `durabilidade?: number` - Propriedade opcional para durabilidade

**Exemplo de uso:**
```typescript
const espadaLendaria: Arma = {
  nome: "Excalibur",
  dano: 150,
  tipo: "espada",
  durabilidade: 100
};
```

### 3. Declare variáveis com type annotation explícita

Declare as seguintes variáveis com tipos explícitos:

```typescript
// Declare aqui
const nomeJogador: /* tipo */ = "GamerPro";
const nivel: /* tipo */ = 42;
const statusOnline: /* tipo */ = true;
```

### 3.1. **NOVO:** Pratique Type Inference vs Annotation

Compare e explique a diferença entre estas declarações:

```typescript
// Type Annotation (explícito)
let pontosComAnnotation: number = 100;
let nomeComAnnotation: string = "Herói";

// Type Inference (automático) 
let pontosInferidos = 100;       // O que o TS infere?
let nomeInferido = "Herói";      // O que o TS infere?

// Quando usar cada um? Documente sua resposta:
// Annotation: ______________________
// Inference: _______________________
```

---

## 🥈 Nível Intermediário

### 4. Estenda a interface PersonagemRTS

Use a interface `PersonagemRTS` já criada no `exemplos.ts` e crie uma nova versão estendida:

```typescript
interface PersonagemRTSAvancado extends PersonagemRTS {
  // Adicione aqui:
  // - Array de habilidades (string[])
  // - Inventário de armas (Arma[])
  // - Status atual usando literal types ('vivo' | 'ferido' | 'morto')
}
```

**Teste criando um personagem:**
```typescript
const heroi: PersonagemRTSAvancado = {
  // Preencha todas as propriedades
};
```

### 5. Crie um enum para tipos de terreno

Crie um enum que represente diferentes tipos de terreno de um mapa:

```typescript
enum TipoTerreno {
  // Adicione: GRAMA, AGUA, MONTANHA, DESERTO, FLORESTA
}
```

**Use o enum:**
```typescript
const terreno: TipoTerreno = TipoTerreno./* complete */;
```

### 5.1. **NOVO:** Readonly Properties em Interfaces

Crie uma interface para configurações de jogo que não podem ser alteradas:

```typescript
interface ConfiguracaoJogo {
  // Adicione propriedades readonly:
  // - id: number (readonly)
  // - versao: string (readonly)  
  // - dataCriacao: Date (readonly)
  // - nomeJogo: string (pode alterar)
  // - configuracoes: object (pode alterar)
}

const config: ConfiguracaoJogo = {
  // Preencha aqui
};

// Teste: tente alterar uma propriedade readonly (deve dar erro)
// config.id = 2; // ❌ Erro esperado
```

---

## 🥇 Nível Avançado

### 6. Sistema de Inventário Completo

Implemente um sistema de inventário usando type alias, interfaces e funções tipadas:

#### Parte A: Defina os tipos

```typescript
// Type alias para diferentes tipos de itens
type TipoItem = 'arma' | 'armadura' | 'pocao' | 'material';

// Interface para um item genérico
interface Item {
  id: number;
  nome: string;
  tipo: TipoItem;
  valor: number;
  quantidade: number;
}

// Interface para um slot do inventário
interface SlotInventario {
  posicao: number;
  item?: Item; // Opcional - slot pode estar vazio
  bloqueado: boolean;
}
```

#### Parte B: Implemente as funções

```typescript
// Função para adicionar item ao inventário
function adicionarItem(
  inventario: SlotInventario[],
  item: Item
): SlotInventario[] {
  // Implemente aqui
  // Encontre um slot vazio e adicione o item
  return inventario;
}

// Função para remover item do inventário
function removerItem(
  inventario: SlotInventario[],
  posicao: number
): SlotInventario[] {
  // Implemente aqui
  // Remove o item da posição especificada
  return inventario;
}

// Função para buscar item por nome
function buscarItem(
  inventario: SlotInventario[],
  nome: string
): Item | undefined {
  // Implemente aqui
  // Retorna o primeiro item encontrado com o nome especificado
}
```

#### Parte C: Teste o sistema

```typescript
// Crie um inventário inicial
const meuInventario: SlotInventario[] = [
  { posicao: 0, bloqueado: false },
  { posicao: 1, bloqueado: false },
  { posicao: 2, bloqueado: true },
  // ... adicione mais slots
];

// Teste adicionar itens
const pocaoVida: Item = {
  id: 1,
  nome: "Poção de Vida",
  tipo: "pocao",
  valor: 50,
  quantidade: 3
};

// Teste suas funções aqui
```

---

## 🧪 Exercícios Bônus

### 7. Refatoração Anti-Any

**Encontre e corrija** os problemas neste código cheio de `any`:

```typescript
// ❌ Código com problemas
function processarDados(dados: any): any {
  if (dados.tipo === "usuario") {
    return {
      nome: dados.nome,
      idade: dados.idade,
      email: dados.email
    };
  }
  return null;
}

const resultado: any = processarDados({
  tipo: "usuario",
  nome: "João",
  idade: 25,
  email: "joao@email.com"
});
```

**Sua missão:** Reescreva usando tipos apropriados!

### 8. Desafio Unknown vs Any

**Complete** este código usando `unknown` e type guards:

```typescript
function processarValorDesconhecido(valor: unknown): string {
  // Use type guards para verificar o tipo
  // Retorne uma descrição do valor
  // Exemplo: se for string, retorne "Texto: [valor]"
  // Se for number, retorne "Número: [valor]"
  // Se for boolean, retorne "Booleano: [valor]"
  // Caso contrário, retorne "Tipo desconhecido"
}
```

### 9. **NOVO:** Type Guards Avançados

Crie type guards customizados para validação de dados:

```typescript
// Crie um type guard para verificar se um valor é PersonagemRTS
function isPersonagemRTS(valor: unknown): valor is PersonagemRTS {
  // Implemente a validação completa
  // Verifique todas as propriedades obrigatórias
  // Retorne true apenas se for um PersonagemRTS válido
}

// Crie um type guard para verificar se é um array de strings
function isArrayOfStrings(valor: unknown): valor is string[] {
  // Implemente aqui
}

// Teste seus type guards
const dadoDesconhecido: unknown = {
  nome: "Teste",
  classe: "arqueiro",
  vida: 100,
  ataque: 50,
  id: 1
};

if (isPersonagemRTS(dadoDesconhecido)) {
  console.log(`Personagem válido: ${dadoDesconhecido.nome}`);
}
```

---

## 📝 Lista de Verificação

Após completar os exercícios, verifique se você consegue:

- [ ] **Tipos Primitivos**: Declarar variáveis com string, number, boolean, null, undefined
- [ ] **Objetos e Arrays**: Tipar objetos literais e arrays corretamente
- [ ] **Type Annotation vs Inference**: Saber quando usar cada abordagem
- [ ] **Interfaces**: Criar interfaces para modelar objetos complexos
- [ ] **Literal Types**: Usar tipos literais para restringir valores específicos
- [ ] **Union Types**: Combinar múltiplos tipos com `|`
- [ ] **Propriedades Opcionais**: Usar `?` para propriedades não obrigatórias
- [ ] **Propriedades Readonly**: Usar `readonly` para dados imutáveis
- [ ] **Enums**: Criar enumerações para constantes relacionadas
- [ ] **Type Alias**: Criar aliases para tipos complexos
- [ ] **Extensão de Interfaces**: Usar `extends` para herança de interfaces
- [ ] **Evitar `any`**: Substituir `any` por tipos específicos ou `unknown`
- [ ] **Type Guards**: Implementar verificações de tipo personalizadas
- [ ] **Funções Tipadas**: Tipar parâmetros e retorno de funções corretamente

---

## 🆘 Dicas e Ajuda

### Se você estiver com dificuldades:

1. **Consulte** o arquivo `derrote-o-boss-any.md` para revisar os conceitos
2. **Execute** o código frequentemente para ver os erros do TypeScript
3. **Use** o autocomplete do VS Code (Ctrl+Space) para ver as opções disponíveis
4. **Lembre-se:** O TypeScript está aí para te ajudar, não para atrapalhar!

### Erros comuns:

- **Esquecer de adicionar `?`** em propriedades opcionais
- **Usar `any`** quando um tipo específico seria melhor
- **Não inicializar** propriedades obrigatórias
- **Confundir** interface com type alias

---

## 🎉 Parabéns!

Ao completar estes exercícios, você terá dominado os fundamentos da tipagem em TypeScript!

**Próximo passo:** Dia 02 - Classes, Herança e o exército SOLID! ⚔️

---

> **💡 Lembre-se:** A prática leva à perfeição. Não hesite em experimentar e criar seus próprios exemplos!
