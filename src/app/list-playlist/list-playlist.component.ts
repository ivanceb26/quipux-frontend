import { Router } from '@angular/router';
import { PlaylistService } from './../playlist.service';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {

  playlists:Playlist[];

  constructor(private playlistService:PlaylistService, private router:Router ) { }

  ngOnInit(): void {
    this.getPlaylists();
    /*this.playlists = [{
      "id":1,
      "name":"playtest1",
      "description":"esta es una play list de prueba de solo front",
      "songs":"miscanciones"
    },
    {
      "id":2,
      "name":"playtest2",
      "description":"esta es una play list de prueba de solo front",
      "songs":"miscanciones"
    },
    {
      "id":3,
      "name":"playtest3",
      "description":"esta es una play list de prueba de solo front",
      "songs":"miscanciones"
    }];
    */
  }

  private getPlaylists() {
    this.playlistService.getPlaylistList().subscribe(data => {
      this.playlists = data;
    });

  }

  deletePlaylist(name:string){
    this.playlistService.deletePlaylistListByName(name).subscribe(data=>{
      console.log(data);
      this.getPlaylists();
    }, error=>console.error());
  }

  getPlaylistByName(name:string){
    this.router.navigate(['show-playlist',name]);
  }

}
