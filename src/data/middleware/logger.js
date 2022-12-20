import { checkIsDev } from 'utils/helpers';

export const logger = store => next => action => {
  if (checkIsDev()) {
    console.group(action.type);
    console.log('The action is: ', action);
    const returnValue = next(action);
    console.log('The new state is: ', store.getState());
    console.groupEnd();
    return returnValue;
  }
}