'use client'
import { useRouter } from 'next/navigation'

export default function Poll() {
  const router = useRouter()
  if (typeof window !== 'undefined') router.push('/')
  return <div />
}
