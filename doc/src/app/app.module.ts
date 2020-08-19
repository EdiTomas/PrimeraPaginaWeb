import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { CalculadoraService } from "./services/calculadora.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaginaprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalculadoraService  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
