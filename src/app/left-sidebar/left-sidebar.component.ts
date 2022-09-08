import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  chapters = [{title: 'What is interaction Design', link: 'https://www.youtube.com/watch?v=k6WYw0WY-PQ'},
  {title:'Motion in UI Design', link: 'https://www.youtube.com/watch?v=uBXHSlzoino'},
  {title:'Fundamentals of Web Design', link: ''},
  {title:'Improving Visual Skills', link: ''},
  {title:'Finding inspiration', link: ''}]

  cont = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
