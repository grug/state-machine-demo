import { app } from './app';
import { consentRoutes } from './routes/consent';
import { dashboardRoutes } from './routes/dashboard';
import { loginRoutes } from './routes/login';
import { pisRoutes } from './routes/pis';
import { registerRoutes } from './routes/register';
import { thankYouRoutes } from './routes/thankYou';
import { verifyEmailRoutes } from './routes/verifyEmail';
import { welcomeRoutes } from './routes/welcome';

app.get('/', (_, res) => {
  res.render('index.njk');
});

app.post('/', (_, res) => {
  res.redirect('/welcome');
});

app.use(welcomeRoutes);
app.use(consentRoutes);
app.use(dashboardRoutes);
app.use(loginRoutes);
app.use(pisRoutes);
app.use(registerRoutes);
app.use(thankYouRoutes);
app.use(verifyEmailRoutes);

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
