import { memo, FC } from 'react'

interface IChildComponentProps {
    childCounter: number
}

const ChildComponent: FC<IChildComponentProps> = memo(({ childCounter }) => {
    return (
        <div>child counter {childCounter}</div>
    )
})

export default ChildComponent