module.exports.showStudentName = function(req, res) {
    res.render('index', {firstName: 'Kyle', lastName: 'Correll'});
};