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

  // Servicio para crear podcast
  addPodcast(podcast: Podcast) {
    const podcastRef = collection(this.firestore, 'podcast');
    return addDoc(podcastRef, podcast);
  }

  // Servicio para obtener todos los podcasts
  getAllPodcasts(): Observable<Podcast[]> {
    const podcastRef = collection(this.firestore, 'podcast');
    return collectionData(podcastRef) as Observable<Podcast[]>;
  }

  // Servicio para eliminar un podcast por ID
  deletePodcast(podcastId: string) {
    const podcastDoc = doc(this.firestore, 'podcast', podcastId);
    return deleteDoc(podcastDoc);
  }
}
