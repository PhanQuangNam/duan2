import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { TrangchuComponent } from './web/trangchu/trangchu.component';
import { ServiceService } from './service.service';
import { SlideComponent } from './web/slide/slide.component';
import { HeaderComponent } from './web/header/header.component';
import { FooterComponent } from './web/footer/footer.component';
import { Home1Component } from './web/home1/home1.component';
import { ThongtinsanphamComponent } from './web/thongtinsanpham/thongtinsanpham.component';
import { SanphamlienquanComponent } from './web/sanphamlienquan/sanphamlienquan.component';
import { QuanlySanphamComponent } from './admin/quanly-sanpham/quanly-sanpham.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GioithieuComponent,
    SanphamComponent,
    TintucComponent,
    LienheComponent,
    TrangchuComponent,
    SlideComponent,
    HeaderComponent,
    FooterComponent,
    Home1Component,
    ThongtinsanphamComponent,
    SanphamlienquanComponent,
    QuanlySanphamComponent,
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
