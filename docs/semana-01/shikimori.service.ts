/**
 * @fileoverview Serviço para Shikimori API - Semana 1
 *
 * Serviço responsável por consumir a Shikimori API para buscar informações
 * sobre animes, mangás e personagens. Será implementado na Semana 1 do curso
 * para o projeto "Personagens de Anime".
 *
 * Funcionalidades planejadas:
 * - Buscar animes por nome/gênero
 * - Listar personagens populares
 * - Obter detalhes de anime específico
 * - Buscar mangás relacionados
 *
 * Exemplo de implementação:
 * ```typescript
 * @Injectable({ providedIn: 'root' })
 * export class ShikimoriService {
 *   private readonly baseUrl = 'https://shikimori.one/api';
 *
 *   constructor(private http: HttpClient) {}
 *
 *   getAnimes(params?: any): Observable<Anime[]> {
 *     return this.http.get<Anime[]>(`${this.baseUrl}/animes`, { params });
 *   }
 *
 *   getCharacters(params?: any): Observable<Character[]> {
 *     return this.http.get<Character[]>(`${this.baseUrl}/characters`, { params });
 *   }
 * }
 * ```
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 * @week 1
 */

// TODO: Implementar ShikimoriService na Semana 1 usando HttpClient diretamente
