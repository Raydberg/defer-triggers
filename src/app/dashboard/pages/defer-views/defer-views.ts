import { Component } from '@angular/core';
import { HeavyLoadersSlow } from '../../../shared/heavy-loaders/heavy-loaders-slow';
import { ProductGrid } from "../../../shared/ui/product-grid/product-grid";

@Component({
  selector: 'defer-views',
  imports: [HeavyLoadersSlow, ProductGrid],
  templateUrl: './defer-views.html',
})
export default class DeferViews { }
