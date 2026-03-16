import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loaders-fast',
  imports: [],
  template: `
  <section [class]="'w-full ' + cssClass()" >
    <ng-content />
  </section>
  `
})
export class HeavyLoadersFast {

  cssClass = input.required<string>()


}
