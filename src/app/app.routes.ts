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
      {
        path: "single-pipe",
        loadComponent: () => import("./rxjs/single-pipe/single-pipe.component").then(m => m.SinglePipeComponent)
      },
      {
        path: "start-with-pipe",
        loadComponent: () => import("./rxjs/start-with-pipe/start-with-pipe.component").then(m => m.StartWithPipeComponent)
      },
      {
        path: "from-event",
        loadComponent: () => import("./rxjs/from-event/from-event.component").then(m => m.FromEventComponent)
      },
      {
        path: "with-latest-from-pipe",
        loadComponent: () => import("./rxjs/with-latest-from-pipe/with-latest-from-pipe.component").then(m => m.WithLatestFromPipeComponent)
      },
      {
        path: "concat-with-pipe",
        loadComponent: () => import("./rxjs/concat-with-pipe/concat-with-pipe.component").then(m => m.ConcatWithPipeComponent)
      },
      {
        path: "catch-error-pipe",
        loadComponent: () => import("./rxjs/catch-error-pipe/catch-error-pipe.component").then(m => m.CatchErrorPipeComponent)
      },
    ]
  },
  {
    path: "advanced-concepts",
    children: [
      {
        path: "change-detection",
        loadComponent: () => import("./advanced-concepts/change-detection/change-detection.component").then(m => m.ChangeDetectionComponent)
      },
      {
        path: "directives",
        loadComponent: () => import("./advanced-concepts/directives/directives.component").then(m => m.DirectivesComponent)
      },
      {
        path: "host-attribute-token",
        loadComponent: () => import("./advanced-concepts/host-attribute-token/host-attribute-token.component").then(m => m.HostAttributeTokenComponent)
      },
      {
        path: "solid",
        loadComponent: () => import("./advanced-concepts/solid/solid.component").then(m => m.SOLIDComponent)
      },
    ]
  }
];
