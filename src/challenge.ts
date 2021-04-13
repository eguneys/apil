import Authorized from './auth';
import * as lit from './types';
import xhr from './xhr';

export default class Challenge extends Authorized {

  constructor(auth: lit.Authorization) {
    super(auth);
  }

  accept(challengeId: lit.ChallengeId) {
    return this.xhr(`/api/challenge/${challengeId}/accept`, {
      method: 'POST'
    });
  }

  decline(challengeId: lit.ChallengeId, reason?: lit.DeclineReason) {
    return this.xhr(`/api/challenge/${challengeId}/decline`, {
      method: 'POST',
      body: xhr.form({
        reason
      })
    });
  }  
  
}
