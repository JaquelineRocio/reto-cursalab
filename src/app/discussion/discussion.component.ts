import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {
  value =0;
  isPlaying: Boolean = false;
  toInt(seconds: number){

    const result = new Date(seconds * 1000).toISOString().slice(14, 19);
    return result
  }
  constructor() { }

  ngOnInit(): void {
  }

  updateTime(currentTime: number){

    this.value = currentTime
  }

  playPause(audio: any){
    if (this.isPlaying)
      audio.pause()
    else
      audio.play()
    this.isPlaying = !this.isPlaying
  }
}
