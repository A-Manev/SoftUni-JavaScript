const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');


router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register',
    isGuest(),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.').bail()
        .isAlphanumeric().withMessage('Username may contain only English letters and digits.'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long.').bail()
        .isAlphanumeric().withMessage('Password may contain only English letters and digits.'),
    body('rePass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords dont\'t match.');
        }

        return true;
    }),
    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
            }

            await req.auth.register(req.body.username, req.body.password);

            res.redirect('/');
        } catch (err) {
            const ctx = {
                errors: err.message.split('/n'),
                userData: {
                    username: req.body.username,
                }
            };

            res.render('register', ctx);
        }
    }
);

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);

        res.redirect('/');
    } catch (err) {
        let errors = [err.message];

        if (err.type == 'credential') {
            errors = ['Incorrect username or password'];
        }

        console.log(errors);
        const ctx = {
            errors,
            userData: {
                username: req.body.username,
            }
        };
        res.render('login', ctx);
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
})

module.exports = router;