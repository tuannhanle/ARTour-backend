const { use } = require('./routes/index');

var indexRouter = require('./routes/index');
var trelleborgRouter = require('./routes/trelleborg');
var projectRouter = require('./routes/project');
var signinRouter = require('./routes/signin');

const wit = require('./wit-router');


module.exports = {

    use: (app) => {
        app.use('/', indexRouter);
        // app.use('/trelleborg', trelleborgRouter);
        // app.use('/project', projectRouter);
        // app.use('/signin',signinRouter);
        app.use('/wit', wit)



    }
}