# Documentação do nx.json - Configuração de Cache e Inputs

Este arquivo explica como funciona a configuração de cache do Nx no projeto.

## 📁 Named Inputs

Os **Named Inputs** definem conjuntos de arquivos que afetam o cache do Nx. Cada input é usado para calcular hashes e determinar quando rebuildar.

### `default`
**Propósito**: Input padrão - inclui todos os arquivos do projeto + configurações globais  
**Usado como**: Base para outros inputs mais específicos  
```json
"default": [
  "{projectRoot}/**/*",  // Todos os arquivos do projeto
  "sharedGlobals"        // Configurações globais do workspace
]
```

### `production`
**Propósito**: Input para builds de produção - exclui arquivos de desenvolvimento  
**Vantagem**: Garante que mudanças em testes/docs não disparem rebuilds de produção  
```json
"production": [
  "default",                              // Inclui arquivos padrão
  "!{projectRoot}/**/*.spec.ts",          // ❌ Exclui testes unitários
  "!{projectRoot}/**/*.stories.ts",       // ❌ Exclui stories do Storybook
  "!{projectRoot}/**/*.test.ts",          // ❌ Exclui arquivos de teste
  "!{projectRoot}/**/test-setup.ts",      // ❌ Exclui configuração de testes
  "!{projectRoot}/**/*.md"                // ❌ Exclui documentação markdown
]
```

### `testing`
**Propósito**: Input para execução de testes - inclui código fonte + arquivos de teste  
**Vantagem**: Garante que testes rodem quando código ou testes mudarem  
```json
"testing": [
  "default",                              // ✅ Inclui código fonte
  "{projectRoot}/**/*.spec.ts",           // ✅ Inclui testes unitários
  "{projectRoot}/**/*.test.ts",           // ✅ Inclui arquivos de teste
  "{projectRoot}/**/test-setup.ts"        // ✅ Inclui configuração de testes
]
```

### `linting`
**Propósito**: Input para linting - foca em arquivos que podem ser lintados  
**Vantagem**: Otimiza para rodar lint apenas quando necessário  
```json
"linting": [
  "{projectRoot}/**/*.ts",                // ✅ Arquivos TypeScript
  "{projectRoot}/**/*.js",                // ✅ Arquivos JavaScript
  "{projectRoot}/**/*.html",              // ✅ Templates HTML
  "{projectRoot}/.eslintrc.json",         // ✅ Configuração local do ESLint
  "sharedGlobals"                         // ✅ Configurações globais
]
```

### `sharedGlobals`
**Propósito**: Configurações globais do workspace que afetam todos os projetos  
**Impacto**: Mudanças aqui invalidam cache de todos os projetos  
```json
"sharedGlobals": [
  "{workspaceRoot}/tsconfig.base.json",   // 🌍 Configuração base do TypeScript
  "{workspaceRoot}/package.json",         // 🌍 Dependências do workspace
  "{workspaceRoot}/nx.json",              // 🌍 Configuração do Nx
  "{workspaceRoot}/.eslintrc.json"        // 🌍 Configuração global do ESLint
]
```

## 🎯 Target Defaults

Configurações padrão para targets (comandos como build, test, lint). Define quais inputs usar e se deve cachear para cada tipo de comando.

### `build` - Compilação para produção
- **Inputs**: `["production", "^production"]`
- **Cache**: `true`
- **Explicação**: 
  - Usa inputs `production` (exclui testes/docs)
  - `^production` também verifica dependências upstream
  - **Resultado**: Build só roda se código de produção mudou

### `test` - Execução de testes
- **Inputs**: `["testing", "^testing"]`
- **Cache**: `true`
- **Explicação**:
  - Usa inputs `testing` (inclui arquivos de teste)
  - `^testing` verifica se dependências precisam ser testadas
  - **Resultado**: Testes só rodam se código ou testes mudaram

### `lint` - Análise estática de código
- **Inputs**: `["linting", "^linting"]`
- **Cache**: `true`
- **Explicação**:
  - Usa inputs `linting` (arquivos lintáveis + configs)
  - `^linting` verifica configurações das dependências
  - **Resultado**: Lint só roda se código lintável mudou

### `e2e` - Testes end-to-end
- **Inputs**: `["default", "^production"]`
- **Cache**: `true`
- **Explicação**:
  - Usa `default` (todos os arquivos) + `production` das dependências
  - E2E testa a aplicação completa, então precisa de tudo
  - **Resultado**: E2E roda se qualquer coisa relevante mudou

## 🚀 Vantagens desta Configuração

### ✅ **Builds mais rápidos**
Mudanças em arquivos de teste não disparam builds de produção

### ✅ **Cache mais inteligente**
Cada target (build/test/lint) tem inputs específicos para suas necessidades

### ✅ **Menos rebuilds desnecessários**
- Markdown e stories não afetam builds
- Configurações de teste não afetam produção
- Linting otimizado apenas para arquivos relevantes

### ✅ **Melhor desenvolvimento**
- `nx affected:build` só builda o que realmente precisa
- Feedback mais rápido durante desenvolvimento
- Cache mais eficiente no CI/CD

## 🔧 Comandos Úteis

```bash
# Ver projetos afetados
nx affected:graph

# Build apenas o que mudou
nx affected:build

# Testar apenas o que mudou
nx affected:test

# Limpar cache se necessário
nx reset

# Ver informações de cache
nx show project meu-app --web
```

## 📝 Exemplo Prático

**Cenário**: Você edita apenas um arquivo `*.spec.ts`

- ❌ **build**: Não roda (specs excluídos do input `production`)
- ✅ **test**: Roda (specs incluídos no input `testing`)
- ❌ **lint**: Não roda (nenhum arquivo lintável mudou)
- ❌ **e2e**: Não roda (nenhum código de produção mudou)

**Resultado**: Apenas testes rodam, build permanece em cache! 🚀
