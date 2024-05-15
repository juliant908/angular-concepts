import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { merge, of } from 'rxjs';

@Component({
  selector: 'ng-merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
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
export class MergeComponent implements OnInit{
  observable1 = of(1, 2, 3)
  observable2 = of(3, 4, 5, 6)
  valuesFromMerge: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues() {
    return merge(this.observable1, this.observable2).subscribe(val => this.valuesFromMerge.push(val));
  }
}
