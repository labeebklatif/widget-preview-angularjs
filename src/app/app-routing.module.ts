import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AwayComponent } from './away/away.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'away', component: AwayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
