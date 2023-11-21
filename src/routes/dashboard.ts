import { Router } from 'express';
import { getCurrentStateMachine } from '../state-machines/getCurrentStateMachine';
import { getNextState } from '../state-machines/getNextState';

const dashboardRoutes = Router();

dashboardRoutes.get('/dashboard', (_, res) => {
  res.render('dashboard.njk');
});

dashboardRoutes.post('/dashboard', (_, res) => {
  const stateMachine = getCurrentStateMachine();

  const nextRoute = getNextState(stateMachine, 'dashboard');

  res.redirect(`/${nextRoute}`);
});

export { dashboardRoutes };
