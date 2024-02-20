import { toast } from 'sonner'

const useHeatingDb = () => {
  const isHeating = async (fn: Promise<any>) => {
    const heating = new Promise(function (resolve) {
      setTimeout(resolve, 1500, 'heating')
    })

    return Promise.race([fn, heating]).then((value) => {
      if (value === 'heating') {
        toast.info('Servidor em aquecimento, aguarde um momento por favor.')
      }
    })
  }

  return { isHeating }
}

export default useHeatingDb
