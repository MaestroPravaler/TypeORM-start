import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // Salva no banco de dados
    const user = new User()
    user.firstName = "OUTRO"
    user.lastName = "NOME"
    user.age = 34
    await AppDataSource.manager.save(user)
    console.log("Usuario inserido com o Id: " + user.id)

    // Busca no banco de dados
    const users = await AppDataSource.manager.find(User)
    console.log("Listagem: ", users)

}).catch(error => console.log(error))
