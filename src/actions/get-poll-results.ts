// 'use server'
import { api } from '@/lib/axios'

import { pubEnv } from '../app/env.public'

interface PollResponse {
  data: any
}

interface GetPollResultsProps {
  pollId: string
}

export async function getPollResults({ pollId }: GetPollResultsProps) {
  const { data }: PollResponse = await api.get(
    `${pubEnv.API_URL}/polls/${pollId}/results`,
  )
  return data
}
