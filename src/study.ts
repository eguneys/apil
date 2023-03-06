import Authorized from './auth.js';
import * as lit from './types.js';

export default class StudyApi extends Authorized {

  static make = (auth: lit.Authorization) => new StudyApi(auth);
  
  constructor(auth: lit.Authorization) {
    super(auth);
  }
  
  allChapters(studyId: string) {
    return this.text(`/api/study/${studyId}.pgn`);
  }

  oneChapter(studyId: string, chapterId: string) {
    return this.text(`/study/${studyId}/${chapterId}.pgn`);
  }
}
