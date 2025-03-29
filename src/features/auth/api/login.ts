/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from '@/lib/axios'

import { LoginDto } from '../schema'

export const loginWithEmailAndPassword = (data: LoginDto): Promise<any> =>{
    return axios.post('/auth/login', data)
}