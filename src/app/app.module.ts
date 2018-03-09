import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HelloComponent } from './hello/hello.component';

/* Loading CLDR data, see
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/
 *
 * // Load all required data for the de locale
 * import '@progress/kendo-angular-intl/locales/de/all';
 */


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // ... and register it
    ButtonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
