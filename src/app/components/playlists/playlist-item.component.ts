import { Component, Input } from '@angular/core';
import { Playlist } from '../../core/model/model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-playlist-item',
  standalone: true,
  template: `
    <td>{{ playlist.name }}</td>
    <td>{{ playlist.description }}</td>
    <td>{{ formattedDate }}</td>
    <td>{{ playlist.episodes.length }}</td>
  `
})
export class PlaylistItemComponent {
  @Input() playlist!: Playlist;
  formattedDate: string = '';

  ngOnChanges() {
    if (this.playlist) {
      const datePipe = new DatePipe('en-US');
      this.formattedDate = datePipe.transform(this.playlist.created_at, 'mediumDate') || '';
    }
  }
} 