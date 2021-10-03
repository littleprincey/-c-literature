import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'


const rootUrl = '/api/v1/books'

export function retrieveBooks () {
  // console.log("Data coming up from base")
  return request.get(rootUrl)
  .then(res => res.body)
    
}
