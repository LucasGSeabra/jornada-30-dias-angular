/**
 * @fileoverview Serviço para Hypixel API - Semana 3
 *
 * Serviço responsável por consumir a Hypixel API para buscar estatísticas
 * e informações de jogadores do Minecraft. Será implementado na Semana 3 do curso
 * para o projeto "Dashboard Minecraft Stats" com Microfrontends.
 *
 * Funcionalidades planejadas:
 * - Buscar estatísticas de jogador por UUID/nome
 * - Obter status online do jogador
 * - Listar informações de guild
 * - Histórico de jogos recentes
 * - Rankings e leaderboards
 *
 * Exemplo de implementação:
 * ```typescript
 * @Injectable({ providedIn: 'root' })
 * export class HypixelService {
 *   private readonly baseUrl = 'https://api.hypixel.net';
 *   private readonly apiKey = 'YOUR_API_KEY'; // Configurar via environment
 *
 *   constructor(private http: HttpClient) {}
 *
 *   getPlayerStats(uuid: string): Observable<PlayerStats> {
 *     return this.http.get<PlayerStats>(`${this.baseUrl}/player`, {
 *       params: { key: this.apiKey, uuid }
 *     });
 *   }
 *
 *   getPlayerStatus(uuid: string): Observable<PlayerStatus> {
 *     return this.http.get<PlayerStatus>(`${this.baseUrl}/status`, {
 *       params: { key: this.apiKey, uuid }
 *     });
 *   }
 * }
 * ```
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 * @week 3
 */

// TODO: Implementar HypixelService na Semana 3 usando HttpClient diretamente
