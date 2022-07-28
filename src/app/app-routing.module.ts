import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { ListSongComponent } from './list-song/list-song.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

const routes: Routes = [
  {path: 'list-playlists', component : ListPlaylistComponent},
  {path:'', redirectTo:'list-playlists',pathMatch:'full'},
  {path: 'create-playlist', component : CreatePlaylistComponent},
  {path: 'list-songs', component : ListSongComponent},
  {path : 'show-playlist/:name',component : ShowPlaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
