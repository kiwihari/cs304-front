import{Routes, RouterModule} from '@angular/router';

import{ HomeComponent } from './home/home.component';
import{ PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { LocationComponent} from './location/location.component';
import { GooglemapsComponent} from './googlemaps/googlemaps.component';
const appRoutes:Routes=[
    {path:'page',component:PageComponent},
    {path:'home',component:HomeComponent},
    {path:'page2',component:Page2Component},
    {path:'loc',component:LocationComponent},
    {path:'googlemaps',component:GooglemapsComponent},
    {path:'**', redirectTo:'home'}
]

export const routing = RouterModule.forRoot(appRoutes);