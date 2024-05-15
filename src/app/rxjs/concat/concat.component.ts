import { ChangeDetectionStrategy, Component } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'ng-concat',
  standalone: true,
  imports: [],
  templateUrl: './concat.component.html',
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
export class ConcatComponent {
  observable1 = of(1, 2, 3)
  observable2 = of(3, 4, 5, 6)
  valuesFromConcat: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues() {
    return concat(this.observable1, this.observable2).subscribe(val => this.valuesFromConcat.push(val));
  }
}
