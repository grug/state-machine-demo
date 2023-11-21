import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const pisRoutes = Router();

pisRoutes.get('/pis', (_, res) => {
  res.render('pis.njk');
});

pisRoutes.post('/pis', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'pis');

  res.redirect(`/${nextRoute}`);
});

export { pisRoutes };
