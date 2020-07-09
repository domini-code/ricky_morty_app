import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Observable } from 'rxjs';

import { TrackHttpError } from '@shared/models/trackHttpError';
import { CharacterService } from '@shared/services/character.service';
import { Character } from '@shared/interfaces/character.interface';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character | TrackHttpError>;

  constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }

}
