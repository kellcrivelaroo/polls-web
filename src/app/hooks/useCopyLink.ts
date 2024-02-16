import { toast } from 'sonner'

interface useCopyLinkProps {
  link: string
}

const useCopyLink = ({ link }: useCopyLinkProps) => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link || '')
      toast.success('Link copiado com sucesso!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
      toast.error('Erro ao copiar o link.')
    }
  }
  return { copyLink }
}

export default useCopyLink
