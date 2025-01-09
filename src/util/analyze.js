'use strict';

import protectedNames from '../../data/protected-names';
import {splitter} from './split';

export default (source, force, skip, minLength) => {
    minLength = minLength || 2;
    const protectedMap = {};
    protectedNames.dom.concat(protectedNames.keywords).forEach(name => {
        protectedMap[name] = true;
    });
    const wordList = cleanString(source)
        .split(' ')
        .filter(w => {
            return w.length >= minLength && /^[$_a-z]/i.test(w);
        })
        .filter(w => {
            return !protectedMap[w] || force.indexOf(w) >= 0;
        })
        .filter(w => {
            return skip.indexOf(w) === -1;
        })

    const counts = countList(wordList).sort((a, b) => {
        return a.count - b.count;
    }).map(w => {
        return {
            "word": w.word,
            "characters": w.word.length * w.count
        };
    });

    return counts.map(w => {
        return w.word;
    }).reverse();
};

function cleanString(s) {
    s = splitter.join(splitter.split(s));

    // Eliminate comments
    s = s.replace(/\/\/.*/g, '')

    // Eliminate strings
    s = s.replace(/'.*'/g, ' ');
    s = s.replace(/".*"/g, ' ');

    // Eliminate RGB values
    s = s.replace(/#[0-9a-f]{6}/ig, ' ');
    s = s.replace(/#[0-9a-f]{3}/ig, ' ');

    // Eliminate all the non-word stuff
    s = s.replace(/[^0-9a-f_$]+/ig, ' ');

    return s;
}

function countList(wordList) {
    const map = {};
    const list = [];
    wordList.forEach(w => {
        if (!map[w]) {
            map[w] = {
                "word": w,
                "count": 0
            };
            list.push(map[w]);
        }
        map[w].count++;
    });
    return list;
}
