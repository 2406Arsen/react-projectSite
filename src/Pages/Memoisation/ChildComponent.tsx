import { memo } from 'react'
import Child2 from './Child2'



const ChildComponent = memo(() => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            child
            <Child2 />
        </div>
    )
})

export default ChildComponent