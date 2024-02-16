import axios from 'axios'

import { pubEnv } from '@/app/env.public'

export const api = axios.create({
  baseURL: pubEnv.API_URL,
  withCredentials: true,
})
