import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-menu',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-menu',
    loadChildren: () => import('./Pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./Pages/sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./Pages/artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'locales',
    loadChildren: () => import('./Pages/locales/locales.module').then( m => m.LocalesPageModule)
  },
  {
    path: 'perfil-artista/:id',
    loadChildren: () => import('./Pages/perfil-artista/perfil-artista.module').then( m => m.PerfilArtistaPageModule)
  },





  // {
  //   path: '/register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
