import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import SelfClient from "../Clients/SelfClient"

const ClientPage = () => {
    const { currentClient } = useSelector((state: RootState) => state.clients)
    return (
        <SelfClient userCom={currentClient} />
    )
}

export default ClientPage