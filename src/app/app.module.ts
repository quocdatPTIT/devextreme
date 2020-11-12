import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxSortableModule } from 'devextreme-angular/ui/sortable';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, DxScrollViewModule, DxSortableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

