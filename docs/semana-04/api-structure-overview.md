# 🌐 API Library - Estrutura de Serviços Externos

## 📍 Estrutura Revisada (Apenas APIs do Curso)

```
libs/api/src/lib/
├── services/
│   ├── api.service.ts           # ✅ Serviço base HTTP
│   └── external/                # Serviços para APIs públicas
│       ├── shikimori.service.ts # 🔄 Semana 1 - Anime/Manga
│       ├── cats.service.ts      # 🔄 Semana 2 - Gatos IA
│       └── hypixel.service.ts   # 🔄 Semana 3 - Minecraft Stats
├── config/
│   └── endpoints.config.ts      # ✅ Configuração de endpoints
└── index.ts                     # ✅ Exports públicos
```

## 🎯 APIs Por Semana do Curso

### 📅 **Semana 1 - TypeScript & Angular Básico**
**API**: Shikimori API  
**Projeto**: Personagens de Anime  
**Funcionalidades**:
- Listar animes populares
- Buscar personagens por nome
- Exibir detalhes de anime
- Filtrar por gênero

### 📅 **Semana 2 - Services, APIs & RxJS**
**API**: AI Cats API  
**Projeto**: Galeria de Gatos  
**Funcionalidades**:
- Galeria de imagens de gatos
- Sistema de favoritos
- Filtros por categoria/raça
- Upload de imagens

### 📅 **Semana 3 - Microfrontends & Module Federation**
**API**: Hypixel API  
**Projeto**: Dashboard Minecraft Stats  
**Funcionalidades**:
- Estatísticas de jogador
- Status online
- Informações de guild
- Dashboard em microfrontend

### 📅 **Semana 4 - Testes & Integração**
**Projeto**: Sistema Integrado com Testes  
**APIs**: Todas as anteriores integradas

## 🔧 Configuração de Endpoints

### Base URLs
- **Shikimori**: `https://shikimori.one/api`
- **AI Cats**: `https://api.thecatapi.com/v1`
- **Hypixel**: `https://api.hypixel.net`

### Rate Limits
- **Shikimori**: 90 requests/minuto
- **AI Cats**: 1000 requests/hora
- **Hypixel**: 120 requests/minuto

## 📚 Cronograma de Implementação

| Semana | Serviço | Status | Projeto |
|--------|---------|--------|---------|
| 1 | `ShikimoriService` | 🔄 Planejado | Lista de Personagens |
| 2 | `CatsService` | 🔄 Planejado | Galeria de Gatos |
| 3 | `HypixelService` | 🔄 Planejado | Dashboard Minecraft |
| 4 | Testes + Integração | 🔄 Planejado | App Final |

## 🚀 Como Será Implementado

### Semana 1 - ShikimoriService
```typescript
// Exemplo de implementação planejada
@Injectable()
export class ShikimoriService {
  getPopularAnimes(): Observable<Anime[]>
  searchCharacters(name: string): Observable<Character[]>
  getAnimeDetails(id: number): Observable<AnimeDetails>
}
```

### Semana 2 - CatsService
```typescript
// Exemplo de implementação planejada
@Injectable()
export class CatsService {
  getRandomCats(limit?: number): Observable<Cat[]>
  getFavorites(): Observable<Cat[]>
  addToFavorites(catId: string): Observable<void>
  getBreeds(): Observable<Breed[]>
}
```

### Semana 3 - HypixelService
```typescript
// Exemplo de implementação planejada
@Injectable()
export class HypixelService {
  getPlayerStats(uuid: string): Observable<PlayerStats>
  getPlayerStatus(uuid: string): Observable<PlayerStatus>
  getGuildInfo(guildId: string): Observable<Guild>
}
```

## 📝 Notas Importantes

- **Chaves de API**: Algumas APIs requerem registro
- **CORS**: Algumas podem precisar de proxy
- **Cache**: Implementar cache para evitar rate limit
- **Tipos**: Criar interfaces específicas para cada API

## ✅ Próximos Passos

1. **Semana 1**: Implementar `ShikimoriService`
2. **Semana 2**: Implementar `CatsService` 
3. **Semana 3**: Implementar `HypixelService`
4. **Semana 4**: Testes e integração final

Esta estrutura está alinhada com o cronograma do curso e focada apenas nas APIs que realmente serão utilizadas! 🎯
