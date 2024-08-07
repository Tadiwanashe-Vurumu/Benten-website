import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'features', component:FeaturesComponent},
  {path:'contact', component:ContactComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'footer', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
