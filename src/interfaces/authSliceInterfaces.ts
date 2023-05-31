export interface userData {
  name: string
  email: string
}

export interface AuthStateInterface {
  isAuth: boolean
  loading: boolean
  data: userData | null
  error: string | null
}
