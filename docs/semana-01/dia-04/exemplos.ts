/**
 * @fileoverview Dia 04 - Revisão TypeScript & Iniciando Angular
 * @description Quiz de revisão + preparação para Angular
 *
 * 📋 INSTRUÇÕES:
 * 1. Complete os exercícios marcados com "// TODO:"
 * 2. Consulte o arquivo "exercicios.md" para as instruções detalhadas
 * 3. Execute este arquivo com:
 *    🚀 FÁCIL: npm run exemplos:dia04 (na raiz do projeto)
 *    🔧 MANUAL: cd docs/semana-01/dia-04 && npx ts-node exemplos.ts
 * 4. Use o arquivo "README.md" como referência teórica
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// =============================================================================
// 📝 SEÇÃO 1: QUIZ DE REVISÃO TYPESCRIPT
// =============================================================================

console.log('🎯 === QUIZ DE REVISÃO TYPESCRIPT ===');

// TODO 1: Interface para perguntas do quiz
interface PerguntaQuiz {
  // TODO: Definir estrutura da pergunta
  id: any; // 🔧 Substitua 'any' pelo tipo correto (number)
  pergunta: any; // 🔧 Substitua 'any' pelo tipo correto (string)
  opcoes: any; // 🔧 Array de strings
  respostaCorreta: any; // 🔧 Índice da resposta correta (number)
  explicacao: any; // 🔧 Explicação da resposta (string)
  categoria: any; // 🔧 Union type: 'tipos' | 'classes' | 'generics' | 'utility-types'
}

// TODO 2: Exemplos de perguntas do quiz
const perguntasRevisao: PerguntaQuiz[] = [
  {
    id: 1,
    pergunta: "Qual a diferença entre 'any' e 'unknown' em TypeScript?",
    opcoes: [
      'Não há diferença',
      'unknown é type-safe e requer verificação',
      'any é mais rápido',
      'unknown é deprecated',
    ],
    respostaCorreta: 1,
    explicacao:
      "'unknown' é type-safe e requer verificação de tipo antes do uso, enquanto 'any' desabilita completamente a verificação de tipos.",
    categoria: 'tipos',
  },
  // TODO: Adicione mais perguntas sobre:
  // - Interfaces vs Types
  // - Classes e herança
  // - Generics
  // - Utility Types (Partial, Pick, Omit)
];

// TODO 3: Classe para gerenciar o quiz
class GerenciadorQuiz {
  private pontuacao = 0;
  private perguntaAtual = 0;
  private respostasUsuario: number[] = [];

  constructor(private perguntas: PerguntaQuiz[]) {}

  // TODO: Implementar método para obter pergunta atual
  obterPerguntaAtual(): PerguntaQuiz | null {
    // TODO: Retornar pergunta atual ou null se acabaram
    return null; // placeholder
  }

  // TODO: Implementar método para responder pergunta
  responderPergunta(resposta: number): boolean {
    // TODO: Verificar se resposta está correta
    // TODO: Atualizar pontuação
    // TODO: Armazenar resposta do usuário
    // TODO: Avançar para próxima pergunta
    return false; // placeholder
  }

  // TODO: Implementar método para calcular resultado
  obterResultadoFinal(): { pontos: number; percentual: number; nivel: string } {
    // TODO: Calcular percentual de acertos
    // TODO: Determinar nível (Iniciante, Intermediário, Avançado, Expert)
    return { pontos: 0, percentual: 0, nivel: 'Iniciante' }; // placeholder
  }

  // TODO: Implementar método para reiniciar quiz
  reiniciarQuiz(): void {
    // TODO: Resetar estado do quiz
  }
}

// =============================================================================
// 🔄 SEÇÃO 2: REVISÃO DOS CONCEITOS (DIAS 1-3)
// =============================================================================

// Revisão Dia 01 - Tipos Básicos
// TODO 4: Complete os tipos básicos
interface JogadorInfo {
  id: any; // 🔧 number
  nome: any; // 🔧 string
  nivel: any; // 🔧 number
  ativo: any; // 🔧 boolean
  habilidades: any; // 🔧 string[]
  posicao: any; // 🔧 [number, number] (tupla)
}

// TODO 5: Enum para tipos de dados
enum TipoDado {}
// TODO: Adicionar tipos: STRING, NUMBER, BOOLEAN, ARRAY, OBJECT

// Revisão Dia 02 - Classes e OOP
// TODO 6: Classe base com herança
class PersonagemBase {
  // TODO: Implementar constructor com propriedades públicas/privadas
  // TODO: Implementar getter/setter
  // TODO: Implementar método virtual
}

class Guerreiro extends PersonagemBase {
  // TODO: Implementar herança
  // TODO: Override de métodos
  // TODO: Propriedades específicas
}

// Revisão Dia 03 - Generics e Utility Types
// TODO 7: Função genérica
function criarColecao<T>(/* TODO: parâmetros */): T[] {
  // TODO: Implementar função genérica
  return []; // placeholder
}

// TODO 8: Utility Types Review
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
}

// TODO: Implementar utility types
type UsuarioSemSenha = any; // 🔧 Use Omit<Usuario, 'senha'>
type UsuarioOpcional = any; // 🔧 Use Partial<Usuario>
type ApenasIdENome = any; // 🔧 Use Pick<Usuario, 'id' | 'nome'>

// =============================================================================
// � SEÇÃO 3: PREPARAÇÃO PARA ANGULAR
// =============================================================================

// TODO 9: Simular estrutura de um componente Angular (sem decorators)
interface ComponenteAngular {
  // TODO: Propriedades que um componente Angular teria
  template: string;
  estilos: string[];
  dados: any;

  // TODO: Métodos do ciclo de vida
  ngOnInit(): void;
  ngOnDestroy(): void;
}

// TODO 10: Implementar simulação de componente
class QuizComponenteSimulado implements ComponenteAngular {
  // TODO: Implementar propriedades
  template = `
    <div class="quiz-container">
      <h1>Quiz TypeScript</h1>
      <!-- TODO: Template do quiz -->
    </div>
  `;

  estilos = [
    '.quiz-container { padding: 20px; }',
    // TODO: Adicionar mais estilos
  ];

  dados = {
    titulo: 'Quiz de Revisão TypeScript',
    perguntaAtual: null,
    pontuacao: 0,
  };

  // TODO: Implementar ngOnInit
  ngOnInit(): void {
    console.log('Componente inicializado!');
    // TODO: Inicializar dados do quiz
  }

  // TODO: Implementar ngOnDestroy
  ngOnDestroy(): void {
    console.log('Componente destruído!');
    // TODO: Limpar recursos
  }

  // TODO: Simular event binding
  onRespostaClick(resposta: number): void {
    // TODO: Lógica quando usuário clica em uma resposta
  }

  // TODO: Simular property binding
  get perguntaTexto(): string {
    // TODO: Retornar texto da pergunta atual
    return '';
  }
}

// =============================================================================
// 🧪 SEÇÃO 4: TESTES E SIMULAÇÕES
// =============================================================================

// TODO 11: Função principal para testar tudo
function executarTestes(): void {
  console.log('🧪 === EXECUTANDO TESTES ===');
  console.log('');

  // TODO: Testar o quiz
  console.log('📝 Testando Quiz...');
  console.log('🎯 Pergunta exemplo do quiz:');
  // if (perguntasRevisao.length > 0) {
  //   const pergunta = perguntasRevisao[0];
  //   console.log(`   ${pergunta.pergunta}`);
  //   pergunta.opcoes.forEach((opcao: any, index: any) => {
  //     console.log(`   ${index + 1}. ${opcao}`);
  //   });
  //   console.log(`   ✅ Resposta correta: ${pergunta.opcoes[pergunta.respostaCorreta]}`);
  //   console.log(`   💡 Explicação: ${pergunta.explicacao}`);
  // }
  console.log('   🚧 TODO: Implemente a interface PerguntaQuiz primeiro!');
  console.log('');

  // TODO: Testar conceitos revisados
  console.log('🔄 Testando Revisão...');
  console.log('📚 Conceitos TypeScript revisados:');
  console.log('   ✅ Tipos Básicos (string, number, boolean, arrays, tuplas)');
  console.log('   ✅ Classes e Herança (OOP)');
  console.log('   ✅ Generics (<T>)');
  console.log('   ✅ Utility Types (Partial, Pick, Omit, Readonly)');
  console.log('');

  // TODO: Testar simulação Angular
  console.log('🚀 Testando Simulação Angular...');
  console.log('🏗️ Simulando componente Angular:');
  const componenteSimulado = new QuizComponenteSimulado();
  componenteSimulado.ngOnInit();
  console.log(
    `   📄 Template: ${componenteSimulado.template.substring(0, 50)}...`
  );
  console.log(`   🎨 Estilos: ${componenteSimulado.estilos.length} regras CSS`);
  console.log(`   📊 Dados: ${componenteSimulado.dados.titulo}`);
  componenteSimulado.ngOnDestroy();
  console.log('');

  console.log('✅ Todos os testes concluídos!');
  console.log('');
  console.log('🎯 PRÓXIMO PASSO: Execute os exercícios práticos!');
  console.log('📋 Veja o arquivo "exercicios.md" para instruções detalhadas');
  console.log(
    '🚀 Configure seu primeiro projeto Angular com: ng new meu-projeto'
  );
}

// =============================================================================
// 🎯 SEÇÃO 5: CHECKLIST PARA ANGULAR
// =============================================================================

/*
📋 CHECKLIST PARA COMEÇAR COM ANGULAR:

🛠️ Preparação do Ambiente:
[ ] Node.js instalado (versão 16+)
[ ] npm ou yarn funcionando
[ ] Angular CLI instalado globalmente: npm install -g @angular/cli
[ ] Verificar instalação: ng version

🏗️ Criação do Projeto:
[ ] ng new quiz-typescript --routing=true --style=css
[ ] cd quiz-typescript
[ ] ng serve
[ ] Acessar http://localhost:4200

📁 Exploração da Estrutura:
[ ] Analisar src/app/app.component.ts
[ ] Entender src/app/app.module.ts
[ ] Explorar src/main.ts
[ ] Examinar angular.json

🧩 Primeiro Componente:
[ ] ng generate component quiz-typescript
[ ] Implementar template básico
[ ] Adicionar lógica do quiz
[ ] Conectar com dados TypeScript

🔗 Data Binding:
[ ] Interpolação: {{ }}
[ ] Property Binding: [property]
[ ] Event Binding: (event)
[ ] Two-way Binding: [(ngModel)]

📊 Diferenças TypeScript vs Angular:
[ ] Decorators (@Component, @Injectable)
[ ] Dependency Injection
[ ] Templates HTML separados
[ ] Ciclo de vida específico
[ ] Modules e lazy loading
*/

// =============================================================================
// 📚 NOTAS DE APRENDIZADO
// =============================================================================

/*
📝 PRINCIPAIS DIFERENÇAS TS → ANGULAR:

1. 🏗️ ESTRUTURA:
   TypeScript Puro:
   - Classes simples
   - Funções diretas
   - Import/Export básico

   Angular:
   - Decorators (@Component)
   - Dependency Injection
   - Modules (NgModule)

2. 🎨 TEMPLATES:
   TypeScript Puro:
   - Manipulação direta do DOM
   - innerHTML strings

   Angular:
   - Templates HTML declarativos
   - Data binding automático
   - Directives (*ngFor, *ngIf)

3. 🔄 CICLO DE VIDA:
   TypeScript Puro:
   - Constructor simples
   - Cleanup manual

   Angular:
   - ngOnInit, ngOnDestroy
   - Hooks específicos
   - Gerenciamento automático

4. 📦 ORGANIZAÇÃO:
   TypeScript Puro:
   - Arquivos .ts
   - Imports ES6

   Angular:
   - Componentes (.ts + .html + .css)
   - Services injetáveis
   - Modules organizacionais
*/
console.log('🎯 === INICIANDO TESTES ===');
// 🔥 Descomente para executar os testes:
// executarTestes();

export {
  PerguntaQuiz,
  GerenciadorQuiz,
  QuizComponenteSimulado,
  JogadorInfo,
  PersonagemBase,
  Guerreiro,
};
