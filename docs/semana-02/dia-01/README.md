# 📘 Dia 06 — Services Angular e Dependency Injection

## 🎯 Objetivos do Dia
- Entender o conceito de Services no Angular
- Dominar Dependency Injection (DI) e Injector Tree
- Aprender sobre escopos de providers (root, module, component)
- Criar Services para gerenciar estado e lógica de negócio
- Implementar um Service para gerenciar tropas/unidades RPG

---

## 📚 Parte Teórica

### 🛡️ O que são Services no Angular?

Services são como **NPCs especializados** no seu RPG - cada um tem uma função específica e pode ser "convocado" por qualquer personagem (componente) que precise de seus serviços:

```typescript
// 🏪 Loja de Equipamentos (Service)
@Injectable({
  providedIn: 'root'
})
export class LojaEquipamentosService {
  private itensDisponiveis: Item[] = [];

  comprarItem(itemId: number): Item | null {
    // Lógica para comprar item
    return this.itensDisponiveis.find(item => item.id === itemId) || null;
  }

  obterInventario(): Item[] {
    return [...this.itensDisponiveis];
  }
}
```

#### **🎭 Diferenças entre Componentes e Services**

| Aspecto | Componente | Service |
|---------|------------|---------|
| **Responsabilidade** | Interface e interação | Lógica de negócio e dados |
| **Analogia RPG** | Personagem jogável | NPC/Comerciante |
| **Lifecycle** | Criado/destruído com template | Singleton (geralmente) |
| **Uso** | Apresentação visual | Processamento e estado |

### 🏗️ Dependency Injection: O Sistema de Convocação

Dependency Injection é como um **sistema mágico de convocação** onde você declara que precisa de um NPC e o Angular automaticamente o traz para você:

#### **🔧 Como Funciona o DI**

```typescript
// 1. 📜 Declaramos o Service (NPC)
@Injectable({
  providedIn: 'root'
})
export class TropasService {
  private tropas: Tropa[] = [];

  adicionarTropa(tropa: Tropa): void {
    this.tropas.push(tropa);
  }

  obterTropas(): Tropa[] {
    return [...this.tropas];
  }
}

// 2. 🎭 O Componente "convoca" o Service
@Component({
  selector: 'app-comandante',
  template: `
    <h2>⚔️ Minhas Tropas: {{ totalTropas }}</h2>
    <button (click)="recrutar()">🛡️ Recrutar Soldado</button>
  `
})
export class ComandanteComponent {
  constructor(
    private tropasService: TropasService  // 🔮 Injeção automática!
  ) {}

  get totalTropas(): number {
    return this.tropasService.obterTropas().length;
  }

  recrutar(): void {
    const novoSoldado = new Soldado('Guerreiro Elite', 100);
    this.tropasService.adicionarTropa(novoSoldado);
  }
}
```

#### **🌳 Injector Tree: A Hierarquia Mágica**

O Angular cria uma árvore de "portais mágicos" (injectors) que determinam onde cada Service vive:

```
🏰 Aplicação (Root Injector)
├── 🛡️ TropasService (Singleton)
├── 🏪 LojaService (Singleton)
└── 📊 EstatisticasService (Singleton)
    │
    ├── 🎭 ModuloPersonagens
    │   ├── 🧙 PersonagemService (Escopo do módulo)
    │   └── 📦 InventarioService (Escopo do módulo)
    │
    └── 🏟️ ComponenteBatalha
        ├── ⚔️ CombateService (Escopo do componente)
        └── 🎯 AnimacaoService (Escopo do componente)
```

### 🎯 Escopos de Providers

#### **1. 🌍 Root Scope (providedIn: 'root')**
O Service vive durante toda a aplicação - como um **NPC permanente na cidade**:

```typescript
@Injectable({
  providedIn: 'root'  // 🌍 Disponível em toda aplicação
})
export class UsuarioService {
  private usuarioLogado?: Usuario;

  login(usuario: Usuario): void {
    this.usuarioLogado = usuario;
    console.log(`🎮 ${usuario.nome} entrou no jogo!`);
  }

  obterUsuario(): Usuario | undefined {
    return this.usuarioLogado;
  }
}
```

#### **2. 🏰 Module Scope**
O Service vive apenas no módulo específico - como um **NPC de uma guilda**:

```typescript
// personagem.module.ts
@NgModule({
  providers: [
    PersonagemService  // 🏰 Disponível apenas neste módulo
  ]
})
export class PersonagemModule {}

@Injectable()
export class PersonagemService {
  private personagens: Personagem[] = [];

  criarPersonagem(dados: DadosPersonagem): Personagem {
    const personagem = new Personagem(dados);
    this.personagens.push(personagem);
    return personagem;
  }
}
```

#### **3. 🎭 Component Scope**
O Service vive apenas no componente e seus filhos - como um **familiar pessoal**:

```typescript
@Component({
  selector: 'app-arena-batalha',
  template: `<div>Arena de Batalha</div>`,
  providers: [
    CombateService  // 🎭 Disponível apenas neste componente e filhos
  ]
})
export class ArenaBatalhaComponent {
  constructor(private combateService: CombateService) {}
}

@Injectable()
export class CombateService {
  private batalhaAtual?: Batalha;

  iniciarBatalha(tropas1: Tropa[], tropas2: Tropa[]): void {
    this.batalhaAtual = new Batalha(tropas1, tropas2);
    console.log('⚔️ Batalha iniciada!');
  }
}
```

### 🛠️ Padrões Avançados de DI

#### **1. 🏭 Factory Providers**
Criação customizada de Services:

```typescript
// Token de injeção
export const CONFIGURACAO_API = new InjectionToken<ConfiguracaoApi>('config.api');

// Factory function
export function criarConfiguracaoApi(): ConfiguracaoApi {
  const ambiente = environment.production ? 'prod' : 'dev';
  return {
    baseUrl: `https://api.rpg-${ambiente}.com`,
    timeout: 5000,
    retries: 3
  };
}

// Registro no módulo
@NgModule({
  providers: [
    {
      provide: CONFIGURACAO_API,
      useFactory: criarConfiguracaoApi
    }
  ]
})
export class AppModule {}

// Uso no service
@Injectable()
export class ApiService {
  constructor(
    @Inject(CONFIGURACAO_API) private config: ConfiguracaoApi
  ) {}
}
```

#### **2. 🎨 Alias Providers**
Diferentes nomes para o mesmo Service:

```typescript
@Injectable()
export class TropasService {
  // Implementação do service
}

@NgModule({
  providers: [
    TropasService,
    { provide: 'GerenciadorTropas', useExisting: TropasService },
    { provide: 'ComandanteExercito', useExisting: TropasService }
  ]
})
export class MilitarModule {}
```

#### **3. 🔄 Multi Providers**
Múltiplas implementações do mesmo token:

```typescript
export const INTERCEPTADOR_COMBATE = new InjectionToken<InterceptadorCombate[]>('interceptadores.combate');

@Injectable()
export class LogCombateInterceptor implements InterceptadorCombate {
  intercept(acao: AcaoCombate): AcaoCombate {
    console.log(`📝 Ação de combate: ${acao.tipo}`);
    return acao;
  }
}

@Injectable()
export class StatsCombateInterceptor implements InterceptadorCombate {
  intercept(acao: AcaoCombate): AcaoCombate {
    this.atualizarEstatisticas(acao);
    return acao;
  }
}

@NgModule({
  providers: [
    { provide: INTERCEPTADOR_COMBATE, useClass: LogCombateInterceptor, multi: true },
    { provide: INTERCEPTADOR_COMBATE, useClass: StatsCombateInterceptor, multi: true }
  ]
})
export class CombateModule {}
```

---

## 🏗️ Arquitetura de Services para RPG

### 📊 Estrutura Hierárquica Recomendada

```
🎮 RPG Services Architecture
├── 🌍 Core Services (Root)
│   ├── 🔐 AuthService
│   ├── 🌐 ApiService
│   ├── 💾 StorageService
│   └── 🔔 NotificacaoService
│
├── 🎯 Feature Services (Module)
│   ├── 👥 TropasService
│   ├── 🎒 InventarioService
│   ├── ⚔️ CombateService
│   └── 🏆 QuestService
│
└── 🎭 UI Services (Component)
    ├── 📱 ModalService
    ├── 🎨 ThemeService
    └── 📊 ChartService
```

### 🛡️ TropasService: Exemplo Completo

```typescript
// 📁 interfaces/tropa.interface.ts
export interface Tropa {
  id: string;
  nome: string;
  tipo: TipoTropa;
  nivel: number;
  vida: number;
  vidaMaxima: number;
  ataque: number;
  defesa: number;
  velocidade: number;
  custo: number;
  status: StatusTropa;
  habilidades: Habilidade[];
  dataCriacao: Date;
}

export enum TipoTropa {
  SOLDADO = 'soldado',
  ARQUEIRO = 'arqueiro',
  CAVALEIRO = 'cavaleiro',
  MAGO = 'mago',
  TANQUE = 'tanque'
}

export enum StatusTropa {
  ATIVA = 'ativa',
  FERIDA = 'ferida',
  MORTA = 'morta',
  TREINANDO = 'treinando',
  DESCANSANDO = 'descansando'
}

export interface Habilidade {
  nome: string;
  descricao: string;
  dano: number;
  custaMana: number;
  recarga: number;
}

// 📁 services/tropas.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TropasService {
  private readonly STORAGE_KEY = 'rpg_tropas';

  // 📊 Estado reativo das tropas
  private tropasSubject = new BehaviorSubject<Tropa[]>([]);
  public tropas$ = this.tropasSubject.asObservable();

  // 📈 Estatísticas derivadas
  public totalTropas$ = this.tropas$.pipe(
    map(tropas => tropas.length)
  );

  public tropasVivas$ = this.tropas$.pipe(
    map(tropas => tropas.filter(t => t.status !== StatusTropa.MORTA))
  );

  public totalForcaMilitar$ = this.tropas$.pipe(
    map(tropas => tropas
      .filter(t => t.status === StatusTropa.ATIVA)
      .reduce((total, tropa) => total + (tropa.ataque + tropa.defesa), 0)
    )
  );

  constructor() {
    this.carregarTropasDoStorage();
  }

  // 🔍 Métodos de Consulta
  obterTropas(): Observable<Tropa[]> {
    return this.tropas$;
  }

  obterTropaPorId(id: string): Observable<Tropa | undefined> {
    return this.tropas$.pipe(
      map(tropas => tropas.find(t => t.id === id))
    );
  }

  obterTropasPorTipo(tipo: TipoTropa): Observable<Tropa[]> {
    return this.tropas$.pipe(
      map(tropas => tropas.filter(t => t.tipo === tipo))
    );
  }

  obterTropasPorStatus(status: StatusTropa): Observable<Tropa[]> {
    return this.tropas$.pipe(
      map(tropas => tropas.filter(t => t.status === status))
    );
  }

  // ➕ Métodos de Criação
  criarTropa(dados: Partial<Tropa>): Observable<Tropa> {
    const novaTropa: Tropa = {
      id: this.gerarId(),
      nome: dados.nome || `${dados.tipo} ${Date.now()}`,
      tipo: dados.tipo || TipoTropa.SOLDADO,
      nivel: 1,
      vida: dados.vida || this.obterVidaBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      vidaMaxima: dados.vidaMaxima || this.obterVidaBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      ataque: dados.ataque || this.obterAtaqueBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      defesa: dados.defesa || this.obterDefesaBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      velocidade: dados.velocidade || this.obterVelocidadeBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      custo: dados.custo || this.calcularCustoTropa(dados.tipo || TipoTropa.SOLDADO),
      status: StatusTropa.ATIVA,
      habilidades: dados.habilidades || this.obterHabilidadesBasePorTipo(dados.tipo || TipoTropa.SOLDADO),
      dataCriacao: new Date()
    };

    const tropasAtuais = this.tropasSubject.value;
    const novasTropas = [...tropasAtuais, novaTropa];

    this.atualizarTropas(novasTropas);

    console.log(`🛡️ Nova tropa criada: ${novaTropa.nome} (${novaTropa.tipo})`);
    return of(novaTropa);
  }

  // 📝 Métodos de Atualização
  atualizarTropa(id: string, dados: Partial<Tropa>): Observable<Tropa | null> {
    const tropasAtuais = this.tropasSubject.value;
    const indice = tropasAtuais.findIndex(t => t.id === id);

    if (indice === -1) {
      console.warn(`⚠️ Tropa com ID ${id} não encontrada`);
      return of(null);
    }

    const tropaAtualizada = { ...tropasAtuais[indice], ...dados };
    const novasTropas = [...tropasAtuais];
    novasTropas[indice] = tropaAtualizada;

    this.atualizarTropas(novasTropas);

    console.log(`📝 Tropa atualizada: ${tropaAtualizada.nome}`);
    return of(tropaAtualizada);
  }

  curarTropa(id: string, quantidadeCura = 50): Observable<boolean> {
    return this.obterTropaPorId(id).pipe(
      tap(tropa => {
        if (tropa && tropa.status !== StatusTropa.MORTA) {
          const novaVida = Math.min(tropa.vida + quantidadeCura, tropa.vidaMaxima);
          this.atualizarTropa(id, {
            vida: novaVida,
            status: novaVida >= tropa.vidaMaxima ? StatusTropa.ATIVA : tropa.status
          }).subscribe();
          console.log(`❤️ ${tropa.nome} foi curada: ${novaVida}/${tropa.vidaMaxima} HP`);
        }
      }),
      map(tropa => !!tropa)
    );
  }

  treinarTropa(id: string): Observable<boolean> {
    return this.obterTropaPorId(id).pipe(
      tap(tropa => {
        if (tropa && tropa.status === StatusTropa.ATIVA) {
          this.atualizarTropa(id, {
            status: StatusTropa.TREINANDO,
            nivel: tropa.nivel + 1,
            ataque: Math.floor(tropa.ataque * 1.1),
            defesa: Math.floor(tropa.defesa * 1.1),
            vidaMaxima: Math.floor(tropa.vidaMaxima * 1.1),
            vida: Math.floor(tropa.vidaMaxima * 1.1)
          }).subscribe();

          // Simular tempo de treinamento
          setTimeout(() => {
            this.atualizarTropa(id, { status: StatusTropa.ATIVA }).subscribe();
            console.log(`🎯 ${tropa.nome} completou o treinamento! Nível ${tropa.nivel + 1}`);
          }, 3000);

          console.log(`📚 ${tropa.nome} iniciou treinamento...`);
        }
      }),
      map(tropa => !!tropa)
    );
  }

  // 🗑️ Métodos de Remoção
  removerTropa(id: string): Observable<boolean> {
    const tropasAtuais = this.tropasSubject.value;
    const novasTropas = tropasAtuais.filter(t => t.id !== id);

    if (novasTropas.length === tropasAtuais.length) {
      console.warn(`⚠️ Tropa com ID ${id} não encontrada para remoção`);
      return of(false);
    }

    this.atualizarTropas(novasTropas);
    console.log(`🗑️ Tropa removida do exército`);
    return of(true);
  }

  limparExercito(): Observable<boolean> {
    this.atualizarTropas([]);
    console.log(`💥 Exército foi dissolvido`);
    return of(true);
  }

  // ⚔️ Métodos de Combate
  simularCombate(tropaId1: string, tropaId2: string): Observable<string> {
    return this.obterTropaPorId(tropaId1).pipe(
      map(tropa1 => {
        const tropa2 = this.tropasSubject.value.find(t => t.id === tropaId2);

        if (!tropa1 || !tropa2) {
          return 'Tropas não encontradas para combate';
        }

        // Lógica simplificada de combate
        const forcaTropa1 = (tropa1.ataque + tropa1.defesa + tropa1.velocidade) * (tropa1.vida / tropa1.vidaMaxima);
        const forcaTropa2 = (tropa2.ataque + tropa2.defesa + tropa2.velocidade) * (tropa2.vida / tropa2.vidaMaxima);

        const fatorSorte = Math.random() * 0.3; // 30% de fator sorte
        const resultado = forcaTropa1 * (1 + fatorSorte) > forcaTropa2 * (1 - fatorSorte);

        const vencedor = resultado ? tropa1 : tropa2;
        const perdedor = resultado ? tropa2 : tropa1;

        // Atualizar status das tropas
        this.atualizarTropa(perdedor.id, {
          vida: Math.max(0, perdedor.vida - 30),
          status: perdedor.vida <= 30 ? StatusTropa.FERIDA : perdedor.status
        }).subscribe();

        const mensagem = `⚔️ ${vencedor.nome} venceu ${perdedor.nome}!`;
        console.log(mensagem);
        return mensagem;
      })
    );
  }

  // 💾 Métodos de Persistência
  private atualizarTropas(tropas: Tropa[]): void {
    this.tropasSubject.next(tropas);
    this.salvarTropasNoStorage(tropas);
  }

  private salvarTropasNoStorage(tropas: Tropa[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tropas));
    } catch (error) {
      console.warn('💾 Erro ao salvar tropas no localStorage:', error);
    }
  }

  private carregarTropasDoStorage(): void {
    try {
      const dadosSalvos = localStorage.getItem(this.STORAGE_KEY);
      if (dadosSalvos) {
        const tropas = JSON.parse(dadosSalvos) as Tropa[];
        this.tropasSubject.next(tropas);
        console.log(`📂 ${tropas.length} tropas carregadas do storage`);
      }
    } catch (error) {
      console.warn('📂 Erro ao carregar tropas do localStorage:', error);
    }
  }

  // 🛠️ Métodos Auxiliares
  private gerarId(): string {
    return `tropa_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private obterVidaBasePorTipo(tipo: TipoTropa): number {
    const bases = {
      [TipoTropa.SOLDADO]: 100,
      [TipoTropa.ARQUEIRO]: 80,
      [TipoTropa.CAVALEIRO]: 120,
      [TipoTropa.MAGO]: 70,
      [TipoTropa.TANQUE]: 150
    };
    return bases[tipo] || 100;
  }

  private obterAtaqueBasePorTipo(tipo: TipoTropa): number {
    const bases = {
      [TipoTropa.SOLDADO]: 50,
      [TipoTropa.ARQUEIRO]: 60,
      [TipoTropa.CAVALEIRO]: 70,
      [TipoTropa.MAGO]: 80,
      [TipoTropa.TANQUE]: 30
    };
    return bases[tipo] || 50;
  }

  private obterDefesaBasePorTipo(tipo: TipoTropa): number {
    const bases = {
      [TipoTropa.SOLDADO]: 40,
      [TipoTropa.ARQUEIRO]: 30,
      [TipoTropa.CAVALEIRO]: 50,
      [TipoTropa.MAGO]: 25,
      [TipoTropa.TANQUE]: 80
    };
    return bases[tipo] || 40;
  }

  private obterVelocidadeBasePorTipo(tipo: TipoTropa): number {
    const bases = {
      [TipoTropa.SOLDADO]: 50,
      [TipoTropa.ARQUEIRO]: 70,
      [TipoTropa.CAVALEIRO]: 80,
      [TipoTropa.MAGO]: 40,
      [TipoTropa.TANQUE]: 20
    };
    return bases[tipo] || 50;
  }

  private calcularCustoTropa(tipo: TipoTropa): number {
    const custos = {
      [TipoTropa.SOLDADO]: 100,
      [TipoTropa.ARQUEIRO]: 150,
      [TipoTropa.CAVALEIRO]: 200,
      [TipoTropa.MAGO]: 250,
      [TipoTropa.TANQUE]: 300
    };
    return custos[tipo] || 100;
  }

  private obterHabilidadesBasePorTipo(tipo: TipoTropa): Habilidade[] {
    const habilidadesPorTipo = {
      [TipoTropa.SOLDADO]: [
        { nome: 'Ataque Básico', descricao: 'Golpe com espada', dano: 25, custaMana: 0, recarga: 1 },
        { nome: 'Investida', descricao: 'Ataque corpo a corpo poderoso', dano: 45, custaMana: 10, recarga: 3 }
      ],
      [TipoTropa.ARQUEIRO]: [
        { nome: 'Tiro Certeiro', descricao: 'Disparo preciso', dano: 35, custaMana: 5, recarga: 1 },
        { nome: 'Chuva de Flechas', descricao: 'Múltiplos disparos', dano: 60, custaMana: 15, recarga: 4 }
      ],
      [TipoTropa.CAVALEIRO]: [
        { nome: 'Carga de Cavalaria', descricao: 'Investida montada', dano: 55, custaMana: 15, recarga: 4 },
        { nome: 'Escudo Protetor', descricao: 'Aumenta defesa temporariamente', dano: 0, custaMana: 10, recarga: 5 }
      ],
      [TipoTropa.MAGO]: [
        { nome: 'Bola de Fogo', descricao: 'Projétil mágico flamejante', dano: 50, custaMana: 20, recarga: 2 },
        { nome: 'Raio Gélido', descricao: 'Ataque de gelo que diminui velocidade', dano: 40, custaMana: 15, recarga: 3 }
      ],
      [TipoTropa.TANQUE]: [
        { nome: 'Provocar', descricao: 'Atrai ataques inimigos', dano: 0, custaMana: 5, recarga: 2 },
        { nome: 'Martelo Esmagador', descricao: 'Ataque devastador lento', dano: 80, custaMana: 25, recarga: 6 }
      ]
    };

    return habilidadesPorTipo[tipo] || [];
  }
}
```

---

## 🎮 Projeto do Dia: Sistema de Gerenciamento de Tropas

### 🏗️ Implementação do Componente

```typescript
// comandante.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { TropasService } from '../services/tropas.service';
import { Tropa, TipoTropa, StatusTropa } from '../interfaces/tropa.interface';

@Component({
  selector: 'app-comandante',
  templateUrl: './comandante.component.html',
  styleUrls: ['./comandante.component.css']
})
export class ComandanteComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // 📊 Observables para o template
  tropas$: Observable<Tropa[]>;
  totalTropas$: Observable<number>;
  tropasVivas$: Observable<Tropa[]>;
  forcaMilitar$: Observable<number>;
  estatisticas$: Observable<any>;

  // 🎯 Propriedades para o template
  tiposTropa = Object.values(TipoTropa);
  statusTropa = StatusTropa;
  tropaParaCriar: Partial<Tropa> = {};
  filtroStatus: StatusTropa | 'todos' = 'todos';

  constructor(private tropasService: TropasService) {
    this.tropas$ = this.tropasService.obterTropas();
    this.totalTropas$ = this.tropasService.totalTropas$;
    this.tropasVivas$ = this.tropasService.tropasVivas$;
    this.forcaMilitar$ = this.tropasService.totalForcaMilitar$;

    // Combinando múltiplos observables para estatísticas
    this.estatisticas$ = combineLatest([
      this.tropas$,
      this.tropasVivas$,
      this.forcaMilitar$
    ]).pipe(
      map(([todasTropas, tropasVivas, forca]) => ({
        total: todasTropas.length,
        vivas: tropasVivas.length,
        mortas: todasTropas.length - tropasVivas.length,
        forca,
        custo: todasTropas.reduce((total, tropa) => total + tropa.custo, 0)
      }))
    );
  }

  ngOnInit(): void {
    // Escutar mudanças nas tropas
    this.tropas$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(tropas => {
      console.log(`👑 Comandante observa ${tropas.length} tropas`);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // 🛡️ Métodos de Gerenciamento
  criarNovaTropa(): void {
    if (this.tropaParaCriar.tipo) {
      this.tropasService.criarTropa(this.tropaParaCriar)
        .pipe(takeUntil(this.destroy$))
        .subscribe(tropa => {
          console.log(`✅ Nova tropa criada: ${tropa.nome}`);
          this.tropaParaCriar = {}; // Limpar formulário
        });
    }
  }

  curarTropa(tropa: Tropa): void {
    this.tropasService.curarTropa(tropa.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(sucesso => {
        if (sucesso) {
          console.log(`❤️ ${tropa.nome} foi curada`);
        }
      });
  }

  treinarTropa(tropa: Tropa): void {
    this.tropasService.treinarTropa(tropa.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(sucesso => {
        if (sucesso) {
          console.log(`📚 ${tropa.nome} iniciou treinamento`);
        }
      });
  }

  removerTropa(tropa: Tropa): void {
    if (confirm(`Tem certeza que deseja remover ${tropa.nome} do exército?`)) {
      this.tropasService.removerTropa(tropa.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(sucesso => {
          if (sucesso) {
            console.log(`🗑️ ${tropa.nome} foi removida do exército`);
          }
        });
    }
  }

  simularCombate(tropa1: Tropa, tropa2: Tropa): void {
    this.tropasService.simularCombate(tropa1.id, tropa2.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(resultado => {
        console.log(resultado);
        // Aqui você poderia mostrar um modal com o resultado
      });
  }

  // 🎯 Métodos auxiliares
  obterCorStatus(status: StatusTropa): string {
    const cores = {
      [StatusTropa.ATIVA]: 'green',
      [StatusTropa.FERIDA]: 'orange',
      [StatusTropa.MORTA]: 'red',
      [StatusTropa.TREINANDO]: 'blue',
      [StatusTropa.DESCANSANDO]: 'gray'
    };
    return cores[status] || 'black';
  }

  obterIconeTipo(tipo: TipoTropa): string {
    const icones = {
      [TipoTropa.SOLDADO]: '⚔️',
      [TipoTropa.ARQUEIRO]: '🏹',
      [TipoTropa.CAVALEIRO]: '🐎',
      [TipoTropa.MAGO]: '🔮',
      [TipoTropa.TANQUE]: '🛡️'
    };
    return icones[tipo] || '⚔️';
  }

  trackByTropaId(index: number, tropa: Tropa): string {
    return tropa.id;
  }
}
```

---

## 🧙‍♂️ Analogias Completas

| Conceito Angular | Analogia RPG | Exemplo Prático |
|------------------|-------------|-----------------|
| **Service** | NPC especializado | Ferreiro, Comerciante, Treinador |
| **Dependency Injection** | Sistema de convocação | Chamar NPC quando precisa |
| **Injectable** | Licença para ser convocado | NPC registrado na cidade |
| **Root Provider** | NPC global da cidade | Banco, correios |
| **Module Provider** | NPC da guilda específica | Mestre de armas da guilda |
| **Component Provider** | Familiar pessoal | Pet ou invocação temporária |
| **Injector Tree** | Hierarquia de autorização | Quem pode convocar quem |

---

## 📝 Boas Práticas para Services

### ✅ **Faça Sempre:**
- Use `providedIn: 'root'` para services globais
- Mantenha services focados em uma responsabilidade
- Use observables para estado reativo
- Implemente proper error handling
- Teste services isoladamente
- Use interfaces para contratos bem definidos

### ❌ **Evite:**
- Services com múltiplas responsabilidades
- Lógica de UI dentro de services
- Dependências circulares entre services
- Estado mutável sem controle
- Services sem testes

### 🚀 **Performance:**
- Use `OnPush` em componentes que consomem observables
- Implemente `trackBy` para listas grandes
- Considere lazy loading para módulos com services pesados
- Use `shareReplay()` para compartilhar observables

---

## 🏆 Missão do Dia: "Monte seu Exército Imperial!"

### 📋 **Implementações Obrigatórias:**
1. ✅ Service `TropasService` com DI
2. ✅ CRUD completo de tropas
3. ✅ Sistema de status e cura
4. ✅ Simulação de combate básica
5. ✅ Persistência no localStorage
6. ✅ Observables para estado reativo

### 🎯 **Funcionalidades Extra:**
- Sistema de level up automático
- Diferentes raridades de tropas
- Formações táticas (linhas de combate)
- Sistema de moral das tropas
- Histórico de batalhas

---

## 📋 **Checklist de Aprendizado:**

- [ ] ✅ Entendi o conceito de Services
- [ ] ✅ Implementei Dependency Injection
- [ ] ✅ Testei diferentes escopos de providers
- [ ] ✅ Criei TropasService funcional
- [ ] ✅ Usei observables para estado reativo
- [ ] ✅ Implementei persistência de dados
- [ ] ✅ Testei todas as funcionalidades
- [ ] ✅ Aplicei boas práticas

**🎊 Parabéns! Agora você é um mestre na arte da Injeção de Dependência! 🎊**

---

*"Um grande comandante não luta sozinho - ele sabe convocar os NPCs certos na hora certa! Domine os Services e lidere seu exército digital à vitória!"* 👑⚔️
