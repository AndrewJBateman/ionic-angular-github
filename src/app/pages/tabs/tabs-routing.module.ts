import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'user-search',
				children: [
					{
						path: '',
						loadChildren: () => import('../user-search/user-search.module').then(m => m.UserSearchPageModule)
					},
				]
			},
			{
				path: 'user-detail',
				children: [
					{
						path: '',
						loadChildren: () => import('../user-detail/user-detail.module').then(m => m.UserDetailPageModule)
					}
				]
			},
			{
				path: 'favourites',
				children: [
					{
						path: '',
						loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
					}
				]
			},
			{
				path: 'about',
				children: [
					{
						path: '',
						loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
					}
				]
			},
			{
				path: 'contact',
				children: [
					{
						path: '',
						loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/country-list',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/country-list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
