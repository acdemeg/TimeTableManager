import { actionsEnum } from '../../constants';

const updateTimeTables = (state, action) => {
  if (state === undefined) {
    return {
      timeTables: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case actionsEnum.TIME_TABLES_REQUESTED:
      return {
        timeTables: [],
        loading: true,
        error: null,
      };

    case actionsEnum.TIME_TABLES_LOADED:
      return {
        timeTables: action.payload,
        loading: false,
        error: null,
      };

    case actionsEnum.TIME_TABLES_ERROR:
      return {
        timeTables: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.timeTablesList;
  }
};

export default updateTimeTables;
