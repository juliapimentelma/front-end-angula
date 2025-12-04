import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Products } from './products/products'; 
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';

export const routes: Routes = [

    { path: '', component: HomePage },

    { path: 'produtos', component: Products },

    { path: 'sobre', component: AboutMe },

    { path: 'contato', component: Contact },

    { path: '**', redirectTo: '' } 
];

