import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  @Input() numChapter = 0;
  @Input() valueProgress = 0;
  defaultColor: ThemePalette = 'accent';


  constructor() { }

  ngOnInit(): void {
  }

}
