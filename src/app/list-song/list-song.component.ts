import { SONGS } from './../mock-songs';
import { Song } from './../song';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {

  songs = SONGS;
  selectedSong?: Song;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
