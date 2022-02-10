import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/ClientRepository";
import AppError from "../../../shared/errors/AppErrors";

export default class FindIdClientsService {
    public async execute(id: number): Promise<Client> {
        const clientRepository = new ClientRepository();
        const client = await clientRepository.findId(id);
        if(!client) {
            throw new AppError('Não foi possível achar este id!');
       }
        return client;
    }
}