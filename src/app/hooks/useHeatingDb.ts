import { toast } from 'sonner'

const useHeatingDb = () => {
  const isHeating = async (fn: Promise<any>) => {
    const heating = new Promise((resolve) => {
      setTimeout(resolve, 1500, 'heating')
    })

    const heatingTooLong = new Promise((resolve) => {
      setTimeout(resolve, 7000, 'heatingTooLong')
    })

    return Promise.race([fn, heating]).then((value) => {
      if (value === 'heating') {
        toast.info(
          `Servidores em aquecimento. Isso pode levar alguns instantes, aguarde por favor. 😁`,
        )
        Promise.race([fn, heatingTooLong]).then((value) => {
          if (value === 'heatingTooLong') {
            toast.info(
              `Sim.. O servidor tem sua partida a frio quase 'congelando'... 🥶 Mas vai dar tudo certo, confia!`,
            )
          }
        })
      }
    })
  }

  return { isHeating }
}

export default useHeatingDb
