import { useSelector } from "react-redux"
import { RootState } from "../../store/index"
import SelfClient from "../Clients/SelfClient"

const ClientPage = () => {
   

    const { currentClient } = useSelector((state: RootState) => state.clients)


    // const someFn =<T>(argument: T) => {
    //     return argument
    // }

    // const someFnString = (argument: string) => {
    //     return argument
    // }

    return (
        <div className="clientPage">
            <SelfClient userCom={currentClient} />

        </div>
    )
}

export default ClientPage