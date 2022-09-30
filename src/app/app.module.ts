import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SaisieInfoClientComponent } from './saisie-info-client/saisie-info-client.component';
import { TetiereComponent } from './tetiere/tetiere.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SaisieInfoClientComponent,
    TetiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
