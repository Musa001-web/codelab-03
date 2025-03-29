/* eslint-disable @typescript-eslint/no-explicit-any */

import { axios } from '@/lib/axios'

import { RegisterDto } from '../schema'

export const registerWithEmailAndPassword = async (data: RegisterDto): Promise<any> =>{
    return axios.post('/auth/register', data)
}