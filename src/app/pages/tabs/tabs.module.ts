import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { ContactPageModule } from '../contact/contact.module';
import { FavouritesPageModule } from './../favourites/favourites.module';
import { AboutPageModule } from '../about/about.module';
import { UserSearchPageModule } from '../user-search/user-search.module';
import { UserDetailPageModule } from '../user-detail/user-detail.module';


@NgModule({
	imports: [
		AboutPageModule,
		ContactPageModule,
		UserSearchPageModule,
		UserDetailPageModule,
		FavouritesPageModule,
		CommonModule,
		FormsModule,
		IonicModule,
		TabsPageRoutingModule
	],
	declarations: [TabsPage]
})
export class TabsPageModule {}
