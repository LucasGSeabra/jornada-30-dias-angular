/**
 * @fileoverview Documentação do Serviço Shikimori API
 * 
 * Serviço para consumir a API do Shikimori - plataforma de anime e manga.
 * Permite buscar informações sobre animes, mangas, personagens e usuários.
 * 
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

/**
 * # 🎌 Shikimori API Service
 * 
 * ## Descrição
 * O Shikimori é uma plataforma russa de anime e manga similar ao MyAnimeList.
 * A API fornece acesso a dados sobre animes, mangas, personagens e interações de usuários.
 * 
 * ## Base URL
 * ```
 * https://shikimori.one/api
 * ```
 * 
 * ## Autenticação
 * - **Tipo**: OAuth2
 * - **Público**: Algumas rotas são públicas (busca de animes/mangas)
 * - **Privado**: Dados de usuário requerem autenticação
 * 
 * ## Rate Limits
 * - **Usuários não autenticados**: 90 requests/minuto
 * - **Usuários autenticados**: 300 requests/minuto
 * 
 * ## Endpoints Principais
 * 
 * ### 🎬 Animes
 * - `GET /animes` - Buscar animes
 * - `GET /animes/{id}` - Detalhes de um anime específico
 * - `GET /animes/{id}/roles` - Personagens e staff
 * - `GET /animes/{id}/screenshots` - Screenshots do anime
 * - `GET /animes/{id}/videos` - Vídeos relacionados
 * 
 * ### 📚 Mangas
 * - `GET /mangas` - Buscar mangas
 * - `GET /mangas/{id}` - Detalhes de um manga específico
 * - `GET /mangas/{id}/roles` - Personagens e autores
 * 
 * ### 👥 Personagens
 * - `GET /characters` - Buscar personagens
 * - `GET /characters/{id}` - Detalhes de um personagem
 * 
 * ### 🏢 Estúdios
 * - `GET /studios` - Lista de estúdios de anime
 * 
 * ### 👤 Usuários (Autenticação necessária)
 * - `GET /users/{id}` - Perfil do usuário
 * - `GET /users/{id}/anime_rates` - Lista de animes do usuário
 * - `GET /users/{id}/manga_rates` - Lista de mangas do usuário
 * 
 * ## Parâmetros de Busca Comuns
 * 
 * ### Para Animes/Mangas
 * - `limit` - Número de resultados (max: 50)
 * - `page` - Página dos resultados
 * - `order` - Ordenação (id, ranked, kind, popularity, name, aired_on, episodes, status, random)
 * - `kind` - Tipo (tv, movie, ova, ona, special, music, etc.)
 * - `status` - Status (anons, ongoing, released)
 * - `season` - Temporada (spring_2023, summer_2023, etc.)
 * - `score` - Pontuação mínima
 * - `genre` - IDs de gêneros
 * - `studio` - IDs de estúdios
 * - `franchise` - Nome da franquia
 * - `censored` - Filtrar conteúdo censurado
 * - `search` - Busca por nome
 * 
 * ## Estruturas de Dados
 * 
 * ### Anime/Manga Base
 * ```typescript
 * interface ShikimoriAnime {
 *   id: number;
 *   name: string;
 *   russian: string;
 *   image: {
 *     original: string;
 *     preview: string;
 *     x96: string;
 *     x48: string;
 *   };
 *   url: string;
 *   kind: string;
 *   score: string;
 *   status: string;
 *   episodes: number;
 *   episodes_aired: number;
 *   aired_on: string;
 *   released_on: string;
 *   rating: string;
 *   english: string[];
 *   japanese: string[];
 *   synonyms: string[];
 *   license_name_ru: string;
 *   duration: number;
 *   description: string;
 *   description_html: string;
 *   description_source: string;
 *   franchise: string;
 *   favoured: boolean;
 *   anons: boolean;
 *   ongoing: boolean;
 *   thread_id: number;
 *   topic_id: number;
 *   myanimelist_id: number;
 *   rates_scores_stats: Array<{score: number, name: number}>;
 *   rates_statuses_stats: Array<{name: string, value: number}>;
 *   updated_at: string;
 *   next_episode_at: string;
 *   fansubbers: string[];
 *   fandubbers: string[];
 *   licensors: string[];
 *   genres: ShikimoriGenre[];
 *   studios: ShikimoriStudio[];
 *   videos: ShikimoriVideo[];
 *   screenshots: ShikimoriScreenshot[];
 *   user_rate: ShikimoriUserRate;
 * }
 * ```
 * 
 * ## Casos de Uso Planejados
 * 
 * ### 1. Busca de Animes/Mangas
 * - Busca por nome, gênero, temporada
 * - Filtros avançados (nota, status, tipo)
 * - Paginação de resultados
 * 
 * ### 2. Detalhes Completos
 * - Informações detalhadas de anime/manga
 * - Screenshots e vídeos
 * - Personagens e staff
 * 
 * ### 3. Recomendações
 * - Animes/mangas similares
 * - Top rankings por categoria
 * - Lançamentos da temporada
 * 
 * ### 4. Integração Social (se autenticado)
 * - Lista pessoal do usuário
 * - Ratings e reviews
 * - Progresso de visualização
 * 
 * ## Métodos do Serviço a Implementar
 * 
 * ```typescript
 * class ShikimoriService {
 *   // Busca
 *   searchAnimes(params: AnimeSearchParams): Observable<ShikimoriAnime[]>
 *   searchMangas(params: MangaSearchParams): Observable<ShikimoriManga[]>
 *   
 *   // Detalhes
 *   getAnimeById(id: number): Observable<ShikimoriAnime>
 *   getMangaById(id: number): Observable<ShikimoriManga>
 *   
 *   // Relacionados
 *   getAnimeCharacters(id: number): Observable<ShikimoriCharacter[]>
 *   getAnimeScreenshots(id: number): Observable<ShikimoriScreenshot[]>
 *   
 *   // Rankings e populares
 *   getTopAnimes(params?: TopParams): Observable<ShikimoriAnime[]>
 *   getCurrentSeason(): Observable<ShikimoriAnime[]>
 *   
 *   // Gêneros e metadados
 *   getGenres(): Observable<ShikimoriGenre[]>
 *   getStudios(): Observable<ShikimoriStudio[]>
 * }
 * ```
 * 
 * ## Considerações de Implementação
 * 
 * ### CORS
 * - ❌ CORS desabilitado - Necessário proxy ou backend
 * - Implementar chamadas via backend próprio ou usar CORS proxy
 * 
 * ### Cache
 * - Implementar cache para dados estáticos (gêneros, estúdios)
 * - Cache de busca por tempo limitado
 * 
 * ### Error Handling
 * - Rate limit (429) - implementar retry com backoff
 * - Dados não encontrados (404)
 * - Servidor indisponível (5xx)
 * 
 * ### Performance
 * - Lazy loading para imagens
 * - Paginação eficiente
 * - Debounce em buscas
 * 
 * @see https://shikimori.one/api/doc/1.0
 */

// Este arquivo serve como documentação e não contém implementação
