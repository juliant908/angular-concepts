import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, map, startWith, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'ng-start-with-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-with-pipe.component.html',
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
  changeDetection: ChangeDetectionStrategy.Default
})
export class StartWithPipeComponent implements OnInit{
  counter$!: Observable<number>;
  ngOnInit(): void {
    // this.counter$.pipe(
    //   startWith(-2),
    //   map(val => val + 1),
    //   tap(val => console.log(val))
    // ).subscribe();
  }

}
