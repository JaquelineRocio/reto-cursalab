import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection, updateDoc, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chapter } from '../interfaces/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {
  chapters: Array<Chapter>=[{title: '', link: '', completed: false, activated: false}]
  valueProgressSpinner: any;
  public contChapters = 0
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
  updateCompleted(id: string){
    const chapterRef = doc(this.firestore,'chapters', id)
    updateDoc(chapterRef, {completed: true })
  }
  updateActived(id: string){
    const chapterRef = doc(this.firestore,'chapters', id)
    updateDoc(chapterRef, {activated: true })
  }
  addCont(){
      this.contChapters++;
  }
}
