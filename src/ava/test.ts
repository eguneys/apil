import test from 'ava';

import { allChapters } from '../study';

test('study', t => {

  return allChapters('Wv6ppMmp').then(_ => {
    t.is(typeof _, 'string');
  });
  
});
