import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'ng-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
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
export class ObservablesComponent implements OnInit{
  observable = of(1, 2, 3);
  valuesFromObservable: number[] = [];

  ngOnInit() {
    this.getObservable();
  }

  getObservable() {
    return this.observable.subscribe(val => this.valuesFromObservable.push(val));
  }
}
