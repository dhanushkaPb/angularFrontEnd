import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { TopBrNvComponent } from './top-br-nv/top-br-nv.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopBrNvComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    LogoutComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
