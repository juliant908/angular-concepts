import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'ng-filter-pipe',
  standalone: true,
  imports: [],
  templateUrl: './filter-pipe.component.html',
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
export class FilterPipeComponent implements OnInit{
  observableToMap = of(1, 2, 3)
  valuesFromObservable: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues() {
    return this.observableToMap.pipe(
      filter(val => val > 2)
    ).subscribe(val => this.valuesFromObservable.push(val));
  }
}
