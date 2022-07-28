import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from './../playlist.service';
import { Playlist } from './../playlist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {

  name:string;
  playlist:Playlist;

  constructor(private playlistService:PlaylistService, private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.playlistService.getPlaylistListByName(this.name).subscribe(data =>{
      this.playlist = data;
    },error => console.log(error));
  }

  onSubmit(){
  }

}
