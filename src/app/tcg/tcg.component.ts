import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from './services/crud.service';
import { catchError } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tcg',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tcg.component.html',
  styleUrl: './tcg.component.css'
})

export class TcgComponent implements OnInit {
  movies: any[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.crudService.getAllMovies().subscribe(
      (data: any) => {
        this.movies = data;
      },
      (error: any) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}