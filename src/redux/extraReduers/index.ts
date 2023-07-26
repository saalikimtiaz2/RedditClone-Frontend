import { AuthStateInterface } from 'interfaces/authSliceInterfaces'
import { toast } from 'react-toastify'

export const pendingAuthState = (state: AuthStateInterface) => {
  state.loading = true
  state.error = null
  state.success = false
}

export const rejectedAuthState = (state: AuthStateInterface, action: any) => {
  state.error = action.payload
  state.loading = false
  state.success = false
  toast.error(action.payload.data.message)
}
