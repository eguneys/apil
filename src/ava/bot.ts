import test from 'ava';
import { token } from './_conf';
import Bot from '../bot';

let bot = new Bot({ token });

test.cb.failing('listen', t => {

  bot.incomingEvents().then(events =>
    events.response.on('data', e => {
      console.log(e);
      t.end();
    }));

  setTimeout(() => t.end('timeout'), 5000);
  
});
