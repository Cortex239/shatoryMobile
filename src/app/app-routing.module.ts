import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'folder/Inbox',
=======
    redirectTo: 'home',
>>>>>>> 998244ace9b09d5fd71f11343663ab43eafa4cff
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
<<<<<<< HEAD
    path: 'main-menu',
    loadChildren: () => import('./Pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },

=======
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },



>>>>>>> 998244ace9b09d5fd71f11343663ab43eafa4cff
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
