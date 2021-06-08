/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
  constructor({ small, shift, code }) {
    this.small = small;
    this.shift = shift;
    this.code = code;
    this.isFnKey = Boolean(small.match(/control | arr | option | command | &#8679 | &#8677 | &#9003 | &#8682 /));
    if (shift && shift.match(/[^a-zA-Zа-яА-Я0-9ёЁ]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    }
    this.letter = create('div', 'letter', this.small);
    this.div = create('div', 'keyboard_key', [this.sub, this.letter], null, ['code', this.code], []);
  }
}
