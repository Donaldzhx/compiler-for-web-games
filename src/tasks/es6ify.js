'use strict';

import Task from './task';

function undo(s){
    eval(s.replace(/\(([^)]*)\)=>\{/g, 'function($1){')); //jshint ignore:line
}

class Es6ify extends Task {
    constructor(){
        super();
    }

    execute(input) {
        input = input.replace(/\/\/.*/g, '');

        // Change function styles
        input = input.replace(new RegExp('function\\(([^)]*)\\)\\{', 'g'), '($1)=>{');
        input = input.replace(new RegExp('function ([a-z]+)\\(([^)]*)\\)\\{', 'g' ), '$1 = ($2)=>{');

        // Include the eval function

        input = '(' + undo.toString() + ')(' + JSON.stringify(input) + ');';

        return Promise.resolve(input);
    }
}

export default Es6ify;