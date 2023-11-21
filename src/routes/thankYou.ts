import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const thankYouRoutes = Router();

thankYouRoutes.get('/thank-you', (_, res) => {
  res.render('thankYou.njk');
});

thankYouRoutes.post('/thank-you', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'thank-you');

  res.redirect(`/${nextRoute}`);
});

export { thankYouRoutes };
