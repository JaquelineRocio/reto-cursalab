import { Component,  OnInit} from '@angular/core';
import { Chapter } from '../interfaces/chapter';
import { ChaptersService } from '../services/chapters.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  chapters: Array<Chapter> = [{title: '', link:'', completed: false, activated: false}]

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
  public get valueProgressSpinner(){
    return this.chaptersService.valueProgressSpinner;
  }

  public get videoEnded(){
    return this.chaptersService.videoEnded;
  }

  changeChapter(indice: number){
    this.chaptersService.contChapters = indice;
    console.log('k')
  }

}
