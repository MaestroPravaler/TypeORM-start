import { AppDataSource } from "./data-source"
import { UserActive } from "./entity/UserActive"

AppDataSource.initialize().then(async () => {

    // Salva no banco de dados
    const user = new UserActive()
    user.firstName = "OUTRO 5"
    user.lastName = "NOME 5"
    user.age = 18
    await user.save()
    console.log("Usuario inserido com o Id: " + user.id)

    // Busca no banco de dados
     const users = await UserActive.find()
     console.log("Listagem: ", users)
    // Busca por Id
    console.log("Busca por Id: ", await UserActive.findOneBy({ id: 4 }))
    // Busca por nome (função implementada na entidade)
    console.log("Busca por nome: ", await UserActive.findByName("OUTRO 4", "NOME 4"))

    // Atualiza no banco de dados
    user.id = 4
    user.firstName = "OUTRO 4 alterado"
    user.lastName = "NOME 4 alterado"
    user.age = 28
    await user.save()
    console.log("Usuario atualizado com o Id: " + user.id)

    // Remove do banco de dados
    user.id = 1
    await user.remove()
    console.log("Usuario com o id = 1 removido com sucesso")

}).catch(error => console.log(error))