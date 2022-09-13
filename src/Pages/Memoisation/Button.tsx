import { FC } from 'react'

interface IButtonProps {
    setCounter: React.Dispatch<React.SetStateAction<number>>
    setChildCounter: React.Dispatch<React.SetStateAction<number>>
}

const Button: FC<IButtonProps> = ({ setCounter, setChildCounter }) => {
    return (
        <>
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
        </>
    )
}

export default Button