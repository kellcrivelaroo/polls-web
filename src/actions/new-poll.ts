'use server'
import { api } from '@/lib/axios'

import { pubEnv } from '../app/env.public'

interface NewPollBody {
  title: string
  options: string[]
}

interface PollResponse {
  data: {
    pollId: string
  }
}

export async function newPoll(data: NewPollBody) {
  const { data: res }: PollResponse = await api.post(
    `${pubEnv.API_URL}/polls`,
    data,
  )
  return res.pollId
}
