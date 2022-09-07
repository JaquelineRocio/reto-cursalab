import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chapters = [{title: 'What is interaction Design', link: 'https://www.youtube.com/watch?v=k6WYw0WY-PQ'},
  {title:'Motion in UI Design', link: 'https://www.youtube.com/watch?v=uBXHSlzoino'},
  {title:'Fundamentals of Web Design', link: ''},
  {title:'Improving Visual Skills', link: ''},
  {title:'Finding inspiration', link: ''}]

  cont = 0;
}
