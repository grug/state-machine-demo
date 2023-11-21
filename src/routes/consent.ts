import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const consentRoutes = Router();

consentRoutes.get('/consent', (_, res) => {
  res.render('consent.njk');
});

consentRoutes.post('/consent', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'consent');

  res.redirect(`/${nextRoute}`);
});

export { consentRoutes };
