import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth13304Saga from '../features/EmailAuth13304/redux/sagas';
import CalendarView13303Saga from '../features/CalendarView13303/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth13304Saga,
CalendarView13303Saga,
    
  ]);
}