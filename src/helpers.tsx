import { toast, ToastOptions } from 'react-toastify'

export const handleErrors = (
  error: any,
  defaultMessage?: string,
  options?: ToastOptions,
) => {
  const errorStatus = error?.status || undefined
  let errMsgs = []
  if (errorStatus) {
    if (errorStatus === 400) {
      errMsgs.push(
        'Login information type incorrect. Please try refreshing the page and signing up again',
      )
    }
  }
  if (typeof error === 'string') {
    errMsgs.push(error)
  }
  if (errMsgs.length > 0) {
    errMsgs.forEach((msg) => {
      toast.error(msg || 'Unknown error')
    })
  } else {
    toast.error(defaultMessage || 'Unknown error')
  }
}

export const handleSuccess = (defaultMessage?: string) => {
  toast.success(defaultMessage)
}
