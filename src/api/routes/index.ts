import express, {Express, Router} from 'express';
import films from './FilmsRoute';

const routes: Router = express.Router();

routes.use('/films', films);

export default routes;