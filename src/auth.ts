import * as lit from './types.js';
import stream from './stream.js';
import xhr from './xhr.js';
import { StreamingResponse } from 'rhx';

export const authHeaders = (auth: lit.Authorization) => ({
  'Authorization': `Bearer ${auth.token}`
});

export default class Authorized {
  
  auth: lit.Authorization
  authHeaders: any
  
  constructor(auth: lit.Authorization) {
    this.auth = auth;
    this.authHeaders = authHeaders(this.auth);
  }

  ndjson<A>(endpoint: string, opts?: any): Promise<StreamingResponse> {
    return stream.ndjson<A>(endpoint, {
      headers: this.authHeaders,
      ...opts
    })
  }

  xhr(endpoint: string, opts?: any) {
    return xhr.json(endpoint, {
      headers: this.authHeaders,
      ...opts
    });
  }

  text(endpoint: string, opts?: any) {
    return xhr.text(endpoint, {
      headers: this.authHeaders,
      ...opts
    });
  }
  
}
