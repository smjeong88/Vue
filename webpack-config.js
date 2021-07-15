const path = require(id='path');
module.exports = {
    entry:{
        app:path.join(__dirname,'src/main.js'),
    },
    modules:{

    },
    plugins:[],
    output:{
        filename : 'app.js',
        path : path.join(__dirname,'dist'),
    },
};