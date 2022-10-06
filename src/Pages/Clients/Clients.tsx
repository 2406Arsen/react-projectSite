// import { ISelfClient } from '../../module';
import { useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUsersData } from '../../Api/Api'
// import { RootState } from '../../store'
import { setAllClients } from '../../store/features/clients/clientsSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import SelfClient from './SelfClient'

const Clients = () => {
  const dispatch = useAppDispatch()
  // const { clients } = useSelector((state: RootState) => state.clients)
  const { clients, } = useAppSelector(({ clients }) => ({
    clients: clients.clients,
    currentClient: clients.currentClient
  }), shallowEqual)

  //? const dataComments: ISelfClient[] = JSON.parse(localStorage.getItem('comments')!);

  const getAllClients = useCallback(async () => {
    const clients = await getUsersData()
    dispatch(setAllClients(clients))
  }, [dispatch])

  useEffect(() => {
    getAllClients()
  }, [getAllClients])

  return (
    <div className="page">
      <div className="Clients">
        <span className='ClientsTitle'>Happy Clients about us</span>
        <div className="clientsComs">
          {clients.map((user) =>
            <SelfClient userCom={user} key={user.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Clients