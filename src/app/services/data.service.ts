import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import Podcast from '../Interfaces/podcast.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  addPodcast(podcast: Podcast) {
    const podcastRef = collection(this.firestore, 'podcast');
    return addDoc(podcastRef, podcast);
  }
}
