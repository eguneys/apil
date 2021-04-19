import Authorized from './auth';
import * as at from './types';
import xhr from './xhr';

export default class Bot extends Authorized {

  constructor(auth: at.Authorization) {
    super(auth);
  }
  
  incomingEvents() {
    return this.ndjson<at.IncomingEvent>('/api/stream/event');
  };

  gameState(gameId: at.GameId) {
    return this.ndjson<at.IncomingGameState>(`/api/bot/game/stream/${gameId}`);
  }

  move(gameId: at.GameId, move: at.Uci, offeringDraw?: boolean) {
    return this.xhr(`/api/bot/game/${gameId}/move/${move}?offeringDraw=${offeringDraw||false}`, {
      method: 'POST'
    });
  }

  chat(gameId: at.GameId, room: at.ChatRoom, text: string) {
    return this.xhr(`/api/bot/game/${gameId}/chat`, {
      method: 'POST',
      body: xhr.form({
        room,
        text
      })
    });
  }
  
}
