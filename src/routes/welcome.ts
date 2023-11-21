import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const welcomeRoutes = Router();

welcomeRoutes.get('/welcome', (_, res) => {
  res.render('welcome.njk');
});

welcomeRoutes.post('/welcome', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'welcome');

  res.redirect(`/${nextRoute}`);
});

export { welcomeRoutes };
