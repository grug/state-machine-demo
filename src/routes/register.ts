import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const registerRoutes = Router();

registerRoutes.get('/register', (_, res) => {
  res.render('register.njk');
});

registerRoutes.post('/register', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'register');

  res.redirect(`/${nextRoute}`);
});

export { registerRoutes };
