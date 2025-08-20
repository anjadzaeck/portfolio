import useKeyPress from 'hooks/useKeyPress'
import { CloseBtn, Overlay } from './styled'
import { X } from 'lucide-react'

interface Props {
  src: string | null
  onClose: () => void
}

const ImagePreview = ({ src, onClose }: Props) => {
  const handleClose = () => {
    onClose()
  }

  useKeyPress('Escape', handleClose)

  if (!src) return null

  return (
    <Overlay id={'preview-overlay'}>
      <img src={src} alt="preview" />
      <CloseBtn onClick={handleClose}>
        <X />
      </CloseBtn>
    </Overlay>
  )
}

export default ImagePreview
