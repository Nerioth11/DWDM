import { Categoria } from "../entities/Categoria";
import { Injectable } from "@angular/core";
import { AbstractEntityFacade } from "./AbstractEntityFacade";

@Injectable()
export class CategoriaFacade extends AbstractEntityFacade{
    
    public static CATEGORIAS:Categoria[] = [
        new Categoria("Categoría 1", 1),
        new Categoria("Categoría 2", 2), 
        new Categoria("Categoría 3", 3),
    ];
    // INSERT INTO categoria (nombre) VALUES (?);
    public create(entity: Categoria) { // INSERT + DEVOLVER ENTITY CON EL ULTIMO ID
        this.findAll().push(entity); 
        return entity;
    }
    // UPDATE categoria SET nombre="?" WHERE id=?;
    public edit(entity: Categoria) { // EDIT
        var categoria: Categoria = this.find(entity.getId());
        categoria.setNombre(entity.getNombre());
    }
    // DELETE FROM categoria WHERE id=?;
    public remove(entity: Categoria) { // DELETE
        CategoriaFacade.CATEGORIAS = this.findAll().filter(
            (categoria) => categoria.getId() !== entity.getId()
        );
    }
    // SELECT * FROM categoria WHERE id=?;
    public find(id: Number) {
        return this.findAll().find(
            (categoria) => categoria.getId() === id 
        );
    }
    // SELECT * FROM categoria;
    public findAll() {
        return CategoriaFacade.CATEGORIAS;
    }
    
}