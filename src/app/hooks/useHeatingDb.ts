import { toast } from 'sonner'

const useHeatingDb = () => {
  const isHeating = async (fn: Promise<any>) => {
    const heating = new Promise((resolve) => {
      setTimeout(resolve, 1500, 'heating')
    })

    return Promise.race([fn, heating]).then((value) => {
      if (value === 'heating') {
        toast.info(
          `Servidores em aquecimento. Isso pode levar alguns instantes, aguarde por favor. 😁`,
        )
      }
    })
  }

  return { isHeating }
}

export default useHeatingDb
