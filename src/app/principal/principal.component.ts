import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  colorTab: ThemePalette = 'warn'
  value = 0;
  cont = 0;
  chapters=[]
  onNextChapter(){
    this.cont++;
    if(this.cont === this.chapters.length)
      this.cont = 0;
    this.value = 0;
  }

  contando(videochap: any){
    this.value = videochap*10;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
