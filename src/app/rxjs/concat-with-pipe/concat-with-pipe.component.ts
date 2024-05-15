import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, concatWith, map, of, startWith, tap } from 'rxjs';

@Component({
  selector: 'ng-concat-with-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concat-with-pipe.component.html',
  styles: `
          :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }`,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ConcatWithPipeComponent implements OnInit{

  obs1 = of(1, 2, 3);
  obs2 = of(4, 5, 6);
  valuesFromConcatWith: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues(){
    return this.obs1.pipe(
      concatWith(this.obs2),
      map(val => this.valuesFromConcatWith.push(val)),
    ).subscribe();
  }
}
