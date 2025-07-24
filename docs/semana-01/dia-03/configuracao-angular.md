# 🔧 Configuração Extra: AppModule e Rotas no Angular

> **📌 Nota**: Este é um guia prático para configurar seu projeto Angular e fazer seus componentes aparecerem na tela. Use junto com os exercícios de Generics & Utility Types do Dia 03.

## 🎯 O que você vai aprender

- Como configurar o AppModule (Angular clássico)
- Como configurar rotas standalone (Angular moderno)
- Como fazer seus componentes renderizarem na tela
- Diferenças entre as duas abordagens
- **Teoria completa sobre arquitetura Angular**
- **Passo a passo detalhado do zero**

---

## 📚 Parte Teórica: Entendendo a Arquitetura Angular

### 🏗️ Conceitos Fundamentais

#### 1. **O que é um Component?**
Um component é a unidade básica de uma aplicação Angular. Ele combina:
- **Template** (HTML): O que o usuário vê
- **Class** (TypeScript): A lógica e os dados
- **Styles** (CSS/SCSS): Como aparece visualmente
- **Metadata** (Decorator @Component): Configurações

```typescript
@Component({
  selector: 'app-exemplo',      // Como usar: <app-exemplo></app-exemplo>
  templateUrl: './exemplo.html', // Onde está o HTML
  styleUrls: ['./exemplo.css']   // Onde estão os estilos
})
export class ExemploComponent {
  // Lógica e dados aqui
}
```

#### 2. **O que é o AppModule?**
O AppModule é o **módulo raiz** que inicia sua aplicação Angular. Ele:
- **Declara** quais components, directives e pipes pertencem ao módulo
- **Importa** outros módulos (como BrowserModule, RouterModule)
- **Exporta** components que outros módulos podem usar
- **Fornece** services através de providers
- **Bootstrap** define qual component inicia a aplicação

```typescript
@NgModule({
  declarations: [Components, Directives, Pipes],  // O que pertence a este módulo
  imports: [OutrosModulos],                       // Módulos que este módulo precisa
  exports: [ComponentsParaCompartilhar],          // O que outros módulos podem usar
  providers: [Services],                          // Services disponíveis
  bootstrap: [ComponenteInicial]                  // Component que inicia a app
})
```

#### 3. **O que são Rotas?**
Rotas definem **qual component mostrar** baseado na **URL atual**. É como um mapa:
- URL `/home` → Mostra HomeComponent
- URL `/sobre` → Mostra SobreComponent
- URL `/produtos/123` → Mostra ProdutoComponent com ID 123

#### 4. **Standalone Components: A Nova Era**
A partir do Angular 14, você pode criar components **independentes** que:
- Não precisam ser declarados em um módulo
- Importam suas próprias dependências
- São mais leves e modulares
- Facilitam o tree-shaking (remoção de código não usado)

### 🔄 Ciclo de Vida de uma Aplicação Angular

1. **Bootstrap** → Angular inicia e cria o component raiz
2. **Routing** → Angular verifica a URL e decide qual component mostrar
3. **Component Creation** → Angular cria o component necessário
4. **Template Rendering** → Angular renderiza o HTML do component
5. **Event Binding** → Angular escuta eventos do usuário
6. **Change Detection** → Angular verifica se algo mudou e atualiza a tela

---

## 🚀 Passo a Passo Completo: Do Zero ao Herói

### 📋 Etapa 1: Preparação do Ambiente

#### 1.1. Instalar Node.js e Angular CLI
```bash
# Verificar se Node.js está instalado
node --version
npm --version

# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Verificar instalação
ng version
```

#### 1.2. Criar Novo Projeto Angular
```bash
# Criar projeto com roteamento
ng new meu-app-anime --routing --style=scss

# Navegar para o projeto
cd meu-app-anime

# Abrir no VS Code
code .
```

#### 1.3. Entender a Estrutura Criada
```
meu-app-anime/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Component raiz
│   │   ├── app.component.html     # Template do component raiz
│   │   ├── app.component.scss     # Estilos do component raiz
│   │   ├── app.module.ts          # Módulo raiz (se não for standalone)
│   │   ├── app.routes.ts          # Configuração de rotas
│   │   └── app.config.ts          # Configuração da aplicação
│   ├── main.ts                    # Ponto de entrada da aplicação
│   ├── index.html                 # HTML principal
│   └── styles.scss                # Estilos globais
├── angular.json                   # Configurações do Angular CLI
├── package.json                   # Dependências do projeto
└── tsconfig.json                  # Configurações do TypeScript
```

### 📋 Etapa 2: Escolher Abordagem (AppModule vs Standalone)

#### Opção A: Continuar com AppModule (Mais Tradicional)
Se você escolheu **NÃO** usar standalone components:

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],    // Components declarados aqui
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Opção B: Migrar para Standalone (Mais Moderno)
Se você quer usar standalone components:

```typescript
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
```

### 📋 Etapa 3: Criar Seus Primeiros Components

#### 3.1. Criar Component de Lista de Animes
```bash
# Para AppModule
ng generate component components/anime-lista

# Para Standalone
ng generate component components/anime-lista --standalone
```

#### 3.2. Criar Component de Detalhes do Anime
```bash
# Para AppModule  
ng generate component components/anime-detalhes

# Para Standalone
ng generate component components/anime-detalhes --standalone
```

#### 3.3. Criar Interfaces TypeScript
```bash
# Criar arquivo de interfaces
ng generate interface interfaces/anime
```

```typescript
// src/app/interfaces/anime.ts
export interface Anime {
  id: number;
  titulo: string;
  sinopse: string;
  episodios: number;
  nota: number;
  status: 'assistindo' | 'concluido' | 'pausado' | 'planejo-assistir';
  generos: string[];
  imagemUrl: string;
  anoLancamento: number;
}

// Aplicando Utility Types do Dia 03!
export type AnimeResumo = Pick<Anime, 'id' | 'titulo' | 'nota' | 'status'>;
export type AnimeNovo = Omit<Anime, 'id'>;
export type AnimeAtualizacao = Partial<AnimeNovo>;
```

### 📋 Etapa 4: Configurar Rotas Passo a Passo

#### 4.1. Para AppModule (app-routing.module.ts)
```typescript
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListaComponent } from './components/anime-lista/anime-lista.component';
import { AnimeDetalhesComponent } from './components/anime-detalhes/anime-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/animes', pathMatch: 'full' },
  { path: 'animes', component: AnimeListaComponent },
  { path: 'anime/:id', component: AnimeDetalhesComponent },
  { path: '**', redirectTo: '/animes' }  // Fallback para rotas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### 4.2. Para Standalone (app.routes.ts)
```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AnimeListaComponent } from './components/anime-lista/anime-lista.component';
import { AnimeDetalhesComponent } from './components/anime-detalhes/anime-detalhes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/animes', pathMatch: 'full' },
  { path: 'animes', component: AnimeListaComponent },
  { path: 'anime/:id', component: AnimeDetalhesComponent },
  { path: '**', redirectTo: '/animes' }
];
```

### 📋 Etapa 5: Implementar o AppComponent

#### 5.1. Template Principal (app.component.html)
```html
<!-- src/app/app.component.html -->
<div class="app-container">
  <!-- Header com navegação -->
  <header class="navbar">
    <div class="nav-container">
      <h1 class="logo">🎌 AnimeTracker</h1>
      <nav class="nav-links">
        <a routerLink="/animes" routerLinkActive="active">Lista de Animes</a>
        <a routerLink="/favoritos" routerLinkActive="active">Favoritos</a>
      </nav>
    </div>
  </header>

  <!-- Conteúdo principal -->
  <main class="main-content">
    <!-- Aqui renderizam os components das rotas -->
    <router-outlet></router-outlet>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2025 AnimeTracker | Dia 03 - Generics & Utility Types</p>
  </footer>
</div>
```

#### 5.2. Estilos do AppComponent (app.component.scss)
```scss
/* src/app/app.component.scss */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover, &.active {
        background-color: rgba(255,255,255,0.2);
      }
    }
  }
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.footer {
  background: #f8f9fa;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  color: #6c757d;
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .main-content {
    padding: 1rem;
  }
}
```

#### 5.3. Lógica do AppComponent (app.component.ts)

**Para AppModule:**
```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnimeTracker - Jornada 30 Dias Angular';
  
  constructor() {
    console.log('🎌 App Angular iniciada!');
  }
}
```

**Para Standalone:**
```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnimeTracker - Jornada 30 Dias Angular';
  
  constructor() {
    console.log('🎌 App Angular iniciada!');
  }
}
```

### 📋 Etapa 6: Implementar Component de Lista

```typescript
// src/app/components/anime-lista/anime-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Anime, AnimeResumo } from '../../interfaces/anime';

@Component({
  selector: 'app-anime-lista',
  standalone: true, // Remove se usar AppModule
  imports: [CommonModule, RouterLink], // Remove se usar AppModule
  template: `
    <div class="anime-lista-container">
      <h2>📺 Minha Lista de Animes</h2>
      
      <!-- Filtros -->
      <div class="filtros">
        <button 
          *ngFor="let filtro of filtros" 
          [class.active]="filtroAtivo === filtro"
          (click)="definirFiltro(filtro)">
          {{ filtro | titlecase }}
        </button>
      </div>

      <!-- Estatísticas -->
      <div class="stats">
        <div class="stat-card">
          <span class="stat-number">{{ animesFiltrados.length }}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ calcularMediaNotas() }}</span>
          <span class="stat-label">Nota Média</span>
        </div>
      </div>

      <!-- Grid de Animes -->
      <div class="animes-grid">
        <div 
          *ngFor="let anime of animesFiltrados; trackBy: trackByAnimeId" 
          class="anime-card"
          [class]="anime.status">
          
          <div class="anime-image">
            <img [src]="anime.imagemUrl" [alt]="anime.titulo" />
          </div>
          
          <div class="anime-info">
            <h3>{{ anime.titulo }}</h3>
            <p class="sinopse">{{ anime.sinopse | slice:0:100 }}...</p>
            
            <div class="anime-meta">
              <span class="nota">⭐ {{ anime.nota }}/10</span>
              <span class="episodios">📺 {{ anime.episodios }} eps</span>
              <span class="ano">📅 {{ anime.anoLancamento }}</span>
            </div>
            
            <div class="generos">
              <span *ngFor="let genero of anime.generos" class="genero-tag">
                {{ genero }}
              </span>
            </div>
            
            <div class="actions">
              <button 
                [routerLink]="['/anime', anime.id]"
                class="btn-detalhes">
                Ver Detalhes
              </button>
              <button 
                (click)="alterarStatus(anime)"
                class="btn-status">
                {{ getProximoStatus(anime.status) }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vazio -->
      <div *ngIf="animesFiltrados.length === 0" class="empty-state">
        <h3>🔍 Nenhum anime encontrado</h3>
        <p>Tente alterar os filtros ou adicionar novos animes à sua lista.</p>
      </div>
    </div>
  `,
  styleUrls: ['./anime-lista.component.scss']
})
export class AnimeListaComponent implements OnInit {
  // Aplicando Generics do Dia 03!
  animes: Anime[] = [];
  filtroAtivo: string = 'todos';
  filtros: string[] = ['todos', 'assistindo', 'concluido', 'pausado', 'planejo-assistir'];

  ngOnInit(): void {
    this.carregarAnimes();
  }

  carregarAnimes(): void {
    // Simulando dados - em um app real, viria de um service
    this.animes = [
      {
        id: 1,
        titulo: 'Attack on Titan',
        sinopse: 'Humanidade luta contra titãs gigantes em um mundo pós-apocalíptico.',
        episodios: 87,
        nota: 9.8,
        status: 'concluido',
        generos: ['Ação', 'Drama', 'Fantasia'],
        imagemUrl: 'https://via.placeholder.com/300x400?text=AOT',
        anoLancamento: 2013
      },
      {
        id: 2,
        titulo: 'Demon Slayer',
        sinopse: 'Tanjiro busca curar sua irmã que foi transformada em demônio.',
        episodios: 26,
        nota: 9.2,
        status: 'assistindo',
        generos: ['Ação', 'Supernatural', 'Histórico'],
        imagemUrl: 'https://via.placeholder.com/300x400?text=Demon+Slayer',
        anoLancamento: 2019
      },
      {
        id: 3,
        titulo: 'One Piece',
        sinopse: 'Monkey D. Luffy explora os mares em busca do tesouro One Piece.',
        episodios: 1000,
        nota: 9.5,
        status: 'pausado',
        generos: ['Ação', 'Aventura', 'Comédia'],
        imagemUrl: 'https://via.placeholder.com/300x400?text=One+Piece',
        anoLancamento: 1999
      }
    ];
  }

  // Usando Generics para type safety
  get animesFiltrados(): Anime[] {
    if (this.filtroAtivo === 'todos') {
      return this.animes;
    }
    return this.animes.filter(anime => anime.status === this.filtroAtivo);
  }

  definirFiltro(filtro: string): void {
    this.filtroAtivo = filtro;
  }

  // Usando Utility Types
  alterarStatus(anime: Anime): void {
    const statusMap: Record<Anime['status'], Anime['status']> = {
      'planejo-assistir': 'assistindo',
      'assistindo': 'pausado',
      'pausado': 'concluido',
      'concluido': 'planejo-assistir'
    };
    
    anime.status = statusMap[anime.status];
  }

  getProximoStatus(statusAtual: Anime['status']): string {
    const statusMap: Record<Anime['status'], string> = {
      'planejo-assistir': 'Começar',
      'assistindo': 'Pausar',
      'pausado': 'Finalizar',
      'concluido': 'Reassistir'
    };
    
    return statusMap[statusAtual];
  }

  calcularMediaNotas(): string {
    if (this.animesFiltrados.length === 0) return '0.0';
    
    const soma = this.animesFiltrados.reduce((acc, anime) => acc + anime.nota, 0);
    return (soma / this.animesFiltrados.length).toFixed(1);
  }

  // Performance optimization
  trackByAnimeId(index: number, anime: Anime): number {
    return anime.id;
  }
}
```

### 📋 Etapa 7: Estilos do Component de Lista

```scss
/* src/app/components/anime-lista/anime-lista.component.scss */
.anime-lista-container {
  padding: 2rem 0;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
    font-size: 2.5rem;
  }
}

.filtros {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  button {
    padding: 0.75rem 1.5rem;
    border: 2px solid #ddd;
    background: white;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    text-transform: capitalize;

    &:hover {
      border-color: #667eea;
      color: #667eea;
    }

    &.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }
  }
}

.stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  .stat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
}

.animes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.anime-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid #ddd;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }

  &.assistindo { border-left-color: #ffc107; }
  &.concluido { border-left-color: #28a745; }
  &.pausado { border-left-color: #dc3545; }
  &.planejo-assistir { border-left-color: #6f42c1; }

  .anime-image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .anime-info {
    padding: 1.5rem;

    h3 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.3rem;
      line-height: 1.4;
    }

    .sinopse {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .anime-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;

      span {
        background: #f8f9fa;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        color: #495057;
        font-weight: 500;
      }
    }

    .generos {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;

      .genero-tag {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }

    .actions {
      display: flex;
      gap: 1rem;

      button {
        flex: 1;
        padding: 0.75rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;

        &.btn-detalhes {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
          }
        }

        &.btn-status {
          background: #f8f9fa;
          color: #495057;
          border: 2px solid #dee2e6;

          &:hover {
            background: #e9ecef;
            border-color: #adb5bd;
          }
        }
      }
    }
  }
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;

  h3 {
    margin-bottom: 1rem;
    color: #495057;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .animes-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stats {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .filtros {
    justify-content: center;
    
    button {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }

  .anime-card .anime-info .actions {
    flex-direction: column;
  }
}
```

### 📋 Etapa 8: Testar e Executar

```bash
# Executar aplicação
ng serve

# Abrir no navegador
# http://localhost:4200
```

### 📋 Etapa 9: Próximos Passos Avançados

1. **Criar Services** para gerenciar dados
2. **Implementar HttpClient** para APIs reais
3. **Adicionar Reactive Forms** para formulários
4. **Implementar Guards** para proteção de rotas
5. **Adicionar Interceptors** para requisições HTTP
6. **Configurar Lazy Loading** para performance
7. **Implementar PWA** para funcionar offline

---

## 📋 Pré-requisitos

- Projeto Angular criado (`ng new meu-projeto`)
- Conhecimento básico de TypeScript
- Componentes criados (mesmo que simples)
- **Node.js 18+ instalado**
- **Angular CLI 17+ instalado**
- **Editor de código (VS Code recomendado)**

---

## 🎓 Teoria Avançada: Services e Injeção de Dependências

### 💉 O que é Dependency Injection?

Dependency Injection (DI) é um padrão onde uma classe recebe suas dependências de fontes externas em vez de criá-las internamente.

```typescript
// ❌ SEM Dependency Injection
class AnimeComponent {
  private http = new HttpClient(); // Acoplado!
  
  constructor() {
    // Component é responsável por criar a dependência
  }
}

// ✅ COM Dependency Injection
class AnimeComponent {
  constructor(private http: HttpClient) {
    // Angular injeta a dependência automaticamente
  }
}
```

### 🛠️ Criando e Usando Services

Services são classes que contêm lógica de negócio e podem ser injetadas em components:

```typescript
// src/app/services/anime.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root' // Singleton em toda a aplicação
})
export class AnimeService {
  private animes: Anime[] = []; // Simulando banco de dados

  // Usando Generics para type safety!
  obterTodos<T extends Anime>(): Observable<T[]> {
    return of(this.animes as T[]);
  }

  obterPorId(id: number): Observable<Anime | undefined> {
    const anime = this.animes.find(a => a.id === id);
    return of(anime);
  }

  // Usando Utility Types!
  adicionar(novoAnime: Omit<Anime, 'id'>): Observable<Anime> {
    const anime: Anime = {
      id: this.proximoId(),
      ...novoAnime
    };
    this.animes.push(anime);
    return of(anime);
  }

  atualizar(id: number, updates: Partial<Anime>): Observable<Anime | null> {
    const index = this.animes.findIndex(a => a.id === id);
    if (index === -1) return of(null);
    
    this.animes[index] = { ...this.animes[index], ...updates };
    return of(this.animes[index]);
  }

  private proximoId(): number {
    return Math.max(...this.animes.map(a => a.id), 0) + 1;
  }
}
```

### 🔄 Observables e RxJS

Angular usa RxJS para programação reativa:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

export class ExemploComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    // ✅ Unsubscribe automático
    this.animeService.obterTodos()
      .pipe(takeUntil(this.destroy$))
      .subscribe(animes => {
        console.log('Animes carregados:', animes);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

---

## 🏗️ Abordagem 1: AppModule (Angular Clássico)

### 1. Estrutura do AppModule

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MeuComponente } from './meu-componente/meu-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponente    // ⭐ Declare seus componentes aqui
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MeuComponente },           // Página inicial
      { path: 'sobre', component: OutroComponente },    // Rota /sobre
      { path: '**', redirectTo: '' }                    // Fallback
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Template do AppComponent

```html
<!-- src/app/app.component.html -->
<div class="container">
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/sobre">Sobre</a>
  </nav>
  
  <main>
    <!-- 🎯 Aqui renderizam os componentes das rotas -->
    <router-outlet></router-outlet>
  </main>
</div>
```

### 3. Exemplo de Componente

```typescript
// src/app/meu-componente/meu-componente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: `
    <div class="card">
      <h1>🎌 Meu Componente</h1>
      <p>Este componente está renderizando!</p>
    </div>
  `,
  styles: [`
    .card {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin: 20px 0;
    }
  `]
})
export class MeuComponente { }
```

---

## 🚀 Abordagem 2: Standalone Components (Angular Moderno)

### 1. Configuração Principal

```typescript
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // ⭐ Configura as rotas
  ]
});
```

### 2. Definição das Rotas

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente.component';
import { OutroComponente } from './outro-componente/outro-componente.component';

export const routes: Routes = [
  { path: '', component: MeuComponente },
  { path: 'sobre', component: OutroComponente },
  { path: '**', redirectTo: '' }
];
```

### 3. AppComponent Standalone

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],  // ⭐ Imports necessários
  template: `
    <div class="container">
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/sobre">Sobre</a>
      </nav>
      
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    nav { margin-bottom: 20px; }
    nav a { margin-right: 20px; text-decoration: none; color: #0066cc; }
    nav a:hover { text-decoration: underline; }
  `]
})
export class AppComponent { }
```

### 4. Componente Standalone

```typescript
// src/app/meu-componente/meu-componente.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],  // ⭐ Imports necessários
  template: `
    <div class="hero">
      <h1>🎌 Generics & Utility Types</h1>
      <p>Bem-vindo ao Dia 03 da Jornada Angular!</p>
      
      <div class="examples">
        <h2>Exemplos de Generics</h2>
        <div *ngFor="let item of exemplosList" class="example-card">
          {{ item }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero { text-align: center; padding: 40px 20px; }
    .examples { margin-top: 40px; }
    .example-card {
      background: #f5f5f5;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      border-left: 4px solid #0066cc;
    }
  `]
})
export class MeuComponente {
  exemplosList = [
    'Função Genérica: criarContainer<T>',
    'Classe Genérica: ColecaoMagica<T>',
    'Utility Type: Partial<AnimeCompleto>',
    'Constraint: T extends { nome: string }'
  ];
}
```

---

## 🎯 Qual Abordagem Usar?

### 🔥 **Standalone (Recomendado)**
- ✅ Angular 14+
- ✅ Mais moderno e performático
- ✅ Menor bundle size
- ✅ Imports explícitos
- ✅ Melhor tree-shaking

### 🏛️ **AppModule (Clássico)**
- ✅ Angular 2-13
- ✅ Mais familiar para iniciantes
- ✅ Centraliza configurações
- ✅ Compatível com libs antigas

---

## 🛠️ Comandos Úteis

```bash
# Criar componente standalone
ng generate component meu-componente --standalone

# Criar componente clássico
ng generate component meu-componente

# Servir a aplicação
ng serve

# Build de produção
ng build --prod
```

---

## 🚨 Troubleshooting Avançado

### 🔍 Problema: "ExpressionChangedAfterItHasBeenCheckedError"

**Sintoma**: Erro durante desenvolvimento sobre expressões que mudaram após verificação

**Causa**: Mudanças no modelo durante o ciclo de detecção de mudanças

**Solução**:
```typescript
import { ChangeDetectorRef } from '@angular/core';

constructor(private cdr: ChangeDetectorRef) {}

metodoQueAlteraEstado(): void {
  // Alterar estado
  this.algumValor = 'novo valor';
  
  // Forçar detecção de mudanças
  this.cdr.detectChanges();
}
```

### 🔍 Problema: "Can't bind to 'ngModel'"

**Sintoma**: Template não reconhece ngModel

**Solução para AppModule**:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule], // Adicionar aqui
})
```

**Solução para Standalone**:
```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule], // Adicionar aqui
})
```

### 🔍 Problema: "No provider for HttpClient"

**Sintoma**: Service não consegue injetar HttpClient

**Solução para AppModule**:
```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})
```

**Solução para Standalone**:
```typescript
// main.ts
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Adicionar aqui
    provideRouter(routes)
  ]
});
```

### 🔍 Problema: "Property does not exist on type"

**Sintoma**: TypeScript reclama de propriedades inexistentes

**Solução**: Criar interfaces corretas
```typescript
// ❌ Problemático
export class Component {
  data: any; // Tipo any é perigoso
}

// ✅ Correto
interface MeuDado {
  id: number;
  nome: string;
}

export class Component {
  data: MeuDado | null = null; // Type safety!
}
```

---

## 🎨 Estilização Avançada com SCSS

### 📁 Estrutura de Estilos Recomendada

```
src/
├── styles/
│   ├── _variables.scss      # Cores, tamanhos, etc.
│   ├── _mixins.scss         # Funções reutilizáveis
│   ├── _base.scss           # Reset e estilos base
│   ├── _components.scss     # Componentes globais
│   └── _themes.scss         # Temas (dark/light)
└── styles.scss              # Arquivo principal
```

### 🎨 Variáveis Globais

```scss
// src/styles/_variables.scss
// Cores principais
$primary-color: #667eea;
$secondary-color: #764ba2;
$success-color: #28a745;
$warning-color: #ffc107;
$danger-color: #dc3545;
$info-color: #17a2b8;

// Cores neutras
$white: #ffffff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-800: #343a40;
$gray-900: #212529;

// Tipografia
$font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
$font-size-base: 1rem;
$font-weight-normal: 400;
$font-weight-bold: 700;

// Espaçamentos
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3
);

// Breakpoints responsivos
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

// Sombras
$shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
$shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
$shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);

// Borders
$border-radius: 0.375rem;
$border-radius-sm: 0.25rem;
$border-radius-lg: 0.5rem;
$border-radius-pill: 50rem;
```

### 🔧 Mixins Úteis

```scss
// src/styles/_mixins.scss
// Flexbox center
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Responsive breakpoints
@mixin media-up($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Botão base
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: $border-radius;
  font-weight: $font-weight-bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

// Gradiente animado
@mixin gradient-bg($color1, $color2) {
  background: linear-gradient(135deg, $color1 0%, $color2 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

// Card elevation
@mixin card-elevation($level: 1) {
  @if $level == 1 {
    box-shadow: $shadow-sm;
  } @else if $level == 2 {
    box-shadow: $shadow;
  } @else if $level == 3 {
    box-shadow: $shadow-lg;
  }
  
  transition: box-shadow 0.3s ease;
  
  &:hover {
    @if $level == 1 {
      box-shadow: $shadow;
    } @else if $level == 2 {
      box-shadow: $shadow-lg;
    } @else if $level == 3 {
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
    }
  }
}

// Texto truncado
@mixin text-truncate($lines: 1) {
  @if $lines == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

### 🌙 Tema Dark Mode

```scss
// src/styles/_themes.scss
:root {
  // Cores do tema claro
  --bg-primary: #{$white};
  --bg-secondary: #{$gray-100};
  --text-primary: #{$gray-900};
  --text-secondary: #{$gray-600};
  --border-color: #{$gray-300};
}

[data-theme="dark"] {
  // Cores do tema escuro
  --bg-primary: #{$gray-900};
  --bg-secondary: #{$gray-800};
  --text-primary: #{$white};
  --text-secondary: #{$gray-300};
  --border-color: #{$gray-600};
}

// Classes utilitárias para temas
.bg-primary { background-color: var(--bg-primary); }
.bg-secondary { background-color: var(--bg-secondary); }
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.border-color { border-color: var(--border-color); }
```

---

## 🔒 Guards e Proteção de Rotas

### 🛡️ Criando um Guard

```typescript
// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.checkAuthentication();
    
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }

  private checkAuthentication(): boolean {
    // Implementar lógica de autenticação
    return localStorage.getItem('token') !== null;
  }
}
```

### 🛡️ Usando Guards nas Rotas

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard] // Protege a rota
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component'),
    canActivate: [AuthGuard]
  }
];
```

---

## 🚀 Performance e Otimizações

### ⚡ Lazy Loading

```typescript
// Carregamento sob demanda
export const routes: Routes = [
  {
    path: 'animes',
    loadComponent: () => import('./anime/anime-lista.component')
      .then(m => m.AnimeListaComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.adminRoutes)
  }
];
```

### ⚡ OnPush Change Detection

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // Melhora performance
  template: `...`
})
export class OptimizedComponent {
  @Input() data: any; // Component só atualiza quando Input muda
}
```

### ⚡ TrackBy Functions

```typescript
// Component
trackByAnimeId(index: number, anime: Anime): number {
  return anime.id; // Angular usa isso para otimizar ngFor
}

// Template
*ngFor="let anime of animes; trackBy: trackByAnimeId"
```

---

## 📊 Debugging e Ferramentas

### 🔍 Angular DevTools

1. Instalar extensão Angular DevTools no Chrome
2. Abrir DevTools (F12)
3. Usar abas Angular para inspecionar components

### 🔍 Logging Estruturado

```typescript
export class LoggerService {
  private isDev = !environment.production;

  log(message: string, data?: any): void {
    if (this.isDev) {
      console.log(`[LOG] ${new Date().toISOString()} - ${message}`, data);
    }
  }

  error(message: string, error?: any): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  }

  warn(message: string, data?: any): void {
    if (this.isDev) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data);
    }
  }
}
```

### 🔍 Environment Configuration

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  enableLogging: true,
  version: '1.0.0'
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.meuapp.com',
  enableLogging: false,
  version: '1.0.0'
};
```

---

## 🎯 Aplicando Generics do Dia 03 no Angular

### 🔥 Service Genérico Completo

```typescript
// src/app/services/generic-crud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface genérica para entidades com ID
interface BaseEntity {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService<T extends BaseEntity> {
  constructor(
    private http: HttpClient,
    private baseUrl: string
  ) {}

  // Aplicando Utility Types!
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(entity: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(this.baseUrl, entity);
  }

  update(id: number, entity: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

// Uso específico para Animes
@Injectable({
  providedIn: 'root'
})
export class AnimeService extends GenericCrudService<Anime> {
  constructor(http: HttpClient) {
    super(http, '/api/animes');
  }

  // Métodos específicos para animes
  buscarPorGenero(genero: string): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseUrl}/genero/${genero}`);
  }
}
```

### 🔥 Component Genérico para Listas

```typescript
// src/app/components/generic-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Listable {
  id: number;
}

@Component({
  selector: 'app-generic-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="generic-list">
      <div class="list-header">
        <h2>{{ title }}</h2>
        <button (click)="onAdd()" class="btn-add">Adicionar</button>
      </div>
      
      <div class="list-items">
        <div 
          *ngFor="let item of items; trackBy: trackById" 
          class="list-item"
          (click)="onSelect(item)">
          <ng-content [ngTemplateOutlet]="itemTemplate" 
                     [ngTemplateOutletContext]="{ $implicit: item }">
          </ng-content>
          
          <div class="item-actions">
            <button (click)="onEdit(item)" class="btn-edit">✏️</button>
            <button (click)="onDelete(item)" class="btn-delete">🗑️</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent<T extends Listable> {
  @Input() items: T[] = [];
  @Input() title: string = 'Lista';
  
  @Output() select = new EventEmitter<T>();
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() add = new EventEmitter<void>();

  trackById(index: number, item: T): number {
    return item.id;
  }

  onSelect(item: T): void {
    this.select.emit(item);
  }

  onEdit(item: T): void {
    this.edit.emit(item);
  }

  onDelete(item: T): void {
    this.delete.emit(item);
  }

  onAdd(): void {
    this.add.emit();
  }
}
```

---

## 🎌 Exemplo Completo: App de Animes

### Componente Lista de Animes

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Anime {
  id: number;
  titulo: string;
  nota: number;
  status: 'assistindo' | 'concluido' | 'pausado';
}

@Component({
  selector: 'app-anime-lista',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="anime-grid">
      <h1>📺 Minha Lista de Animes</h1>
      
      <div class="filters">
        <button 
          *ngFor="let filtro of filtros" 
          (click)="filtroAtivo = filtro"
          [class.active]="filtroAtivo === filtro">
          {{ filtro }}
        </button>
      </div>
      
      <div class="grid">
        <div 
          *ngFor="let anime of animesFiltrados" 
          class="anime-card"
          [class]="anime.status">
          <h3>{{ anime.titulo }}</h3>
          <p>⭐ {{ anime.nota }}/10</p>
          <span class="status">{{ anime.status }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .anime-grid { padding: 20px; }
    .filters { margin: 20px 0; }
    .filters button { margin-right: 10px; padding: 8px 16px; }
    .filters button.active { background: #0066cc; color: white; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .anime-card { padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .anime-card.concluido { border-left: 4px solid #28a745; }
    .anime-card.assistindo { border-left: 4px solid #ffc107; }
    .anime-card.pausado { border-left: 4px solid #dc3545; }
    .status { font-size: 12px; text-transform: uppercase; font-weight: bold; }
  `]
})
export class AnimeListaComponent {
  filtroAtivo = 'todos';
  filtros = ['todos', 'assistindo', 'concluido', 'pausado'];
  
  animes: Anime[] = [
    { id: 1, titulo: 'Attack on Titan', nota: 9.8, status: 'concluido' },
    { id: 2, titulo: 'Demon Slayer', nota: 9.2, status: 'assistindo' },
    { id: 3, titulo: 'One Piece', nota: 9.5, status: 'pausado' }
  ];
  
  get animesFiltrados() {
    if (this.filtroAtivo === 'todos') return this.animes;
    return this.animes.filter(anime => anime.status === this.filtroAtivo);
  }
}
```

---

## 🏆 Próximos Passos

1. 🎯 **Complete os exercícios** de Generics & Utility Types
2. 🚀 **Aplique os tipos** nos seus componentes Angular
3. 🎨 **Estilize** sua aplicação com CSS/SCSS
4. 📱 **Torne responsivo** para mobile
5. 🔧 **Adicione funcionalidades** como filtros e busca

---

## 📚 Recursos Adicionais

- 📖 [Angular Routing Guide](https://angular.io/guide/routing)
- 🎥 [Standalone Components Tutorial](https://angular.io/guide/standalone-components)
- 🛠️ [Angular CLI Commands](https://angular.io/cli)
- 🎌 [Material Design para Angular](https://material.angular.io/)

---

**🎉 Parabéns!** Agora você sabe como configurar AppModule, rotas e fazer seus componentes renderizarem na tela. Combine isso com os Generics & Utility Types do Dia 03 para criar aplicações Angular poderosas e type-safe!
