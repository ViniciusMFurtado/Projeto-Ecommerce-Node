import AppError from "../../../shared/errors/AppErrors";
import ClientRepository from "../infra/typeorm/ClientRepository";
import Client from "../infra/typeorm/entities/Client";


export default class ListOrderClientService {
    public async execute(id:number): Promise<Client | undefined> {
        const clientOrder = new ClientRepository();


        // varias regras
        if(clientOrder === null){
            throw new AppError('Id não encontrado ou cliente não possui pedidos!');
        }
        
        const clientsOrder = await clientOrder.listOrderOfClient(id);

        return clientsOrder;
    }
}