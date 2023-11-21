import { AnyEventObject, StateMachine } from 'xstate';

function getNextState(
  stateMachine: StateMachine<any, any, AnyEventObject>,
  currentState: string
) {
  return stateMachine.transition(currentState, 'NEXT').value;
}

export { getNextState };
