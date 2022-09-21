import { createContext, useCallback, useMemo, useState } from "react"
import Memoisation from "./Memoisation"

interface IMemoisationContext {
    // childCounter: number,
    // setChildCounter: React.Dispatch<React.SetStateAction<number>>
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
}
interface IMemoisationChildContext {
    childCounter: number,
    setChildCounter: React.Dispatch<React.SetStateAction<number>>
    // counter: number,
    // setCounter: React.Dispatch<React.SetStateAction<number>>
}

export const MemoisationContext = createContext<IMemoisationContext | null>(null)
export const MemoisationChildContext = createContext<IMemoisationChildContext | null>(null)

const MemoContext = () => {
    const [childCounter, setChildCounter] = useState(0)
    const [counter, setCounter] = useState(0)
    // const childCounterChanger = useMemo(() => ({ childCounter, setChildCounter }), [childCounter])

    const contextValues = useMemo(() => ({
        // childCounter: childCounterChanger.childCounter,
        // setChildCounter: childCounterChanger.setChildCounter,
        counter,
        setCounter,
    }), [counter])

    const childContextValues = useMemo(() => ({
        childCounter,
        setChildCounter,
        // counter,
        // setCounter,
    }), [childCounter])

    return (
        <MemoisationContext.Provider value={contextValues}>
            <MemoisationChildContext.Provider value={childContextValues}>
                <Memoisation />
            </MemoisationChildContext.Provider>
        </MemoisationContext.Provider>
    )
}

export default MemoContext