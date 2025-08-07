import Example from 'assets/example.png'
import { Wrapper } from './styled'

const PageFlipper = () => {
  return (
    <Wrapper>
      <img src={Example} alt={'example'} />
      <img src={Example} alt={'example'} />
    </Wrapper>
  )
}

export default PageFlipper
