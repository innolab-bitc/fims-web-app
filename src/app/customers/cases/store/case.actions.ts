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

import {Action} from '@ngrx/store';
import {Error} from '../../../../services/domain/error.model';
import {type} from '../../../util';
import {RoutePayload} from '../../../../components/store/route-payload';
import {Case} from '../../../../services/portfolio/domain/case.model';
import {CasePage} from '../../../../services/portfolio/domain/case-page.model';
import {FetchRequest} from '../../../../services/domain/paging/fetch-request.model';
import {Product} from '../../../../services/portfolio/domain/product.model';
import {FimsCase} from './model/fims-case.model';
import {FimsCasePage} from './model/fims-case-page.model';
import {SearchResult} from '../../../../components/store/search.reducer';
import {
  CreateResourceSuccessPayload, LoadResourcePayload,
  SelectResourcePayload, UpdateResourceSuccessPayload
} from '../../../../components/store/resource.reducer';

export const SEARCH = type('[Case] Search');
export const SEARCH_COMPLETE = type('[Case] Search Complete');

export const LOAD = type('[Case] Load');
export const SELECT = type('[Case] Select');

export const CREATE = type('[Case] Create');
export const CREATE_SUCCESS = type('[Case] Create Success');
export const CREATE_FAIL = type('[Case] Create Fail');

export const UPDATE = type('[Case] Update');
export const UPDATE_SUCCESS = type('[Case] Update Success');
export const UPDATE_FAIL = type('[Case] Update Fail');

export const LOAD_PRODUCT = type('[Case] Form Load Product');
export const LOAD_PRODUCT_SUCCESS = type('[Case] Form Load Product Success');
export const LOAD_PRODUCT_FAIL = type('[Case] Form Load Product Fail');

export const UNLOAD_PRODUCT = type('[Case] Form Unload Product');

export interface SearchCasePayload{
  customerId: string;
  fetchRequest: FetchRequest;
}

export interface CaseRoutePayload extends RoutePayload{
  productId: string;
  caseInstance: FimsCase;
}

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: SearchCasePayload) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: SearchResult) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: LoadResourcePayload) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: SelectResourcePayload) { }
}

export class CreateCaseAction implements Action {
  readonly type = CREATE;

  constructor(public payload: CaseRoutePayload) { }
}

export class CreateCaseSuccessAction implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: CreateResourceSuccessPayload) { }
}

export class CreateCaseFailAction implements Action {
  readonly type = CREATE_FAIL;

  constructor(public payload: Error) { }
}

export class UpdateCaseAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: CaseRoutePayload) { }
}

export class UpdateCaseSuccessAction implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload: UpdateResourceSuccessPayload) { }
}

export class UpdateCaseFailAction implements Action {
  readonly type = UPDATE_FAIL;

  constructor(public payload: Error) { }
}

export class LoadProductAction implements Action {
  readonly type = LOAD_PRODUCT;

  constructor(public payload: string) { }
}

export class LoadProductSuccessAction implements Action {
  readonly type = LOAD_PRODUCT_SUCCESS;

  constructor(public payload: Product) { }
}

export class LoadProductFailAction implements Action {
  readonly type = LOAD_PRODUCT_FAIL;

  constructor(public payload: Error) { }
}

export class UnloadProductAction implements Action {
  readonly type = UNLOAD_PRODUCT;

  constructor() { }
}


export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction
  | CreateCaseAction
  | CreateCaseSuccessAction
  | CreateCaseFailAction
  | UpdateCaseAction
  | UpdateCaseSuccessAction
  | UpdateCaseFailAction
  | LoadProductAction
  | LoadProductSuccessAction
  | LoadProductFailAction
  | UnloadProductAction;
