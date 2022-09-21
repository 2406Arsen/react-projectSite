import { FC, memo, useContext } from 'react'
import { MemoisationChildContext, MemoisationContext } from './MemoContext'

interface IButtonProps {
    setCounter: React.Dispatch<React.SetStateAction<number>>
    // setChildCounter: React.Dispatch<React.SetStateAction<number>>
}

const Button: FC<IButtonProps> = memo(({
    // setChildCounter,
    setCounter }) => {
    const { setChildCounter } = useContext(MemoisationChildContext)!

    return (
        <div style={{ backgroundColor: 'aqua', display: "flex", flexDirection: "column", gridGap: '20px' }}>
            <button
                onClick={() => setCounter((prev) => prev += 1)}
            >
                click counter
            </button>
            <button
                onClick={() => setChildCounter((prev) => prev += 1)}
            >
                click child counter
            </button>
        </div>
    )
})

export default Button