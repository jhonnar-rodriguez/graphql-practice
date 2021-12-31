import { Router } from 'express';
import cors from 'cors';

// Application Routes
import home from './home';

const router = Router();
const apiRoutes = Router();

apiRoutes
  .use(cors());

router
  .use(home)
  .use('/api', apiRoutes);

export default router;
