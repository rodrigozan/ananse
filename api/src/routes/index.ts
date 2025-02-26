import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const authMiddleware = new AuthMiddleware();

const authenticate = authMiddleware.authenticate.bind(authMiddleware);

export { default as auth } from './AuthRoute'
export { default as user } from './UserRoute'
export { default as character } from './CharacterRoute'
export { default as event } from './EventRoute'
export { default as scenario } from './ScenarioRoute'
export { default as serie } from './SerieRoute'
export { default as book } from './BookRoute'



export { authenticate };

