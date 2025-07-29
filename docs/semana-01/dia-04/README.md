# 📘 Dia 04 — Revisão TypeScript & Iniciando Angular

## 🎯 Objetivos do Dia
- Consolidar o conhecimento dos principais conceitos de TypeScript
- Aprender o fluxo de criação de projetos com Angular CLI
- Conhecer a estrutura inicial de um projeto Angular
- Entender o ciclo de vida básico dos componentes Angular

---

## 📚 Conteúdo

### 🔄 Revisão TypeScript

Vamos revisar os conceitos fundamentais que aprendemos nos últimos 3 dias:

#### 📝 **Dia 01 - Tipos Básicos:**
```typescript
// Tipos primitivos
let nome: string = "Kirito";
let nivel: number = 50;
let ativo: boolean = true;

// Arrays e Tuplas
let habilidades: string[] = ["Esgrima", "Combate"];
let coordenadas: [number, number] = [10, 25];

// Enums
enum ClassePersonagem {
  Guerreiro = "GUERREIRO",
  Mago = "MAGO",
  Arqueiro = "ARQUEIRO"
}
```

#### 🏗️ **Dia 02 - Classes e OOP:**
```typescript
class Personagem {
  constructor(
    public nome: string,
    private _vida: number = 100
  ) {}

  get vida(): number {
    return this._vida;
  }

  atacar(): void {
    console.log(`${this.nome} atacou!`);
  }
}

class Guerreiro extends Personagem {
  constructor(nome: string, private arma: string) {
    super(nome);
  }

  atacarComArma(): void {
    console.log(`${this.nome} atacou com ${this.arma}!`);
  }
}
```

#### ⚡ **Dia 03 - Generics e Utility Types:**
```typescript
// Generics
function criarInventario<T>(itens: T[]): T[] {
  return [...itens];
}

// Utility Types
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

type UsuarioParaEdicao = Partial<Usuario>;
type UsuarioSemId = Omit<Usuario, 'id'>;
```

### 🧠 Quiz Interativo de Revisão

Responda mentalmente e depois confira as respostas:

**1. Qual a diferença entre `interface` e `type` em TypeScript?**
<details>
<summary>Resposta</summary>

- **Interface**: Pode ser estendida e mesclada, ideal para objetos
- **Type**: Mais flexível, pode representar union types, primitivos, etc.
</details>

**2. O que faz o operador `!` no TypeScript?**
<details>
<summary>Resposta</summary>

O Non-null assertion operator `!` informa ao TypeScript que o valor definitivamente não é `null` ou `undefined`.
</details>

**3. Como funciona o `Partial<T>`?**
<details>
<summary>Resposta</summary>

Torna todas as propriedades de um tipo opcionais, útil para atualizações parciais.
</details>

### 🚀 Angular CLI

#### 🛠️ **O que é o Angular CLI?**

O Angular CLI (Command Line Interface) é uma ferramenta de linha de comando que facilita:
- Criação de projetos
- Geração de componentes, serviços, etc.
- Build e deploy
- Testes automatizados

#### 📋 **Principais Comandos:**

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Criar novo projeto
ng new meu-projeto

# Navegar para o projeto
cd meu-projeto

# Servir aplicação (desenvolvimento)
ng serve

# Gerar componente
ng generate component meu-componente
# ou
ng g c meu-componente

# Gerar serviço
ng generate service meu-servico
# ou
ng g s meu-servico

# Build para produção
ng build

# Executar testes
ng test
```

### 🏗️ Estrutura do Projeto Angular

Quando você executa `ng new projeto-inicial`, esta estrutura é criada:

```
projeto-inicial/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Componente principal
│   │   ├── app.component.html    # Template do componente
│   │   ├── app.component.css     # Estilos do componente
│   │   ├── app.component.spec.ts # Testes do componente
│   │   └── app.module.ts         # Módulo principal
│   ├── assets/                   # Arquivos estáticos
│   ├── environments/             # Configurações de ambiente
│   ├── index.html               # Página principal
│   ├── main.ts                  # Ponto de entrada da aplicação
│   └── styles.css               # Estilos globais
├── angular.json                 # Configurações do Angular
├── package.json                # Dependências do projeto
└── tsconfig.json               # Configurações do TypeScript
```

#### 📁 **Principais Arquivos:**

- **`app.component.ts`**: Componente raiz da aplicação
- **`app.module.ts`**: Módulo que agrupa componentes, serviços e imports
- **`main.ts`**: Bootstrapping da aplicação
- **`index.html`**: HTML base onde a aplicação é renderizada

### 🔄 Ciclo de Vida Angular

#### 🌱 **O que acontece quando o app inicia?**

1. **main.ts** → Inicializa a aplicação
2. **app.module.ts** → Configura o módulo principal
3. **app.component.ts** → Carrega o componente raiz
4. **index.html** → Renderiza na tag `<app-root>`

#### 🎯 **Hooks de Ciclo de Vida Completos:**

O Angular oferece vários hooks que permitem interceptar momentos-chave do ciclo de vida dos componentes:

#### 📖 **Conceitos Fundamentais dos Hooks:**

##### 🔄 **1. ngOnChanges** - O "Detector de Mudanças"
**🎯 Conceito:** Executado toda vez que uma propriedade `@Input()` muda de valor.
**🕒 Quando usar:** Quando você precisa reagir a mudanças vindas do componente pai.
**⚡ Casos comuns:**
- Validar dados recebidos do pai
- Recalcular valores baseados nos inputs
- Atualizar estado interno quando props mudam
- Fazer chamadas API quando parâmetros mudam

**💡 Analogia:** É como um "sensor de movimento" que detecta quando algo mudou nos dados que vêm de fora.

##### 🚀 **2. ngOnInit** - O "Inicializador"
**🎯 Conceito:** Executado UMA única vez, após o primeiro `ngOnChanges`.
**🕒 Quando usar:** Para todas as inicializações do componente.
**⚡ Casos comuns:**
- Carregar dados de APIs
- Configurar formulários
- Inicializar variáveis
- Configurar subscriptions
- Setup de estado inicial

**💡 Analogia:** É como o "setup" de um jogo - acontece uma vez no início.

##### 🔍 **3. ngDoCheck** - O "Investigador Manual"
**🎯 Conceito:** Executado a CADA ciclo de detecção de mudanças do Angular.
**🕒 Quando usar:** Para detectar mudanças que o Angular não consegue detectar automaticamente.
**⚡ Casos comuns:**
- Detectar mudanças em objetos deeply nested
- Monitorar arrays que mudam internamente
- Performance monitoring
- Custom change detection

**⚠️ Cuidado:** Muito pesado! Use com parcimônia.

**💡 Analogia:** É como um "detetive" que investiga constantemente se algo mudou.

##### 📄 **4. ngAfterContentInit** - O "Organizador de Conteúdo"
**🎯 Conceito:** Executado quando o conteúdo projetado (`<ng-content>`) foi inicializado.
**🕒 Quando usar:** Quando você precisa acessar conteúdo que vem de fora via `<ng-content>`.
**⚡ Casos comuns:**
- Componentes de layout (cards, modals, tabs)
- Acessar elementos filhos via `@ContentChild`
- Configurar conteúdo dinâmico
- Wrapper components

**💡 Analogia:** É como "organizar a casa" após os móveis (conteúdo) chegarem.

##### 🎨 **5. ngAfterViewInit** - O "Finalista da Interface"
**🎯 Conceito:** Executado quando a view (template) do componente foi completamente renderizada.
**🕒 Quando usar:** Para manipular elementos DOM ou acessar componentes filhos.
**⚡ Casos comuns:**
- Focar em inputs
- Inicializar bibliotecas JavaScript
- Acessar elementos via `@ViewChild`
- Setup de gráficos/charts
- Manipulação direta do DOM

**💡 Analogia:** É como o "toque final" na decoração - quando tudo está pronto visualmente.

##### 🧹 **6. ngOnDestroy** - O "Faxineiro"
**🎯 Conceito:** Executado ANTES do componente ser destruído/removido.
**🕒 Quando usar:** Para limpar recursos e evitar memory leaks.
**⚡ Casos comuns:**
- Cancelar subscriptions (RxJS)
- Limpar timers/intervals
- Remover event listeners
- Cancelar requests HTTP
- Cleanup de recursos

**💡 Analogia:** É como "limpar a casa" antes de se mudar.

#### 🎭 **Hooks Menos Comuns (mas úteis):**

##### 🔄 **ngAfterContentChecked** - O "Verificador de Conteúdo"
**🎯 Conceito:** Executado após cada verificação do conteúdo projetado.
**🕒 Quando usar:** Raramente - apenas para casos muito específicos de performance.

##### 🔄 **ngAfterViewChecked** - O "Verificador de View"
**🎯 Conceito:** Executado após cada verificação da view.
**🕒 Quando usar:** Raramente - pode causar problemas de performance.

#### 📊 **Guia de Decisão: Qual Hook Usar?**

```typescript
// ❓ Preciso reagir a mudanças vindas do pai?
// ✅ Use ngOnChanges

// ❓ Preciso inicializar dados/estado uma vez?
// ✅ Use ngOnInit

// ❓ Preciso manipular elementos DOM/componentes filhos?
// ✅ Use ngAfterViewInit

// ❓ Preciso trabalhar com ng-content?
// ✅ Use ngAfterContentInit

// ❓ Preciso detectar mudanças complexas manualmente?
// ⚠️ Use ngDoCheck (com cuidado!)

// ❓ Preciso limpar recursos ao sair?
// ✅ Use ngOnDestroy (SEMPRE!)
```

#### 🎯 **Exemplos Práticos por Hook:**

##### 📋 **1. ngOnChanges** - Mudanças nos @Input()
```typescript
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  template: '<h2>Usuário: {{ nomeUsuario }}</h2>'
})
export class PerfilUsuarioComponent implements OnChanges {
  @Input() nomeUsuario: string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Propriedades mudaram:', changes);
    
    if (changes['nomeUsuario']) {
      console.log('Nome anterior:', changes['nomeUsuario'].previousValue);
      console.log('Nome atual:', changes['nomeUsuario'].currentValue);
    }
  }
}
```

##### 🚀 **2. ngOnInit** - Inicialização do Componente
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <p>Pergunta {{ perguntaAtual + 1 }} de {{ totalPerguntas }}</p>
    </div>
  `
})
export class QuizComponent implements OnInit {
  titulo = 'Quiz TypeScript';
  perguntaAtual = 0;
  totalPerguntas = 0;
  perguntas: any[] = [];

  ngOnInit(): void {
    console.log('✅ Componente Quiz inicializado!');
    
    // Carregar dados iniciais
    this.carregarPerguntas();
    
    // Configurar estado inicial
    this.configurarEstadoInicial();
    
    console.log(`📊 Quiz carregado com ${this.totalPerguntas} perguntas`);
  }

  private carregarPerguntas(): void {
    // Simular carregamento de perguntas
    this.perguntas = [
      { id: 1, texto: 'O que é TypeScript?' },
      { id: 2, texto: 'Como funciona herança?' },
      { id: 3, texto: 'O que são Generics?' }
    ];
    this.totalPerguntas = this.perguntas.length;
  }

  private configurarEstadoInicial(): void {
    this.perguntaAtual = 0;
  }
}
```

##### 🔄 **3. ngDoCheck** - Detecção Manual de Mudanças
```typescript
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <p>Contador: {{ contador }}</p>
    <button (click)="incrementar()">+1</button>
  `
})
export class ContadorComponent implements DoCheck {
  contador = 0;
  ultimoValor = 0;

  ngDoCheck(): void {
    if (this.contador !== this.ultimoValor) {
      console.log(`🔍 Mudança detectada: ${this.ultimoValor} → ${this.contador}`);
      this.ultimoValor = this.contador;
    }
  }

  incrementar(): void {
    this.contador++;
  }
}
```

##### 🏗️ **4. ngAfterContentInit** - Conteúdo Projetado Inicializado
```typescript
import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent implements AfterContentInit {
  @ContentChild('titulo') titulo?: ElementRef;

  ngAfterContentInit(): void {
    console.log('📄 Conteúdo projetado inicializado');
    
    if (this.titulo) {
      console.log('Título encontrado:', this.titulo.nativeElement.textContent);
    }
  }
}
```

##### 🎨 **5. ngAfterViewInit** - View Completamente Inicializada
```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formulario',
  template: `
    <form>
      <input #nomeInput type="text" placeholder="Digite seu nome">
      <button type="submit">Enviar</button>
    </form>
  `
})
export class FormularioComponent implements AfterViewInit {
  @ViewChild('nomeInput') nomeInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log('🎨 View completamente carregada');
    
    // Focar no input automaticamente
    this.nomeInput.nativeElement.focus();
    
    // Configurar eventos personalizados
    this.configurarEventos();
  }

  private configurarEventos(): void {
    this.nomeInput.nativeElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        console.log('Enter pressionado!');
      }
    });
  }
}
```

##### 🧹 **6. ngOnDestroy** - Limpeza e Destruição
```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `
    <div>
      <h3>Timer: {{ tempoDecorrido }}s</h3>
      <p>Status: {{ status }}</p>
    </div>
  `
})
export class TimerComponent implements OnInit, OnDestroy {
  tempoDecorrido = 0;
  status = 'Parado';
  private timerSubscription?: Subscription;
  private intervalId?: number;

  ngOnInit(): void {
    console.log('⏰ Timer iniciado');
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    console.log('🧹 Limpando recursos do Timer...');
    
    // Cancelar subscription do RxJS
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      console.log('✅ Subscription cancelada');
    }
    
    // Limpar interval nativo
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log('✅ Interval limpo');
    }
    
    // Limpar event listeners se houver
    this.limparEventListeners();
    
    console.log('🏁 Componente Timer destruído com sucesso');
  }

  private iniciarTimer(): void {
    this.status = 'Rodando';
    
    // Usando RxJS (recomendado)
    this.timerSubscription = interval(1000).subscribe(() => {
      this.tempoDecorrido++;
    });
    
    // Ou usando setInterval nativo
    // this.intervalId = setInterval(() => {
    //   this.tempoDecorrido++;
    // }, 1000);
  }

  private limparEventListeners(): void {
    // Remover event listeners globais se houver
    window.removeEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    // Handler para redimensionamento
  }
}
```

#### 📊 **Ordem de Execução dos Hooks:**

```typescript
import { Component, OnInit, OnDestroy, OnChanges, DoCheck, 
         AfterContentInit, AfterContentChecked, AfterViewInit, 
         AfterViewChecked, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-completo',
  template: '<h1>Demonstração do Ciclo de Vida</h1>'
})
export class CicloCompletoComponent implements OnInit, OnDestroy, OnChanges, 
       DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  // 1º - Executado quando @Input() muda
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1️⃣ ngOnChanges');
  }

  // 2º - Executado uma vez após o primeiro ngOnChanges
  ngOnInit(): void {
    console.log('2️⃣ ngOnInit');
  }

  // 3º - Executado a cada ciclo de detecção
  ngDoCheck(): void {
    console.log('3️⃣ ngDoCheck');
  }

  // 4º - Executado uma vez após ngDoCheck
  ngAfterContentInit(): void {
    console.log('4️⃣ ngAfterContentInit');
  }

  // 5º - Executado após ngAfterContentInit e a cada ngDoCheck
  ngAfterContentChecked(): void {
    console.log('5️⃣ ngAfterContentChecked');
  }

  // 6º - Executado uma vez após ngAfterContentChecked
  ngAfterViewInit(): void {
    console.log('6️⃣ ngAfterViewInit');
  }

  // 7º - Executado após ngAfterViewInit e a cada ngAfterContentChecked
  ngAfterViewChecked(): void {
    console.log('7️⃣ ngAfterViewChecked');
  }

  // 🧹 - Executado quando o componente é destruído
  ngOnDestroy(): void {
    console.log('🧹 ngOnDestroy');
  }
}
```

#### 🎯 **Boas Práticas do Ciclo de Vida:**

##### ✅ **O que FAZER:**
- Use `ngOnInit` para inicializações pesadas
- Use `ngOnDestroy` para limpar subscriptions e timers
- Use `ngOnChanges` para reagir a mudanças em @Input()
- Cancele observables para evitar memory leaks

##### ❌ **O que NÃO fazer:**
- Não faça operações pesadas no constructor
- Não se esqueça de limpar recursos no ngOnDestroy
- Não manipule DOM diretamente no ngOnInit (use ngAfterViewInit)

#### 🎯 **Cenários Práticos: Quando Usar Cada Hook**

##### 🔄 **ngOnChanges - Cenários Reais:**

```typescript
// 📊 Painel de Status do Personagem que atualiza quando equipamentos mudam
@Component({
  selector: 'app-status-personagem',
  template: '<div>Poder Total: {{ poderTotal }}</div>'
})
export class StatusPersonagemComponent implements OnChanges {
  @Input() equipamentos: Equipamento[];
  @Input() nivel: number = 1;
  poderTotal = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // Recalcular poder quando equipamentos ou nível mudarem
    if (changes['equipamentos'] || changes['nivel']) {
      this.calcularPoderTotal();
    }
  }

  private calcularPoderTotal(): void {
    const poderEquipamentos = this.equipamentos.reduce((total, eq) => total + eq.poder, 0);
    this.poderTotal = this.nivel * 10 + poderEquipamentos;
  }
}

// 🎨 Sistema de Tema da Guilda que muda cores baseado na facção
@Component({
  selector: 'app-tema-guilda',
  template: '<div [style.background-color]="corGuilda">Emblema da Guilda</div>'
})
export class TemaGuildaComponent implements OnChanges {
  @Input() faccao: 'luz' | 'sombras' | 'natureza' = 'luz';
  corGuilda = '#FFD700';

  ngOnChanges(): void {
    switch(this.faccao) {
      case 'luz':
        this.corGuilda = '#FFD700'; // Dourado
        break;
      case 'sombras':
        this.corGuilda = '#4B0082'; // Roxo escuro
        break;
      case 'natureza':
        this.corGuilda = '#228B22'; // Verde floresta
        break;
    }
  }
}
```

##### 🚀 **ngOnInit - Cenários Reais:**

```typescript
// 🛒 Loja de Itens Mágicos com carregamento inicial
@Component({
  selector: 'app-loja-magica'
})
export class LojaMagicaComponent implements OnInit {
  itens: ItemMagico[] = [];
  carregandoItens = true;
  moedas = 0;

  ngOnInit(): void {
    // Carregar inventário da loja
    this.lojaService.obterItensDisponiveis().subscribe(itens => {
      this.itens = itens;
      this.carregandoItens = false;
    });

    // Conectar ao sistema de economia global
    this.economiaService.conectarMercadoGlobal();
    
    // Carregar moedas do jogador
    this.carregarMoedasJogador();
  }

  private carregarMoedasJogador(): void {
    this.moedas = this.jogadorService.obterMoedas();
  }
}

// 📋 Sistema de Criação de Personagem
@Component({
  selector: 'app-criacao-personagem'
})
export class CriacaoPersonagemComponent implements OnInit {
  formularioPersonagem: FormGroup;
  classes: ClassePersonagem[] = [];

  ngOnInit(): void {
    // Carregar classes disponíveis
    this.classes = this.classeService.obterClassesDisponiveis();

    // Inicializar formulário de criação
    this.formularioPersonagem = this.fb.group({
      nome: ['', [Validators.required, this.validadorNomeUnico]],
      classe: ['', Validators.required],
      atributos: this.fb.group({
        forca: [10, [Validators.min(1), Validators.max(20)]],
        agilidade: [10, [Validators.min(1), Validators.max(20)]],
        inteligencia: [10, [Validators.min(1), Validators.max(20)]]
      })
    });

    // Auto-save do progresso da criação
    this.formularioPersonagem.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(() => this.salvarProgressoCriacao());
  }
}
```

##### 🎨 **ngAfterViewInit - Cenários Reais:**

```typescript
// 📊 Mapa Interativo da Masmorra com biblioteca de gráficos
@Component({
  selector: 'app-mapa-masmorra',
  template: '<canvas #mapCanvas width="800" height="600"></canvas>'
})
export class MapaMasmorraComponent implements AfterViewInit {
  @ViewChild('mapCanvas') canvas!: ElementRef;
  @Input() salas: SalaMasmorra[] = [];

  ngAfterViewInit(): void {
    // Inicializar engine de renderização do mapa após DOM estar pronto
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.mapEngine = new MapEngine(ctx);
    
    // Renderizar salas da masmorra
    this.renderizarMapa();
    
    // Configurar controles de navegação
    this.configurarControlesMapa();
  }

  private configurarControlesMapa(): void {
    this.canvas.nativeElement.addEventListener('click', (event) => {
      const posicao = this.obterPosicaoClick(event);
      this.navegarParaSala(posicao);
    });
  }
}

// 🔍 Sistema de Busca de Quests com foco automático
@Component({
  selector: 'app-busca-quests',
  template: '<input #buscaInput type="text" placeholder="Buscar missões..." (keyup)="filtrarQuests($event)">'
})
export class BuscaQuestsComponent implements AfterViewInit {
  @ViewChild('buscaInput') buscaInput!: ElementRef;

  ngAfterViewInit(): void {
    // Focar automaticamente no campo de busca
    this.buscaInput.nativeElement.focus();

    // Configurar atalho para abrir busca rápida (Ctrl+Q)
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'q') {
        event.preventDefault();
        this.buscaInput.nativeElement.focus();
        this.buscaInput.nativeElement.select();
      }
    });

    // Configurar auto-complete com lista de NPCs
    this.configurarAutoComplete();
  }

  private configurarAutoComplete(): void {
    // Implementar auto-complete personalizado para nomes de NPCs e locais
  }
}
```

##### 🧹 **ngOnDestroy - Cenários Reais:**

```typescript
// 💬 Sistema de Chat da Guilda com WebSocket
@Component({
  selector: 'app-chat-guilda'
})
export class ChatGuildaComponent implements OnInit, OnDestroy {
  private conexaoGuilda?: Subscription;
  private statusOnline?: Subscription;
  private tecladoListener?: () => void;

  ngOnInit(): void {
    // Conectar ao canal da guilda
    this.conexaoGuilda = this.guildaService.canalMensagens$
      .subscribe(mensagem => this.adicionarMensagemChat(mensagem));

    // Monitorar membros online
    this.statusOnline = interval(15000)
      .subscribe(() => this.atualizarMembrosOnline());

    // Atalhos de teclado para comandos rápidos
    this.tecladoListener = (event: KeyboardEvent) => {
      // Enter + Ctrl = Enviar mensagem
      if (event.key === 'Enter' && event.ctrlKey) {
        this.enviarMensagem();
      }
      // Alt + G = Abrir chat da guilda
      if (event.altKey && event.key.toLowerCase() === 'g') {
        this.focarChatGuilda();
      }
    };
    document.addEventListener('keydown', this.tecladoListener);
  }

  ngOnDestroy(): void {
    console.log('🏰 Desconectando do chat da guilda...');
    
    // Limpar conexões para evitar vazamento de memória
    this.conexaoGuilda?.unsubscribe();
    this.statusOnline?.unsubscribe();
    
    if (this.tecladoListener) {
      document.removeEventListener('keydown', this.tecladoListener);
    }

    // Notificar outros membros que saiu
    this.guildaService.notificarSaida();
  }
}

// 🎵 Sistema de Música Ambiente da Masmorra
@Component({
  selector: 'app-audio-masmorra'
})
export class AudioMasmorraComponent implements OnInit, OnDestroy {
  private audioAmbiente?: HTMLAudioElement;
  private efeitosSonoros: Map<string, HTMLAudioElement> = new Map();

  ngOnInit(): void {
    // Carregar trilha sonora da masmorra
    this.audioAmbiente = new Audio('/assets/audio/masmorra-ambiente.mp3');
    this.audioAmbiente.loop = true;
    this.audioAmbiente.volume = 0.3;

    // Carregar efeitos sonoros
    this.carregarEfeitosSonoros();
    
    // Configurar controles de áudio do navegador
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('pause', () => this.pausarAudio());
      navigator.mediaSession.setActionHandler('play', () => this.reproduzirAudio());
    }

    // Iniciar música ambiente
    this.reproduzirAudio();
  }

  ngOnDestroy(): void {
    console.log('🎵 Parando música da masmorra...');
    
    // Parar e limpar áudio ambiente
    if (this.audioAmbiente) {
      this.audioAmbiente.pause();
      this.audioAmbiente.currentTime = 0;
      this.audioAmbiente = undefined;
    }

    // Limpar todos os efeitos sonoros
    this.efeitosSonoros.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    this.efeitosSonoros.clear();

    // Limpar controles de mídia
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('play', null);
    }
  }

  private carregarEfeitosSonoros(): void {
    const efeitos = ['ataque-espada', 'magia-cura', 'porta-abrindo', 'tesouro-encontrado'];
    efeitos.forEach(efeito => {
      const audio = new Audio(`/assets/audio/efeitos/${efeito}.mp3`);
      this.efeitosSonoros.set(efeito, audio);
    });
  }
}
```

#### 🎯 **Padrões Comuns de Uso:**

##### 🔄 **Padrão: Sistema de Gerenciamento de Party (Grupo)**
```typescript
@Component({
  selector: 'app-party-manager'
})
export class PartyManagerComponent implements OnInit, OnDestroy {
  membrosParty: Aventureiro[] = [];
  liderParty?: Aventureiro;
  private partySubscription = new Subscription();

  ngOnInit(): void {
    // Carregar membros atuais do party
    this.partySubscription.add(
      this.partyService.obterMembros().subscribe(membros => {
        this.membrosParty = membros;
        this.definirLider();
      })
    );

    // Escutar mudanças em tempo real (membros entrando/saindo)
    this.partySubscription.add(
      this.realtimeService.mudancasParty$.subscribe(evento => {
        this.processarEventoParty(evento);
      })
    );

    // Monitorar status de vida dos membros
    this.partySubscription.add(
      interval(5000).subscribe(() => {
        this.verificarStatusMembros();
      })
    );
  }

  ngOnDestroy(): void {
    // Limpa TODAS as subscriptions do party
    this.partySubscription.unsubscribe();
    
    // Notificar saída do gerenciamento
    this.partyService.notificarSaidaGerenciamento();
  }

  private definirLider(): void {
    this.liderParty = this.membrosParty.find(m => m.isLider) || this.membrosParty[0];
  }
}
```

##### 🎨 **Padrão: Modal de Inventário/Loja**
```typescript
@Component({
  selector: 'app-modal-inventario',
  template: `
    <div #modalInventario class="modal-overlay" [class.ativo]="visivel">
      <div class="janela-inventario">
        <h2>📦 Inventário do Aventureiro</h2>
        <div class="grid-itens">
          <div *ngFor="let item of itens" class="slot-item">
            {{ item.nome }}
          </div>
        </div>
        <button (click)="fecharInventario()">Fechar</button>
      </div>
    </div>
  `
})
export class ModalInventarioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalInventario') modalElement!: ElementRef;
  @Input() visivel = false;
  @Input() itens: ItemInventario[] = [];

  ngAfterViewInit(): void {
    // Configurar comportamento do modal (fechar ao clicar fora)
    this.modalElement.nativeElement.addEventListener('click', (event) => {
      if (event.target === this.modalElement.nativeElement) {
        this.fecharInventario();
      }
    });

    // Atalhos de teclado para o inventário
    document.addEventListener('keydown', this.atalhosTeclado);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.atalhosTeclado);
  }

  private atalhosTeclado = (event: KeyboardEvent) => {
    if (!this.visivel) return;

    switch(event.key) {
      case 'Escape':
        this.fecharInventario();
        break;
      case 'i':
      case 'I':
        if (event.altKey) {
          this.fecharInventario();
        }
        break;
      case 'Enter':
        this.usarItemSelecionado();
        break;
    }
  }

  fecharInventario(): void {
    this.visivel = false;
    // Emitir evento para componente pai
  }

  usarItemSelecionado(): void {
    // Lógica para usar item selecionado
  }
}
```

##### 🏰 **Padrão: Sistema de Masmorra/Dungeon**
```typescript
@Component({
  selector: 'app-explorador-masmorra'
})
export class ExploradorMasmorraComponent implements OnInit, OnDestroy {
  salaAtual: SalaMasmorra;
  monstrosPresentes: Monstro[] = [];
  tesourosSala: Tesouro[] = [];
  private exploracaoSubscription = new Subscription();

  ngOnInit(): void {
    // Entrar na primeira sala da masmorra
    this.exploracaoSubscription.add(
      this.masmorraService.entrarMasmorra().subscribe(sala => {
        this.salaAtual = sala;
        this.carregarConteudoSala();
      })
    );

    // Escutar eventos de combate
    this.exploracaoSubscription.add(
      this.combateService.eventosCombate$.subscribe(evento => {
        this.processarEventoCombate(evento);
      })
    );

    // Sistema de regeneração automática
    this.exploracaoSubscription.add(
      interval(10000).subscribe(() => {
        this.regenerarVidaMana();
      })
    );

    // Salvar progresso automaticamente
    this.exploracaoSubscription.add(
      interval(30000).subscribe(() => {
        this.salvarProgressoMasmorra();
      })
    );
  }

  ngOnDestroy(): void {
    // Salvar progresso antes de sair
    this.salvarProgressoMasmorra();
    
    // Limpar todas as subscriptions
    this.exploracaoSubscription.unsubscribe();
    
    // Notificar saída da masmorra
    this.masmorraService.sairMasmorra();
  }

  private carregarConteudoSala(): void {
    this.monstrosPresentes = this.salaAtual.monstros || [];
    this.tesourosSala = this.salaAtual.tesouros || [];
  }

  private processarEventoCombate(evento: EventoCombate): void {
    switch(evento.tipo) {
      case 'vitoria':
        this.concederExperiencia(evento.expGanha);
        this.adicionarItensDropados(evento.itensDropados);
        break;
      case 'derrota':
        this.aplicarPenalidadeDerrota(evento.penalidade);
        break;
    }
  }
}
```

#### 💡 **Exemplo Prático: Componente de Notificação**

```typescript
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  template: `
    <div class="notificacao" [class]="tipo">
      <h4>{{ titulo }}</h4>
      <p>{{ mensagem }}</p>
      <small>Desaparece em {{ tempoRestante }}s</small>
    </div>
  `
})
export class NotificacaoComponent implements OnInit, OnDestroy {
  @Input() titulo = 'Notificação';
  @Input() mensagem = 'Mensagem padrão';
  @Input() tipo: 'sucesso' | 'erro' | 'aviso' = 'sucesso';
  @Input() duracao = 5000; // 5 segundos

  tempoRestante = 0;
  private intervalId?: number;

  ngOnInit(): void {
    console.log('📢 Notificação exibida');
    this.iniciarContadorRegressivo();
  }

  ngOnDestroy(): void {
    console.log('📢 Notificação removida');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private iniciarContadorRegressivo(): void {
    this.tempoRestante = Math.ceil(this.duracao / 1000);
    
    this.intervalId = setInterval(() => {
      this.tempoRestante--;
      
      if (this.tempoRestante <= 0) {
        this.autoFechar();
      }
    }, 1000);
  }

  private autoFechar(): void {
    // Emitir evento para o componente pai remover a notificação
    console.log('Auto-fechando notificação...');
  }
}
```

---

## 🛠️ Prática

### 📝 **1. Quiz de Revisão TypeScript**

Execute o arquivo `exemplos.ts` e responda as questões práticas!

### 🚀 **2. Criando seu primeiro projeto Angular**

Execute no terminal:

```bash
ng new projeto-inicial
cd projeto-inicial
ng serve
```

Acesse: http://localhost:4200

### 🔍 **3. Explorando a estrutura**

Navegue pelos arquivos e anote a função de cada um:
- `app.component.ts` → ?
- `app.module.ts` → ?
- `main.ts` → ?
- `index.html` → ?

### 🧩 **4. Teste prático — Componente Quiz**

Crie um componente `quiz-typescript` que exiba 3 perguntas sobre TypeScript:

```bash
ng generate component quiz-typescript
```

---

## � Desafio do Dia

1. **Finalize o mini quiz TypeScript no Angular** com componentização
2. **Prepare um resumo** sobre o que mudou do TS puro para Angular
3. **(Opcional)** Tire print do quiz funcionando

---

## � Aprendizados do Dia

- **Quais conceitos de TypeScript ficaram mais claros após o quiz?**
- **O que foi fácil/difícil no setup do Angular?**
- **Primeiras impressões sobre a estrutura de um projeto Angular**

---

## ❓ Dúvidas e Pontos para Revisão

- Alguma dúvida sobre os comandos do Angular CLI?
- Dificuldade em entender alguma parte do ciclo de vida?
- Diferenças entre componentes Angular e funções/classes TS puros?

---

*Prepare-se para dar o primeiro passo no mundo Angular! �*


## 🎮 **Por que os Lifecycle Hooks são Importantes?**

### 🗡️ **Como um Sistema de Combate em RPG:**

Imagina um sistema de combate em um RPG. Você não pode simplesmente começar atacando - existe uma **sequência** que deve ser seguida:

1. **🔧 Preparação (ngOnInit):** Equipar armas, buffs, verificar status
2. **⚔️ Combate:** Executar ataques, habilidades, magias
3. **🧹 Finalização (ngOnDestroy):** Coletar XP, loot, limpar efeitos temporários

### 🏰 **Sem Lifecycle Hooks = Caos na Guild:**

\\\	ypescript
// ❌ SEM lifecycle hooks (Guild em CAOS!)
export class GuildChatComponent {
  mensagens: MensagemGuild[] = [];
  
  constructor() {
    // PROBLEMAS:
    // 1. Tentando conectar antes do component estar pronto
    this.conectarChatGuild(); // 💥 Erro!
    
    // 2. Nunca desconecta quando sai da guild
    // 3. Memory leaks em todos os lugares
    // 4. Mensagens duplicadas
  }
}

// ✅ COM lifecycle hooks (Guild Organizada!)
export class GuildChatComponent implements OnInit, OnDestroy {
  mensagens: MensagemGuild[] = [];
  private conexaoGuild?: Subscription;
  
  ngOnInit(): void {
    // ✅ Conecta APENAS quando tudo está pronto
    this.conectarChatGuild();
    this.carregarHistoricoMensagens();
  }
  
  ngOnDestroy(): void {
    // ✅ Limpa conexões ao sair da guild
    this.conexaoGuild?.unsubscribe();
    this.notificarSaidaGuild();
  }
}
\\\

### 🎯 **Benefícios dos Lifecycle Hooks:**

#### 1. **⚡ Performance de Herói Épico**
\\\	ypescript
// Carrega dados apenas quando necessário
ngOnInit(): void {
  this.carregarEquipamentos(); // Só quando o component for usado
}

ngOnDestroy(): void {
  this.limparCache(); // Libera memória
}
\\\

#### 2. **🔒 Segurança de Fortaleza**
\\\	ypescript
ngOnInit(): void {
  // Verifica permissões antes de mostrar tesouro
  if (this.aventureiro.nivel >= 10) {
    this.mostrarBauSecreto = true;
  }
}
\\\

#### 3. **🎨 UX de Qualidade AAA**
\\\	ypescript
ngAfterViewInit(): void {
  // Animações suaves após tudo estar renderizado
  this.animarEntradaHeroi();
  this.destacarMissoesPendentes();
}
\\\

---

## 🏆 **Conclusão: De Aprendiz a Mestre Angular**

### 🌟 **O que Você Conquistou Hoje:**

1. **📚 TypeScript Review:** Dominou os conceitos essenciais
2. **⚙️ Angular CLI:** Aprendeu a criar e configurar projetos
3. **🏗️ Estrutura de Projeto:** Entende como organizar seu código
4. **🔄 Lifecycle Hooks:** Sabe controlar o ciclo de vida dos components

### 🎯 **Próximos Passos na Jornada:**

#### **Amanhã (Dia 05):**
- **🎨 Templates & Data Binding:** Como criar interfaces dinâmicas
- **📡 Property & Event Binding:** Comunicação entre component e template
- **🔀 Diretivas Estruturais:** *ngIf, *ngFor, *ngSwitch

#### **Esta Semana:**
- **⚔️ Dia 06:** Components Avançados & Comunicação
- **🏰 Dia 07:** Projeto Final - Sistema de Anime

### 🎮 **Missão Especial:**

**Crie seu primeiro componente Angular seguindo os padrões que aprendeu:**

1. Use \
g generate component heroi-perfil\
2. Implemente \OnInit\ para carregar dados do herói
3. Use \AfterViewInit\ para animar a entrada
4. Implemente \OnDestroy\ para salvar progresso

---

## 📋 **Checklist de Aprendizado:**

- [ ] ✅ Revisei conceitos TypeScript importantes
- [ ] ✅ Instalei e configurei Angular CLI
- [ ] ✅ Criei meu primeiro projeto Angular
- [ ] ✅ Entendi a estrutura de arquivos
- [ ] ✅ Aprendi sobre lifecycle hooks
- [ ] ✅ Implementei pelo menos 3 hooks diferentes
- [ ] ✅ Testei os exemplos práticos
- [ ] ✅ Completei os exercícios do dia

**🎊 Parabéns! Você está oficialmente pronto para se tornar um Mestre Angular! 🎊**

---

*\
Um
grande
angular
dev
como
um
herói
épico
não
nasce
pronto
-
ele
se
forja
através
de
prática
dedicação
e
muitas
linhas
de
código!
Continue
sua
jornada
e
torne-se
a
lenda
que
você
nasceu
para
ser!\* ⚔️✨
