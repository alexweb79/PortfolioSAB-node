module.exports.getIndex = function(req, res) {
    res.render('pages/index', { title: 'Главная страница' });
}