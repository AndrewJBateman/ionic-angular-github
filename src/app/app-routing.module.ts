import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'user-search', pathMatch: 'full' },
	{ path: 'user-search', loadChildren: './pages/user-search/user-search.module#UserSearchPageModule' },
	{ path: 'user/:id', loadChildren: './pages/user-detail/user-detail.module#UserDetailPageModule' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
