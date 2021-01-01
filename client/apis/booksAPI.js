import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'

const rootUrl = '/api/v1/books'

export function retrieveBooks () {
  return request.get(rootUrl)
    .then(res => res.body)
}
