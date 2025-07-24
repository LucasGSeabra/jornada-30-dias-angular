import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardProps } from '../../types/ui.types';

@Component({
  selector: 'lib-card',
  imports: [CommonModule, MatCardModule],
  standalone: true,
  template: `<mat-card>
    <mat-card-header *ngIf="title || subtitle">
      <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image *ngIf="image" [src]="image" />
    <mat-card-content>
      <ng-content></ng-content>
    </mat-card-content>
  </mat-card>`,
  styles: [``],
})
export class Card implements CardProps {
  /**
   * Título a ser exibido
   */
  @Input() title?: CardProps['title'];

  /**
   * Subtitulo a ser exibido
   */
  @Input() subtitle?: CardProps['subtitle'];

  /**
   * Se o card possui sombra
   */
  @Input() shadow?: CardProps['shadow'];

  /**
   * Se o card é clicável
   */
  @Input() clickable?: CardProps['clickable'];

  /**
   * Funcão executada no momento do click
   */
  @Input() onClick?: CardProps['onClick'];

  /**
   * Se o card possui imagem
   */
  @Input() image?: CardProps['image'];
}
