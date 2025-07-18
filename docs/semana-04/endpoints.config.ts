/**
 * @fileoverview Configuração de endpoints das APIs públicas utilizadas no curso
 *
 * Este arquivo contém a configuração centralizada de todas as APIs públicas
 * que serão utilizadas durante a Jornada 30 Dias Angular.
 *
 * APIs do Curso:
 * - Shikimori API (Semana 1): Anime/Manga database
 * - AI Cats API (Semana 2): Imagens de gatos geradas por IA
 * - Hypixel API (Semana 3): Estatísticas do Minecraft
 * - Flyff Game API (Semana 4): MMORPG Flyff stats
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

/**
 * URLs base das APIs públicas utilizadas no curso
 */
export const API_BASE_URLS = {
  /** Shikimori API - Anime/Manga database (Semana 1) */
  SHIKIMORI: 'https://shikimori.one/api',

  /** AI Cats API - Imagens de gatos geradas por IA (Semana 2) */
  AI_CATS: 'https://api.thecatapi.com/v1',

  /** Hypixel API - Estatísticas do Minecraft (Semana 3) */
  HYPIXEL: 'https://api.hypixel.net',

  /** Flyff Game API - MMORPG Flyff stats (Semana 4) */
  FLYFF: 'https://api.flyff.com/v1',
} as const;

/**
 * Endpoints da Shikimori API
 * Usada na Semana 1 - Projeto: Personagens de Anime
 */
export const SHIKIMORI_ENDPOINTS = {
  /** Buscar animes */
  ANIMES: '/animes',

  /** Buscar personagens */
  CHARACTERS: '/characters',

  /** Buscar mangás */
  MANGAS: '/mangas',

  /** Buscar usuários */
  USERS: '/users',

  /** Buscar gêneros */
  GENRES: '/genres',
} as const;

/**
 * Endpoints da AI Cats API
 * Usada na Semana 2 - Projeto: Galeria de Gatos
 */
export const AI_CATS_ENDPOINTS = {
  /** Buscar imagens de gatos */
  IMAGES: '/images/search',

  /** Buscar raças */
  BREEDS: '/breeds',

  /** Buscar categorias */
  CATEGORIES: '/categories',

  /** Favoritos do usuário */
  FAVOURITES: '/favourites',

  /** Upload de imagem */
  UPLOAD: '/images/upload',
} as const;

/**
 * Endpoints da Hypixel API
 * Usada na Semana 3 - Projeto: Dashboard Minecraft Stats
 */
export const HYPIXEL_ENDPOINTS = {
  /** Estatísticas de jogador */
  PLAYER: '/player',

  /** Status de jogador */
  STATUS: '/status',

  /** Informações da guild */
  GUILD: '/guild',

  /** Sessão recente */
  RECENT_GAMES: '/recentgames',

  /** Informações da API */
  KEY: '/key',
} as const;

/**
 * Endpoints da Flyff Game API
 * Usada na Semana 4 - Projeto: Painel Flyff Unificado
 */
export const FLYFF_ENDPOINTS = {
  /** Estatísticas de personagem */
  CHARACTER: '/character',

  /** Informações de guild */
  GUILD: '/guild',

  /** Rankings globais */
  RANKINGS: '/rankings',

  /** Status dos servidores */
  SERVERS: '/servers',

  /** História de level up */
  LEVELUP_HISTORY: '/levelup-history',
} as const;

/**
 * Configurações específicas por API
 */
export const API_CONFIGS = {
  SHIKIMORI: {
    baseUrl: API_BASE_URLS.SHIKIMORI,
    headers: {
      'User-Agent': 'JornadaAngular30Dias',
    },
    rateLimit: {
      requests: 90,
      perMinute: 1,
    },
  },

  AI_CATS: {
    baseUrl: API_BASE_URLS.AI_CATS,
    headers: {
      'x-api-key': '', // Será configurado via environment ou injeção
    },
    rateLimit: {
      requests: 1000,
      perHour: 1,
    },
  },

  HYPIXEL: {
    baseUrl: API_BASE_URLS.HYPIXEL,
    headers: {},
    requiresApiKey: true,
    rateLimit: {
      requests: 120,
      perMinute: 1,
    },
  },

  FLYFF: {
    baseUrl: API_BASE_URLS.FLYFF,
    headers: {
      Authorization: '', // Será configurado via environment
    },
    requiresApiKey: true,
    rateLimit: {
      requests: 100,
      perMinute: 1,
    },
  },
} as const;

/**
 * Utilitário para construir URLs completas
 */
export class EndpointBuilder {
  /**
   * Constrói URL para Shikimori API
   */
  static shikimori(
    endpoint: keyof typeof SHIKIMORI_ENDPOINTS,
    params?: Record<string, string>
  ): string {
    const url = `${API_BASE_URLS.SHIKIMORI}${SHIKIMORI_ENDPOINTS[endpoint]}`;
    return params ? `${url}?${new URLSearchParams(params).toString()}` : url;
  }

  /**
   * Constrói URL para AI Cats API
   */
  static aiCats(
    endpoint: keyof typeof AI_CATS_ENDPOINTS,
    params?: Record<string, string>
  ): string {
    const url = `${API_BASE_URLS.AI_CATS}${AI_CATS_ENDPOINTS[endpoint]}`;
    return params ? `${url}?${new URLSearchParams(params).toString()}` : url;
  }

  /**
   * Constrói URL para Hypixel API
   */
  static hypixel(
    endpoint: keyof typeof HYPIXEL_ENDPOINTS,
    params?: Record<string, string>
  ): string {
    const url = `${API_BASE_URLS.HYPIXEL}${HYPIXEL_ENDPOINTS[endpoint]}`;
    return params ? `${url}?${new URLSearchParams(params).toString()}` : url;
  }

  /**
   * Constrói URL para Flyff Game API
   */
  static flyff(
    endpoint: keyof typeof FLYFF_ENDPOINTS,
    params?: Record<string, string>
  ): string {
    const url = `${API_BASE_URLS.FLYFF}${FLYFF_ENDPOINTS[endpoint]}`;
    return params ? `${url}?${new URLSearchParams(params).toString()}` : url;
  }
}
