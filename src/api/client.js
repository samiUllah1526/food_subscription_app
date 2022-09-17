import { useMutation } from '@tanstack/react-query'
import api from './config'
import ENDPOINTS from './endpoints'

export const useLoginClient = () => {
    return useMutation((body) => api.post(ENDPOINTS.CLIENT.LOGIN, body))
}

export const useRegisterClient = () => {
    return useMutation((body) => api.post(ENDPOINTS.CLIENT.LOGIN, body))
}
