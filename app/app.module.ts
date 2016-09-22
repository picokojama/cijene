import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
import {ProzoriService} from "./prozori.service";
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    providers: [ ProzoriService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }