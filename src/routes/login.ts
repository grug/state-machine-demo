import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const loginRoutes = Router();

loginRoutes.get('/login', (_, res) => {
  res.render('login.njk');
});

loginRoutes.post('/login', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'login');

  res.redirect(`/${nextRoute}`);
});

export { loginRoutes };
