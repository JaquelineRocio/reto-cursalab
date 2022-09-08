import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Chapter } from '../interfaces/chapter';
import { ChaptersService } from '../services/chapters.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  colorTab: ThemePalette = 'warn'
  value = 0;
  chapters: Array<Chapter> = [{title: '', link:''}]

  onNextChapter(){
    this.chaptersService.addCont();

    console.log(this.chaptersService.contChapters)
    if(this.chaptersService.contChapters === this.chapters.length)
    this.chaptersService.contChapters = 0;
    this.value = 0;
  }

  contando(videochap: any){
    this.chaptersService.valueProgressSpinner = videochap*10;
  }
  constructor(private chaptersService: ChaptersService ) {
    this.chapters = this.chaptersService.chapters;
   }

  ngOnInit(): void {
  }
  public get cont() {
    return this.chaptersService.contChapters;
  }

  public get link(){
    return this.chaptersService.chapters[this.cont].link;
  }
}
