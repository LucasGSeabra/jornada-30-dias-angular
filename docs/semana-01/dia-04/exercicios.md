# 📚 Exercícios do Dia 04 - Revisão TypeScript & Iniciando Angular

## 🎯 Objetivo
Consolidar conhecimentos de TypeScript e dar os primeiros passos no Angular com um projeto prático de quiz.

## 🏋️ **Exercício 1: Quiz de Revisão TypeScript** ⭐

### 📋 Tarefa:
Crie uma interface `PerguntaQuiz` para estruturar as perguntas do quiz de revisão.

### 🎯 Requisitos:
```typescript
interface PerguntaQuiz {
  id: number;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
  categoria: 'tipos' | 'classes' | 'generics' | 'utility-types';
}
```

### ✅ Teste:
```typescript
const pergunta: PerguntaQuiz = {
  id: 1,
  pergunta: "Qual a diferença entre 'any' e 'unknown'?",
  opcoes: ["Não há diferença", "unknown é type-safe", "any é mais rápido"],
  respostaCorreta: 1,
  explicacao: "unknown requer verificação de tipo antes do uso",
  categoria: "tipos"
};
```

---

## 🏋️ **Exercício 2: Sistema de Pontuação** ⭐

### 📋 Tarefa:
Crie uma classe `GerenciadorQuiz` para controlar o quiz.

### 🎯 Requisitos:
```typescript
class GerenciadorQuiz {
  private pontuacao: number = 0;
  private perguntaAtual: number = 0;
  
  constructor(private perguntas: PerguntaQuiz[]) {}
  
  responderPergunta(resposta: number): boolean {
    // Verificar resposta e atualizar pontuação
  }
  
  proximaPergunta(): PerguntaQuiz | null {
    // Avançar para próxima pergunta
  }
  
  obterResultadoFinal(): string {
    // Calcular e retornar resultado
  }
}
```

---

## ⚡ **Exercício 3: Preparando para Angular** ⭐⭐

### 📋 Tarefa:
Instale o Angular CLI e crie seu primeiro projeto.

### 🎯 Comandos:
```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Verificar instalação
ng version

# Criar novo projeto
ng new quiz-typescript --routing=true --style=css

# Navegar para o projeto
cd quiz-typescript

# Servir aplicação
ng serve
```

### ✅ Resultado:
- Aplicação rodando em http://localhost:4200
- Estrutura de projeto Angular criada

---

## ⚡ **Exercício 4: Explorando a Estrutura Angular** ⭐⭐

### 📋 Tarefa:
Analise e documente a estrutura do projeto Angular criado.

### 🎯 Arquivos importantes:
```
src/
├── app/
│   ├── app.component.ts     # ← O que faz?
│   ├── app.component.html   # ← O que faz?
│   ├── app.component.css    # ← O que faz?
│   └── app.module.ts        # ← O que faz?
├── main.ts                  # ← O que faz?
├── index.html              # ← O que faz?
└── styles.css              # ← O que faz?
```

### ✅ Tarefa:
Crie um arquivo `ESTRUTURA.md` documentando cada arquivo.

---

## 🛠️ **Exercício 5: Primeiro Componente Angular** ⭐⭐⭐

### 📋 Tarefa:
Crie um componente para o quiz TypeScript.

### 🎯 Comando:
```bash
ng generate component quiz-typescript
# ou
ng g c quiz-typescript
```

### 🎯 Requisitos:
- Componente deve exibir uma pergunta
- Mostrar opções de resposta
- Indicar se resposta está correta

---

## 🛠️ **Exercício 6: Data Binding Básico** ⭐⭐⭐

### 📋 Tarefa:
Implemente data binding no componente quiz.

### 🎯 Tipos de Binding:
```typescript
// Component (quiz-typescript.component.ts)
export class QuizTypescriptComponent {
  titulo = 'Quiz TypeScript';
  perguntaAtual: PerguntaQuiz = {/*...*/};
  respostaSelecionada: number | null = null;
  
  selecionarResposta(indice: number): void {
    this.respostaSelecionada = indice;
  }
  
  confirmarResposta(): void {
    // Lógica para confirmar resposta
  }
}
```

```html
<!-- Template (quiz-typescript.component.html) -->
<div class="quiz-container">
  <!-- Interpolation -->
  <h1>{{ titulo }}</h1>
  
  <!-- Property Binding -->
  <h2 [textContent]="perguntaAtual.pergunta"></h2>
  
  <!-- Event Binding + *ngFor -->
  <div *ngFor="let opcao of perguntaAtual.opcoes; let i = index">
    <button (click)="selecionarResposta(i)" 
            [class.selecionada]="respostaSelecionada === i">
      {{ opcao }}
    </button>
  </div>
  
  <!-- Two-way Binding seria com ngModel -->
  <button (click)="confirmarResposta()" 
          [disabled]="respostaSelecionada === null">
    Confirmar
  </button>
</div>
```

---

## 🚀 **Exercício 7: Ciclo de Vida Angular** ⭐⭐⭐⭐

### 📋 Tarefa:
Implemente hooks de ciclo de vida no componente.

### 🎯 Requisitos:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

export class QuizTypescriptComponent implements OnInit, OnDestroy {
  
  ngOnInit(): void {
    console.log('Componente inicializado!');
    // Carregar perguntas do quiz
    this.carregarPerguntas();
  }
  
  ngOnDestroy(): void {
    console.log('Componente destruído!');
    // Limpar recursos se necessário
  }
  
  private carregarPerguntas(): void {
    // Simular carregamento de dados
  }
}
```

---

## 🚀 **Exercício 8: Serviço Angular** ⭐⭐⭐⭐

### 📋 Tarefa:
Crie um serviço para gerenciar as perguntas do quiz.

### 🎯 Comando:
```bash
ng generate service services/quiz
```

### 🎯 Implementação:
```typescript
// quiz.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private perguntas: PerguntaQuiz[] = [
    // Array com perguntas do quiz
  ];
  
  obterPerguntas(): PerguntaQuiz[] {
    return this.perguntas;
  }
  
  verificarResposta(perguntaId: number, resposta: number): boolean {
    const pergunta = this.perguntas.find(p => p.id === perguntaId);
    return pergunta ? pergunta.respostaCorreta === resposta : false;
  }
}
```

---

## 🎯 **Exercício 9: Navegação entre Perguntas** ⭐⭐⭐⭐⭐

### 📋 Tarefa:
Implemente navegação entre perguntas e resultado final.

### 🎯 Funcionalidades:
- Botão "Próxima Pergunta"
- Botão "Pergunta Anterior"
- Progresso do quiz (X de Y)
- Tela de resultado final

### 🎯 Template Avançado:
```html
<div class="quiz-progress">
  <span>Pergunta {{ perguntaAtual + 1 }} de {{ totalPerguntas }}</span>
  <div class="progress-bar">
    <div class="progress" [style.width.%]="progresso"></div>
  </div>
</div>

<div class="navigation">
  <button (click)="perguntaAnterior()" 
          [disabled]="perguntaAtual === 0">
    Anterior
  </button>
  
  <button (click)="proximaPergunta()" 
          [disabled]="!respostaConfirmada">
    Próxima
  </button>
</div>
```

---

## 🎯 **Exercício 10: Deploy e Documentação** ⭐⭐⭐⭐⭐

### 📋 Tarefa:
Finalize o projeto e documente o aprendizado.

### 🎯 Comandos de Build:
```bash
# Build para produção
ng build

# Teste do build local
npx http-server dist/quiz-typescript
```

### 🎯 Documentação:
Crie um arquivo `APRENDIZADOS.md` com:
- Diferenças entre TypeScript puro e Angular
- Conceitos novos aprendidos
- Dificuldades encontradas
- Próximos passos

---

## 🏆 Critérios de Avaliação

### ⭐ **Nível Iniciante (1-3 exercícios)**
- Configurou ambiente Angular
- Entende estrutura básica
- Criou primeiro componente

### ⭐⭐ **Nível Intermediário (4-6 exercícios)**  
- Implementa data binding
- Usa ciclo de vida básico
- Cria componentes funcionais

### ⭐⭐⭐ **Nível Avançado (7-8 exercícios)**
- Usa serviços Angular
- Implementa navegação
- Organiza código profissionalmente

### ⭐⭐⭐⭐ **Nível Expert (9-10 exercícios)**
- Deploy completo
- Documentação detalhada
- Projeto finalizado e funcional

---

## � Desafio Final

**Crie um quiz completo de revisão TypeScript em Angular com:**
- ✅ 10 perguntas sobre os 3 primeiros dias
- ✅ Sistema de pontuação
- ✅ Feedback imediato
- ✅ Resultado final com dicas de estudo
- ✅ Interface responsiva

---

## 🚀 Próximos Passos

Após completar o Dia 04, você estará pronto para:
- **Semana 2**: Componentes avançados
- **Semana 3**: Serviços e HTTP
- **Semana 4**: Roteamento e guards

---

*Bem-vindo ao mundo Angular! 🎉*
