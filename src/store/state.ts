import { BuildingsState } from './buildings/state';
import { ClocksState } from './clocks/state';
import { DevilsState } from './devils/state';
import { PeopleState } from './people/state';
import { StreetsState } from './streets/state';

export interface State {
  buildings: BuildingsState;
  clocks: ClocksState;
  devils: DevilsState;
  people: PeopleState;
  streets: StreetsState;
}
