import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then(m => m.MemberPageModule)
  },
  {
    path: 'member-add',
    loadChildren: () => import('./member-add/member-add.module').then(m => m.MemberAddPageModule)
  },
  {
    path: 'member-edit/:id',
    loadChildren: () => import('./member-edit/member-edit.module').then(m => m.MemberEditPageModule)
  },
  {
    path: 'member-show/:id',
    loadChildren: () => import('./member-show/member-show.module').then(m => m.MemberShowPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pet-deposit-page/:id',
    loadChildren: () => import('./pet-deposit-page/pet-deposit-page.module').then( m => m.PetDepositPagePageModule)
  },
  {
    path: 'all-pets',
    loadChildren: () => import('./all-pets/all-pets.module').then( m => m.AllPetsPageModule)
  },
  {
    path: 'all-member',
    loadChildren: () => import('./all-member/all-member.module').then( m => m.AllMemberPageModule)
  },
  {
    path: 'all-deposit',
    loadChildren: () => import('./all-deposit/all-deposit.module').then( m => m.AllDepositPageModule)
  },
  {
    path: 'all-animal',
    loadChildren: () => import('./all-animal/all-animal.module').then( m => m.AllAnimalPageModule)
  },
  {
    path: 'live-camera',
    loadChildren: () => import('./live-camera/live-camera.module').then( m => m.LiveCameraPageModule)
  },
  {
    path: 'wait',
    loadChildren: () => import('./wait/wait.module').then( m => m.WaitPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'deposit/:id',
    loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
  },  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
