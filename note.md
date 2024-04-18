# HOW TO MIGRATE THE MK UR GAME TO BOMBER MAN DOM

##  BOARD

+ Board matrix abstract matrix: Server
+ Game board DOM: Client
+ Random Grid Position: Server
+ OutSide Grid: Server
+ Is Valid Move: Server
+ Is Wall: Server
+ Create Game Board: Client - Server
  + Must take the board matrix create by the server
+ Destroy Wall: Client - Server

##  BOMB
+ Element, Blast: Client
+ Explode: Server - Client
  + Affect Player
  + Affect Enemies: Client - Server
  + Affect Bombs
  + Explode In Direction

##  ENEMY
+ Element: Client
+ Set Element: Client
+ Move Randomly: Server
+ Move Element: Client
+ Enemies: Server
+ Enemies: Server
+ Enemies Position: Server
+ Create Enemies: Client
+ Move Enemies: Server

##  GAME
+ Game Audio: Client
+ SPEED: Server
+ Bomb list: Server -> Player
+ Current Bomb Type: Server -> Player
+ Bomb Amount: Server -> Player
+ Available Bombs: Server -> Player
+ Run: Server - Client
+ On Control Press: Client - Server
+ Start Game Loop: Client
+ Place Bomb: Server - Client
+ Increase Bomb Count: Server - Client
+ Reset Bomb Count: Server - Client
+ Get Bomb Radius: Server - Client
+ Detonate Bomb: Server - Client
+ Change Bomb Type: Server - Client
+ Remove Bomb: Server - Client
+ Update: Server - Client
+ Check Death: Server
+ Check Victory: Server
+ Check Power Up Collision

##  HUD
+ All: Client

##  KEY

##  PLAYER
+ All: Client

##  POWER UP
+ All: Client

##  TIMER
+ All: Client