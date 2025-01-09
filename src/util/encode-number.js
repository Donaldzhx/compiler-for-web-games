'use strict'

export default (num) => {
    let alphabet = '$_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newBase = alphabet.length;
    let digits = Math.floor(Math.log(num) / Math.log(newBase)) + 1;

    let res = '';
    for(let i = digits - 1; i >= 0; i--) {
        let multiple = Math.pow(newBase,i);
        let occ = Math.floor(num/multiple);
        res += alphabet.charAt(occ);
        num -= occ * multiple;
    }
    return res;
}