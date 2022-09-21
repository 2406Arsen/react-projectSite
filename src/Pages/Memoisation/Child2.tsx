import { memo, useContext } from "react"
import { MemoisationChildContext } from "./MemoContext"

const Child2 = memo(() => {

  const { childCounter } = useContext(MemoisationChildContext)!

  return (
    <div style={{ backgroundColor: 'green' }}>Child2 counter {childCounter}</div>
  )
})
export default Child2