import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection, updateDoc, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chapter } from '../interfaces/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {
  chapters: Array<Chapter>=[{title: '', link: '', completed: false, activated: false, timeVideo: 0}]
  valueProgressSpinner: any;
  contChapters = 0
  videoEnded = false;

  constructor(private firestore: Firestore) {
    this.getChapters().subscribe(chapters => {
      this.chapters = chapters
    })
  }
  getChapters(): Observable<Chapter[]>{
    const chapterRef = collection(this.firestore, 'chapters')

    return collectionData(chapterRef, {idField: 'id'}) as Observable<Chapter[]>
  }
  async updateCompleted(id: string){
    const chapterRef = doc(this.firestore,'chapters', id)
    await updateDoc(chapterRef, {completed: true })
  }
  async updateActived(id: string){
    const chapterRef = doc(this.firestore,'chapters', id)
    await updateDoc(chapterRef, {activated: true })
  }
  async updateValueTime(id: string, value: number){
    const chapterRef = doc(this.firestore,'chapters', id)
    await updateDoc(chapterRef, {timeVideo:  value})
  }
  addCont(){
      this.contChapters++;
  }
  activateVideo(){

  }
}
