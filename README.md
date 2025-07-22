# 🚀 Jornada 30 Dias Angular

Bem-vindo ao repositório oficial do curso **Jornada 30 Dias Angular**! Este é um monorepo completo usando Nx que aborda desde conceitos básicos até técnicas avançadas do Angular através de projetos práticos com APIs públicas.

## 📋 Índice

- [🎯 Sobre o Curso](#-sobre-o-curso)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [⚡ Como Começar](#-como-começar)
- [📚 Cronograma das Semanas](#-cronograma-das-semanas)
- [🌐 APIs Utilizadas](#-apis-utilizadas)
- [🛠️ Tecnologias](#️-tecnologias)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)

## 🎯 Sobre o Curso

O **Jornada 30 Dias Angular** é um curso intensivo que ensina Angular através da construção de projetos reais consumindo APIs públicas. Em 4 semanas você vai do básico ao avançado, culminando em um painel integrado que unifica todas as funcionalidades desenvolvidas.

### 🏆 O que você vai aprender:
- ✅ **Fundamentos sólidos** do Angular
- ✅ **Consumo de APIs** públicas (Shikimori, Cat API, Hypixel, Flyff)
- ✅ **Arquitetura escalável** com Nx monorepo
- ✅ **Bibliotecas compartilhadas** (UI, Data, API)
- ✅ **Roteamento e navegação** avançados
- ✅ **Testes unitários e E2E** completos
- ✅ **Deploy para produção**

## ⚡ Como Começar

### 📋 Pré-requisitos
```bash
node >= 18.0.0
npm >= 9.0.0
```

### 🔧 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd jornada-30-dias
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Verifique se o Nx está funcionando:**
```bash
npx nx --version
```

### 🚀 Comandos Principais

```bash
# 📊 Ver todos os projetos disponíveis
npx nx show projects

# 🎯 Executar exemplos dos dias
npm run exemplos:dia01          # Exemplos do Dia 01 - TypeScript Básico
npm run exemplos:dia01:watch    # Modo watch (re-executa automaticamente)

# 🏃‍♂️ Executar aplicação específica
npx nx serve semana-01-anime        # Projeto da Semana 1
npx nx serve semana-02-gatos        # Projeto da Semana 2  
npx nx serve semana-03-minecraft    # Projeto da Semana 3
npx nx serve semana-04-flyff        # Projeto da Semana 4
npx nx serve shell-app              # App principal (shell)

# 🏗️ Build para produção
npx nx build semana-01-anime --prod

# 🧪 Executar testes
npx nx test semana-01-anime
npx nx e2e semana-01-anime-e2e

# 🔍 Análise de dependências
npx nx graph

# 📦 Limpar cache
npx nx reset
```

## 📚 Cronograma das Semanas

### 📋 **Estrutura Geral**
- **Segunda a Sexta:** 1h30 de aula
- **Sábado:** 2h de projeto orientado  
- **Domingo:** Livre para revisão, dúvidas ou descanso

---

## 🎌 **Semana 1: Fortalecendo a Base - TypeScript & Angular Básico**

### **Dia 1 — Tipos Básicos e Interfaces**
- **📚 Conteúdo:** Diferença entre `any`, `unknown`, tipos literais, Interfaces vs Types
- **🎮 Projeto:** Criar tipos personalizados para personagem de RTS

### **Dia 2 — Classes, Herança e Funções**
- **📚 Conteúdo:** OOP em TypeScript, herança, composição, SOLID
- **🎮 Projeto:** Modelar unidades do exército (Soldier, Tank, etc.)

### **Dia 3 — Generics e Utility Types**
- **📚 Conteúdo:** Generics, restrições, Partial, Pick, Omit, Readonly
- **🎮 Projeto:** Generic para inventário de itens de jogo

### **Dia 4 — Revisão TypeScript & Iniciando Angular**
- **📚 Conteúdo:** Integração TS + Angular, Angular CLI, ciclo de vida
- **🎮 Projeto:** Quiz de revisão + projeto Angular inicial

### **Dia 5 — Componentes, Data Binding, Módulos**
- **📚 Conteúdo:** Estrutura Angular, input/output, pipes, diretivas
- **🎮 Projeto:** Componente Personagem com data binding

### **🎯 Sábado — Projeto 1: Lista de Personagens RTS**
- **📦 Entregável:** Projeto "Meu Exército RTS" completo
- **🎮 Features:** CRUD de personagens, tipagem completa

---

## 🐱 **Semana 2: Services, APIs & RxJS**

### **Dia 6 — Services Angular e DI**
- **📚 Conteúdo:** Dependency Injection, Injector tree, escopos
- **🎮 Projeto:** Service para gerenciar tropas/unidades

### **Dia 7 — HttpClient & Consumo de APIs**
- **📚 Conteúdo:** Interceptors, error handling, requests tipados
- **🎮 Projeto:** Consumir API pública, exibir dados de unidades

### **Dia 8 — RxJS Essencial**
- **📚 Conteúdo:** Observables, Subject, map, filter, switchMap
- **🎮 Projeto:** Refatorar service com RxJS

### **Dia 9 — Estruturação e Organização**
- **📚 Conteúdo:** Padrões de pastas, single responsibility
- **🎮 Projeto:** Refatorar projeto em estrutura organizada

### **Dia 10 — Revisão Geral da Semana**
- **📚 Conteúdo:** Recapitulação, dúvidas comuns, simulado
- **🎮 Projeto:** Bate-papo, resolução de bugs, quiz

### **🎯 Sábado — Projeto 2: CRUD de Unidades**
- **📦 Entregável:** CRUD completo com service, HttpClient, RxJS
- **🎮 Features:** Operações CRUD, integração API

---

## 🎮 **Semana 3: Microfrontends & Module Federation**

### **Dia 11 — Microfrontends: Conceitos e Desafios**
- **📚 Conteúdo:** História, casos reais (Spotify, bancos)
- **🎮 Projeto:** Discussão de vantagens/desvantagens

### **Dia 12 — Module Federation: Fundamentos**
- **📚 Conteúdo:** Setup Angular, configuração, pitfalls
- **🎮 Projeto:** Configurar Module Federation entre projetos

### **Dia 13 — Compartilhando Componentes**
- **📚 Conteúdo:** Shared libraries, versionamento
- **🎮 Projeto:** Compartilhar componente "herói" entre apps

### **Dia 14 — Comunicação entre Microfrontends**
- **📚 Conteúdo:** Event Bus, RxJS compartilhado, storage
- **🎮 Projeto:** Serviço de comunicação entre microfrontends

### **Dia 15 — Desafios Clássicos e Revisão**
- **📚 Conteúdo:** Roteamento, autenticação, fallback
- **🎮 Projeto:** Adicionar autenticação fake

### **🎯 Sábado — Projeto 3: Microfrontends Integrados**
- **📦 Entregável:** App shell + microfrontends integrados
- **🎮 Features:** Compartilhamento de serviços/componentes

---

## 🧪 **Semana 4: Testes com Jest & Integração**

### **Dia 16 — Fundamentos dos Testes**
- **📚 Conteúdo:** Unitário, integração, E2E, Jest vs Jasmine
- **🎮 Projeto:** Primeiro teste de service

### **Dia 17 — Setup Jest no Angular**
- **📚 Conteúdo:** Configuração Jest, mock, spy
- **🎮 Projeto:** Instalar Jest, rodar testes básicos

### **Dia 18 — Testando Services e Componentes**
- **📚 Conteúdo:** Cobertura, boas práticas de teste
- **🎮 Projeto:** Testar CRUD, componentes, inputs/outputs

### **Dia 19 — Coverage e Integração Contínua**
- **📚 Conteúdo:** Coverage report, pipeline CI
- **🎮 Projeto:** Gerar relatório de cobertura

### **Dia 20 — Revisão Final e Apresentação**
- **📚 Conteúdo:** Feedback, análise de desempenho, quiz final
- **🎮 Projeto:** Apresentação de projetos e arquitetura

### **🎯 Sábado — Projeto Final: Microfrontends Testados**
- **📦 Entregável:** Projeto final com microfrontends + cobertura de testes
- **🎮 Features:** Integração completa, testes abrangentes

---

## 🌐 APIs Utilizadas

| API | Descrição | Semana | Documentação |
|-----|-----------|---------|--------------|
| 🎌 **Shikimori** | Database de animes/mangás | 1 | [shikimori.one/api](https://shikimori.one/api) |
| 🐱 **Cat API** | Imagens de gatos IA | 2 | [thecatapi.com](https://thecatapi.com/) |
| 🎮 **Hypixel** | Stats do Minecraft | 3 | [api.hypixel.net](https://api.hypixel.net/) |
| 🏰 **Flyff Game API** | MMORPG Flyff stats | 4 | [freepublicapis.com/flyff-game-api](https://www.freepublicapis.com/flyff-game-api) |

## 🛠️ Tecnologias

### Core
- **Angular 18+** - Framework principal
- **TypeScript** - Linguagem
- **Nx** - Monorepo e build system
- **RxJS** - Programação reativa

### Testing
- **Jest** - Testes unitários
- **Cypress** - Testes E2E
- **Angular Testing Utilities** - TestBed, mocks

### Build & Deploy
- **Webpack** - Bundling (via Angular CLI)
- **ESLint + Prettier** - Code quality
- **Netlify/Vercel** - Deploy

## 📁 Estrutura de Pastas

```
jornada-30-dias/
├── 📚 docs/                                    # Documentação do curso
│   ├── semana-01/                              # Semana 1: Fundamentos
│   │   ├── dia-01/ ... dia-06/                 # Roteiros diários
│   │   └── shikimori.service.ts                # Service da API
│   ├── semana-02/                              # Semana 2: Services
│   │   ├── dia-01/ ... dia-06/
│   │   └── cats.service.ts                     # Service da API
│   ├── semana-03/                              # Semana 3: Arquitetura
│   │   ├── dia-01/ ... dia-06/
│   │   └── hypixel.service.ts                  # Service da API
│   └── semana-04/                              # Semana 4: Testes & Deploy
│       ├── dia-01/ ... dia-06/
│       ├── flyff.service.ts                    # Service da API Flyff
│       ├── endpoints.config.ts                 # Config de todas as APIs
│       └── configuracao-cache-nx.md            # Doc do Nx
│
├── 🚀 apps/                                    # Aplicações Angular
│   ├── semana-01-anime/                        # 🎌 Portal de Animes
│   ├── semana-02-gatos/                        # 🐱 Galeria de Gatos  
│   ├── semana-03-minecraft/                    # 🎮 Dashboard Minecraft
│   ├── semana-04-flyff/                        # 🏆 Painel Final Integrado
│   └── shell-app/                              # 🏠 App principal (shell)
│
├── 📦 libs/                                    # Bibliotecas compartilhadas
│   ├── ui/                                     # 🎨 Componentes UI
│   │   ├── src/lib/components/                 # Botões, Cards, etc.
│   │   ├── src/lib/types/                      # Tipos TypeScript
│   │   └── src/lib/tokens/                     # Design tokens
│   ├── shared-data/                            # 📊 Interfaces e tipos
│   │   └── src/lib/interfaces/                 # APIs responses, User, etc.
│   └── api/                                    # 🌐 Configurações de API
│       ├── src/lib/config/                     # URLs e endpoints
│       └── src/lib/services/                   # Futuros serviços base
│
├── 📄 Arquivos de configuração
├── package.json                                # Dependências
├── nx.json                                     # Configuração Nx
├── tsconfig.base.json                          # TypeScript config
└── README.md                                   # Este arquivo
```

## 🎯 Filosofia do Projeto

### ✅ **Didático em primeiro lugar**
- Código simples e comentado
- Estrutura progressiva de complexidade
- Exemplos práticos em cada etapa

### ✅ **Arquitetura escalável**
- Monorepo Nx bem estruturado
- Bibliotecas compartilhadas reutilizáveis
- Separação clara de responsabilidades

### ✅ **Boas práticas Angular**
- TypeScript rigoroso
- Testes em todos os níveis
- Performance e otimização

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**🚀 Bora começar a jornada? Execute `npm install` e `npx nx serve shell-app`!**

Made with ❤️ by Anna Clara Vieira Grateki

</div>
