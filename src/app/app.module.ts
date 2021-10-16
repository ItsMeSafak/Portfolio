import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PortfolioComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MnFullpageModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
