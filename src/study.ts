import xhr from './xhr';

export function allChapters(studyId: string) {
  return xhr.text(`/study/${studyId}.pgn`);
}
