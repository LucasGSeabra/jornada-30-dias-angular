import { Component, Input, Output } from '@angular/core';
import { PersonagemInterface } from '../interfaces/personagem-interface';
import { ItemMagico } from '../interfaces/item-magico-interface';
import { EventEmitter } from 'stream';
import { CommonModule } from '@angular/common';
import { ExperienciaPipe } from '../pipes/experiencia-pipe';

@Component({
  selector: 'app-personagem',
  imports: [CommonModule, ExperienciaPipe],
  templateUrl: './personagem.html',
  styleUrl: './personagem.scss'
})
export class Personagem {
  @Input() personagem!: PersonagemInterface;
  @Input() itemMagico: ItemMagico;
  @Output() ataque = new EventEmitter();

  atacar(): void {
    this.ataque.emit('personagem atacou')
  }


}
