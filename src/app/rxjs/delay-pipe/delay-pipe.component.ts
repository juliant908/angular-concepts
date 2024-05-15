import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'ng-delay-pipe',
  standalone: true,
  imports: [],
  templateUrl: './delay-pipe.component.html',
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
export class DelayPipeComponent {
  result = '';

  typeWord(key: any){
    const balls = of(key.target?.value)
    return balls.pipe(
      delay(1000),
    ).subscribe((val: string) => this.result = val);
  }
}
