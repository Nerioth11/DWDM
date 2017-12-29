import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { Categoria } from "../entities/Categoria";

export class CategoriaFacade extends AbstractFacade{
    
    public static CATEGORIAS:Categoria[] = [
        new Categoria(1,"Categoría 1"),
        new Categoria(2,"Categoría 2"), 
        new Categoria(3,"Categoría 3"),
    ];

    public create(entity: Categoria) {
        CategoriaFacade.CATEGORIAS.push(entity);
    }

    public edit(entity: Categoria) {
        var categoria: Categoria = this.find(entity.getId());
        categoria.setNombre(entity.getNombre());
    }

    public remove(entity: Categoria) {
        CategoriaFacade.CATEGORIAS = CategoriaFacade.CATEGORIAS.filter(
            (categoria) => categoria.getId() !== entity.getId()
        );
    }
    
    public find(id: Number) {
        return CategoriaFacade.CATEGORIAS.find(
            (categoria) => categoria.getId() === id 
        );
    }
    
}