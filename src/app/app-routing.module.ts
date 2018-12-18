import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutusComponent} from './components/aboutus/aboutus.component';
import { ServicesComponent} from './components/services/services.component';
import { ContactusComponent} from './components/contactus/contactus.component';
import { PortfolioComponent} from './components/portfolio/portfolio.component';

const routes : Routes =[
	{path:'',component:HomeComponent},
	{path:'aboutus',component:AboutusComponent},
	{path:'contactus',component:ContactusComponent},
	{path:'services',component:ServicesComponent},
	{path:'portfolio',component:PortfolioComponent}
];

@NgModule({
	exports: [RouterModule],
	imports: [
	//CommonModule
	RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule { }
