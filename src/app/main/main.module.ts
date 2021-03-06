/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainRoutes, mainRoutingProviders} from './main.routing';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {NotificationService} from '../../services/notification/notification.service';
import {AccessDeniedComponent} from './access.denied.component';
import {CommonModule} from '../../components/common.module';
import {NotificationComponent} from './notification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    MainComponent,
    DashboardComponent,
    AccessDeniedComponent,
    NotificationComponent
  ],
  providers: [
    mainRoutingProviders
  ],
})
export class MainModule {}
