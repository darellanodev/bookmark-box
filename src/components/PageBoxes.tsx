import Box from './Box'
import { boxes } from '../data/boxes'

export default function PageBoxes() {
  return (
    <>
      {boxes.map((box) => (
        <Box key={box.title} box={box} />
      ))}
    </>
  )
}
