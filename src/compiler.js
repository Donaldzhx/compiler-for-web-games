'use strict';
const run = (func)=> {
    const tasks = require('./tasks');  // get the tasks in the global scope
    const Runner = require('./tasks/runner');
    const rootTask = func(tasks);
    const runner = new Runner(rootTask);

    runner.run().catch(err => {
        console.error(err);
    });
};

export default run;


