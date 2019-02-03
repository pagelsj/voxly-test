import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AppComponent } from './app.component';

import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'update',
      pathMatch: 'full'
  },

  {
    path: 'update',
    component: UpdatePageComponent
  },
  {
    path: 'results',
    component: ResultsPageComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
