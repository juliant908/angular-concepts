import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'ng-default',
  standalone: true,
  imports: [],
  templateUrl: './default.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent implements OnInit {
  counter: number = 0;

  ngOnInit() {
    interval(1000)
      .pipe(
        map(val => this.counter = val),
        take(10)
      ).subscribe();
  }

}
