'use server'
import { api } from '@/lib/axios'

import { pubEnv } from '../app/env.public'

interface PollResponse {
  data: {
    poll: {
      id: string
      title: string
      options: {
        id: string
        title: string
        votes: number
      }[]
    }
  }
}

interface GetPollProps {
  pollId: string
}

export async function getPoll({ pollId }: GetPollProps) {
  const { data }: PollResponse = await api.get(
    `${pubEnv.API_URL}/polls/${pollId}`,
  )

  let maxVotes = 1
  if (data) {
    data.poll.options.forEach(({ votes }) => {
      if (votes > maxVotes) {
        maxVotes = votes
      }
    })
  }
  return {
    ...data.poll,
    maxVotes,
  }
}
