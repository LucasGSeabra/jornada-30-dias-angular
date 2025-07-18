/**
 * @fileoverview Documentação do Serviço AI Cats API
 * 
 * Serviço para consumir APIs de gatos com inteligência artificial.
 * Permite gerar imagens de gatos, buscar raças e criar galerias.
 * 
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

# 🐱 AI Cats API Service

## 📋 Descrição
Serviço para integração com APIs de gatos que utilizam inteligência artificial
para gerar e categorizar imagens de gatos. Ideal para criar galerias dinâmicas
e sistemas de classificação.

## 🔗 APIs Disponíveis

### The Cat API
- **Base URL**: `https://api.thecatapi.com/v1`
- **Documentação**: https://thecatapi.com/
- **Funcionalidades**:
  - Imagens aleatórias de gatos
  - Busca por raças
  - Sistema de favoritos
  - Upload de imagens

### Cats as a Service
- **Base URL**: `https://cataas.com`
- **Documentação**: https://cataas.com/
- **Funcionalidades**:
  - Geração de imagens com texto
  - Filtros por cor e tamanho
  - Formatos personalizados

## 🛠️ Funcionalidades Planejadas

### 📸 Galeria de Gatos
- [ ] Exibir grade de imagens aleatórias
- [ ] Filtrar por raças
- [ ] Sistema de favoritos local
- [ ] Busca por características

### 🎯 Recursos Interativos
- [ ] Geração de memes com gatos
- [ ] Classificação por cuteness score
- [ ] Compartilhamento social
- [ ] Coleção pessoal

## 📦 Implementação
```typescript
/**
 * Serviço para gerenciar operações com APIs de gatos
 * 
 * @example
 * ```typescript
 * constructor(private catsService: CatsService) {}
 * 
 * loadRandomCats() {
 *   this.catsService.getRandomCats(10)
 *     .subscribe(cats => this.cats = cats);
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class CatsService {
  // TODO: Implementar na Semana 2
}
```

## 🎮 Projeto da Semana: Galeria de Gatos
Uma aplicação que permite explorar, favoritar e classificar imagens de gatos
usando múltiplas APIs com recursos de IA.

### 🔧 Tecnologias
- Angular Services
- HttpClient & RxJS
- Lazy Loading
- Progressive Web App (PWA)
