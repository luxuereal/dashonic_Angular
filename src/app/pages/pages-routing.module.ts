import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'kanban-board',
    component: KanbanBoardComponent
  },
  {
    path: 'file-manager',
    component: FileManagerComponent
  },
  {
    path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule)
  },
  {
    path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'timeline', loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'ui', loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  },
  {
    path: 'extended', loadChildren: () => import('./extended-ui/extended-ui.module').then(m => m.ExtendedUiModule)
  },
  {
    path: 'widgets', component: WidgetsComponent
  },
  {
    path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
