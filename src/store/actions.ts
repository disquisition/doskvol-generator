import { BuildingsAction } from './buildings/actions';
import { ClocksAction } from './clocks/actions';
import { DevilsAction } from './devils/actions';
import { PeopleAction } from './people/actions';
import { StreetsAction } from './streets/actions';

export type Action =
  | BuildingsAction
  | ClocksAction
  | DevilsAction
  | PeopleAction
  | StreetsAction;
