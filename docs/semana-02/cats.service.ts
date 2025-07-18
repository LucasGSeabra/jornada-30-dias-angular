/**
 * @fileoverview Serviço para AI Cats API - Semana 2
 *
 * Serviço responsável por consumir a AI Cats API para buscar e gerenciar
 * imagens de gatos geradas por IA. Será implementado na Semana 2 do curso
 * para o projeto "Galeria de Gatos".
 *
 * Funcionalidades planejadas:
 * - Buscar imagens de gatos por categoria
 * - Filtrar por raças específicas
 * - Sistema de favoritos
 * - Upload de imagens personalizadas
 * - Votação em imagens
 *
 * Exemplo de implementação:
 * ```typescript
 * @Injectable({ providedIn: 'root' })
 * export class CatsService {
 *   private readonly baseUrl = 'https://api.thecatapi.com/v1';
 *   private readonly apiKey = 'YOUR_API_KEY'; // Configurar via environment
 *
 *   constructor(private http: HttpClient) {}
 *
 *   getCats(limit: number = 10): Observable<Cat[]> {
 *     const headers = { 'x-api-key': this.apiKey };
 *     return this.http.get<Cat[]>(`${this.baseUrl}/images/search`, {
 *       headers,
 *       params: { limit: limit.toString() }
 *     });
 *   }
 *
 *   getBreeds(): Observable<Breed[]> {
 *     return this.http.get<Breed[]>(`${this.baseUrl}/breeds`);
 *   }
 * }
 * ```
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 * @week 2
 */

// TODO: Implementar CatsService na Semana 2 usando HttpClient diretamente
