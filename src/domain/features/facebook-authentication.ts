import { type AccessToken } from '@/domain/models'
import { type AuthenticationError } from '@/domain/errors'

export interface FaceBookAuthentication {
  perform: (token: FaceBookAuthentication.Params) => Promise<FaceBookAuthentication.Result>
}

namespace FaceBookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
