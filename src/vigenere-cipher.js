const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
  this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect!');
    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect!');
    return this.process(encryptedMessage, key, 'decrypt');
  }
  process(text, key, mode) {
    const result = [];
    let keyIndex = 0;
    for (let char of text.toUpperCase()) {
      if (char >= 'A' && char <= 'Z') {
      const textCode = char.charCodeAt(0) - 65;
      const keyCode = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - 65;
      let processedCode;
        if (mode === 'encrypt') {
          processedCode = (textCode + keyCode) % 26;
        } else {
          processedCode = (textCode - keyCode) % 26;
        }
        result.push(String.fromCharCode(processedCode + 65));
        keyIndex++;
      } else {
        result.push(char);
      }
    }
    return result.join('');
}
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
