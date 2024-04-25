import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../items/services/items.service';

@Component({
  selector: 'app-itemscategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itemscategory.component.html',
  styleUrl: './itemscategory.component.css'
})
export class ItemscategoryComponent {
  selectedCategory: any;
  items: any[] = [];
  loadingItems: boolean = false;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('category');
      if (categoryId) {
        this.loadItemsByCategory(categoryId);
      }
    });
  }

  loadItemsByCategory(categoryId: string): void {
    this.loadingItems = true;
    this.itemsService.getItemsByCategory(categoryId).subscribe((data: any) => {
      console.log(data); // Verifica la estructura de los datos aquí
      this.selectedCategory = data;
      this.items = data.items;
      this.loadItemDetails(this.items); // Llama a loadItemDetails después de obtener los ítems
    }, (error) => {
      console.error('Error al cargar los ítems:', error);
    }, () => {
      this.loadingItems = false;
    });
  }

  loadItemDetails(items: any[]): void {
    items.forEach(item => {
      const itemId = item.url.split('/').slice(-2)[0]; // Obtener el ID del ítem desde la URL
      this.itemsService.getItemDetails(itemId).subscribe((itemDetails: any) => {
        item.details = itemDetails;
      }, (error) => {
        console.error('Error al cargar los detalles del ítem:', error);
      });
    });
  }
}