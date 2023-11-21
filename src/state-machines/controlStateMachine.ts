import { createMachine } from 'xstate';

const controlStateMachine = createMachine({
  predictableActionArguments: true,
  initial: '/welcome',
  states: {
    welcome: {
      on: { NEXT: 'register' },
    },
    register: {
      on: { NEXT: 'verify-email' },
    },
    'verify-email': {
      on: { NEXT: 'login' },
    },
    login: {
      on: { NEXT: 'pis' },
    },
    pis: {
      on: { NEXT: 'consent' },
    },
    consent: {
      on: { NEXT: 'thank-you' },
    },
    'thank-you': {},
  },
});

export { controlStateMachine };
