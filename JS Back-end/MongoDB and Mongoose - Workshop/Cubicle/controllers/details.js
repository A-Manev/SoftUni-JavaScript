module.exports = {
    details: async (req, res) => {
        const cube = await req.storage.getById(req.params.id);

        if (cube == undefined) {
            res.redirect('/404');
        } else {
            console.log(cube);
            const ctx = {
                title: 'Cubicle',
                cube
            };
            res.render('details', ctx);
        }
    },
    async attach(req, res) {
        const cube = await req.storage.getById(req.params.id);
        const accessories = await req.storage.getAllAccessories((cube.accessories || []).map(a => a._id));

        res.render('attach', {
            title: 'Attach Stickers',
            cube,
            accessories,
        });
    },
    async attachPost(req, res) {
        const cubeId = req.params.cubeId;
        const stickerId = req.body.accessory;

        await req.storage.attachSticker(cubeId, stickerId);

        res.redirect(`/details/${cubeId}`);
    }
};