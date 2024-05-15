import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "rxjs",
    children: [
      {
        path: "observables",
        loadComponent: () => import("./rxjs/observables/observables.component").then(m => m.ObservablesComponent)
      },
      {
        path: "map-pipe",
        loadComponent: () => import("./rxjs/map-pipe/map-pipe.component").then(m => m.MapPipeComponent)
      },
      {
        path: "filter-pipe",
        loadComponent: () => import("./rxjs/filter-pipe/filter-pipe.component").then(m => m.FilterPipeComponent)
      },
      {
        path: "merge",
        loadComponent: () => import("./rxjs/merge/merge.component").then(m => m.MergeComponent)
      },
      {
        path: "concat",
        loadComponent: () => import("./rxjs/concat/concat.component").then(m => m.ConcatComponent)
      },
      {
        path: "tap-pipe",
        loadComponent: () => import("./rxjs/tap-pipe/tap-pipe.component").then(m => m.TapPipeComponent)
      },
      {
        path: "delay-pipe",
        loadComponent: () => import("./rxjs/delay-pipe/delay-pipe.component").then(m => m.DelayPipeComponent)
      },
    ]
  }
];
