import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ng-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styles: `
        :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class FromEventComponent implements OnInit{

  valueFromEvent$ = fromEvent(document, 'click');
  valueFromInput$ = fromEvent(document, 'input');
  characterCount = 0;
  counter = 0;
  ngOnInit(): void {
      this.valueFromEvent$
        .subscribe(() => this.counter++);

      this.valueFromInput$
        .subscribe(val =>this.characterCount = (val.target as HTMLInputElement).value.length);
  }

  resetCounter() {
    this.counter = -1;
  }

}
