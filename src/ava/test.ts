import test from 'ava';
import { token } from './_conf';
import StudyApi from '../study';

test('study', t => {

  let api = StudyApi.make({token});
  
  return api.allChapters('1l75flCp').then(_ => {
    t.is(typeof _, 'string');
  });
  
});
