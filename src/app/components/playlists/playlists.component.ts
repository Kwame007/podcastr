import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../core/services/playlist.service';
import { PlaylistListApiResponse, Playlist } from '../../core/model/model';
import { CommonModule } from '@angular/common';
import { PlaylistItemComponent } from './playlist-item.component';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, PlaylistItemComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss'
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  loading = false;
  error: string | null = null;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.fetchPlaylists();
  }

  fetchPlaylists(page: number = 1) {
    this.loading = true;
    this.playlistService.getPlaylist(page).subscribe({
      next: (res: PlaylistListApiResponse) => {
        this.playlists = res?.data?.data || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load playlists.';
        this.loading = false;
      }
    });
  }
}
