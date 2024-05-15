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
        path: "subjects",
        loadComponent: () => import("./rxjs/subjects/subjects.component").then(m => m.SubjectsComponent)
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
      {
        path: "timestamp-pipe",
        loadComponent: () => import("./rxjs/timestamp-pipe/timestamp-pipe.component").then(m => m.TimestampPipeComponent)
      },
      {
        path: "switch-map-pipe",
        loadComponent: () => import("./rxjs/switch-map-pipe/switch-map-pipe.component").then(m => m.SwitchMapPipeComponent)
      },
      {
        path: "take-until-pipe",
        loadComponent: () => import("./rxjs/take-until-pipe/take-until-pipe.component").then(m => m.TakeUntilPipeComponent)
      },
    ]
  }
];
