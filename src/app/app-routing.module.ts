import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Rota padrão!
  { path: 'heroes', component: HeroesComponent }, // Rota para enviar o usuário à tela de Heroes
  { path: 'dashboard' , component: DashboardComponent }, // Rota para enviar o usuário para o inicio
  { path: 'detail/:id', component: HeroDetailComponent } // Rota para mandar o usuário para os detalhes do heroi selecionado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
