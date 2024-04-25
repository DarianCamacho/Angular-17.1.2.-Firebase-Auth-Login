import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexdetailComponent } from './pokedexdetail/pokedexdetail.component';
import { GamesComponent } from './games/games.component';
import { GamesdetailComponent } from './gamesdetail/gamesdetail.component';
import { ItemsComponent } from './items/items.component';
import { ItemscategoryComponent } from './itemscategory/itemscategory.component';
import { TcgComponent } from './tcg/tcg.component';
import { ItemscatdetailComponent } from './itemscatdetail/itemscatdetail.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
  },
  {
    path: 'pokedex/:id',
    component: PokedexdetailComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'games/:id',
    component: GamesdetailComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'items/:category',
    component: ItemscategoryComponent,
  },
  {
    path: 'tcg',
    component: TcgComponent,
  },
  {
    path: 'categories/:categoryId/items/:itemId',
    component: ItemscatdetailComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];