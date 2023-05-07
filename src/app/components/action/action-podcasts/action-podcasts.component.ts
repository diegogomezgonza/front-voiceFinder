import { Component, OnInit } from '@angular/core';
import Podcast from 'src/app/Interfaces/podcast.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-action-podcasts',
  templateUrl: './action-podcasts.component.html',
  styleUrls: ['./action-podcasts.component.scss'],
})
export class ActionPodcastsComponent implements OnInit {
  //Contenido de interfaz Podcast
  podcast: Podcast[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //Visualizar Podcast
    this.dataService.getPodcast().subscribe((podcast) => {
      this.podcast = podcast;
    });
  }

  //Función borrar podcast
  async onClickDelete(pod: Podcast) {
    const response = await this.dataService.deletePodcast(pod);
    console.log(response);
  }
}
