import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'ng-onpush',
  standalone: true,
  imports: [],
  templateUrl: './onpush.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  counter: number = 0;

  ngOnInit() {
    interval(1000)
      .pipe(
        map(val => this.counter = val),
        take(10)
      )
      .subscribe();
  }

  checkChanges() {
    console.log('Checking changes');
  }

}
