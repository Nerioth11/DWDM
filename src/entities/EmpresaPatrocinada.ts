import { Entity } from "./Entity";

export class EmpresaPatrocinada implements Entity{
    
    private id:Number;
    private nombre:String;
    
    constructor(id:Number, nombre:String) {
      this.id = id;
      this.nombre = nombre;
    }
  
    public getId() { return this.id; } 

    public getNombre() { return this.nombre; }
    
    public setNombre(nombre:String) { this.nombre = nombre; }
    
  }