import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import Podcast from '../Interfaces/podcast.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  addPodcast(podcast: Podcast) {
    const podcastRef = collection(this.firestore, 'podcast');
    return addDoc(podcastRef, podcast);
  }

  getPodcast(): Observable<Podcast[]> {
    const podcastRef = collection(this.firestore, 'podcast');
    return collectionData(podcastRef, { idField: 'id' }) as Observable<
      Podcast[]
    >;
  }

  deletePodcast(pod: Podcast) {
    const podcastRef = doc(this.firestore, `podcast/${pod.id}`);
    return deleteDoc(podcastRef);
  }
}
