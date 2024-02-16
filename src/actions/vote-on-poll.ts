import { api } from '@/lib/axios'

import { pubEnv } from '../app/env.public'

interface VoteOnPollResponse {
  data: {
    vote: {
      id: number
    }
  }
}

interface VoteOnPollProps {
  pollId: string
  optionId: string
}

export async function voteOnPoll({ pollId, optionId }: VoteOnPollProps) {
  const body = {
    pollOptionId: optionId,
  }
  try {
    const {
      data: { vote },
    }: VoteOnPollResponse = await api.post(
      `${pubEnv.API_URL}/polls/${pollId}/votes`,
      body,
    )
    return vote.id
  } catch (error) {
    return 0
  }
}
