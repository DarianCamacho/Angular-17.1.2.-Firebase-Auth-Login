import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items/services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itemscatdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itemscatdetail.component.html',
  styleUrl: './itemscatdetail.component.css'
})
export class ItemscatdetailComponent {
  itemId: string | null | undefined;
  itemDetails: any;
  loadingItem: boolean = false;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('itemId') || null; // Usar null si no hay itemId
      if (this.itemId) {
        this.loadItemDetails(this.itemId);
      }
    });
  }

  loadItemDetails(itemId: string): void {
    this.loadingItem = true;
    this.itemsService.getItemDetails(itemId).subscribe((itemDetails: any) => {
      this.itemDetails = itemDetails;
    }, (error) => {
      console.error('Error al cargar los detalles del ítem:', error);
    }, () => {
      this.loadingItem = false;
    });
  }
}