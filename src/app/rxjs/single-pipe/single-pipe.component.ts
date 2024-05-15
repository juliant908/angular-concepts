import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of, single } from 'rxjs';

@Component({
  selector: 'ng-single-pipe',
  standalone: true,
  imports: [],
  templateUrl: './single-pipe.component.html',
  styles: `
          :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePipeComponent implements OnInit{
  private observable$ = of(1, 2, 3);
  onlyValue!: number;
  ngOnInit() {
    this.observable$
      .pipe(
        single(val => val % 2 === 0)
    ).subscribe(val => this.onlyValue = val);
  }
}
