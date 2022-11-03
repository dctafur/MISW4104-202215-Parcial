import { Route } from '@angular/router';

import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: '',
    component: LayoutComponent,
    data: { layout: 'default' },
    children: [
      
    ]
  },
];
