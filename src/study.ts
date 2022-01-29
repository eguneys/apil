import Authorized from './auth';
import * as lit from './types';

export default class StudyApi extends Authorized {

  static make = (auth: lit.Authorization) => new StudyApi(auth);
  
  constructor(auth: lit.Authorization) {
    super(auth);
  }
  
  allChapters(studyId: string) {
    return this.text(`/api/study/${studyId}.pgn`);
  }

  oneChapter(studyId: string, chapterId: string) {
    return this.text(`/api/study/${studyId}/${chapterId}.pgn`);
  }
}
