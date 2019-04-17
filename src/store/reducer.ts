import { combineReducers } from 'redux';

import { reducer as buildings } from './buildings/reducer';
import { reducer as clocks } from './clocks/reducer';
import { reducer as devils } from './devils/reducer';
import { reducer as people } from './people/reducer';
import { State } from './state';
import { reducer as streets } from './streets/reducer';

export const reducer = combineReducers<State>({
  buildings,
  clocks,
  devils,
  people,
  streets
});
