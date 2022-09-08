import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {
  chapters = [{title: 'What is interaction Design', link: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4'},
  {title:'Motion in UI Design', link: 'https://www.w3schools.com/html/mov_bbb.mp4'},
  {title:'Fundamentals of Web Design', link: ''},
  {title:'Improving Visual Skills', link: ''},
  {title:'Finding inspiration', link: ''}]
  valueProgressSpinner: any;
  public contChapters = 0
  videoEnded = false;

  constructor() { }

  addCont(){
    this.contChapters++;
  }
}
