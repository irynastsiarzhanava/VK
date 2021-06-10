/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
  constructor({ small, shift, code }) {
    this.small = small;
    this.shift = shift;
    this.code = code;
    this.isFnKey = Boolean(code.match(/Control|Alt|Meta|Space|Arrow|Shift|Tab|Caps|Enter|Backspace/));
    if (shift && shift.match(/[^a-zA-Zа-яА-Я0-9ёЁ]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    }
    this.letter = create('div', 'letter', small);
    this.div = create('div', 'keyboard_key', [this.sub, this.letter], null, ['code', this.code],
      this.isFnKey ? ['fn', 'true'] : ['fn', 'false']);
  }
}
