import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games/services/games.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamesdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gamesdetail.component.html',
  styleUrl: './gamesdetail.component.css'
})
export class GamesdetailComponent {
  game: any;

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.gamesService.getGames(id).subscribe((data: any) => {
      this.game = data;
    });
  }
}
