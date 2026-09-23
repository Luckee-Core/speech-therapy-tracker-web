import { combineReducers } from '@reduxjs/toolkit';
import {
  feedFormulasBuilderReducer,
  feedLogsBuilderReducer,
  therapyExerciseImportBuilderReducer,
  therapyExercisesBuilderReducer,
} from './builders';
import {
  currentFeedFormulaReducer,
  currentFeedLogReducer,
  currentTherapyExerciseReducer,
} from './current';
import {
  feedFormulasReducer,
  feedLogsReducer,
  speechTherapyConsumptionReducer,
  therapyExerciseImportAiExchangesReducer,
  therapyExerciseLogsReducer,
  therapyExercisesReducer,
} from './dumps';

export const rootReducer = combineReducers({
  therapyExercises: therapyExercisesReducer,
  therapyExerciseLogs: therapyExerciseLogsReducer,
  feedFormulas: feedFormulasReducer,
  feedLogs: feedLogsReducer,
  speechTherapyConsumption: speechTherapyConsumptionReducer,
  therapyExerciseImportAiExchanges: therapyExerciseImportAiExchangesReducer,
  therapyExerciseImportBuilder: therapyExerciseImportBuilderReducer,
  therapyExercisesBuilder: therapyExercisesBuilderReducer,
  feedFormulasBuilder: feedFormulasBuilderReducer,
  feedLogsBuilder: feedLogsBuilderReducer,
  currentTherapyExercise: currentTherapyExerciseReducer,
  currentFeedFormula: currentFeedFormulaReducer,
  currentFeedLog: currentFeedLogReducer,
});
