import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth13304Reducer from '../features/EmailAuth13304/redux/reducers';
import CalendarView13303Reducer from '../features/CalendarView13303/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth13304: EmailAuth13304Reducer,
CalendarView13303: CalendarView13303Reducer,

});