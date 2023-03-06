import Authorized from './auth.js';
import * as lit from './types.js';
import xhr from './xhr.js';

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
