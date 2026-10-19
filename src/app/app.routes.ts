import { Routes } from '@angular/router';
import { TrailList } from './trail-list/trail-list';
import { TrailDetail } from './trail-detail/trail-detail';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';

// ROUTES: Maps a URL path to the component Angular should display.
export const routes: Routes = [
  // DEFAULT ROUTE
  { path: '', redirectTo: '/trails', pathMatch: 'full' },

  // STATIC ROUTES
  { path: 'trails', component: TrailList },
  { path: 'about', component: About },

  // DYNAMIC ROUTE: :id is a parameter, e.g. /trails/3.
  { path: 'trails/:id', component: TrailDetail },

  // WILDCARD: Matches unknown URLs. Always goes last.
  { path: '**', component: PageNotFound },
];
