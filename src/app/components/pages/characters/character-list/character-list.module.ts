import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';


@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterListRoutingModule
  ]
})
export class CharacterListModule { }
