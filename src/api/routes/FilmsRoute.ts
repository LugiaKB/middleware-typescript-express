import {NextFunction, Request, Response, Router} from 'express';
import * as controller from "../controllers/FilmsController";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const films = await controller.getAll();
    res.send(films);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const film = await controller.getById(parseInt(req.params.id));
        res.send(film);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const film = await controller.create(req.body);
    res.status(201).send(film);
});

router.put('/:id', async (req: Request, res: Response) => {
    const film = await controller.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(film);
});

router.delete('/:id', (req: Request, res: Response) => {
    controller.deleteById(parseInt(req.params.id));
    res.status(204).send();
})

export default router;