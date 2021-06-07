module.exports = {
    createAccessory(req, res) {
        res.render('createAccessory', { title: 'Create Accessory' });
    },
    async accessoryPost(req, res) {
        const accessory = {
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
        };

        try {
            await req.storage.createAccessory(accessory);
        } catch (error) {
            if (error.name == 'ValidationError') {
                return res.render('create', { title: 'Create Cube', error: 'All field are required.' });
            }
        }

        res.redirect('/');
    }
};