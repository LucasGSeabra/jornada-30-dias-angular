/**
 * @fileoverview Serviço para Flyff Game API - Semana 4
 *
 * Serviço responsável por consumir a API do jogo MMORPG Flyff para buscar
 * estatísticas de personagens, guilds e servidores. Será implementado na
 * Semana 4 do curso para o projeto final "Painel Flyff Unificado".
 *
 * Funcionalidades planejadas:
 * - Buscar estatísticas de personagens
 * - Informações de guilds e rankings
 * - Status dos servidores
 * - Sistema de comparação de stats
 * - Histórico de progressão
 *
 * Exemplo de implementação:
 * ```typescript
 * @Injectable({ providedIn: 'root' })
 * export class FlyffService {
 *   private readonly baseUrl = 'https://api.flyff.com/v1';
 *   private readonly apiKey = 'YOUR_API_KEY'; // Configurar via environment
 *
 *   constructor(private http: HttpClient) {}
 *
 *   getCharacterStats(characterName: string): Observable<FlyffCharacter> {
 *     const headers = { 'Authorization': `Bearer ${this.apiKey}` };
 *     return this.http.get<FlyffCharacter>(`${this.baseUrl}/character/${characterName}`, {
 *       headers
 *     });
 *   }
 *
 *   getGuildInfo(guildName: string): Observable<FlyffGuild> {
 *     return this.http.get<FlyffGuild>(`${this.baseUrl}/guild/${guildName}`);
 *   }
 *
 *   getServerStatus(): Observable<FlyffServer[]> {
 *     return this.http.get<FlyffServer[]>(`${this.baseUrl}/servers`);
 *   }
 * }
 * ```
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 * @week 4
 */

// TODO: Implementar FlyffService na Semana 4 para integração final do painel unificado
