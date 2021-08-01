import {prism} from '@theatre/dataverse'

const mousePositionD = prism(() => {
  const [pos, setPos] = prism.state<MouseEvent | null>('pos', null)
  prism.effect(
    'setupListeners',
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        setPos(e)
      }
      document.addEventListener('mousemove', handleMouseMove)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    },
    [],
  )

  return pos
})

export default mousePositionD
