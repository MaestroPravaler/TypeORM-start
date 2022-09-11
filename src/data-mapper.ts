import { AppDataSource } from "./data-source"
import { UserDataMapper } from './entity/UserDataMapper';

AppDataSource.initialize().then(async () => {

    const userDataMapperRepository = AppDataSource.getRepository(UserDataMapper)
    // Salva no banco de dados
    const user = new UserDataMapper()
    user.firstName = "Data 4"
    user.lastName = "Mapper 4"
    user.age = 123
    await userDataMapperRepository.save(user)
    console.log("Usuario inserido com o Id: " + user.id)

    // Busca no banco de dados
    const users = await userDataMapperRepository.find()
    console.log("Listagem: ", users)
    // Busca por Id
    console.log("Busca por Id: ", await userDataMapperRepository.findOneBy({ id: 1 }))
    // Busca por nome
    console.log("Busca por nome: ", await userDataMapperRepository.findOneBy({ firstName: "Data 3" }))

    // Atualiza no banco de dados
    user.id = 3
    user.firstName = "OUTRO 4 alterado"
    user.lastName = "NOME 4 alterado"
    user.age = 28
    await userDataMapperRepository.save(user)
    console.log("Usuario atualizado com o Id: " + user.id)

    // Remove do banco de dados
    user.id = 1
    await userDataMapperRepository.remove(user)
    console.log("Usuario com o id = 1 removido com sucesso")

}).catch(error => console.log(error))