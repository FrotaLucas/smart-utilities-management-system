import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';


//standalone application
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//standalone application
//nao precisa usar o appConfig ??????????
bootstrapApplication(AppComponent, {
  providers: [
    ...appRouterProviders, provideHttpClient()
  ]
}).catch( err => console.log(err));