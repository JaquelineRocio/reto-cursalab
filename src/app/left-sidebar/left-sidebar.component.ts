import { Component,  OnInit} from '@angular/core';
import { Chapter } from '../interfaces/chapter';
import { ChaptersService } from '../services/chapters.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  chapters: Array<Chapter> = [{title: '', link:''}]

  constructor(private chaptersService: ChaptersService ) {
    this.chapters = this.chaptersService.chapters;
   }

  ngOnInit(): void {
  }

  public get cont() {
    return this.chaptersService.contChapters;
  }
  public get valueProgressSpinner(){
    return this.chaptersService.valueProgressSpinner;
  }
}
