# Mythic-PlayerFinder-DiscordBot-API

## 💻 About the project

This is an API for a discord Bot made for a World of Warcraft guild.
The project was designed using the [SOLID Principles](https://www.baeldung.com/solid-principles) and [Dependency Injection](https://www.tutorialsteacher.com/ioc/dependency-injection) structure.

## Battle.net API

The main subject about this project is using the [Battle.net API](https://develop.battle.net/). It is a public API used to retrieve information about players and characters in the game World of Warcraft. When the user clicks to create a character, it solves its name and realm, fetching its data from the Battle.net API, bringing some useful information like the character level, items, specializations, etc, and saving them into the database.

This REST API was designed for being consumed by a [Discord Bot](https://discord.com/). The main objective is bring players together to meet other players inside the channel just using the bot. Sadly, while this bot was in development, the guild disbanded and the bot tests were discontinued.

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

## ⚙️ Routes List
<a href="https://raw.githubusercontent.com/edufvicentini/Mythic-PlayerFinder-DiscordBot-Backend-API/master/assets/Mythic-PlayerFinder-insomnia.json">
   <img src="https://img.shields.io/badge/GET-INSOMNIA%20FILE-purple" />
 </a>

### Character
| HTTP METHOD   | URI                           |  DESCRIPTION     
| -----------   | ---------------               |  --------------------------      
|  GET          | /players/all                  |  List all players        
|  GET          | /players                      |  Detail a registered player   
|  POST         | /players                      |  Create a new player
|  PUT          | /players                      |  Update an existing player information  

### Character
| HTTP METHOD   | URI                           |  DESCRIPTION     
| -----------   | ---------------               |  --------------------------      
|  GET          | /characters                   |  List all characters        
|  GET          | /characters/discord-user      |  List all characters from user   
|  POST         | /characters                   |  Create a character, using Battle.net API
|  PUT          | /characters                   |  Update a character information        

## 🚀 How to execute the project

### Prerequisites

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Also it's nice to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### 🎲 Executing the Project
```bash
# Clone this repository
$ git clone git@github.com:edufvicentini/Mythic-PlayerFinder-DiscordBot-Backend-API.git

# Access the folder in terminal
$ cd Mythic-PlayerFinder-DiscordBot-Backend-API

# Install the dependencies
$ npm install

# Execute the application in developer mode
$ npm run dev

# The server will start in port:3333 - http://localhost:3333
```

#### 🎲 Environment Variables
```bash
DB_URI      # MongoDB Connection URI
```


---

### 🛠 Technologies

The following tools were used in building the project:

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Mongoose](https://mongoosejs.com/)**
- **[Tsyringe](https://www.npmjs.com/package/tsyringe)**
- **[Prettier](https://prettier.io/)**
- **[Swagger-ui](https://swagger.io/)**
- **[UUID](https://www.npmjs.com/package/uuid)**
- **[dotenv](https://www.npmjs.com/package/dotenv)**

> See the file [package.json](https://github.com/edufvicentini/Mythic-PlayerFinder-DiscordBot-Backend-API/blob/master/package.json)

---


## Author

<a href="https://https://www.linkedin.com/in/eduardofvicentini">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/95220802?s=400&u=55c93f56de0ea7dfee88bfe5d75a8f795ef89f4b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Eduardo Frota Vicentini</b></sub></a> <a href="https://https://www.linkedin.com/in/eduardofvicentini" title="Eduardo">🚀</a>

Made with ❤️ by Eduardo Frota Vicentini 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/eduardofvicentini/)](https://www.linkedin.com/in/eduardofvicentini/) 
[![Gmail Badge](https://img.shields.io/badge/-eduardofvicentini@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:eduardofvicentini@gmail.com)](mailto:eduardofvicentini@gmail.com)
