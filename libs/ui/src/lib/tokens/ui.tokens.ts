/**
 * @fileoverview Tokens de design para a biblioteca UI
 *
 * Este arquivo contém constantes e tokens de injeção de dependência utilizados
 * pela biblioteca UI, incluindo temas, cores, espaçamentos e configurações.
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

import { InjectionToken } from '@angular/core';

/**
 * Configuração do tema da aplicação
 */
export interface ThemeConfig {
  /** Nome do tema */
  name: string;
  /** Paleta de cores */
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    light: string;
    dark: string;
  };
  /** Configurações de espaçamento */
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  /** Configurações de tipografia */
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  /** Configurações de bordas */
  borders: {
    radius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    width: {
      thin: string;
      medium: string;
      thick: string;
    };
  };
  /** Configurações de sombras */
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

/**
 * Token de injeção para configuração do tema
 */
export const UI_THEME_CONFIG = new InjectionToken<ThemeConfig>(
  'ui.theme.config'
);

/**
 * Token de injeção para configuração de toast
 */
export const TOAST_CONFIG = new InjectionToken<ToastConfig>('ui.toast.config');

/**
 * Token de injeção para configuração de modal
 */
export const MODAL_CONFIG = new InjectionToken<ModalConfig>('ui.modal.config');

/**
 * Configuração padrão para toast
 */
export interface ToastConfig {
  /** Duração padrão em milissegundos */
  defaultDuration: number;
  /** Posição padrão */
  defaultPosition: 'top' | 'bottom' | 'left' | 'right';
  /** Máximo de toasts simultâneos */
  maxToasts: number;
  /** Classes CSS personalizadas */
  customClasses?: Record<string, string>;
}

/**
 * Configuração padrão para modal
 */
export interface ModalConfig {
  /** Se fecha ao clicar fora por padrão */
  closeOnBackdrop: boolean;
  /** Se fecha com ESC por padrão */
  closeOnEsc: boolean;
  /** Classe CSS do backdrop */
  backdropClass: string;
  /** Animação de entrada */
  enterAnimation?: string;
  /** Animação de saída */
  exitAnimation?: string;
}

/**
 * Tema padrão da aplicação
 */
export const DEFAULT_THEME: ThemeConfig = {
  name: 'default',
  colors: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#06b6d4',
    light: '#f8fafc',
    dark: '#1e293b',
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
    },
  },
  borders: {
    radius: {
      xs: '0.125rem', // 2px
      sm: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
};

/**
 * Configuração padrão para toast
 */
export const DEFAULT_TOAST_CONFIG: ToastConfig = {
  defaultDuration: 5000,
  defaultPosition: 'top',
  maxToasts: 5,
  customClasses: {
    container: 'toast-container',
    toast: 'toast',
    success: 'toast-success',
    error: 'toast-error',
    warning: 'toast-warning',
    info: 'toast-info',
  },
};

/**
 * Configuração padrão para modal
 */
export const DEFAULT_MODAL_CONFIG: ModalConfig = {
  closeOnBackdrop: true,
  closeOnEsc: true,
  backdropClass: 'modal-backdrop',
  enterAnimation: 'fadeIn',
  exitAnimation: 'fadeOut',
};

/**
 * Classes CSS padrão para componentes
 */
export const UI_CLASSES = {
  // Botões
  button: {
    base: 'btn',
    variants: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
      warning: 'btn-warning',
      info: 'btn-info',
      light: 'btn-light',
      dark: 'btn-dark',
    },
    sizes: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      xl: 'btn-xl',
    },
    states: {
      disabled: 'btn-disabled',
      loading: 'btn-loading',
    },
  },

  // Cards
  card: {
    base: 'card',
    header: 'card-header',
    body: 'card-body',
    footer: 'card-footer',
    shadow: 'card-shadow',
    clickable: 'card-clickable',
  },

  // Modal
  modal: {
    backdrop: 'modal-backdrop',
    container: 'modal-container',
    content: 'modal-content',
    header: 'modal-header',
    body: 'modal-body',
    footer: 'modal-footer',
    close: 'modal-close',
  },

  // Input
  input: {
    container: 'input-container',
    label: 'input-label',
    field: 'input-field',
    error: 'input-error',
    helper: 'input-helper',
    required: 'input-required',
  },

  // Alert
  alert: {
    base: 'alert',
    variants: {
      primary: 'alert-primary',
      secondary: 'alert-secondary',
      success: 'alert-success',
      danger: 'alert-danger',
      warning: 'alert-warning',
      info: 'alert-info',
      light: 'alert-light',
      dark: 'alert-dark',
    },
    dismissible: 'alert-dismissible',
    icon: 'alert-icon',
  },

  // Loading
  loading: {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    bar: 'loading-bar',
    overlay: 'loading-overlay',
  },
} as const;
