import { useState, useMemo, useContext } from 'react'
import Button from './Button';
import ChildComponent from './ChildComponent';
import { MemoisationContext } from './MemoContext';

const createUser = (firstName: string, lastName: string) => {
    console.log('log');
    return { firstName, lastName }
}

const Memoisation = () => {
    const { counter, setCounter } = useContext(MemoisationContext)!
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const user = useMemo(() => JSON.stringify(createUser(firstName, lastName)), [firstName, lastName])
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
            <Button
                // setChildCounter={setChildCounter}
                setCounter={setCounter} />
            <input
                type="text"
                placeholder="type first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="type last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <p>{user}</p>

            <span> counter {counter}</span>

            <ChildComponent />
        </div>

    )
}

export default Memoisation