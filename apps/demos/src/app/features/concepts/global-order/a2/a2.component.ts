import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'rxa-a2',
  template: `
    <rxa-visualizer cDS="OnPush">
      <ng-container visualizerHeader>
        <h1 class="mat-headline">Component A (Parent)</h1>
        <div>
          <rxa-value-provider [changes$]="changes$" #v="rxaValueProvider"></rxa-value-provider>
          <rxa-ripple [name]="'A genrate random'" [value]="v.incremental$">random</rxa-ripple>
        </div>
      </ng-container>
      <div class="row w-100">
        <div class="col">
          <rxa-b2 (increment)="v.next()" [prop$]="v.float$"></rxa-b2>
        </div>
      </div>
    </rxa-visualizer>
  `
})
export class A2Component {
  changes$ = new Subject();
  values$ = new Subject();

  prop = 1;

  increment(): void {
    ++this.prop;
  }

}
