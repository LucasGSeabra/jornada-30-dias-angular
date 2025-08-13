import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Personagem } from './personagem/personagem';

const routes: Routes = [{ path: '', component: Personagem }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonagemModuleRoutingModule {}
