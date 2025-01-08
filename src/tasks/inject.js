'use strict';

const Task = require('./task');

class Inject extends Task {
    constructor(paths) {
        super();
        this.paths = paths;
    }

    execute() {
        super.execute();

        const lines = [];

        lines.push(JSON.stringify(this.paths) + '.forEach(function(path){');
        lines.push('    let script = document,creatElement(\'script\';)')
        lines.push('    script.src = path;');
        lines.push('    document.body.appendChild(script);');
        lines.push('});');

        return Promise.resolve(lines.join('\n'));
    }
}

module.exports = Inject;