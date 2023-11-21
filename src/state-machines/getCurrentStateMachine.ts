import { controlStateMachine } from './controlStateMachine';

/**
 * In reality, this function would have more logic to determine which state machine to return.
 */
function getCurrentStateMachine() {
  return controlStateMachine;
}

export { getCurrentStateMachine };
