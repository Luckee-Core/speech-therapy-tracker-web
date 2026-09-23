import { getAllFeedFormulas } from '@/api/feed-formulas';
import { getAllFeedLogs } from '@/api/feed-logs';
import { getAllSpeechTherapyConsumption } from '@/api/speech-therapy-consumption';
import { getAllTherapyExerciseImportAiExchanges } from '@/api/therapy-exercise-import-ai-exchanges';
import { getAllTherapyExerciseLogs } from '@/api/therapy-exercise-logs';
import { getAllTherapyExercises } from '@/api/therapy-exercises';
import {
  FeedFormulasActions,
  FeedLogsActions,
  SpeechTherapyConsumptionActions,
  TherapyExerciseImportAiExchangesActions,
  TherapyExerciseLogsActions,
  TherapyExercisesActions,
} from '@/store/dumps';
import type { AppThunk } from '@/store/types';

/**
 * Loads speech therapy, consumption, and tube-feed dumps from the API.
 */
export const loadBootstrapDataThunk =
  (): AppThunk<Promise<200 | 400 | 500>> =>
  async (dispatch) => {
    const [
      therapyExercises,
      therapyExerciseLogs,
      speechTherapyConsumption,
      feedFormulas,
      feedLogs,
      therapyExerciseImportAiExchanges,
    ] = await Promise.all([
      getAllTherapyExercises(),
      getAllTherapyExerciseLogs(),
      getAllSpeechTherapyConsumption(),
      getAllFeedFormulas(),
      getAllFeedLogs(),
      getAllTherapyExerciseImportAiExchanges(),
    ]);

    let status: 200 | 400 | 500 = 200;

    if (therapyExercises.ok) {
      dispatch(
        TherapyExercisesActions.setTherapyExercises(
          Object.fromEntries(therapyExercises.data.map((row) => [row.id, row])),
        ),
      );
    } else {
      status = 400;
    }

    if (therapyExerciseLogs.ok) {
      dispatch(
        TherapyExerciseLogsActions.setTherapyExerciseLogs(
          Object.fromEntries(therapyExerciseLogs.data.map((row) => [row.id, row])),
        ),
      );
    } else {
      status = 400;
    }

    if (speechTherapyConsumption.ok) {
      dispatch(
        SpeechTherapyConsumptionActions.setSpeechTherapyConsumption(
          Object.fromEntries(speechTherapyConsumption.data.map((row) => [row.id, row])),
        ),
      );
    } else {
      status = 400;
    }

    if (feedFormulas.ok) {
      dispatch(
        FeedFormulasActions.setFeedFormulas(
          Object.fromEntries(feedFormulas.data.map((row) => [row.id, row])),
        ),
      );
    } else {
      status = 400;
    }

    if (feedLogs.ok) {
      dispatch(
        FeedLogsActions.setFeedLogs(
          Object.fromEntries(feedLogs.data.map((row) => [row.id, row])),
        ),
      );
    } else {
      status = 400;
    }

    if (therapyExerciseImportAiExchanges.ok) {
      dispatch(
        TherapyExerciseImportAiExchangesActions.setTherapyExerciseImportAiExchanges(
          Object.fromEntries(
            therapyExerciseImportAiExchanges.data.map((row) => [row.id, row]),
          ),
        ),
      );
    } else {
      status = 400;
    }

    return status;
  };
