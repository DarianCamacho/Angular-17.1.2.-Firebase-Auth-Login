import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex/services/pokedex.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokedexdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedexdetail.component.html',
  styleUrl: './pokedexdetail.component.css'
})
export class PokedexdetailComponent {
  pokemonDetails: any;
  pokemonDescriptions: string = '';
  pokemonWeaks: any[] = [];
  pokemonId!: number;
  loading: boolean = true;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonId = params['id'];
      this.getPokemonData(this.pokemonId);
    });
  }

  getPokemonData(pokemonId: number): void {
    this.loading = true;
    this.error = false;

    this.pokedexService.getPokemon(pokemonId).subscribe(
      (data: any) => {
        this.pokemonDetails = data;
        this.getPokemonWeaknesses(pokemonId);
        this.getPokemonDescription(pokemonId);
      },
      (error) => {
        console.error('Error loading Pokémon details:', error);
        this.error = true;
        this.loading = false;
      }
    );
  }

  getPokemonWeaknesses(pokemonId: number): void {
    this.pokedexService.getType(pokemonId).pipe(
      catchError(error => {
        console.error('Error loading Pokémon weaknesses:', error);
        return of(null);
      })
    ).subscribe(
      (data: any) => {
        this.pokemonWeaks = data?.damage_relations?.double_damage_from || [];
        this.loading = false;
      }
    );
  }

  getPokemonDescription(pokemonId: number): void {
    this.pokedexService.getPokemonSpecies(pokemonId).pipe(
      catchError(error => {
        console.error('Error loading Pokémon description:', error);
        return of(null);
      })
    ).subscribe(
      (data: any) => {
        const descriptionEntry = data?.flavor_text_entries?.find((entry: any) => entry.language.name === 'en');
        this.pokemonDescriptions = descriptionEntry ? descriptionEntry.flavor_text : '';
        this.loading = false;
      }
    );
  }

  playCry(pokemon: any): void {
    const audio = new Audio(pokemon.cries.latest);
    audio.play();
  }
}
