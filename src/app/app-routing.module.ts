import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InfoComponent } from './components/info/info.component';
import { LsitarJuegosComponent } from './components/lsitar-juegos/lsitar-juegos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {path: '',component: LsitarJuegosComponent},
  {path: 'contacto', component : ContactoComponent},
  {path: 'nosotros', component : NosotrosComponent},
  {path: 'listar-juegos/:title', component : LsitarJuegosComponent},
  {path: 'info', component : InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
