## Iniciando com o TypeORM

Este projeto foi desenvolvido baseado no curso de TypeORM da School Of Net.

![](assets/images/titulo-curso.png)

### Configurações Iniciais

1. Criar o projeto
    ```
    npx typeorm init --name TypeORM-start --database mysql
    ```
### Utilização básica para manipulação dos dados no banco

1. Conectando no banco
2. Inserindo dados na tabela
3. Buscando os dados inseridos

### Utilizando o ActiveRecord

Usando a abordagem ActiveRecord definimos todos os métodos de consulta dentro do pŕóprio modelo

1. Criação do arquivo src/active.ts
2. Criação do arquivo src/entity/UserActive.ts
3. Atualizar o arquivo tsconfig.json
    ```
     "target": "es6",
     ```
4. No arquivo src/entity/UserActive.ts
    ```
    export class UserActive extends BaseEntity
    ```
5. Implementando no arquivo active.ts um CRUD completo com buscas diferenciadas
6. Criando uma função de busca estática  em src/entity/UserActive.ts
