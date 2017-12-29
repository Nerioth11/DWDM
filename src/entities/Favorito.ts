import { Chollo } from "./Chollo";
import { Usuario } from "./Usuario";
import { Entity } from "./Entity";

export class Favorito implements Entity{
    
    private id:Number
    private chollo:Chollo;
    private usuario:Usuario;
    
    constructor(id:Number, chollo:Chollo, usuario:Usuario) {
      this.id = id;
      this.chollo = chollo;
      this.usuario = usuario;
    }
    
    public getId(){ return this.id; };

    public getChollo() { return this.chollo; } 

    public getUsuario() { return this.usuario; } 

  }