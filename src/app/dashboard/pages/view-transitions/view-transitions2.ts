import { Component } from '@angular/core';

@Component({
  selector: 'view-transitions-2',
  imports: [],
  template: `
  <section class="flex justify-end">
    <img 
    srcset="https://picsum.photos/id/237/200/300" 
    alt="Piscum" 
    width="200" 
    height="300" 
    style="view-transition-name: hero1"
    />

    <div class="bg-blue-500 w-32 h-32 rounded-2xl"
       style="view-transition-name: hero2"
    >

    </div>

</section>
  `,
})
export default class ViewTransitions2 { }
