import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loaders-slow',
  template: `
  <section [class]="'w-full h-150 ' + cssClass()">
    Heavy Loader Slow
  </section>
  `
})
export class HeavyLoadersSlow {


  cssClass = input.required<string>()

  constructor() {

    const start = Date.now()
    while (Date.now() - start < 3000) {
    }
    console.log("Cargando")
  }

}

