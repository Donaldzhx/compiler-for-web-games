'use strict';

export const splitter = {
    'START_TAG': '/*nomangle*/',
    'END_TAG': '/*/nomangle*/',
    'split': (s, start) => {
        start = start || 0;

        const res = [];
        s.split(splitter.START_TAG).forEach((component, i) => {
            let spl = component.split(splitter.END_TAG);
            if(i > 0){
                res.push({
                    'content': spl[0],
                    'isString': true
                });
                res.push({
                    'content': spl[1],
                    'isString': false
                });
            }else{
                res.push({
                    'content': spl[0],
                    'isString': false
                });
            }
        });
        return res;
    },
    'join': (components) => {
        return components.map((component) => {
            if(component.isString){
                return splitter.START_TAG + component.content + splitter.END_TAG;
            }else{
                return component.content;
            }
        }).join('');
    }
};