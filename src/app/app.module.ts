import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NewLibCardComponent } from './new-lib-card/new-lib-card.component';
import { NewLibCardLayComponent } from './new-lib-card-lay/new-lib-card-lay.component';
import { NewCardLayComponent } from './new-lib-card/new-card-lay/new-card-lay.component';
import { LayComponent } from './new-lib-card/lay/lay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NewLibCardComponent,
    NewLibCardLayComponent,
    NewLibCardComponent,
    NewCardLayComponent,
    LayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
