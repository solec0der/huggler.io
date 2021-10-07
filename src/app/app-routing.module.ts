import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { ThatsMeComponent } from './pages/thats-me/thats-me.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'my-work',
    component: MyWorkComponent,
  },
  {
    path: 'thats-me',
    component: ThatsMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
