import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PostPlaylistApiResponse, PlaylistEditData, PlaylistDeleteResponse, EpisodeIdsPayload,AddEpisodeToPlaylistApiResponse, PlaylistListApiResponse, PostPlaylistData } from '../model/model';
import { environment } from '../../../environments/environment';
// import { ErrorService } from '../../error.service';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private url = `${environment.apiUrl}/playlists`
  constructor(private http: HttpClient) { }

  getPlaylist(page: number): Observable<PlaylistListApiResponse> {
    return this.http.get<PlaylistListApiResponse>(`${this.url}?page=${page}`).pipe(
      catchError(error => {
       
        return of(error)
      })
    )
  }

  createPlaylist(data: PostPlaylistData): Observable<PostPlaylistApiResponse> {
    return this.http.post<PostPlaylistApiResponse>(this.url, data).pipe(
      catchError(error => {
        // this.errorService.handleError(error);
        return of(error)
      })
    )
  }

  editPlaylist(id: number, data: PlaylistEditData) {
    return this.http.put<PostPlaylistApiResponse>(`${this.url}/${id}`, data).pipe()
  }

  deletePlaylist(id: number) {
    return this.http.delete<PlaylistDeleteResponse>(`${this.url}/${id}`).pipe()
  }

  addEpisodesToPlaylist(id: number, data: EpisodeIdsPayload) {
    //function clears out existing episodes in playlist
    return this.http.post<AddEpisodeToPlaylistApiResponse>(`${this.url}/${id}/episodes`, data)
  }
}
