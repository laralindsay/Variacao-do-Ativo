import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@containers/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('@containers/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
