/**
 * @fileoverview Interface para respostas da API
 *
 * Define a estrutura padrão das respostas da API, incluindo dados,
 * metadados, paginação e tratamento de erros.
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

/**
 * Estrutura base para respostas da API
 *
 * @template T - Tipo dos dados retornados
 */
export interface ApiResponse<T = any> {
  /** Dados retornados pela API */
  data: T;

  /** Indica se a requisição foi bem-sucedida */
  success: boolean;

  /** Mensagem de resposta */
  message?: string;

  /** Código de status HTTP */
  statusCode: number;

  /** Timestamp da resposta */
  timestamp: string;

  /** Metadados adicionais */
  metadata?: Record<string, any>;
}

/**
 * Estrutura para respostas paginadas da API
 *
 * @template T - Tipo dos itens da lista
 */
export interface PaginatedApiResponse<T = any> extends ApiResponse<T[]> {
  /** Informações de paginação */
  pagination: {
    /** Página atual */
    currentPage: number;

    /** Total de páginas */
    totalPages: number;

    /** Total de itens */
    totalItems: number;

    /** Itens por página */
    itemsPerPage: number;

    /** Se há página anterior */
    hasPreviousPage: boolean;

    /** Se há próxima página */
    hasNextPage: boolean;
  };
}

/**
 * Estrutura para respostas de erro da API
 */
export interface ApiErrorResponse {
  /** Indica que houve erro */
  success: false;

  /** Mensagem de erro principal */
  message: string;

  /** Código de erro */
  errorCode?: string;

  /** Detalhes específicos do erro */
  details?: string;

  /** Lista de erros de validação */
  validationErrors?: ValidationError[];

  /** Código de status HTTP */
  statusCode: number;

  /** Timestamp do erro */
  timestamp: string;

  /** Caminho da requisição que gerou o erro */
  path?: string;
}

/**
 * Estrutura para erros de validação
 */
export interface ValidationError {
  /** Campo que possui erro */
  field: string;

  /** Mensagem de erro do campo */
  message: string;

  /** Valor rejeitado */
  rejectedValue?: any;

  /** Código do erro de validação */
  code?: string;
}
