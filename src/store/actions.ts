import { BuildingsAction } from './buildings/actions';
import { DevilsAction } from './devils/actions';
import { PeopleAction } from './people/actions';
import { StreetsAction } from './streets/actions';

export type Action =
  | BuildingsAction
  | DevilsAction
  | PeopleAction
  | StreetsAction;
