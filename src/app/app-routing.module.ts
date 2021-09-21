import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'olymphome',
    pathMatch: 'full'
  },
  {
    path: 'olymphome',
    loadChildren: () => import('./olymphome/olymphome.module').then( m => m.OlymphomePageModule)
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then( m => m.PlatformPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
