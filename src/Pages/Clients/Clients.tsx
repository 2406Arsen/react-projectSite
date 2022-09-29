import { ISelfClient } from '../../module';
import SelfClient from './SelfClient'

const Clients = () => {
  const dataComments: ISelfClient[] = JSON.parse(localStorage.getItem('comments')!);



  return (
    <div className="page">
      <div className="Clients">
        <span className='ClientsTitle'>Happy Clients about us</span>
        <div className="clientsComs">
          {dataComments.map((user) =>
            <SelfClient userCom={user} key={user.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Clients