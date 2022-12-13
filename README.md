# Mythic-PlayerFinder-DiscordBot-API

## 💻 About the project

<p>This is an API for a discord Bot made for a World of Warcraft guild.</p>

## Structure

### Project Structure
```bash
├── swagger.yaml            # Swagger Configuration
├── server.ts               # Main file to be executed
├── database                # Database Configuration
   └── index.ts                 # Source of Mongoose Database Connection                  
├── modules                 # Project Modules
    ├── character               # Character Module
    └── player                  # Player Module
├── routes                  # Project Routes
    ├── index.ts                # Main Router File, unify every module route in one router
    ├── character.routes.ts     # Character module routes file
    └── player.routes.ts        # Player module routes file
└── shared                  # TSyringe setup folder   
    └── container                 
        └── index.ts        # Singleton registration for dependency injection
```

### Module Structure
```bash
Module
├── models                      # Database model file. Defines the modeling of the entity.
    ├── Entity.schema.ts            # Main schema and model for database
    └── Entity.ts                   # Exports the entity class itself for types
├── repositories                # Configuration of repositories, database layer.
    ├── IEntityRepository.ts        # A explicit interface for our repository layer.
    └── implementations             # Main schema and model for database
        └── entityRepository            # Implementation of the repository interface for each given database or storage
├── useCases                    # UseCases layer. Implementation of each functionality.
    ├── createEntity                # Functionality for creation, result of POST method.
        ├── createEntityController.ts   # Receives Request, executes the useCase and return Response.
        └── createEntityUseCase.ts      # Main logic behind each functionality, like manipulating and validating data.
    ├── listEntity                  # Each function has its own set.
    ├── ... etc
```

## Author

<a href="https://https://www.linkedin.com/in/eduardofvicentini">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/95220802?s=400&u=55c93f56de0ea7dfee88bfe5d75a8f795ef89f4b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Eduardo Frota Vicentini</b></sub></a> <a href="https://https://www.linkedin.com/in/eduardofvicentini" title="Eduardo">🚀</a>

Made with ❤️ by Eduardo Frota Vicentini 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/eduardofvicentini/)](https://www.linkedin.com/in/eduardofvicentini/) 
[![Gmail Badge](https://img.shields.io/badge/-eduardofvicentini@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:eduardofvicentini@gmail.com)](mailto:eduardofvicentini@gmail.com)
