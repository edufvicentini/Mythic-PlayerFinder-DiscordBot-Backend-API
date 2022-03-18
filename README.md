### BRIEFING

Objetivo: conectar jogadores interessados em mítica+ e com níveis/objetivos semelhantes dentro da Guild.
Como faz isso: o player vai clicar em um botão que vai mostrar uma lista de jogadores e seus personagens. Nesta lista deve aparecer:

### INFORMATION

## PLAYERS
Players:
  Btag para adicionar
  Discord para conversar
  Objetivos na mítica+
  Dias disponíveis
  Horários disponíveis


## CHARACTERS
Personagens:
  _id
  player_id
  nickname
  realm
  main_spec
  active_spec
  gear_iLvl
  covenant
  mythic_plus_score_tank_current
  mythic_plus_score_dps_current
  mythic_plus_score_healer_current
  raiderio_profile_link

### FUNCTIONALITIES

Clica em qualquer botão
-> Verifica se tem cadastro:
Se não tiver cadastro, Pede a bnet:
Opção: validar se existe esta bnet (Account profile summary API)
Dados adicionais: dias que joga, horários que joga

-Cadastrar personagem:
  Realm
  Nickname -> procura o personagem na API do WoW. Se encontrar, puxa todos os dados. Se não achar, diz que o personagem não existe.
-Editar personagem
  Pode trocar a Spec principal ou excluir o personagem
-Editar Cadastro
  Pode trocar a Btag, objetivos, dias e horários
-Procurar
  Mostra de todos os jogadores que se cadastraram, ordenado pelo IO e agrupado por player. Vai mostrar todos os dados do player e do personagem conforme campos informados anteriormente


### METHODS 

Character
Create - fetch blizzard API 2GetCharacterByName
CheckIfCharacterExistsInGame
UpdateCharacterInfo
ListCharacters
GetCharactersByDiscordUser

Player
Create
CheckIfBtagExistsInGame
GetPlayerByDiscordUser
UpdatePlayerInfo
ListAllCharactersInfoForEachPlayer

### ROUTES


POST /characters (requestbody)
GET /{user}/characters (RequestParams user)
Fetch Get blizzard API
UPDATE /{user}/characters (requestparams user)
GET /characters 
GET /{user}/{characters/
 

POST /players
fetch blizzard API
GET /players (request params)
UPDATE /players (request params)
GET /players/characters