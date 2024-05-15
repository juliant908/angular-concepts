import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of, map } from 'rxjs';

@Component({
  selector: 'ng-map-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-pipe.component.html',
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
export class MapPipeComponent implements OnInit{
  observableToMap = of(1,2,3)
  valuesFromObservable: number[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
  }

  getObservableAndMutateValues() {
    return this.observableToMap.pipe(
      map(val => val * 2)
    ).subscribe(val => this.valuesFromObservable.push(val));
  }
}
