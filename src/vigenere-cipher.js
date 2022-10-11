const { NotImplementedError } = require('../extensions/index.js');

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
  constructor (direct = true) {
    this.direct = direct;
    this.alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  encrypt(message, key) {
    if (message && key) {
      const mesArr = message.toUpperCase().split('');
      const keyArr = key.toUpperCase().repeat(Math.ceil(message.length/key.length)).split('');
      let newMessage =[];
      
      mesArr.forEach((el, i) => {
        let alph = [...this.alp];

        if (this.alp.indexOf(el)>=0) {
          let shift = this.alp.indexOf(keyArr[i]);
          for (let i=0; i<shift; i++) {
          alph.push(alph.shift());
        }
          const newLet = alph[this.alp.indexOf(el)]
          newMessage.push(newLet)
        } 
        else {
          keyArr.unshift(1)
          newMessage.push(el)
        }
      })
      
      return (this.direct) ? newMessage.join('') : newMessage.reverse().join('')
    } 
    else {
      throw new Error ('Incorrect arguments!')
    }
  }
  
  decrypt(message, key) {
    if (message && key) {
      const mesArr = message.toUpperCase().split('');
      const keyArr = key.toUpperCase().repeat(Math.ceil(message.length/key.length)).split('');
      let newMessage =[];
      
      mesArr.forEach((el, i) => {
        let alph = [...this.alp];

        if (this.alp.indexOf(el)>=0) {
          let shift = this.alp.indexOf(keyArr[i]);
          for (let i=0; i<shift; i++) {
            alph.unshift(alph.pop());
            }
          const newLet = alph[this.alp.indexOf(el)]
          newMessage.push(newLet)
        } 
        else {
          keyArr.unshift(1)
          newMessage.push(el)
        }
      })

      return (this.direct) ? newMessage.join('') : newMessage.reverse().join('')
    } else {
      throw new Error ('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
