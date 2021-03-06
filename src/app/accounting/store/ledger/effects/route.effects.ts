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

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as ledgerActions from '../ledger.actions';
import {Router} from '@angular/router';

@Injectable()
export class LedgerRouteEffects {
  constructor(private actions$: Actions, private router: Router) { }

  @Effect({ dispatch: false })
  createLedgerSuccess$: Observable<Action> = this.actions$
    .ofType(ledgerActions.CREATE_SUCCESS, ledgerActions.CREATE_SUB_LEDGER_SUCCESS, ledgerActions.UPDATE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../'], { relativeTo: payload.activatedRoute }));

  @Effect({ dispatch: false })
  deleteLedgerSuccess$: Observable<Action> = this.actions$
    .ofType(ledgerActions.DELETE_SUCCESS)
    .map(action => action.payload)
    .do(payload => {
      if(payload.ledger.parentLedgerIdentifier) {
        this.router.navigate(['../../', payload.ledger.parentLedgerIdentifier], { relativeTo: payload.activatedRoute })
      } else {
        this.router.navigate(['../../../../'], { relativeTo: payload.activatedRoute })
      }
    });
}
