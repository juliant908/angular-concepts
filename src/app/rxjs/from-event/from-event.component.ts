import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
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
  valueFromEvent$ = fromEvent(this.document, 'click');
  valueFromInput$ = fromEvent(this.document, 'input');
  characterCount = 0;
  counter = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

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
