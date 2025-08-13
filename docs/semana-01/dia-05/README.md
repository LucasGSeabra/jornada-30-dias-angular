# 📘 Dia 05 — Componentes, Data Binding & Módulos

## 🎯 Objetivos do Dia
- Entender a estrutura de componentes Angular
- Aprender sobre data binding (interpolação, property, event, two-way)
- Utilizar Input/Output para comunicação entre componentes
- Explorar Pipes e Diretivas
- Criar um componente Personagem com data binding

---

## 📚 Parte Teórica

### 🏗️ Estrutura Angular: A Arquitetura do Mundo RPG

Angular é como um **mundo RPG completo** com diferentes camadas organizadas:

```
🏰 Aplicação Angular (Reino)
├── 📦 Módulos (Guildas)
│   ├── 🎭 Componentes (Personagens)
│   ├── 🛡️ Services (Lojas/NPCs)
│   ├── 🔗 Pipes (Magias de Transformação)
│   └── ⚡ Diretivas (Buffs/Encantamentos)
└── 🌐 Templates (Interface do Jogo)
```

#### **🎭 Componentes: Os Personagens do seu RPG**

Um componente Angular é como um **personagem jogável** - tem aparência (template), habilidades (métodos) e atributos (propriedades):

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personagem',     // 🏷️ Nome do personagem (tag HTML)
  templateUrl: './personagem.component.html',  // 🎨 Aparência
  styleUrls: ['./personagem.component.css']    // 💄 Estilo visual
})
export class PersonagemComponent {
  // 📊 Atributos do personagem
  nome = 'Aegis';
  nivel = 42;
  classe = 'Guerreiro';
  vida = 100;
  mana = 50;
  
  // 🎒 Inventário
  habilidades = ['Ataque Duplo', 'Defesa de Ferro', 'Fúria Berserker'];
  equipamentos = ['Espada Flamejante', 'Armadura de Aço'];
  
  // 🔧 Habilidades (métodos)
  atacar(): void {
    console.log(`⚔️ ${this.nome} executou um ataque poderoso!`);
    this.vida -= 5; // Custo de stamina
  }
  
  usarMagia(nomeMatgia: string): void {
    if (this.mana >= 10) {
      console.log(`✨ ${this.nome} lançou ${nomeMatgia}!`);
      this.mana -= 10;
    } else {
      console.log('😵 Sem mana suficiente!');
    }
  }
}
```

#### **� Estrutura de Arquivos de um Componente**

Quando você gera um componente com `ng generate component personagem`, o Angular cria:

```
src/app/personagem/
├── personagem.component.ts      // 🧠 Lógica do personagem
├── personagem.component.html    // 🎨 Visual do personagem
├── personagem.component.css     // 💄 Estilos do personagem
└── personagem.component.spec.ts // 🧪 Testes do personagem
```

### �🔗 Data Binding: Conectando Dados e Interface

Data binding é como a **interface do jogo** que mostra os status do personagem em tempo real:

#### **1. 📺 Interpolação (String Binding)**
Exibe dados do component no template (como uma "barra de vida"):

```html
<!-- Template (personagem.component.html) -->
<div class="personagem-card">                                                                                                  
  <h2>🏷️ {{ nome }} - {{ classe }}</h2>
  <div class="status">
    <p>❤️ Vida: {{ vida }}/100</p>
    <p>💙 Mana: {{ mana }}/100</p>
    <p>⭐ Nível: {{ nivel }}</p>
  </div>
</div>
```

```typescript
// Component (personagem.component.ts)
export class PersonagemComponent {
  nome = 'Aegis';
  classe = 'Guerreiro';
  vida = 85;
  mana = 60;
  nivel = 42;
}
```

#### **2. 🔗 Property Binding**
Liga propriedades do component a atributos HTML (como mostrar a "imagem do personagem"):

```html
<!-- Definindo src da imagem dinamicamente -->
<img [src]="imagemPersonagem" 
     [alt]="nome + ' - ' + classe"
     [class]="classeCSS">

<!-- Desabilitando botão se não tem mana -->
<button [disabled]="mana < 10" 
        [title]="mana < 10 ? 'Sem mana!' : 'Clique para lançar magia'">
  ✨ Lançar Magia
</button>

<!-- Binding com propriedades customizadas -->
<div [style.width.%]="vida" 
     [style.backgroundColor]="vida > 50 ? 'green' : 'red'"
     class="barra-vida">
</div>
```

```typescript
export class PersonagemComponent {
  imagemPersonagem = 'assets/heroes/aegis-warrior.png';
  mana = 25;
  vida = 75;
  
  get classeCSS(): string {
    return `personagem-${this.classe.toLowerCase()}`;
  }
}
```

#### **3. 🎯 Event Binding**
Captura eventos do usuário (como "clicar para atacar"):

```html
<!-- Eventos de clique -->
<button (click)="atacar()">⚔️ Atacar</button>
<button (click)="usarMagia('Bola de Fogo')">🔥 Bola de Fogo</button>

<!-- Eventos de teclado -->
<input (keyup)="aoDigitar($event)" 
       (keyup.enter)="confirmarNome()"
       placeholder="Digite o nome do personagem">

<!-- Eventos de mouse -->
<div class="personagem-avatar"
     (mouseenter)="mostrarTooltip = true"
     (mouseleave)="mostrarTooltip = false">
  <img [src]="imagemPersonagem">
</div>

<!-- Eventos customizados -->
<div (dragover)="permitirDrop($event)" 
     (drop)="equiparItem($event)">
  Arraste itens aqui para equipar
</div>
```

```typescript
export class PersonagemComponent {
  mostrarTooltip = false;
  
  atacar(): void {
    console.log('⚔️ Ataque executado!');
    // Lógica do ataque
  }
  
  aoDigitar(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    console.log('Digitando:', input.value);
  }
  
  confirmarNome(): void {
    console.log('Nome confirmado!');
  }
  
  permitirDrop(evento: DragEvent): void {
    evento.preventDefault();
  }
  
  equiparItem(evento: DragEvent): void {
    evento.preventDefault();
    // Lógica para equipar item
  }
}
```

#### **4. 🔄 Two-Way Data Binding**
Sincronização bidirecional (como "editar atributos do personagem"):

```html
<!-- Editando nome do personagem -->
<input [(ngModel)]="nome" placeholder="Nome do personagem">

<!-- Ajustando nível com slider -->
<input type="range" 
       [(ngModel)]="nivel" 
       min="1" max="100">
<span>Nível: {{ nivel }}</span>

<!-- Selecionando classe -->
<select [(ngModel)]="classe">
  <option value="Guerreiro">⚔️ Guerreiro</option>
  <option value="Mago">🔮 Mago</option>
  <option value="Arqueiro">🏹 Arqueiro</option>
  <option value="Assassino">🗡️ Assassino</option>
</select>

<!-- Checkbox para habilidades ativas -->
<label>
  <input type="checkbox" [(ngModel)]="habilidadeAtiva">
  🔥 Modo Fúria Ativo
</label>
```

**⚠️ IMPORTANTE:** Para usar `[(ngModel)]`, você precisa importar o `FormsModule`:

```typescript
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  // ...
})
export class AppModule { }
```

### 🛡️ Input & Output: Comunicação Entre Personagens

Imagine dois personagens trocando itens ou formando uma party:

#### **📨 @Input: Recebendo Dados (Como receber um item)**

```typescript
// personagem.component.ts (Componente filho)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personagem',
  template: `
    <div class="personagem">
      <h3>{{ nome }}</h3>
      <div *ngIf="itemRecebido">
        🎁 Item recebido: {{ itemRecebido.nome }}
        ⭐ Poder: {{ itemRecebido.poder }}
      </div>
      <button (click)="usarItem()" 
              [disabled]="!itemRecebido">
        Usar Item
      </button>
    </div>
  `
})
export class PersonagemComponent {
  @Input() nome!: string;                    // Nome vem do componente pai
  @Input() itemRecebido?: ItemMagico;        // Item vem do componente pai
  @Input() nível = 1;                        // Valor padrão
  
  usarItem(): void {
    if (this.itemRecebido) {
      console.log(`✨ ${this.nome} usou ${this.itemRecebido.nome}!`);
    }
  }
}

interface ItemMagico {
  nome: string;
  poder: number;
  tipo: 'arma' | 'armadura' | 'poção';
}
```

```html
<!-- inventario.component.html (Componente pai) -->
<div class="party">
  <h2>🏰 Minha Party</h2>
  
  <!-- Passando dados via Input -->
  <app-personagem 
    [nome]="'Aegis'"
    [nivel]="42"
    [itemRecebido]="espadaFlamejante">
  </app-personagem>
  
  <app-personagem 
    [nome]="'Luna'"
    [nivel]="38"
    [itemRecebido]="varinhaMagica">
  </app-personagem>
</div>
```

```typescript
// inventario.component.ts (Componente pai)
export class InventarioComponent {
  espadaFlamejante: ItemMagico = {
    nome: 'Espada Flamejante',
    poder: 85,
    tipo: 'arma'
  };
  
  varinhaMagica: ItemMagico = {
    nome: 'Varinha das Estrelas',
    poder: 92,
    tipo: 'arma'
  };
}
```

#### **📤 @Output: Enviando Eventos (Como notificar uma ação)**

```typescript
// personagem.component.ts (Componente filho)
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personagem',
  template: `
    <div class="personagem">
      <h3>{{ nome }} (Nível {{ nivel }})</h3>
      <p>❤️ Vida: {{ vida }}/100</p>
      
      <button (click)="atacar()" [disabled]="vida <= 0">
        ⚔️ Atacar
      </button>
      
      <button (click)="subirNivel()" [disabled]="experiencia < 100">
        ⭐ Subir Nível ({{ experiencia }}/100 XP)
      </button>
      
      <button (click)="morrer()" *ngIf="vida > 0">
        💀 Simular Morte
      </button>
    </div>
  `
})
export class PersonagemComponent {
  @Input() nome!: string;
  @Input() nivel = 1;
  
  vida = 100;
  experiencia = 75;
  
  // 📤 Eventos que o componente pode emitir
  @Output() ataque = new EventEmitter<string>();
  @Output() levelUp = new EventEmitter<{nome: string, novoNivel: number}>();
  @Output() morte = new EventEmitter<string>();
  
  atacar(): void {
    const dano = Math.floor(Math.random() * 20) + 10;
    this.ataque.emit(`${this.nome} causou ${dano} de dano!`);
  }
  
  subirNivel(): void {
    if (this.experiencia >= 100) {
      this.nivel++;
      this.experiencia = 0;
      this.vida = 100; // Restaura vida ao subir nível
      
      this.levelUp.emit({
        nome: this.nome,
        novoNivel: this.nivel
      });
    }
  }
  
  morrer(): void {
    this.vida = 0;
    this.morte.emit(`💀 ${this.nome} foi derrotado!`);
  }
}
```

```html
<!-- batalha.component.html (Componente pai) -->
<div class="arena-batalha">
  <h2>⚔️ Arena de Batalha</h2>
  
  <div class="log-batalha">
    <h3>📜 Log da Batalha:</h3>
    <ul>
      <li *ngFor="let evento of logEventos">{{ evento }}</li>
    </ul>
  </div>
  
  <div class="personagens">
    <!-- Escutando eventos dos personagens -->
    <app-personagem 
      [nome]="'Guerreiro Aegis'"
      [nivel]="42"
      (ataque)="registrarEvento($event)"
      (levelUp)="personagemSubiuNivel($event)"
      (morte)="personagemMorreu($event)">
    </app-personagem>
    
    <app-personagem 
      [nome]="'Mago Luna'"
      [nivel]="38"
      (ataque)="registrarEvento($event)"
      (levelUp)="personagemSubiuNivel($event)"
      (morte)="personagemMorreu($event)">
    </app-personagem>
  </div>
</div>
```

```typescript
// batalha.component.ts (Componente pai)
export class BatalhaComponent {
  logEventos: string[] = [];
  
  registrarEvento(mensagem: string): void {
    this.logEventos.unshift(`⚔️ ${new Date().toLocaleTimeString()} - ${mensagem}`);
    
    // Limita o log a 10 eventos
    if (this.logEventos.length > 10) {
      this.logEventos = this.logEventos.slice(0, 10);
    }
  }
  
  personagemSubiuNivel(evento: {nome: string, novoNivel: number}): void {
    const mensagem = `🎉 ${evento.nome} subiu para o nível ${evento.novoNivel}!`;
    this.registrarEvento(mensagem);
  }
  
  personagemMorreu(mensagem: string): void {
    this.registrarEvento(mensagem);
    console.log('🏥 Enviando para hospital...');
  }
}

### 🎨 Pipes: Magias de Transformação de Dados

Pipes são como **magias de transformação** que modificam como os dados aparecem na interface, sem alterar os dados originais:

#### **🔧 Pipes Nativos do Angular**

```html
<!-- 💰 Formatação de números -->
<div class="recursos">
  <p>💰 Gold: {{ goldAtual | number:'1.0-0' }}</p>
  <p>💎 Gemas: {{ gemasColetadas | number:'1.2-2' }}</p>
  <p>⭐ Experiência: {{ experiencia | number:'1.0-0' }}</p>
</div>

<!-- 📅 Formatação de datas -->
<div class="historico">
  <p>🗓️ Criado em: {{ dataCreacao | date:'dd/MM/yyyy' }}</p>
  <p>⏰ Último login: {{ ultimoLogin | date:'dd/MM/yyyy HH:mm' }}</p>
  <p>🕐 Tempo jogado: {{ tempoJogo | date:'H:mm:ss':'UTC' }}</p>
</div>

<!-- 💱 Formatação de moeda -->
<div class="loja">
  <p>💵 Preço da poção: {{ precoPocao | currency:'BRL':'symbol':'1.2-2' }}</p>
  <p>💴 Preço da espada: {{ precoEspada | currency:'USD':'symbol-narrow' }}</p>
</div>

<!-- 📊 Porcentagem -->
<div class="status">
  <p>❤️ Vida: {{ vida/vidaMaxima | percent:'1.0-0' }}</p>
  <p>💙 Mana: {{ mana/manaMaxima | percent:'1.0-0' }}</p>
  <p>📈 Taxa de crítico: {{ taxaCritico | percent:'1.1-1' }}</p>
</div>

<!-- 🔤 Formatação de texto -->
<div class="personagem-info">
  <h2>{{ nome | uppercase }}</h2>              <!-- AEGIS -->
  <p>Classe: {{ classe | lowercase }}</p>       <!-- guerreiro -->
  <p>Título: {{ titulo | titlecase }}</p>       <!-- Matador De Dragões -->
</div>

<!-- 🍃 JSON para debug -->
<pre>{{ personagemCompleto | json }}</pre>
```

#### **✨ Pipes Customizados**

Você pode criar suas próprias "magias de transformação":

```typescript
// experiencia.pipe.ts - Pipe para formatar experiência
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experiencia'
})
export class ExperienciaPipe implements PipeTransform {
  transform(exp: number): string {
    if (exp >= 1000000) {
      return `${(exp / 1000000).toFixed(1)}M XP`;
    } else if (exp >= 1000) {
      return `${(exp / 1000).toFixed(1)}K XP`;
    } else {
      return `${exp} XP`;
    }
  }
}

// raridade.pipe.ts - Pipe para cores de raridade de itens
@Pipe({
  name: 'raridade'
})
export class RaridadePipe implements PipeTransform {
  transform(item: string, raridade: 'comum' | 'raro' | 'epico' | 'lendario'): string {
    const cores = {
      'comum': '⚪',
      'raro': '🔵', 
      'epico': '🟣',
      'lendario': '🟡'
    };
    return `${cores[raridade]} ${item}`;
  }
}
```

```html
<!-- Usando pipes customizados -->
<div class="stats">
  <p>⭐ EXP Total: {{ experienciaTotal | experiencia }}</p>
  <p>🗡️ Arma: {{ nomeArma | raridade:raridadeArma }}</p>
</div>

<!-- Resultado: 
     ⭐ EXP Total: 1.2M XP
     🗡️ Arma: 🟡 Excalibur
-->
```

#### **🔗 Encadeando Pipes**

Você pode combinar várias transformações:

```html
<!-- Aplicando múltiplas transformações -->
<h1>{{ nomePersonagem | uppercase | slice:0:10 }}</h1>
<p>💰 Preço: {{ precoItem | currency:'BRL' | uppercase }}</p>
<p>📅 Data: {{ dataEvento | date:'fullDate' | uppercase }}</p>

<!-- Resultado:
     AEGIS O GU...
     💰 Preço: R$ 150,00
     📅 Data: SEGUNDA-FEIRA, 15 DE JANEIRO DE 2024
-->
```

### 🧩 Diretivas: Encantamentos que Modificam o DOM

Diretivas são como **buffs mágicos** que alteram o comportamento e aparência dos elementos:

#### **🔀 Diretivas Estruturais**

##### **1. *ngIf: Feitiço de Invisibilidade**

```html
<!-- Mostrar/esconder elementos baseado em condições -->
<div class="personagem-status">
  <!-- Só mostra se personagem está vivo -->
  <div *ngIf="vida > 0" class="ativo">
    <h3>{{ nome }} está ativo!</h3>
    <div class="barra-vida">
      <div [style.width.%]="vida"></div>
    </div>
  </div>
  
  <!-- Só mostra se personagem morreu -->
  <div *ngIf="vida <= 0" class="morto">
    <h3>💀 {{ nome }} foi derrotado!</h3>
    <button (click)="reviver()">⛑️ Reviver</button>
  </div>
  
  <!-- Condição com else -->
  <div *ngIf="nivel >= 50; else iniciante">
    <p>🏆 Herói Lendário! (Nível {{ nivel }})</p>
    <div class="habilidades-especiais">
      <span *ngFor="let habilidade of habilidadesEspeciais">
        ✨ {{ habilidade }}
      </span>
    </div>
  </div>
  
  <ng-template #iniciante>
    <p>🌱 Aventureiro Iniciante (Nível {{ nivel }})</p>
    <p>Continue treinando para desbloquear habilidades especiais!</p>
  </ng-template>
</div>

<!-- Condições múltiplas -->
<div class="clima-batalha">
  <div *ngIf="clima === 'chuva'" class="efeito-chuva">
    🌧️ Chuva reduz dano de fogo em 50%
  </div>
  <div *ngIf="clima === 'sol'" class="efeito-sol">
    ☀️ Sol aumenta cura em 25%
  </div>
  <div *ngIf="clima === 'neve'" class="efeito-neve">
    ❄️ Neve reduz velocidade de movimento
  </div>
</div>
```

##### **2. *ngFor: Feitiço de Multiplicação**

```html
<!-- Lista de habilidades -->
<div class="habilidades">
  <h3>⚔️ Habilidades:</h3>
  <ul>
    <li *ngFor="let habilidade of habilidades; let i = index; let primeiro = first; let ultimo = last"
        [class.primeira]="primeiro"
        [class.ultima]="ultimo">
      <span class="numero">{{ i + 1 }}.</span>
      <span class="nome">{{ habilidade.nome }}</span>
      <span class="dano">💥 {{ habilidade.dano }}</span>
      <span class="custo">💙 {{ habilidade.custaMana }}</span>
    </li>
  </ul>
</div>

<!-- Inventário com trackBy para performance -->
<div class="inventario">
  <h3>🎒 Inventário:</h3>
  <div class="grid-itens">
    <div *ngFor="let item of inventario; trackBy: trackByItemId" 
         class="slot-item"
         [class.item-raro]="item.raridade === 'raro'"
         [class.item-lendario]="item.raridade === 'lendario'">
      
      <img [src]="item.icone" [alt]="item.nome">
      <span class="nome">{{ item.nome }}</span>
      <span class="quantidade" *ngIf="item.quantidade > 1">
        {{ item.quantidade }}x
      </span>
    </div>
  </div>
</div>

<!-- Lista vazia com else -->
<div class="amigos-online">
  <h3>👥 Amigos Online:</h3>
  <ul *ngIf="amigosOnline.length > 0; else nenhumAmigo">
    <li *ngFor="let amigo of amigosOnline">
      <span class="status" [class]="amigo.status">●</span>
      {{ amigo.nome }} ({{ amigo.localizacao }})
    </li>
  </ul>
  
  <ng-template #nenhumAmigo>
    <p class="mensagem-vazia">😔 Nenhum amigo online no momento</p>
  </ng-template>
</div>
```

```typescript
// Component para ngFor
export class PersonagemComponent {
  habilidades = [
    { nome: 'Ataque Duplo', dano: 50, custaMana: 10 },
    { nome: 'Cura Divina', dano: 0, custaMana: 15 },
    { nome: 'Bola de Fogo', dano: 80, custaMana: 25 }
  ];
  
  inventario = [
    { id: 1, nome: 'Poção de Vida', quantidade: 5, raridade: 'comum', icone: 'assets/pocao.png' },
    { id: 2, nome: 'Espada Flamejante', quantidade: 1, raridade: 'lendario', icone: 'assets/espada.png' }
  ];
  
  amigosOnline = [
    { nome: 'DragonSlayer99', status: 'online', localizacao: 'Floresta Sombria' },
    { nome: 'MageLuna', status: 'ocupado', localizacao: 'Torre de Magia' }
  ];
  
  // Função trackBy para otimizar performance
  trackByItemId(index: number, item: any): number {
    return item.id;
  }
}
```

##### **3. ngSwitch: Feitiço de Transformação**

```html
<!-- Sistema de classes com diferentes interfaces -->
<div class="interface-classe" [ngSwitch]="classeAtual">
  
  <!-- Interface do Guerreiro -->
  <div *ngSwitchCase="'guerreiro'" class="ui-guerreiro">
    <h3>⚔️ Guerreiro</h3>
    <div class="habilidades-guerreiro">
      <button (click)="ataqueBasico()">🗡️ Ataque Básico</button>
      <button (click)="investida()">🏃 Investida</button>
      <button (click)="defesa()">🛡️ Defender</button>
    </div>
    <div class="status-guerreiro">
      <p>💪 Força: {{ forca }}</p>
      <p>🛡️ Defesa: {{ defesa }}</p>
    </div>
  </div>
  
  <!-- Interface do Mago -->
  <div *ngSwitchCase="'mago'" class="ui-mago">
    <h3>🔮 Mago</h3>
    <div class="habilidades-mago">
      <button (click)="bolaDeFogo()">🔥 Bola de Fogo</button>
      <button (click)="raioGelo()">❄️ Raio de Gelo</button>
      <button (click)="cura()">✨ Cura</button>
    </div>
    <div class="status-mago">
      <p>🧠 Inteligência: {{ inteligencia }}</p>
      <p>💙 Mana: {{ mana }}/{{ manaMaxima }}</p>
    </div>
  </div>
  
  <!-- Interface do Arqueiro -->
  <div *ngSwitchCase="'arqueiro'" class="ui-arqueiro">
    <h3>🏹 Arqueiro</h3>
    <div class="habilidades-arqueiro">
      <button (click)="tiroComum()">🎯 Tiro Comum</button>
      <button (click)="chuvaDeFlechas()">🌧️ Chuva de Flechas</button>
      <button (click)="tiroEsplosivo()">💥 Tiro Explosivo</button>
    </div>
    <div class="status-arqueiro">
      <p>🎯 Precisão: {{ precisao }}</p>
      <p>💨 Agilidade: {{ agilidade }}</p>
    </div>
  </div>
  
  <!-- Caso padrão - classe não reconhecida -->
  <div *ngSwitchDefault class="ui-desconhecida">
    <h3>❓ Classe Desconhecida</h3>
    <p>Selecione uma classe válida!</p>
    <select [(ngModel)]="classeAtual">
      <option value="guerreiro">⚔️ Guerreiro</option>
      <option value="mago">🔮 Mago</option>
      <option value="arqueiro">🏹 Arqueiro</option>
    </select>
  </div>
  
</div>
```

#### **🎨 Diretivas de Atributo**

##### **1. ngClass: Feitiço de Estilo Dinâmico**

```html
<!-- Aplicando classes baseadas em condições -->
<div class="personagem-card" 
     [ngClass]="{
       'personagem-vivo': vida > 0,
       'personagem-morto': vida <= 0,
       'personagem-critico': vida < 20,
       'personagem-heroi': nivel >= 50,
       'personagem-novato': nivel < 10
     }">
  
  <h3 [ngClass]="classePersonagem">{{ nome }}</h3>
  
  <!-- Múltiplas classes com array -->
  <div [ngClass]="[classeBase, classeBônus, classeStatus]">
    Status do personagem
  </div>
  
  <!-- Classes com função -->
  <div [ngClass]="obterClassesStatus()">
    <span>❤️ {{ vida }}/{{ vidaMaxima }}</span>
  </div>
  
</div>

<!-- Exemplo com barra de vida colorida -->
<div class="barra-vida" 
     [ngClass]="{
       'vida-alta': vida > 70,
       'vida-media': vida > 30 && vida <= 70,
       'vida-baixa': vida <= 30
     }">
  <div class="preenchimento" [style.width.%]="vida"></div>
</div>
```

```css
/* Estilos CSS correspondentes */
.personagem-card {
  border: 2px solid #ccc;
  padding: 20px;
  transition: all 0.3s ease;
}

.personagem-vivo { border-color: green; background-color: #e8f5e8; }
.personagem-morto { border-color: red; background-color: #f5e8e8; opacity: 0.6; }
.personagem-critico { animation: pulse 1s infinite; border-color: orange; }
.personagem-heroi { border-color: gold; box-shadow: 0 0 15px gold; }
.personagem-novato { border-style: dashed; }

.vida-alta { background-color: green; }
.vida-media { background-color: yellow; }
.vida-baixa { background-color: red; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

##### **2. ngStyle: Feitiço de Estilo Inline**

```html
<!-- Estilos dinâmicos baseados em dados -->
<div class="personagem"
     [ngStyle]="{
       'background-color': corDeFundo,
       'border-width.px': nivel,
       'opacity': vida / vidaMaxima,
       'transform': 'scale(' + (1 + nivel/100) + ')'
     }">
  
  <!-- Barra de vida com largura dinâmica -->
  <div class="barra-vida"
       [ngStyle]="{
         'width.%': (vida / vidaMaxima) * 100,
         'background-color': vida > 50 ? 'green' : vida > 20 ? 'yellow' : 'red'
       }">
  </div>
  
  <!-- Posicionamento baseado em coordenadas -->
  <div class="personagem-mapa"
       [ngStyle]="{
         'left.px': posicaoX,
         'top.px': posicaoY,
         'z-index': nivel
       }">
    {{ nome }}
  </div>
  
  <!-- Efeitos visuais baseados em status -->
  <div class="efeitos"
       [ngStyle]="{
         'filter': envenenado ? 'hue-rotate(120deg)' : 'none',
         'animation': congelado ? 'freeze 2s infinite' : 'none',
         'box-shadow': emChamas ? '0 0 20px red' : 'none'
       }">
    Efeitos de Status
  </div>
  
</div>
```

```typescript
export class PersonagemComponent {
  vida = 75;
  vidaMaxima = 100;
  nivel = 42;
  posicaoX = 150;
  posicaoY = 200;
  envenenado = false;
  congelado = false;
  emChamas = true;
  
  get corDeFundo(): string {
    if (this.vida > 70) return '#90EE90';      // Verde claro
    if (this.vida > 30) return '#FFD700';      // Amarelo
    return '#FFB6C1';                          // Vermelho claro
  }
  
  obterClassesStatus(): string[] {
    const classes = ['personagem-base'];
    
    if (this.vida > 70) classes.push('status-otimo');
    if (this.nivel >= 50) classes.push('heroi-lendario');
    if (this.envenenado) classes.push('efeito-veneno');
    
    return classes;
  }
}

### 📦 Módulos: As Guildas que Organizam o Reino

Módulos são como **guildas** que agrupam componentes, serviços e outros recursos relacionados:

#### **🏰 Estrutura de um Módulo**

```typescript
// personagem.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importando componentes da "guild"
import { PersonagemComponent } from './personagem/personagem.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

// Importando pipes customizados
import { ExperienciaPipe } from './pipes/experiencia.pipe';
import { RaridadePipe } from './pipes/raridade.pipe';

// Importando serviços
import { PersonagemService } from './services/personagem.service';

@NgModule({
  declarations: [
    // 🎭 Componentes que pertencem a este módulo
    PersonagemComponent,
    InventarioComponent,
    HabilidadesComponent,
    
    // 🎨 Pipes customizados
    ExperienciaPipe,
    RaridadePipe
  ],
  
  imports: [
    // 📦 Módulos externos necessários
    CommonModule,        // ngIf, ngFor, pipes básicos
    FormsModule         // [(ngModel)]
  ],
  
  providers: [
    // 🛡️ Serviços disponíveis neste módulo
    PersonagemService
  ],
  
  exports: [
    // 🌐 O que outros módulos podem usar
    PersonagemComponent,
    InventarioComponent,
    ExperienciaPipe
  ]
})
export class PersonagemModule { }
```

#### **🗺️ Módulo Principal da Aplicação**

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importando módulos customizados
import { PersonagemModule } from './personagem/personagem.module';
import { BatalhaModule } from './batalha/batalha.module';
import { LojaModule } from './loja/loja.module';

@NgModule({
  declarations: [
    AppComponent        // Componente raiz
  ],
  
  imports: [
    BrowserModule,      // Módulo essencial para browser
    HttpClientModule,   // Para chamadas HTTP
    AppRoutingModule,   // Sistema de rotas
    
    // 🏰 Nossos módulos customizados
    PersonagemModule,
    BatalhaModule,
    LojaModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]  // Componente que inicia a aplicação
})
export class AppModule { }
```

#### **⚡ Lazy Loading: Carregamento Sob Demanda**

Para módulos grandes, você pode carregá-los apenas quando necessário:

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: '', redirectTo: '/personagem', pathMatch: 'full' },
  
  // Módulos carregados sob demanda
  {
    path: 'personagem',
    loadChildren: () => import('./personagem/personagem.module').then(m => m.PersonagemModule)
  },
  {
    path: 'batalha',
    loadChildren: () => import('./batalha/batalha.module').then(m => m.BatalhaModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then(m => m.LojaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

---

## 🎮 Projeto do Dia: Componente Personagem RPG Completo

Agora vamos criar um componente completo que usa todos os conceitos aprendidos:

### **📁 Estrutura do Projeto**

```
src/app/personagem/
├── personagem.component.ts      // Lógica do personagem
├── personagem.component.html    // Template/Visual
├── personagem.component.css     // Estilos
└── personagem.component.spec.ts // Testes
```

### **🧠 Lógica do Componente (TypeScript)**

```typescript
// personagem.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

interface Habilidade {
  nome: string;
  dano: number;
  custaMana: number;
  tipo: 'fisico' | 'magico';
}

interface ItemInventario {
  id: number;
  nome: string;
  tipo: 'arma' | 'armadura' | 'pocao';
  raridade: 'comum' | 'raro' | 'epico' | 'lendario';
  valor: number;
}

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  // 📨 Dados recebidos do componente pai
  @Input() nome = 'Herói Sem Nome';
  @Input() nivel = 1;
  @Input() itemRecebido?: ItemInventario;
  
  // 📤 Eventos emitidos para o componente pai
  @Output() ataque = new EventEmitter<{nome: string, dano: number}>();
  @Output() levelUp = new EventEmitter<{nome: string, nivel: number}>();
  @Output() itemUsado = new EventEmitter<ItemInventario>();
  
  // 📊 Propriedades do personagem
  classe = 'Guerreiro';
  vida = 100;
  vidaMaxima = 100;
  mana = 50;
  manaMaxima = 50;
  experiencia = 0;
  experienciaParaProximo = 100;
  
  // 📅 Data de criação
  dataCriacao = new Date();
  
  // ⚔️ Habilidades
  habilidades: Habilidade[] = [
    { nome: 'Ataque Básico', dano: 25, custaMana: 0, tipo: 'fisico' },
    { nome: 'Golpe Poderoso', dano: 45, custaMana: 15, tipo: 'fisico' },
    { nome: 'Cura Menor', dano: 0, custaMana: 20, tipo: 'magico' }
  ];
  
  // 🎒 Inventário
  inventario: ItemInventario[] = [
    { id: 1, nome: 'Poção de Vida', tipo: 'pocao', raridade: 'comum', valor: 50 },
    { id: 2, nome: 'Espada de Ferro', tipo: 'arma', raridade: 'comum', valor: 200 }
  ];
  
  // 🎮 Estados do jogo
  emBatalha = false;
  statusEfeitos: string[] = [];
  
  ngOnInit(): void {
    console.log(`🎮 ${this.nome} entrou no jogo!`);
    
    // Adicionar item recebido ao inventário
    if (this.itemRecebido) {
      this.adicionarItem(this.itemRecebido);
    }
  }
  
  // ⚔️ Sistema de combate
  executarHabilidade(habilidade: Habilidade): void {
    if (this.mana < habilidade.custaMana) {
      console.log('💙 Mana insuficiente!');
      return;
    }
    
    this.mana -= habilidade.custaMana;
    
    if (habilidade.nome === 'Cura Menor') {
      this.curar(30);
    } else {
      const dano = habilidade.dano + Math.floor(Math.random() * 10);
      this.ataque.emit({ nome: this.nome, dano });
      console.log(`⚔️ ${this.nome} usou ${habilidade.nome} causando ${dano} de dano!`);
    }
    
    this.ganharExperiencia(10);
  }
  
  // ❤️ Sistema de cura
  curar(quantidade: number): void {
    this.vida = Math.min(this.vida + quantidade, this.vidaMaxima);
    console.log(`✨ ${this.nome} recuperou ${quantidade} de vida!`);
  }
  
  // ⭐ Sistema de experiência
  ganharExperiencia(exp: number): void {
    this.experiencia += exp;
    
    if (this.experiencia >= this.experienciaParaProximo) {
      this.subirNivel();
    }
  }
  
  subirNivel(): void {
    this.nivel++;
    this.experiencia = 0;
    this.experienciaParaProximo = this.nivel * 100;
    this.vidaMaxima += 10;
    this.vida = this.vidaMaxima;
    this.manaMaxima += 5;
    this.mana = this.manaMaxima;
    
    console.log(`🎉 ${this.nome} subiu para o nível ${this.nivel}!`);
    this.levelUp.emit({ nome: this.nome, nivel: this.nivel });
  }
  
  // 🎒 Sistema de inventário
  adicionarItem(item: ItemInventario): void {
    this.inventario.push(item);
    console.log(`📦 ${item.nome} foi adicionado ao inventário!`);
  }
  
  usarItem(item: ItemInventario): void {
    if (item.tipo === 'pocao') {
      this.curar(50);
      this.removerItem(item.id);
      this.itemUsado.emit(item);
    }
  }
  
  removerItem(id: number): void {
    this.inventario = this.inventario.filter(item => item.id !== id);
  }
  
  // 🎨 Métodos para template
  get porcentagemVida(): number {
    return (this.vida / this.vidaMaxima) * 100;
  }
  
  get porcentagemMana(): number {
    return (this.mana / this.manaMaxima) * 100;
  }
  
  get porcentagemExp(): number {
    return (this.experiencia / this.experienciaParaProximo) * 100;
  }
  
  get ehHeroiLendario(): boolean {
    return this.nivel >= 50;
  }
  
  get classeStatus(): string[] {
    const classes = ['personagem'];
    if (this.vida <= 0) classes.push('morto');
    if (this.vida < 30) classes.push('ferido');
    if (this.ehHeroiLendario) classes.push('lendario');
    return classes;
  }
}
```

### **🎨 Template Visual (HTML)**

```html
<!-- personagem.component.html -->
<div class="personagem-card" [ngClass]="classeStatus">
  
  <!-- 🏷️ Cabeçalho do personagem -->
  <header class="personagem-header">
    <h2>{{ nome | uppercase }}</h2>
    <span class="classe">{{ classe }}</span>
    <span class="nivel">Nível {{ nivel }}</span>
    <div *ngIf="ehHeroiLendario" class="titulo-lendario">
      🏆 HERÓI LENDÁRIO
    </div>
  </header>
  
  <!-- 📊 Barras de status -->
  <section class="status-bars">
    <!-- Barra de vida -->
    <div class="barra-container">
      <label>❤️ Vida:</label>
      <div class="barra vida">
        <div class="preenchimento" 
             [style.width.%]="porcentagemVida"
             [ngClass]="{
               'vida-alta': porcentagemVida > 70,
               'vida-media': porcentagemVida > 30,
               'vida-baixa': porcentagemVida <= 30
             }">
        </div>
      </div>
      <span class="texto">{{ vida }}/{{ vidaMaxima }}</span>
    </div>
    
    <!-- Barra de mana -->
    <div class="barra-container">
      <label>💙 Mana:</label>
      <div class="barra mana">
        <div class="preenchimento mana-fill" [style.width.%]="porcentagemMana"></div>
      </div>
      <span class="texto">{{ mana }}/{{ manaMaxima }}</span>
    </div>
    
    <!-- Barra de experiência -->
    <div class="barra-container">
      <label>⭐ EXP:</label>
      <div class="barra exp">
        <div class="preenchimento exp-fill" [style.width.%]="porcentagemExp"></div>
      </div>
      <span class="texto">{{ experiencia }}/{{ experienciaParaProximo }}</span>
    </div>
  </section>
  
  <!-- ⚔️ Habilidades -->
  <section class="habilidades">
    <h3>⚔️ Habilidades:</h3>
    <div class="habilidades-grid">
      <button *ngFor="let habilidade of habilidades" 
              class="botao-habilidade"
              [class.sem-mana]="mana < habilidade.custaMana"
              [disabled]="mana < habilidade.custaMana || vida <= 0"
              (click)="executarHabilidade(habilidade)">
        
        <div class="habilidade-info">
          <span class="nome">{{ habilidade.nome }}</span>
          <span class="dano" *ngIf="habilidade.dano > 0">
            💥 {{ habilidade.dano }}
          </span>
          <span class="custo" *ngIf="habilidade.custaMana > 0">
            💙 {{ habilidade.custaMana }}
          </span>
        </div>
      </button>
    </div>
  </section>
  
  <!-- 🎒 Inventário -->
  <section class="inventario">
    <h3>🎒 Inventário ({{ inventario.length }} itens):</h3>
    
    <div *ngIf="inventario.length > 0; else inventarioVazio" 
         class="itens-grid">
      
      <div *ngFor="let item of inventario; trackBy: trackByItemId" 
           class="item-slot"
           [ngClass]="'raridade-' + item.raridade"
           (click)="usarItem(item)">
        
        <div class="item-info">
          <span class="nome">{{ item.nome }}</span>
          <span class="tipo">{{ item.tipo | titlecase }}</span>
          <span class="valor">💰 {{ item.valor | currency:'BRL':'symbol':'1.0-0' }}</span>
          <div class="raridade">{{ item.raridade | titlecase }}</div>
        </div>
      </div>
    </div>
    
    <ng-template #inventarioVazio>
      <p class="inventario-vazio">🗃️ Inventário vazio</p>
    </ng-template>
  </section>
  
  <!-- 📅 Informações extras -->
  <footer class="personagem-footer">
    <p class="data-criacao">
      🗓️ Criado em: {{ dataCriacao | date:'dd/MM/yyyy HH:mm' }}
    </p>
    <p class="tempo-jogo">
      ⏰ Tempo de jogo: {{ dataCriacao | date:'H:mm:ss':'UTC' }}
    </p>
  </footer>
  
</div>
```

### **💄 Estilos (CSS)**

```css
/* personagem.component.css */
.personagem-card {
  border: 3px solid #8B4513;
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  margin: 20px;
  background: linear-gradient(135deg, #f5f5dc 0%, #daa520 100%);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  font-family: 'Fantasy', serif;
  transition: all 0.3s ease;
}

.personagem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.4);
}

.personagem-card.morto {
  opacity: 0.6;
  filter: grayscale(50%);
  border-color: #666;
}

.personagem-card.lendario {
  border-color: gold;
  background: linear-gradient(135deg, #fffacd 0%, #ffd700 100%);
  box-shadow: 0 0 20px gold;
}

/* Cabeçalho */
.personagem-header {
  text-align: center;
  margin-bottom: 20px;
}

.personagem-header h2 {
  margin: 0;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  color: #8B4513;
}

.classe, .nivel {
  display: inline-block;
  background: rgba(139, 69, 19, 0.2);
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
  font-weight: bold;
}

.titulo-lendario {
  background: linear-gradient(45deg, gold, orange);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  margin-top: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  animation: brilho 2s infinite alternate;
}

@keyframes brilho {
  from { box-shadow: 0 0 10px gold; }
  to { box-shadow: 0 0 20px orange; }
}

/* Barras de status */
.status-bars {
  margin: 20px 0;
}

.barra-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
}

.barra-container label {
  min-width: 80px;
  font-weight: bold;
}

.barra {
  flex: 1;
  height: 20px;
  background: rgba(0,0,0,0.3);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #333;
}

.preenchimento {
  height: 100%;
  transition: width 0.5s ease;
  border-radius: 10px;
}

.vida-alta { background: linear-gradient(90deg, #00ff00, #32cd32); }
.vida-media { background: linear-gradient(90deg, #ffff00, #ffa500); }
.vida-baixa { background: linear-gradient(90deg, #ff4500, #ff0000); }

.mana-fill { background: linear-gradient(90deg, #0066ff, #00ccff); }
.exp-fill { background: linear-gradient(90deg, #9932cc, #ba55d3); }

.texto {
  min-width: 70px;
  text-align: right;
  font-size: 12px;
  font-weight: bold;
}

/* Habilidades */
.habilidades {
  margin: 20px 0;
}

.habilidades h3 {
  margin-bottom: 10px;
  color: #8B4513;
}

.habilidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.botao-habilidade {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  border: none;
  border-radius: 8px;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.botao-habilidade:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.botao-habilidade:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #ccc;
}

.botao-habilidade.sem-mana {
  background: linear-gradient(135deg, #f44336, #d32f2f);
}

/* Inventário */
.inventario {
  margin: 20px 0;
}

.itens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}

.item-slot {
  background: rgba(255,255,255,0.9);
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.item-slot:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.raridade-comum { border-color: #999; }
.raridade-raro { border-color: #0066ff; background: rgba(0,102,255,0.1); }
.raridade-epico { border-color: #9933cc; background: rgba(153,51,204,0.1); }
.raridade-lendario { border-color: #ff6600; background: rgba(255,102,0,0.1); }

.item-info {
  text-align: center;
}

.item-info .nome {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-info .tipo,
.item-info .valor,
.item-info .raridade {
  display: block;
  font-size: 12px;
  margin: 2px 0;
}

.inventario-vazio {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 20px;
}

/* Footer */
.personagem-footer {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(139, 69, 19, 0.3);
  font-size: 12px;
  color: #666;
  text-align: center;
}
```

---

## 🧙‍♂️ Analogias RPG Completas

| Conceito Angular | Analogia RPG | Exemplo Prático |
|------------------|-------------|-----------------|
| **Componente** | Personagem jogável | Guerreiro, Mago, Arqueiro |
| **Template** | Interface visual do jogo | Barra de vida, inventário |
| **Data Binding** | Status em tempo real | Vida diminuindo ao ser atacado |
| **Input** | Item/buff recebido | Espada dada por NPC |
| **Output** | Ação executada | Emitir evento de ataque |
| **Pipe** | Magia de transformação | Formatação de gold (1234 → 1.2K) |
| **ngIf** | Feitiço de invisibilidade | Mostrar botão só se tem mana |
| **ngFor** | Feitiço de multiplicação | Lista de habilidades |
| **ngClass** | Buff visual | Personagem brilha se lendário |
| **Módulo** | Guilda/Party | Grupo de personagens afins |

---

## 📝 Boas Práticas para Componentes Angular

### ✅ **Faça Sempre:**
- Separe lógica (TS) e apresentação (HTML)
- Use Input/Output para comunicação entre componentes
- Prefira pipes para formatação de dados
- Use diretivas estruturais (*ngIf, *ngFor) adequadamente
- Organize componentes relacionados em módulos
- Use trackBy em listas grandes para performance

### ❌ **Evite:**
- Lógica complexa nos templates
- Manipulação direta do DOM
- Múltiplas responsabilidades em um componente
- Componentes com mais de 400 linhas
- Usar any em tipagens

### 🚀 **Performance:**
- Use OnPush change detection para componentes puros
- Implemente trackBy functions para *ngFor
- Lazy load módulos grandes
- Use pipes puros para transformações custosas

---

## 🚀 Missão do Dia: "Crie seu Herói Angular!"

1. Gere o componente:
   ```bash
   ng generate component personagem
   ```
2. Implemente data binding para nome, nível, classe
3. Adicione lista de habilidades com ngFor
4. Use ngIf para mostrar "Herói Lendário" se nível > 40
5. Adicione input para editar nível ([(ngModel)])
6. Use pipe para formatar experiência
7. Implemente Output para emitir evento de ataque

---

## 📋 Checklist da Missão
- [ ] Componente criado
- [ ] Data binding implementado
- [ ] Input/Output funcionando
- [ ] Pipe utilizado
- [ ] Diretiva aplicada
- [ ] Módulo organizado
- [ ] Testado no navegador

---

*Prepare-se para criar personagens lendários com Angular! 🏆*
