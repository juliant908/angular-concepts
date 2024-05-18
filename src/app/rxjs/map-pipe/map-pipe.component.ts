import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of, map } from 'rxjs';

interface Person {
  name: string;
  age: number;
}
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
  test = of({ firstName: 'John', personAge: 30 }, { firstName: 'Doe', personAge: 25});
  testValues: Person[] = [];

  ngOnInit() {
    this.getObservableAndMutateValues();
    this.getObservableAndMutateValues2();
  }

  getObservableAndMutateValues() {
    return this.observableToMap.pipe(
      map(val => val * 2)
    ).subscribe(val => this.valuesFromObservable.push(val));
  }

  getObservableAndMutateValues2() {
    return this.test.pipe(
      map(val => this.normalizeData(val)),
    ).subscribe(val => {
      this.testValues?.push(val)
    });
  }

  normalizeData(data: { firstName: string, personAge: number }) {
    return {
      name: data.firstName,
      age: data.personAge
    }
  }
}
