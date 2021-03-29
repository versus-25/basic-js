const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(strEncrypt, keyEncrypt) {
    let str = strEncrypt.toUpperCase();
    let key = keyEncrypt.toUpperCase();
    let listChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cntr = 0;
    let lenKey = str.split('').filter((x) => listChar.includes(x)).length
    while (lenKey > key.length) {
      if (cntr === key.length) cntr = 0;
      key += key[cntr];
      cntr++;
    }

    let res = [];
    let x_key = 0;
    let x_str = 0;
    while (x_str < str.length) {
      let char = str[x_str]
      if (!listChar.includes(char)) {
        x_key--;
        res.push(char);
      } else {
        let y = listChar.indexOf(key[x_key]);
        let x = listChar.indexOf(char);
        res.push(listChar[(y + x) % 26])
      }
      x_key++;
      x_str++;
    }
    return this.direct ? res.join('') : res.reverse.join('')
  }
  decrypt(strDecrypt, keyDecrypt) {
    let str = strDecrypt.toUpperCase();
    let key = keyDecrypt.toUpperCase();
    let listChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cntr = 0;
    let lenKey = str.split('').filter((x) => listChar.includes(x)).length
    while (lenKey > key.length) {
      if (cntr === key.length) cntr = 0;
      key += key[cntr];
      cntr++;
    }

    let res = [];
    let x_key = 0;
    let x_str = 0;
    while (x_str < str.length) {
      let char = str[x_str]
      if (!listChar.includes(char)) {
        x_key--;
        res.push(char);
      } else {
        let y = listChar.indexOf(key[x_key]);
        let x = listChar.indexOf(char);
        res.push(listChar[(x + 26 - y) % 26])
      }
      x_key++;
      x_str++;
    }
    // console.log(
    //   [strDecrypt, 
    //   keyDecrypt,
    //   this.direct ? res.join('') : res.reverse.join('')]
    // )
    return this.direct ? res.join('') : res.reverse.join('')
  }
}

module.exports = VigenereCipheringMachine;
