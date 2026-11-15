import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    appComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    ProductComponent,
    BookNowComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [appComponent],
})
export class AppModule {}
