import { Component, inject} from '@angular/core';
import { ItemsService } from './services/items.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  authService = inject(AuthService)
  categories: any[] = [];
  selectedCategory: any;
  items: any[] = [];
  
  constructor(private router: Router, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItemCategories();
  }

  getItemCategories(): void {
    this.itemsService.getItemCategories().subscribe((data: any) => {
      this.categories = data.results;
    });
  }

  onSelectCategory(category: any): void {
    this.router.navigate(['/items', category.name]);
  }

}
