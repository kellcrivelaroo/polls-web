import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { pubEnv } from '../env.public'

const useWebsocket = ({ pollId }: { pollId: string }) => {
  const [connected, setConnected] = useState(false)
  const queryClient = useQueryClient()

  useEffect(() => {
    const websocket = new WebSocket(`${pubEnv.WS_URL}/polls/${pollId}/results`)
    websocket.onopen = () => {
      console.log('conected')
      setConnected(true)
    }
    websocket.onmessage = () => {
      const queryKey = [pollId]
      queryClient.invalidateQueries({ queryKey })
    }

    return () => {
      websocket.close()
    }
  }, [queryClient, pollId])

  return { connected }
}

export default useWebsocket
