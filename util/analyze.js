'use strict';

const config = require('./config');

module.exports = (source) => {
    const wordList = cleanString(source)
        .split(' ')
        .filter(w => {
            return w.length >= 2 && /^[a-z]/i.test(w);
        })
        .filter(w => {
            return config.JS_KEYWORDS.indexOf(w) === -1;
        })
        .filter(w => {
            return config.JS_API.indexOf(w) === -1;
        })
        .filter(w => {
            return config.JS_SKIP.indexOf(w) === -1;
        });

    const counts = countList(wordList).sort((a, b) => {
        return a.word.length * a.count - b.word.length * b.count;
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
    // Eliminate comments
    s = s.replace(/\/\/.*\n/g, '\n');

    // Eliminate strings
    s = s.replace(/'.*'/g, ' ');
    s = s.replace(/".*"/g, ' ');

    // Eliminate RGB values
    s = s.replace(/#[0-9a-f]{6}/ig, ' ');
    s = s.replace(/#[0-9a-f]{3}/ig, ' ');

    // Eliminate all the non-word stuff
    s = s.replace(/[^0-9a-f]+/ig, ' ');

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
