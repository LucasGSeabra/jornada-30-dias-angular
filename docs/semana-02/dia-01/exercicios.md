# 📝 Lista de Exercícios - Dia 06: Services Angular e DI

## 🎯 **EXERCÍCIOS OBRIGATÓRIOS**

### 💪 **Exercício 1: Service Básico Completo**
**Objetivo:** Completar a implementação do `TropasService`

**Tarefas:**
1. ✅ Implementar `obterTropaPorId(id: string): Observable<Tropa | undefined>`
2. ✅ Implementar `atualizarTropa(id: string, dados: Partial<Tropa>): Observable<Tropa | null>`
3. ✅ Implementar `removerTropa(id: string): Observable<boolean>`
4. ✅ Completar métodos auxiliares de cálculo de atributos
5. ✅ Implementar persistência no localStorage
6. ✅ Adicionar tratamento de erros

**Critérios de Sucesso:**
- [ ] Service funciona sem erros de compilação
- [ ] Dados persistem entre recargas de página
- [ ] Todos os métodos retornam observables
- [ ] Tratamento de erros implementado

---

### 💪 **Exercício 2: Dependency Injection Prático**
**Objetivo:** Dominar injeção de dependências em diferentes escopos

**Tarefas:**
1. ✅ Criar `InventarioService` com escopo root
2. ✅ Criar `AuditoriaService` com escopo de módulo
3. ✅ Criar `TooltipService` com escopo de componente
4. ✅ Demonstrar diferenças entre os escopos
5. ✅ Implementar comunicação entre services

**Critérios de Sucesso:**
- [ ] Services criados nos escopos corretos
- [ ] Singleton vs múltiplas instâncias demonstrado
- [ ] Services se comunicam corretamente
- [ ] Logs mostram ciclo de vida correto

---

### 💪 **Exercício 3: Observables e Estado Reativo**
**Objetivo:** Implementar estado reativo completo

**Tarefas:**
1. ✅ Criar observables derivados para estatísticas
2. ✅ Implementar filtros reativos (por tipo, status)
3. ✅ Criar stream de notificações em tempo real
4. ✅ Implementar debounce para pesquisas
5. ✅ Usar `combineLatest` para dados combinados

**Critérios de Sucesso:**
- [ ] Interface reage automaticamente a mudanças
- [ ] Filtros funcionam em tempo real
- [ ] Performance otimizada com operadores RxJS
- [ ] Memory leaks evitados com `takeUntil`

---

## 🎯 **EXERCÍCIOS INTERMEDIÁRIOS**

### 🚀 **Exercício 4: Factory Providers Avançados**
**Objetivo:** Implementar providers dinâmicos

**Tarefas:**
1. ✅ Criar factory provider para configuração por ambiente
2. ✅ Implementar factory condicional baseada em feature flags
3. ✅ Criar provider que lê configuração de API
4. ✅ Implementar factory com dependências injetadas

```typescript
// Exemplo esperado:
export function criarApiService(
  config: ConfiguracaoApi,
  logger: LoggerService
): ApiService {
  return new ApiService(config, logger);
}

// Uso no módulo:
{
  provide: ApiService,
  useFactory: criarApiService,
  deps: [CONFIGURACAO_API, LoggerService]
}
```

**Critérios de Sucesso:**
- [ ] Factory providers funcionam corretamente
- [ ] Dependências são injetadas na factory
- [ ] Configurações são aplicadas dinamicamente
- [ ] Testes unitários passando

---

### 🚀 **Exercício 5: Multi Providers**
**Objetivo:** Implementar sistema de plugins/interceptadores

**Tarefas:**
1. ✅ Criar token de injeção para interceptadores
2. ✅ Implementar múltiplos interceptadores:
   - LoggingInterceptor
   - ValidationInterceptor
   - AnalyticsInterceptor
   - CacheInterceptor
3. ✅ Criar pipeline de processamento
4. ✅ Permitir configuração dinâmica de interceptadores

```typescript
// Exemplo esperado:
export const ACAO_INTERCEPTORS = new InjectionToken<AcaoInterceptor[]>('acao.interceptors');

// Service que usa os interceptadores:
constructor(
  @Inject(ACAO_INTERCEPTORS) private interceptors: AcaoInterceptor[]
) {}
```

**Critérios de Sucesso:**
- [ ] Múltiplos interceptadores funcionam
- [ ] Pipeline executa na ordem correta
- [ ] Interceptadores podem ser configurados
- [ ] Possível adicionar novos interceptadores

---

### 🚀 **Exercício 6: Service Comunicação Avançada**
**Objetivo:** Implementar comunicação entre services desacoplados

**Tarefas:**
1. ✅ Criar `EventBusService` para comunicação global
2. ✅ Implementar padrão Observer para notificações
3. ✅ Criar cache reativo entre services
4. ✅ Implementar sincronização de estado

```typescript
// Exemplo esperado:
@Injectable()
export class EventBusService {
  private eventBus = new Subject<AppEvent>();

  emit(event: AppEvent): void { /* */ }
  on<T>(eventType: string): Observable<T> { /* */ }
}
```

**Critérios de Sucesso:**
- [ ] Services se comunicam sem dependência direta
- [ ] Eventos são tipados corretamente
- [ ] Estado sincronizado entre services
- [ ] Fácil adicionar novos ouvintes

---

## 🎯 **EXERCÍCIOS AVANÇADOS**

### 🏆 **Exercício 7: Sistema de Battle Arena Completo**
**Objetivo:** Criar sistema completo usando todos os conceitos

**Funcionalidades Requeridas:**
1. ✅ **BatalhaService** com lógica completa de combate
2. ✅ **HistoricoService** para salvar batalhas
3. ✅ **RankingService** para classificações
4. ✅ **EconomiaService** para recompensas
5. ✅ **NotificacaoService** para eventos em tempo real

**Arquitetura Esperada:**
```
BatalhaArenaModule
├── Services (Module Scope)
│   ├── BatalhaService
│   ├── ArenaConfigService
│   └── RankingService
├── Components
│   ├── ArenaComponent (usa NotificacaoService - Component Scope)
│   └── HistoricoBatalhasComponent
└── Providers
    ├── Factory: ArenaConfigProvider
    ├── Multi: BatalhaInterceptors
    └── Token: ARENA_SETTINGS
```

**Critérios de Sucesso:**
- [ ] Sistema funciona end-to-end
- [ ] Todos os escopos de DI utilizados
- [ ] Observables para tempo real
- [ ] Persistência completa
- [ ] Interface reativa e responsiva

---

### 🏆 **Exercício 8: Testing Services com DI**
**Objetivo:** Criar testes unitários robustos

**Tarefas:**
1. ✅ Testar services com mocks de dependências
2. ✅ Testar factory providers
3. ✅ Testar multi providers
4. ✅ Testar injection tokens
5. ✅ Testar observables complexos

```typescript
// Exemplo esperado:
describe('TropasService', () => {
  let service: TropasService;
  let mockStorageService: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StorageService', ['get', 'set']);

    TestBed.configureTestingModule({
      providers: [
        TropasService,
        { provide: StorageService, useValue: spy },
        { provide: CONFIGURACAO_JOGO, useValue: mockConfig }
      ]
    });
  });
});
```

**Critérios de Sucesso:**
- [ ] 100% cobertura de código
- [ ] Mocks configurados corretamente
- [ ] Testes isolados e independentes
- [ ] Edge cases cobertos

---

## 🎯 **PROJETO FINAL: GUILD MANAGEMENT SYSTEM**

### 📋 **Especificação Completa**

**Contexto:** Sistema completo de gerenciamento de guilda RPG

**Services Necessários:**

#### **Core Services (Root Scope)**
- `AuthService` - Autenticação de jogadores
- `StorageService` - Persistência de dados
- `ConfigService` - Configurações globais
- `LoggerService` - Sistema de logs

#### **Feature Services (Module Scope)**
- `GuildaService` - Gerenciar guilda e membros
- `TropasService` - Sistema de tropas já criado
- `QuestService` - Sistema de missões
- `EconomiaService` - Moedas e transações

#### **UI Services (Component Scope)**
- `NotificacaoService` - Notificações por componente
- `ModalService` - Modais e dialogs
- `LoadingService` - Estados de carregamento

#### **Advanced Patterns**
- Factory providers para configuração por ambiente
- Multi providers para sistema de plugins
- Injection tokens para configurações tipadas
- Service workers para cache offline

### **Funcionalidades Esperadas:**

1. **Dashboard da Guilda**
   - Estatísticas em tempo real
   - Lista de membros ativos
   - Progresso de missões
   - Estado financeiro

2. **Gerenciamento de Tropas** (já implementado)
   - CRUD completo de tropas
   - Sistema de batalhas
   - Treinamento e evolução

3. **Sistema de Missões**
   - Missões disponíveis
   - Progresso em tempo real
   - Recompensas automáticas

4. **Economia da Guilda**
   - Tesouraria compartilhada
   - Histórico de transações
   - Sistema de taxas

### **Critérios de Avaliação:**

#### **Arquitetura (30 pontos)**
- [ ] Services organizados por responsabilidade
- [ ] Escopos de DI utilizados corretamente
- [ ] Comunicação entre services bem estruturada
- [ ] Padrões avançados implementados

#### **Funcionalidades (25 pontos)**
- [ ] Todas as features funcionando
- [ ] Interface reativa
- [ ] Persistência de dados
- [ ] Tratamento de erros

#### **Código (25 pontos)**
- [ ] Código limpo e bem documentado
- [ ] TypeScript usado efetivamente
- [ ] RxJS patterns corretos
- [ ] Performance otimizada

#### **Testes (20 pontos)**
- [ ] Testes unitários abrangentes
- [ ] Mocks e stubs corretos
- [ ] Cenários edge case cobertos
- [ ] Testes de integração

---

## 🎯 **ROTEIRO DE EXECUÇÃO**

### **Dia 1-2: Fundamentos**
1. Complete exercícios 1-3 (básicos)
2. Entenda diferenças entre escopos
3. Pratique observables básicos

### **Dia 3-4: Intermediário**
1. Complete exercícios 4-6
2. Implemente patterns avançados
3. Teste comunicação entre services

### **Dia 5-7: Avançado**
1. Complete exercícios 7-8
2. Inicie projeto final
3. Implemente testes

### **Recursos de Apoio:**
- [Angular Dependency Injection Guide](https://angular.io/guide/dependency-injection)
- [RxJS Operators Documentation](https://rxjs.dev/guide/operators)
- [Angular Testing Guide](https://angular.io/guide/testing)

---

## 💡 **DICAS DE DESENVOLVIMENTO**

### **Debugging DI:**
```typescript
// Use console.log no constructor para debugar injeção
constructor(private service: MinhaService) {
  console.log('Service injetado:', service);
}
```

### **Performance com Observables:**
```typescript
// Use trackBy para listas grandes
trackByFn(index: number, item: any): any {
  return item.id;
}

// Use OnPush para componentes reativos
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### **Evitar Memory Leaks:**
```typescript
// Sempre use takeUntil para unsubscribe
private destroy$ = new Subject<void>();

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

**🚀 Sucesso nos exercícios! Services são a espinha dorsal de aplicações Angular robustas!** 🚀
