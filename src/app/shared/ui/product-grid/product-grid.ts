import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Grid, GridRow, GridCell, GridCellWidget } from '@angular/aria/grid';
import { Product } from '../../../interfaces/product.interface';
import { products } from '../../../data/products.data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'product-grid',
  imports: [Grid, GridRow, GridCell, GridCellWidget, FormsModule, DecimalPipe],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {

  readonly data = signal<Product[]>(products);
  sortAscending: boolean = true;
  tempInput: string = '';

  sortTaskByPrice(): void {
    this.sortAscending = !this.sortAscending;
    if (this.sortAscending) {
      this.data.update((tasks) => tasks.sort((a, b) => a.price - b.price));
    } else {
      this.data.update((tasks) => tasks.sort((a, b) => b.price - a.price));
    }
  }
}