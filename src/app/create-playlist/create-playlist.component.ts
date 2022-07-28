import { PlaylistService } from './../playlist.service';
import { Playlist } from './../playlist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  playlist: Playlist =  new Playlist();

  constructor(private playlistService:PlaylistService, private router:Router) { }

  ngOnInit(): void {

  }

  createPlaylist(){
    this.playlistService.createPlaylist(this.playlist).subscribe(data=>{
      console.log(data);
      this.redirectToPlaylistList();
    }, error=>console.error());
  }

  redirectToPlaylistList(){
    this.router.navigate(['/list-playlists'])
  }

  onSubmit(){
    this.createPlaylist();
  }
}
