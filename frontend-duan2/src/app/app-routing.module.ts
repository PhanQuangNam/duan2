import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { TrangchuComponent } from './web/trangchu/trangchu.component';
import {ThongtinsanphamComponent} from "./web/thongtinsanpham/thongtinsanpham.component";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { QuanlySanphamComponent } from './admin/quanly-sanpham/quanly-sanpham.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path :"", redirectTo :"home/trangchu" ,pathMatch:"full"},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent,
      children : [
        { path: 'trangchu', component: TrangchuComponent },
        { path: 'gioithieu', component: GioithieuComponent },
        { path: 'sanpham', component: SanphamComponent },
        { path: 'tintuc', component: TintucComponent },
        { path: 'lienhe', component: LienheComponent },
        {path : "thongtinsanpham/:id" , component : ThongtinsanphamComponent},
      ]},
    {path : 'dashboard', component: DashboardComponent,
      children : [
        {path :"", redirectTo :"dashboard" ,pathMatch:"full"},
        {path : 'quanly-sanpham', component: QuanlySanphamComponent}
      ]}

  ]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
