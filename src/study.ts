import xhr from './xhr';

export function allChapters(studyId: string) {
  return xhr.text(`/study/${studyId}.pgn`);
}

export function oneChapter(studyId: string, chapterId: string) {
  return xhr.text(`/study/${studyId}/${chapterId}.pgn`);
}
