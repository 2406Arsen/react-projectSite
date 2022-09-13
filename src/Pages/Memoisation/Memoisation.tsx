import { useState, useMemo } from 'react'
import Button from './Button';
import ChildComponent from './ChildComponent';

const createUser = (firstName: string, lastName: string) => {
    console.log('log');

    return { firstName, lastName }
}

const Memoisation = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [counter, setCounter] = useState(0)
    const [childCounter, setChildCounter] = useState(0)

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
                setCounter={setCounter}
                setChildCounter={setChildCounter}
            />
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

            <ChildComponent childCounter={childCounter} />
        </div>

    )
}

export default Memoisation