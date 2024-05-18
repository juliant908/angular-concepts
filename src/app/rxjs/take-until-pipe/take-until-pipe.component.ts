import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, interval, map, takeUntil } from 'rxjs';

@Component({
  selector: 'ng-take-until-pipe',
  standalone: true,
  imports: [],
  templateUrl: './take-until-pipe.component.html',
  styles: `
        :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }
    `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TakeUntilPipeComponent implements OnDestroy {
  counter = 0;
  stopper$ = new Subject();

  start() {
    interval(1000)
    .pipe(
      map(val => this.counter = val),
      takeUntil(this.stopper$)
    )
    .subscribe();
  }

  stop() {
    this.stopper$.next('stop');
  }

  ngOnDestroy() {
    this.stopper$.complete();
  }
}
