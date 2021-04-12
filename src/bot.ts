import Authorized from './auth';
import * as lit from './types';

export class Bot extends Authorized {

  constructor(auth: lit.Authorization) {
    super(auth);
  }
  
  incomingEvents() {
    return this.ndjson<lit.IncomingEvent>('/api/stream/event');
  };

  gameState(gameId: string) {
    return this.ndjson<lit.GameState>(`/api/bot/game/stream/${gameId}`);
  }

  move(gameId: string, move: string, offeringDraw?: boolean) {
    return this.xhr(`/api/bot/game/${gameId}/move/${move}?offeringDraw=${offeringDraw||false}`);
  }
  
}
