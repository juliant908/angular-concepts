import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of, tap, timestamp } from 'rxjs';

@Component({
  selector: 'ng-timestamp-pipe',
  standalone: true,
  imports: [],
  templateUrl: './timestamp-pipe.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }
    .timestamp {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      padding: 1rem;
      div{
        display: flex;
        justify-content: center;
        gap: 1rem;

      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TimestampPipeComponent {
  observable = of(1, 2, 3)
  valuesFromObservable: Record<string, number>[] = []


  ngOnInit() {
    this.getTimestampAndValues();
  }

  getTimestampAndValues() {
    return this.observable
      .pipe(
        timestamp(),
      )
      .subscribe(
        val => this.valuesFromObservable?.push({ timestamp: val.timestamp, value: val.value })
      );
  }
}
