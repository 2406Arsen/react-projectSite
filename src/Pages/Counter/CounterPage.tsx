import { useDispatch, useSelector } from "react-redux"
import { counterDecrementAction, counterIncrementAction } from "../../redux/counter/actions"
// import { RootState } from "../../redux/store"

const CounterPage = () => {

    const dispatch = useDispatch()

    const { count } = useSelector((state: any) => state.counter)


    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <div>
                <p>count: {count}</p>
                <br />
                <br />
                <button onClick={() => dispatch(counterIncrementAction(15))}>Increment</button>
                <br />
                <br />
                <button onClick={() => dispatch(counterDecrementAction(5))}>Decrement</button>
            </div>

        </div >
    )
}

export default CounterPage