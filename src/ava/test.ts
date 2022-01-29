import test from 'ava';
import { token } from './_conf';
import StudyApi from '../study';

test('private study', t => {

  let api = StudyApi.make({token});
  
  return api.allChapters('9qpeTu15').then(_ => {
    t.is(typeof _, 'string');
  });

})


test('study', t => {

  let api = StudyApi.make({token});
  
  return api.allChapters('1l75flCp').then(_ => {
    t.is(typeof _, 'string');
  });
  
});
