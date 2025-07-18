/**
 * @fileoverview Componente Button reutilizável
 *
 * Este componente fornece um botão customizável com suporte a diferentes
 * variantes, tamanhos, estados de carregamento e ícones.
 *
 * @example
 * ```html
 * <lib-button
 *   variant="primary"
 *   size="md"
 *   [loading]="isLoading"
 *   (click)="handleClick()">
 *   Clique aqui
 * </lib-button>
 * ```
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonProps } from '../../types/ui.types';
import {
  UI_THEME_CONFIG,
  ThemeConfig,
  DEFAULT_THEME,
  UI_CLASSES,
} from '../../tokens/ui.tokens';

/**
 * Componente Button reutilizável com suporte a diferentes variantes e estados
 *
 * @implements {ButtonProps}
 */
@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
      [style]="buttonStyles"
      (click)="handleClick($event)"
    >
      <!-- Ícone de loading -->
      <span
        *ngIf="loading"
        class="loading-spinner"
        [attr.aria-label]="'Carregando...'"
      >
      </span>

      <!-- Ícone personalizado -->
      <span
        *ngIf="icon && !loading && iconPosition === 'left'"
        [class]="'icon icon-' + icon"
        aria-hidden="true"
      >
      </span>

      <!-- Conteúdo do botão -->
      <span class="button-content">
        <ng-content></ng-content>
      </span>

      <!-- Ícone à direita -->
      <span
        *ngIf="icon && !loading && iconPosition === 'right'"
        [class]="'icon icon-' + icon"
        aria-hidden="true"
      >
      </span>
    </button>
  `,
  styles: [
    `
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-radius: 0.375rem;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .loading-spinner {
        width: 1rem;
        height: 1rem;
        border: 2px solid currentColor;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .btn-full-width {
        width: 100%;
      }
    `,
  ],
})
export class ButtonComponent implements ButtonProps {
  /**
   * Tipo do botão HTML
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Variante visual do botão
   * @default 'primary'
   */
  @Input() variant: ButtonProps['variant'] = 'primary';

  /**
   * Tamanho do botão
   * @default 'md'
   */
  @Input() size: ButtonProps['size'] = 'md';

  /**
   * Se o botão está desabilitado
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Se o botão está em estado de carregamento
   * @default false
   */
  @Input() loading: boolean = false;

  /**
   * Se o botão ocupa toda a largura disponível
   * @default false
   */
  @Input() fullWidth: boolean = false;

  /**
   * Nome do ícone a ser exibido
   */
  @Input() icon?: string;

  /**
   * Posição do ícone no botão
   * @default 'left'
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  /**
   * ID único do componente
   */
  @Input() id?: string;

  /**
   * Classes CSS adicionais
   */
  @Input() className?: string;

  /**
   * Estilos inline personalizados
   */
  @Input() style?: Record<string, any>;

  /**
   * Evento emitido quando o botão é clicado
   */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /**
   * Tema da aplicação (configuração padrão)
   */
  private theme: ThemeConfig = DEFAULT_THEME;

  constructor() {
    // TODO: Implementar injeção de tema customizado na versão avançada
  }

  /**
   * Classes CSS computadas para o botão
   */
  get buttonClasses(): string {
    const classes: string[] = [
      UI_CLASSES.button.base,
      UI_CLASSES.button.variants[this.variant || 'primary'],
      UI_CLASSES.button.sizes[this.size || 'md'],
    ];

    if (this.disabled) {
      classes.push(UI_CLASSES.button.states.disabled);
    }

    if (this.loading) {
      classes.push(UI_CLASSES.button.states.loading);
    }

    if (this.fullWidth) {
      classes.push('btn-full-width');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Estilos CSS computados para o botão
   */
  get buttonStyles(): Record<string, any> {
    const styles: Record<string, any> = {};

    // Aplica estilos customizados
    if (this.style) {
      Object.assign(styles, this.style);
    }

    return styles;
  }

  /**
   * Manipula o evento de clique do botão
   *
   * @param event - Evento de clique do mouse
   */
  handleClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.clicked.emit(event);
  }
}
