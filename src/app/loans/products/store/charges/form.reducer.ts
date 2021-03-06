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

import * as charge from './charge.actions';
import {Error} from '../../../../../services/domain/error.model';

export interface State {
  error?: Error;
}

export const initialState: State = {};

export function reducer(state = initialState, action: charge.Actions): State {
  switch (action.type) {

    case charge.CREATE_FAIL:
      return {
        error: action.payload
      };

    case charge.CREATE_SUCCESS:
      return {};

    default:
      return state;

  }
}
