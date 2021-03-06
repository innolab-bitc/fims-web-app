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

import {Routes} from '@angular/router';
import {GeneralLedgerComponent} from './general-ledger.component';
import {TrailBalanceComponent} from './trailBalance/trial-balance.component';
import {SubLedgerDetailComponent} from './sub-ledger.detail.component';
import {AccountComponent} from './accounts/account.component';
import {AccountDetailComponent} from './accounts/account.detail.component';
import {AccountStatusComponent} from './status/status.component';
import {CommandsResolver} from './activity/commands.resolver';
import {AccountActivityComponent} from './activity/activity.component';
import {CreateAccountFormComponent} from './accounts/form/create/create.form.component';
import {AccountListComponent} from './accounts/account.list.component';
import {SubLedgerComponent} from './sub-ledger.component';
import {EditAccountFormComponent} from './accounts/form/edit/edit.form.component';
import {JournalEntryListComponent} from './journalEntries/journal-entry.list.component';
import {JournalEntryFormComponent} from './journalEntries/form/form.component';
import {AccountEntryListComponent} from './accounts/entries/account-entry.list.component';
import {CreateLedgerFormComponent} from './form/create/create.form.component';
import {EditLedgerFormComponent} from './form/edit/edit.form.component';
import {LedgerExistsGuard} from './ledger-exists.guard';
import {AccountExistsGuard} from './accounts/account-exists.guard';

export const AccountingRoutes: Routes = [
  {path: '', component: GeneralLedgerComponent},
  {
    path: 'ledgers/detail/:id',
    component: SubLedgerComponent,
    canActivate: [LedgerExistsGuard],
    data: {
      hasPermission: { id: 'accounting_ledgers', accessLevel: 'READ' }
    },
    children: [
      {
        path: '',
        component: SubLedgerDetailComponent,
      },
      {
        path: 'accounts',
        component: AccountComponent,
        children: [
          {
            path: '',
            component: AccountListComponent,
            data: {
              hasPermission: { id: 'accounting_accounts', accessLevel: 'READ' }
            }
          },
          {
            path: 'create',
            component: CreateAccountFormComponent,
            data: {
              hasPermission: { id: 'accounting_accounts', accessLevel: 'CHANGE' }
            }
          }
        ]
      }
    ]
  },
  {path: 'create', component: CreateLedgerFormComponent, data: { hasPermission: { id: 'accounting_ledgers', accessLevel: 'CHANGE' }}},
  {path: 'ledgers/detail/:id/create', component: CreateLedgerFormComponent, canActivate: [LedgerExistsGuard], data: { hasPermission: { id: 'accounting_ledgers', accessLevel: 'CHANGE' }}},
  {path: 'ledgers/detail/:id/edit', component: EditLedgerFormComponent, canActivate: [LedgerExistsGuard], data: { hasPermission: { id: 'accounting_ledgers', accessLevel: 'CHANGE' }}},

  {path: 'accounts/detail/:id', component: AccountDetailComponent, canActivate: [AccountExistsGuard], data: { hasPermission: { id: 'accounting_accounts', accessLevel: 'READ' }}},
  {path: 'accounts/detail/:id/edit', component: EditAccountFormComponent, canActivate: [AccountExistsGuard], data: { hasPermission: { id: 'accounting_accounts', accessLevel: 'CHANGE' }}},
  {path: 'accounts/detail/:id/tasks', component: AccountStatusComponent, canActivate: [AccountExistsGuard], data: { hasPermission: { id: 'accounting_accounts', accessLevel: 'READ' }}},
  {path: 'accounts/detail/:id/activities', component: AccountActivityComponent, canActivate: [AccountExistsGuard], resolve: {commands: CommandsResolver}, data: { hasPermission: { id: 'accounting_accounts', accessLevel: 'READ' }}},
  {path: 'accounts/detail/:id/entries', component: AccountEntryListComponent, canActivate: [AccountExistsGuard], data: { hasPermission: { id: 'accounting_accounts', accessLevel: 'READ' }}},

  {path: 'trialBalance', component: TrailBalanceComponent, data: { hasPermission: { id: 'accounting_ledgers', accessLevel: 'READ' }}},
  {path: 'journalEntries', component: JournalEntryListComponent, data: { hasPermission: { id: 'accounting_journals', accessLevel: 'READ' }}},
  {path: 'journalEntries/create', component: JournalEntryFormComponent, data: { hasPermission: { id: 'accounting_journals', accessLevel: 'CHANGE' }}}
];
