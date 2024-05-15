import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'ng-tap-pipe',
  standalone: true,
  imports: [],
  templateUrl: './tap-pipe.component.html',
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TapPipeComponent implements OnInit {
  observable = of(1, 2, 3)
  valuesFromObservable: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues() {
    return this.observable
    .pipe(
      tap(val => console.log(val)),
      map(val => val + 1),
    )
      .subscribe(val => this.valuesFromObservable.push(val));
  }
}
