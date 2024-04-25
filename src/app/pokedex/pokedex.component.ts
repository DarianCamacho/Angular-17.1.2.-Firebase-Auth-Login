import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PokedexService } from './services/pokedex.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  authService = inject(AuthService)
  pokeIds: number[] = [];
  pokes: { [key: number]: any } = {};
  searchTerm: string = '';
  types: any[] = []; // Lista de tipos de Pokémon
  selectedType: string = ''; // Tipo de Pokémon seleccionado para filtrar
  currentPage: number = 1; // Página actual
  pageSize: number = 30; // Tamaño de la página

  constructor(private router: Router, private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getTypes();
    this.currentPage = 1; // Reiniciar la página actual
    this.pageSize = 30; // Establecer el tamaño de la página
    this.loadPokemon(); // Cargar los Pokémon de la página inicial
  }

// Método para cargar Pokémon según la página actual y los filtros aplicados
loadPokemon(): void {
  const offset = (this.currentPage - 1) * this.pageSize;
  const pokeIds = Array.from({ length: this.pageSize }, (_, index) => index + offset + 1);

  pokeIds.forEach(id => {
      if (id <= 1025) { // Limitar la carga a los primeros 1025 Pokémon
          this.getPokemonById(id);
      }
  });
}

loadAllPokemon(): void {
    this.pokeIds = Array.from({ length: 1025 }, (_, index) => index + 1);
    this.pokeIds.forEach(id => {
        this.getPokemonById(id);
    });
}


  // Método para cargar más Pokémon al hacer clic en el botón "Cargar más"
  loadMorePokemon(): void {
      this.currentPage++; // Incrementar la página actual
      this.loadPokemon(); // Cargar más Pokémon
  }

    // Método para filtrar los Pokémon según el nombre por la barra de busqueda
    get filteredPokeIds(): number[] {
      return this.pokeIds.filter(pokeId =>
        this.pokes[pokeId].name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    filterByType(): void {
      // Filtrar los IDs de los Pokémon según el tipo seleccionado
      if (this.selectedType) {
          this.pokeIds = this.pokeIds.filter(pokeId =>
              this.pokes[pokeId].types.some((type: any) => type.type.name === this.selectedType)
          );
      } else {
          // Si no se seleccionó ningún tipo, restablecer para mostrar todos los Pokémon
          this.pokeIds = Array.from({ length: 1302 }, (_, index) => index + 1);
      }
  }

  showAllPokemon(): void {
    this.selectedType = ''; // Restablecer el tipo seleccionado
    this.loadAllPokemon(); // Cargar todos los Pokémon sin filtro
}

    getTypes(): void {
      this.pokedexService.getTypes().subscribe((types: any) => {
        this.types = types.results.map((type: any) => type.name);
      });
    }

    getPokemonById(id: number): void {
      this.pokedexService.getPokemon(id).subscribe((data: any) => {
        this.pokes[id] = data;
        if (!this.pokeIds.includes(id)) {
          this.pokeIds.push(id);
        }
      });
    }

  getPokemonImage(pokemon: any): any {
    return {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`,
      back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`,
      back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`
    };
  }

  onViewDetail(pokeId: number) {
    this.router.navigate(['/pokedex', pokeId]);
  }
}
