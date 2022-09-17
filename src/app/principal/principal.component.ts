import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Chapter } from '../interfaces/chapter';
import { ChaptersService } from '../services/chapters.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  @Input() sizeScreen: String = 'Large';
  colorTab: ThemePalette = 'warn'
  chapters: Array<Chapter> = [{title: '', link:'', completed: false, activated: false, timeVideo:0}]

  onNextChapter(){
    if(this.chaptersService.chapters[this.cont].completed)
    {
      this.chaptersService.contChapters ++;
    }

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
      return this.chaptersService.chapters[this.cont].link;
  }
  public get nextLink(){

    return this.chaptersService.chapters[this.cont+1].link;
}

  async isVideoEnded(){
    let id = this.cont;
    await this.chaptersService.updateCompleted(String(id))
    await this.chaptersService.updateValueTime(String(id),100)
    if(this.cont<this.chapters.length-1)
    {
      await this.chaptersService.updateActived(String(id+1))
      this.onNextChapter()
    }
  }
}
