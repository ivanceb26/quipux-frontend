import { Playlist } from './playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {


  private baseURL = "http://localhost:8080/playlist/lists";
  private header = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private httpClient : HttpClient) { }

  //get playlist from backend
  getPlaylistList():Observable<Playlist[]>{
    return this.httpClient.get<Playlist[]>(`${this.baseURL}`);
  }

  //create playlist in backend
  createPlaylist(playlist:Playlist):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,playlist);
  }

  //get playlist from backend
  getPlaylistListByName(name:string):Observable<Playlist>{
    return this.httpClient.get<Playlist>(`${this.baseURL}/${name}`);
  }

   //get playlist from backend
  deletePlaylistListByName(name:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${name}`);
  }

}
