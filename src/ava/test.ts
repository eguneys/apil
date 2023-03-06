import test from 'ava';
import { token } from './_conf.js';
import StudyApi from '../study.js';

test('one chapter', t => {

  let api = StudyApi.make({token});
  https://lichess.org/study/VQCFJZjz/gUSwY3Sv 
  return api.oneChapter('VQCFJZjz', 'gUSwY3Sv').then(_ => {
    t.is(typeof _, 'string');
  });

})

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
