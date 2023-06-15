export interface userData {
  username: string
  name: string
  email: string
  photo: string
}

export interface SignupCredentialsInterface {
  name: string
  email: string
  password: string
  passwordConfirm: string
  username: string
}

export interface AuthStateInterface {
  isAuth: boolean
  loading: boolean
  data: userData | null
  error: any
}
