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
  chapters: Array<Chapter> = [{title: '', link:'', completed: false, activated: false}]
  videoEnded = false;


  onNextChapter(){
    if(this.chaptersService.chapters[this.cont].completed)
      this.chaptersService.contChapters ++;
    this.value = 0;
  }
  onBackChapter(){
    if(this.chaptersService.chapters[this.cont-1].completed)
      this.chaptersService.contChapters--;

  }
  contando(videochap: any){
    this.chaptersService.valueProgressSpinner = videochap*10;
  }
  constructor(private chaptersService: ChaptersService ) {
   }

  ngOnInit(): void {
    this.chaptersService.getChapters().subscribe(chapters => {
      this.chapters = chapters
    })
  }
  public get cont() {
    return this.chaptersService.contChapters;
  }

  public get link(){
      console.log(this.chaptersService.chapters[this.cont].link)
      return this.chaptersService.chapters[this.cont].link;
  }

  isVideoEnded(){
    let id = this.cont;
    console.log(this.cont);
    this.chaptersService.updateCompleted(String(id))
    this.chaptersService.updateActived(String(id+1))
  }
}
