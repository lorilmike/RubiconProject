import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'tvshows', pathMatch: 'full'},
      { path: '**', redirectTo: 'tvshows', pathMatch: 'full'}
    ],
    { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
