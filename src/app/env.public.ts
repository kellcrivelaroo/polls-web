import { z } from 'zod'

const envSchema = z.object({
  API_URL: z.string().url(),
  BASE_URL: z.string().url(),
  WS_URL: z.string().url(),
})

const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  WS_URL: process.env.NEXT_PUBLIC_WS_URL,
}

const parsedEnv = envSchema.safeParse(env)

if (!parsedEnv.success) {
  const msg = 'Invalid public enviroment variables'
  console.error(msg, parsedEnv.error.flatten().fieldErrors)

  throw new Error(msg)
}

export const pubEnv = parsedEnv.data
