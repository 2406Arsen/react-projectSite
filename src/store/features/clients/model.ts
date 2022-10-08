import { ISelfClient } from '../../../module'

export interface IClientsState {
	currentClient: ISelfClient
	clients: ISelfClient[]
}
