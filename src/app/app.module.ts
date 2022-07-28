import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import {HttpClientModule} from '@angular/common/http';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component'
import { FormsModule } from '@angular/forms';
import { ListSongComponent } from './list-song/list-song.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistComponent,
    CreatePlaylistComponent,
    ListSongComponent,
    ShowPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
