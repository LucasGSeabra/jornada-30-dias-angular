/**
 * @fileoverview Definições de tipos para a biblioteca UI
 *
 * Este arquivo contém todas as interfaces, tipos e enums utilizados pelos
 * componentes da biblioteca UI.
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

/**
 * Variantes de cores disponíveis no sistema de design
 */
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

/**
 * Tamanhos disponíveis para componentes
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Posições para componentes que podem ser posicionados
 */
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';

/**
 * Estados de carregamento para componentes interativos
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Interface para componentes que suportam diferentes variantes visuais
 */
export interface VariantSupport {
  /** Variante de cor do componente */
  variant?: ColorVariant;
}

/**
 * Interface para componentes que suportam diferentes tamanhos
 */
export interface SizeSupport {
  /** Tamanho do componente */
  size?: Size;
}

/**
 * Interface para componentes que podem ser desabilitados
 */
export interface DisableSupport {
  /** Se o componente está desabilitado */
  disabled?: boolean;
}

/**
 * Interface para componentes que suportam estados de carregamento
 */
export interface LoadingSupport {
  /** Estado atual de carregamento */
  loading?: boolean;
  /** Estado específico de carregamento */
  loadingState?: LoadingState;
}

/**
 * Interface base para propriedades comuns de componentes UI
 */
export interface BaseUIProps
  extends VariantSupport,
    SizeSupport,
    DisableSupport {
  /** ID único do componente */
  id?: string;
  /** Classes CSS adicionais */
  className?: string;
  /** Estilos inline */
  style?: Record<string, any>;
}

/**
 * Interface para propriedades de botões
 */
export interface ButtonProps extends BaseUIProps, LoadingSupport {
  /** Tipo do botão */
  type?: 'button' | 'submit' | 'reset';
  /** Se o botão ocupa toda a largura disponível */
  fullWidth?: boolean;
  /** Ícone a ser exibido no botão */
  icon?: string;
  /** Posição do ícone */
  iconPosition?: 'left' | 'right';
}

/**
 * Interface para propriedades de modal
 */
export interface ModalProps extends BaseUIProps {
  /** Se o modal está visível */
  isOpen: boolean;
  /** Título do modal */
  title?: string;
  /** Se pode fechar clicando fora */
  closeOnBackdrop?: boolean;
  /** Se pode fechar com ESC */
  closeOnEsc?: boolean;
  /** Função chamada ao fechar */
  onClose: () => void;
}

/**
 * Interface para propriedades de input
 */
export interface InputProps extends BaseUIProps {
  /** Tipo do input */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Placeholder do input */
  placeholder?: string;
  /** Valor do input */
  value?: string;
  /** Se o input é obrigatório */
  required?: boolean;
  /** Mensagem de erro */
  errorMessage?: string;
  /** Label do input */
  label?: string;
  /** Texto de ajuda */
  helperText?: string;
}

/**
 * Interface para propriedades de alert
 */
export interface AlertProps extends BaseUIProps {
  /** Se o alert pode ser fechado */
  dismissible?: boolean;
  /** Ícone do alert */
  icon?: string;
  /** Função chamada ao fechar */
  onDismiss?: () => void;
}

/**
 * Interface para propriedades de toast
 */
export interface ToastProps extends AlertProps {
  /** Duração em milissegundos antes de auto fechar */
  duration?: number;
  /** Posição do toast na tela */
  position?: Position;
}

/**
 * Interface para propriedades de card
 */
export interface CardProps extends BaseUIProps {
  /** Se o card tem sombra */
  shadow?: boolean;
  /** Se o card pode ser clicado */
  clickable?: boolean;
  /** Função chamada ao clicar */
  onClick?: () => void;
}

/**
 * Configuração do sistema de grid
 */
export interface GridConfig {
  /** Número de colunas */
  columns?: number;
  /** Gap entre itens */
  gap?: Size;
  /** Responsividade */
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

/**
 * Interface para propriedades de grid
 */
export interface GridProps extends BaseUIProps {
  /** Configuração do grid */
  config?: GridConfig;
}

/**
 * Interface para propriedades de container
 */
export interface ContainerProps extends BaseUIProps {
  /** Largura máxima */
  maxWidth?: Size | 'full';
  /** Se tem padding */
  padding?: boolean;
  /** Se está centralizado */
  centered?: boolean;
}
