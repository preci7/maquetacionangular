import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { cartPlus } from 'ngx-bootstrap-icons';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const icons = {
  cartPlus
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.forRoot(icons),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
