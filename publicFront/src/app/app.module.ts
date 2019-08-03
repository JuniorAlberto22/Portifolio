import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { RouterModule} from '@angular/router';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './contact/contact.component';
import { appRoutes } from './Routers';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoticeCrudComponent } from './notice-crud/notice-crud.component';
import { LoginCrudComponent } from './login-crud/login-crud.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardFeedComponent,
    FeedPageComponent,
    NoticeComponent,
    ContactComponent,
    ServiceComponent,
    AboutComponent,
    HomeComponent,
    NoticeCrudComponent,
    LoginCrudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
