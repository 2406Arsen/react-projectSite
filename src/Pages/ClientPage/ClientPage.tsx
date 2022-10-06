import { useSelector } from "react-redux"
import { RootState } from "../../store/index"
import SelfClient from "../Clients/SelfClient"

type TFn = <T, V>(argument: T, value: V) => [T, V]


const fn1: TFn = (argument, value) => {
    return [argument, value]
}

fn1(5, '8')
fn1('hello', 8)
fn1(false, null)

const ClientPage = () => {


    const { currentClient } = useSelector((state: RootState) => state.clients)

    return (
        <div className="clientPage">
            <SelfClient userCom={currentClient} />
        </div>
    )
}

export default ClientPage