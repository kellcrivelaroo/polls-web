'use client'
import { useRouter } from 'next/navigation'

export default function Poll() {
  const router = useRouter()
  router.push('/')
  return null
}
