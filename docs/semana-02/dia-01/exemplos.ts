// 🎯 Dia 06 - Exemplos Práticos: Services Angular e Dependency Injection
// Tema: "Sistema de Gerenciamento de Tropas RPG"

// TODO: Importar decorators necessários do Angular (@Injectable, @Component, @OnInit, @OnDestroy, @InjectionToken, @Inject)
// TODO: Importar RxJS classes necessárias (BehaviorSubject, Observable, Subject, of)
// TODO: Importar operadores RxJS necessários (map, takeUntil, etc.)

// ================================================
// 📋 INTERFACES E TIPOS
// ================================================

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
  experiencia: number;
}

export enum TipoTropa {
  SOLDADO = 'soldado',
  ARQUEIRO = 'arqueiro',
  CAVALEIRO = 'cavaleiro',
  MAGO = 'mago',
  TANQUE = 'tanque',
}

export enum StatusTropa {
  ATIVA = 'ativa',
  FERIDA = 'ferida',
  MORTA = 'morta',
  TREINANDO = 'treinando',
  DESCANSANDO = 'descansando',
}

export interface Habilidade {
  nome: string;
  descricao: string;
  dano: number;
  custaMana: number;
  recarga: number;
}

export interface EstatisticasExercito {
  totalTropas: number;
  tropasVivas: number;
  tropasMortas: number;
  forcaTotal: number;
  custoTotal: number;
  nivelMedio: number;
}

// ================================================
// 🎯 EXEMPLO 1: SERVICE BÁSICO COM DEPENDENCY INJECTION
// ================================================

// TODO: Implementar decorator @Injectable com providedIn: 'root'
// TODO: Implementar TropasService completo
export class TropasService {
  // TODO: Implementar propriedade STORAGE_KEY para localStorage

  // TODO: Implementar BehaviorSubject<Tropa[]> privado para estado reativo
  // TODO: Implementar observable público tropas$

  constructor() {
    // TODO: Adicionar console.log para debugar criação do service
    // TODO: Chamar método para carregar tropas do storage
  }

  // TODO: Implementar método obterTropas(): Observable<Tropa[]>

  // TODO: Implementar método criarTropa(dados: Partial<Tropa>): Observable<Tropa>
  // Dicas:
  // - Gerar ID único
  // - Usar valores padrão para campos não fornecidos
  // - Adicionar à lista atual
  // - Atualizar BehaviorSubject
  // - Salvar no localStorage
  // - Retornar observable da nova tropa

  // TODO: Implementar método obterTropaPorId(id: string): Observable<Tropa | undefined>

  // TODO: Implementar método atualizarTropa(id: string, dados: Partial<Tropa>): Observable<Tropa | null>

  // TODO: Implementar método removerTropa(id: string): Observable<boolean>

  // TODO: Implementar métodos auxiliares privados:
  // - gerarId(): string
  // - obterVidaBasePorTipo(tipo: TipoTropa): number
  // - obterAtaqueBasePorTipo(tipo: TipoTropa): number
  // - obterDefesaBasePorTipo(tipo: TipoTropa): number
  // - obterVelocidadeBasePorTipo(tipo: TipoTropa): number
  // - calcularCustoTropa(tipo: TipoTropa): number
  // - obterHabilidadesBasePorTipo(tipo: TipoTropa): Habilidade[]
  // - atualizarTropas(tropas: Tropa[]): void
  // - salvarTropasNoStorage(tropas: Tropa[]): void
  // - carregarTropasDoStorage(): void
}

// ================================================
// 🎯 EXEMPLO 2: SERVICE COM DEPENDENCY INJECTION
// ================================================

// TODO: Implementar decorator @Injectable com providedIn: 'root'
// TODO: Implementar EstatisticasService que injeta TropasService
export class EstatisticasService {
  // TODO: Injetar TropasService no constructor
  constructor(/* TODO: injetar dependências */) {
    // TODO: Adicionar console.log para debugar injeção de dependência
  }

  // TODO: Implementar obterEstatisticas(): Observable<EstatisticasExercito>
  // Usar tropasService.obterTropas() com pipe e map para calcular estatísticas

  // TODO: Implementar obterForcaTotalAtiva(): Observable<number>
  // Filtrar apenas tropas ativas e somar ataque + defesa

  // TODO: Implementar obterTropasPorTipo(tipo: TipoTropa): Observable<Tropa[]>
  // Filtrar tropas por tipo específico

  // TODO: Implementar obterTropasPorStatus(status: StatusTropa): Observable<Tropa[]>
  // Filtrar tropas por status específico
}

// ================================================
// 🎯 EXEMPLO 3: DIFERENTES ESCOPOS DE PROVIDERS
// ================================================

// TODO: Implementar decorator @Injectable() SEM providedIn (escopo de módulo)
// TODO: Implementar CombateService
export class CombateService {
  // TODO: Implementar propriedade batalhaAtual opcional

  constructor() {
    // TODO: Console.log para mostrar criação no escopo de módulo
  }

  // TODO: Implementar iniciarCombate(tropa1Id: string, tropa2Id: string): Observable<string>
  // Retornar observable com resultado simulado do combate

  // TODO: Implementar simularDano(tropaId: string, dano: number): void
  // Método auxiliar para aplicar dano em tropa
}

// TODO: Implementar decorator @Injectable() SEM providedIn (escopo de componente)
// TODO: Implementar NotificacaoService
export class NotificacaoService {
  // TODO: Implementar array privado de notificações

  constructor() {
    // TODO: Console.log para mostrar criação no escopo de componente
  }

  // TODO: Implementar adicionarNotificacao(mensagem: string): void
  // Adicionar timestamp à mensagem

  // TODO: Implementar obterNotificacoes(): string[]
  // Retornar cópia do array

  // TODO: Implementar limparNotificacoes(): void
  // Limpar array de notificações
}

// ================================================
// 🎯 EXEMPLO 4: INJECTION TOKENS E FACTORY PROVIDERS
// ================================================

// TODO: Criar InjectionToken para ConfiguracaoJogo
// export const CONFIGURACAO_JOGO = new InjectionToken<ConfiguracaoJogo>('configuracao.jogo');

export interface ConfiguracaoJogo {
  maxTropas: number;
  custoBaseTropa: number;
  tempoTreinamento: number;
  dificuldade: 'facil' | 'medio' | 'dificil';
}

// TODO: Implementar factory function criarConfiguracaoJogo(): ConfiguracaoJogo
export function criarConfiguracaoJogo(): ConfiguracaoJogo {
  // TODO: Retornar objeto com configurações padrão
  return {
    maxTropas: 0, // TODO: Implementar valor padrão
    custoBaseTropa: 0, // TODO: Implementar valor padrão
    tempoTreinamento: 0, // TODO: Implementar valor padrão
    dificuldade: 'facil', // TODO: Implementar valor padrão
  };
}

// TODO: Implementar service que usa injection token
// TODO: Implementar decorator @Injectable com providedIn: 'root'
export class ConfiguracaoService {
  // TODO: Injetar CONFIGURACAO_JOGO usando @Inject
  constructor(/* TODO: injetar configuração com @Inject */) {
    // TODO: Console.log da configuração recebida
  }

  // TODO: Implementar podeAdicionarTropa(totalAtual: number): boolean
  // Verificar se total atual é menor que máximo permitido

  // TODO: Implementar obterCustoBaseTropa(): number
  // Retornar custo base da configuração

  // TODO: Implementar obterTempoTreinamento(): number
  // Retornar tempo de treinamento da configuração

  // TODO: Implementar obterDificuldade(): string
  // Retornar nível de dificuldade
}

// ================================================
// 🎯 EXEMPLO 5: COMPONENTE COM DEPENDENCY INJECTION
// ================================================

// TODO: Implementar decorator @Component com:
// - selector: 'app-comandante-tropas'
// - template com estrutura HTML básica (usar template string)
// - styles com CSS básico
// - providers: [NotificacaoService, { provide: CONFIGURACAO_JOGO, useFactory: criarConfiguracaoJogo }]
export class ComandanteTropasComponent /* TODO: implementar OnInit, OnDestroy */ {
  // TODO: Implementar Subject para unsubscribe

  // TODO: Implementar observables para o template
  // tropas$: Observable<Tropa[]>
  // estatisticas$: Observable<EstatisticasExercito>

  // TODO: Implementar propriedades para formulário
  // tiposTropa = Object.values(TipoTropa)
  // tipoSelecionado: TipoTropa | '' = ''
  // nomeTropa = ''

  constructor() // TODO: Injetar todos os services necessários:
  // - TropasService (root scope)
  // - EstatisticasService (root scope)
  // - CombateService (module scope)
  // - NotificacaoService (component scope)
  // - ConfiguracaoService (root scope)
  // - ConfiguracaoJogo via @Inject(CONFIGURACAO_JOGO)
  {
    // TODO: Console.log da criação do componente
    // TODO: Inicializar observables
  }

  ngOnInit(): void {
    // TODO: Adicionar notificação inicial
    // TODO: Escutar mudanças nas tropas com takeUntil(destroy$)
  }

  ngOnDestroy(): void {
    // TODO: Implementar cleanup com destroy$.next() e complete()
  }

  // TODO: Implementar criarNovaTropa(): void
  // - Validar se tipo foi selecionado
  // - Verificar limite usando ConfiguracaoService
  // - Chamar TropasService.criarTropa()
  // - Adicionar notificação de sucesso
  // - Limpar formulário

  // TODO: Implementar curarTropa(tropa: Tropa): void
  // Simular cura aumentando vida da tropa

  // TODO: Implementar treinarTropa(tropa: Tropa): void
  // Simular treinamento com setTimeout usando tempo da configuração

  // TODO: Implementar removerTropa(tropa: Tropa): void
  // Confirmar com usuário e remover tropa

  // TODO: Implementar métodos auxiliares:
  // - obterIconeTipo(tipo: TipoTropa): string
  // - obterCorStatus(status: StatusTropa): string
  // - trackByTropaId(index: number, tropa: Tropa): string
  // - obterNotificacoes(): string[]
  // - limparNotificacoes(): void
}

// ================================================
// 🎯 EXEMPLO 6: MÓDULO COM PROVIDERS
// ================================================

// TODO: Importar NgModule, CommonModule, FormsModule

// TODO: Implementar decorator @NgModule com:
// - declarations: [ComandanteTropasComponent]
// - imports: [CommonModule, FormsModule]
// - providers: [CombateService, { provide: CONFIGURACAO_JOGO, useFactory: criarConfiguracaoJogo }]
// - exports: [ComandanteTropasComponent]
export class TropasModule {}

// ================================================
// 🎯 EXERCÍCIOS PRÁTICOS PARA IMPLEMENTAR
// ================================================

// 💪 EXERCÍCIO 1: Completar todos os TODOs acima
// Implemente todos os métodos e funcionalidades marcados com TODO

// 💪 EXERCÍCIO 2: Sistema de Experiência
// TODO: Criar ExperienciaService que:
// - Gerencia XP das tropas
// - Implementa level up automático
// - Calcula boost de atributos por nível
// - Persiste dados de experiência

// 💪 EXERCÍCIO 3: Sistema de Batalha Avançado
// TODO: Melhorar CombateService para:
// - Lógica realista de combate baseada em atributos
// - Sistema de turnos
// - Aplicar dano real nas tropas
// - Histórico de batalhas
// - Recompensas por vitórias

// 💪 EXERCÍCIO 4: Multi Provider para Interceptadores
// TODO: Criar sistema de interceptadores:
// - Token de injeção BATALHA_INTERCEPTORS
// - LoggingInterceptor
// - ValidationInterceptor
// - AnalyticsInterceptor
// - Pipeline de processamento no CombateService

// 💪 EXERCÍCIO 5: Factory Provider Avançado
// TODO: Criar factory provider que:
// - Lê configuração de environment
// - Aplica configurações diferentes por ambiente (dev/prod)
// - Injeta dependências na factory function

// 💪 EXERCÍCIO 6: Service Worker para Cache
// TODO: Implementar CacheService que:
// - Gerencia cache de tropas
// - Sincronização offline/online
// - Estratégias de cache (cache-first, network-first)
// - Invalidação de cache inteligente

// 🏆 DESAFIO FINAL: Guild Management System
// TODO: Expandir para sistema completo de guilda:
// - GuildaService (gerenciar membros)
// - QuestService (missões e recompensas)
// - EconomiaService (moedas e transações)
// - RankingService (classificações)
// - ChatService (comunicação em tempo real)
// - Todos com DI, observables e persistência

// ================================================
// 🎯 TEMPLATE HTML PARA O COMPONENTE
// ================================================

/*
TODO: Use este template no ComandanteTropasComponent:

<div class="comandante-container">
  <h2>👑 Comandante Imperial</h2>
  
  <!-- Estatísticas -->
  <div class="estatisticas" *ngIf="estatisticas$ | async as stats">
    <div class="stat-card">
      <h3>📊 Estatísticas do Exército</h3>
      <p>Total de Tropas: {{ stats.totalTropas }}</p>
      <p>Tropas Vivas: {{ stats.tropasVivas }}</p>
      <p>Força Total: {{ stats.forcaTotal }}</p>
      <p>Nível Médio: {{ stats.nivelMedio | number:'1.1-1' }}</p>
    </div>
  </div>

  <!-- Formulário de criação -->
  <div class="criar-tropa">
    <h3>🛡️ Recrutar Nova Tropa</h3>
    <select [(ngModel)]="tipoSelecionado">
      <option value="">Selecione o tipo...</option>
      <option *ngFor="let tipo of tiposTropa" [value]="tipo">
        {{ obterIconeTipo(tipo) }} {{ tipo | titlecase }}
      </option>
    </select>
    <input 
      [(ngModel)]="nomeTropa" 
      placeholder="Nome da tropa"
      type="text"
    >
    <button (click)="criarNovaTropa()">➕ Recrutar</button>
  </div>

  <!-- Lista de tropas -->
  <div class="tropas-lista">
    <h3>🏰 Suas Tropas</h3>
    <div 
      *ngFor="let tropa of tropas$ | async; trackBy: trackByTropaId"
      class="tropa-card"
    >
      <div class="tropa-info">
        <h4>{{ obterIconeTipo(tropa.tipo) }} {{ tropa.nome }}</h4>
        <p>Nível {{ tropa.nivel }} | {{ tropa.tipo | titlecase }}</p>
        <small>❤️ {{ tropa.vida }}/{{ tropa.vidaMaxima }}</small>
      </div>
      
      <div class="tropa-acoes">
        <button (click)="curarTropa(tropa)">❤️ Curar</button>
        <button (click)="treinarTropa(tropa)">📚 Treinar</button>
        <button (click)="removerTropa(tropa)">🗑️ Dispensar</button>
      </div>
    </div>
  </div>

  <!-- Notificações -->
  <div class="notificacoes">
    <h3>🔔 Notificações</h3>
    <div *ngFor="let notificacao of obterNotificacoes()" class="notificacao">
      {{ notificacao }}
    </div>
    <button (click)="limparNotificacoes()">🧹 Limpar</button>
  </div>
</div>
*/

// ================================================
// 🎯 CSS BÁSICO PARA O COMPONENTE
// ================================================

/*
TODO: Use estes estilos no ComandanteTropasComponent:

.comandante-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.estatisticas {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.stat-card {
  background: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.criar-tropa {
  background: #e8f5e8;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.criar-tropa select, .criar-tropa input, .criar-tropa button {
  margin: 5px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tropas-lista {
  background: #fff8dc;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.tropa-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tropa-acoes button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background: #4CAF50;
  color: white;
}

.notificacoes {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
}

.notificacao {
  padding: 5px;
  margin: 2px 0;
  background: white;
  border-left: 3px solid #2196F3;
  border-radius: 3px;
  font-size: 0.9em;
}
*/

/*
🎯 OBJETIVOS DOS EXERCÍCIOS:
- Dominar criação e configuração de Services
- Entender completamente Dependency Injection  
- Praticar diferentes escopos de providers
- Usar RxJS para estado reativo
- Implementar padrões avançados (Factory, Multi, Injection Tokens)
- Criar arquitetura robusta e escalável

🚀 PRÓXIMOS PASSOS:
1. Complete todos os TODOs nos exemplos
2. Implemente os exercícios práticos
3. Teste todas as funcionalidades
4. Refatore para melhor estrutura
5. Adicione testes unitários
6. Documente sua implementação

💡 DICAS:
- Use console.log() para debugar injeção de dependências
- Observe quando services são criados (singleton vs múltiplas instâncias)
- Teste diferentes escopos de providers
- Use TypeScript interfaces para contratos bem definidos
- Implemente proper error handling
- Use takeUntil() para evitar memory leaks
- Implemente trackBy para performance em listas grandes

🏆 BOA SORTE IMPLEMENTANDO SEU SISTEMA DE GERENCIAMENTO DE TROPAS! 🏆
*/

/*
🎯 OBJETIVOS DOS EXERCÍCIOS:
- Dominar criação e configuração de Services
- Entender completamente Dependency Injection  
- Praticar diferentes escopos de providers
- Usar RxJS para estado reativo
- Implementar padrões avançados (Factory, Multi, Injection Tokens)
- Criar arquitetura robusta e escalável

🚀 PRÓXIMOS PASSOS:
1. Complete todos os TODOs nos exemplos
2. Implemente os exercícios práticos
3. Teste todas as funcionalidades
4. Refatore para melhor estrutura
5. Adicione testes unitários
6. Documente sua implementação

� DICAS:
- Use console.log() para debugar injeção de dependências
- Observe quando services são criados (singleton vs múltiplas instâncias)
- Teste diferentes escopos de providers
- Use TypeScript interfaces para contratos bem definidos
- Implemente proper error handling
- Use takeUntil() para evitar memory leaks
- Implemente trackBy para performance em listas grandes

🏆 BOA SORTE IMPLEMENTANDO SEU SISTEMA DE GERENCIAMENTO DE TROPAS! 🏆
*/
