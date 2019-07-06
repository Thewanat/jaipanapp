import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'gift/:id', loadChildren: './forms/gift/gift.module#GiftPageModule' },
  { path: 'send/:id', loadChildren: './forms/send/send.module#SendPageModule' },
  { path: 'card/:id', loadChildren: './card/card.module#CardPageModule' }, 
  { path: 'profile/:id',loadChildren: './person-details/person-details.module#PersonDetailsPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'edit', loadChildren: './auth/edit/edit.module#EditPageModule' },
  { path: 'crop', loadChildren: './auth/crop/crop.module#CropPageModule' },
  { path: 'changepwd', loadChildren: './auth/changepwd/changepwd.module#ChangepwdPageModule' },
  { path: '', loadChildren: './mores/intro/intro.module#IntroPageModule' },
  { path: 'recommend', loadChildren: './mores/recommend/recommend.module#RecommendPageModule' },
  { path: 'draw/:id', loadChildren: './mores/draw/draw.module#DrawPageModule' },
  { path: 'following/:id', loadChildren: './mores/following/following.module#FollowingPageModule' },
  { path: 'followers/:id', loadChildren: './mores/followers/followers.module#FollowersPageModule' },
  { path: 'drawer', loadChildren: './mores/drawer/drawer.module#DrawerPageModule' },
  { path: 'drawuse', loadChildren: './mores/drawuse/drawuse.module#DrawusePageModule' },
  { path: 'comments/:id', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotPageModule' },
  { path: 'ranking', loadChildren: './mores/ranking/ranking.module#RankingPageModule' },
  { path: 'search', loadChildren: './mores/search/search.module#SearchPageModule' },
  { path: 'review/:id', loadChildren: './mores/review/review.module#ReviewPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
