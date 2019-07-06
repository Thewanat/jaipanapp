import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          },
          {
            path: ':id',
            loadChildren: '../card/card.module#CardPageModule'
          }
        ]
      },
      {
        path: 'store',
        children: [
          {
            path: '',
            loadChildren: '../store/store.module#StorePageModule'
          },
          {
            path: ':id',
            loadChildren: '../mores/drawstore/drawstore.module#DrawstorePageModule'
          }
        ]
      },
      {
        path: 'write',
        children: [
          {
            path: '',
            loadChildren: '../write/write.module#WritePageModule'
          },
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: '../notification/notification.module#NotificationPageModule'
          },
          {
            path: ':id',
            loadChildren: '../message/message.module#MessagePageModule'
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: '../more/more.module#MorePageModule'
          },
          { path: 'liked', loadChildren: '../mores/liked/liked.module#LikedPageModule' },
          { path: 'aboutus', loadChildren: '../mores/aboutus/aboutus.module#AboutusPageModule' },
          { path: 'help', loadChildren: '../mores/help/help.module#HelpPageModule' },
        ]
      },
      {
        path: '',
        redirectTo: 'app/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
