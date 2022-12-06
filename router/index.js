const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware');
const postController = require('../controllers/post-controller')

router.post('/registration',
 body('email').isEmail(),
 body('password').isLength({min: 3, max: 32}),
 userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.changePassword);
router.get('/posts/:id', postController.getPosts);
router.post('/post/:id', postController.addPost);
router.delete('/post/:id', postController.deletePost);


module.exports = router