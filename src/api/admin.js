import { useMutation } from '@tanstack/react-query'
import api from './config'
import ENDPOINTS from './endpoints'


export const useAdminLogin = () => 
    useMutation((body) => api.post(ENDPOINTS.ADMIN.LOGIN, body))
