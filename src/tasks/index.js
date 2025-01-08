'use strict';

const taskMap = {
    'loadFiles': require('./loadFiles'),
    'parallel': require('./parallel'),
    'sequence': require('./sequence'),
    'log': require('./log'),
    'output': require('./output'),
    'macro': require('./macro'),
    'concat': require('./concat'),
    'mangle': require('./mangle'),
    'es6ify': require('./es6ify'),
    'uglifyJS': require('./uglifyJS'),
    'uglifyES': require('./uglifyES'),
    'terser': require('./terser'),
    'uglifyCSS': require('./uglifyCSS'),
    'uglifyHTML': require('./uglifyHTML'),
    'zip': require('./zip'),
    'advzip': require('./advzip'),
    'combine': require('./combine'),
    'constants': require('./constants'),
    'inject': require('./inject'),
    'checkSize': require('./checkSize'),
    'labels': require('./labels'),
    'watch': require('./watch'),
    'block': require('./block'),
    'ect': require('./ect'),
    'longerNames': require('./longerNames'),
    'roadroller': require('./roadroller')
};

function builderFunction(functionName){
    const cls = taskMap[functionName];
    return function(){
        return new cls(...arguments);
    };
}

for(let functionName in taskMap){
    module.exports[functionName] = builderFunction(functionName);
}