import { Chollo } from "./Chollo";
import { Usuario } from "./Usuario";
import { Entity } from "./Entity";

export class Reaccion implements Entity{
    
    private id:Number
    private chollo:Chollo;
    private usuario:Usuario;
    private positiva:Boolean
    
    constructor(id:Number, chollo:Chollo, usuario:Usuario, positiva:Boolean) {
      this.id = id;
      this.chollo = chollo;
      this.usuario = usuario;
      this.positiva = positiva;
    }
    
    public getId(){ return this.id; };

    public getChollo() { return this.chollo; } 

    public getUsuario() { return this.usuario; } 
    
    public getPositiva() { return this.positiva; } 

    public setPositiva(positiva:Boolean){ this.positiva = positiva; }

  }