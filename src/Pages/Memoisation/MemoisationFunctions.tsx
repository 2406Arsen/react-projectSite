import { useState, useEffect, useCallback } from 'react'


const MemoisationFunctions = () => {
    const [counter, setCounter] = useState(0)

    const greeting = useCallback(() => {
        setCounter((prev) => prev += 1)
        console.log('hi');
    }, [])

    useEffect(() => {
        greeting()

    }, [greeting])

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            maxWidth: '500px',
            alignItems: 'center',
            gridRowGap: '20px',
            backgroundColor: "gold",
            minHeight: '400px'
        }}>
            <button
                onClick={() => setCounter((prev) => prev += 1)}
            >
                counter {counter}
            </button>

        </div>

    )
}

export default MemoisationFunctions