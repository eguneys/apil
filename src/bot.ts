import Authorized from './auth';
import * as at from './types';

export default class Bot extends Authorized {

  constructor(auth: at.Authorization) {
    super(auth);
  }
  
  incomingEvents() {
    return this.ndjson<at.IncomingEvent>('/api/stream/event');
  };

  gameState(gameId: string) {
    return this.ndjson<at.IncomingGameState>(`/api/bot/game/stream/${gameId}`);
  }

  move(gameId: string, move: at.Uci, offeringDraw?: boolean) {
    return this.xhr(`/api/bot/game/${gameId}/move/${move}?offeringDraw=${offeringDraw||false}`);
  }
  
}
