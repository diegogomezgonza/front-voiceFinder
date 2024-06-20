import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import Podcast from 'src/app/Interfaces/podcast.interface';

@Component({
  selector: 'app-action-podcast',
  templateUrl: './action-podcast.component.html',
  styleUrls: ['./action-podcast.component.scss'],
})
export class ActionPodcastComponent implements OnInit {
  podcasts$: Observable<Podcast[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadPodcasts();
  }

  loadPodcasts() {
    this.podcasts$ = this.dataService.getAllPodcasts();
  }

  async deletePodcast(podcastId: string) {
    try {
      await this.dataService.deletePodcast(podcastId);
      console.log('Podcast eliminado correctamente');
      // Opcional: Recargar la lista de podcasts después de eliminar uno
      this.loadPodcasts();
    } catch (error) {
      console.error('Error al eliminar el podcast:', error);
    }
  }
}
