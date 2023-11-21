import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const verifyEmailRoutes = Router();

verifyEmailRoutes.get('/verify-email', (_, res) => {
  res.render('verifyEmail.njk');
});

verifyEmailRoutes.post('/verify-email', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'verify-email');

  res.redirect(`/${nextRoute}`);
});

export { verifyEmailRoutes };
