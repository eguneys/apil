import * as lit from './types';
import stream from './stream';
import xhr from './xhr';

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

  ndjson<A>(endpoint: string, opts?: any) {
    stream.ndjson<A>(endpoint, {
      headers: this.authHeaders,
      ...opts
    })
  }

  xhr(endpoint: string, opts?: any) {
    xhr.json(endpoint, {
      headers: this.authHeaders,
      ...opts
    });
  }
  
}