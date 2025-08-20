import { useEffect } from 'react'

/**
 * useKeyPress - reusable hook to handle key presses
 *
 * @param targetKeys - single key or array of keys to listen for
 * @param handler - callback function to run on key press
 */
const useKeyPress = (
  targetKeys: string | string[],
  handler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const keys = Array.isArray(targetKeys) ? targetKeys : [targetKeys]

    const listener = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        handler(event)
      }
    }

    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [targetKeys, handler])
}

export default useKeyPress
