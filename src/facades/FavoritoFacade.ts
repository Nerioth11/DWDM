import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { Chollo } from "../entities/Chollo";
import { UsuarioFacade } from "./UsuarioFacade";
import { CategoriaFacade } from "./CategoriaFacade";
import { EmpresaPatrocinadaFacade } from "./EmpresaPatrocinadaFacade";
import { Usuario } from "../entities/Usuario";
import { Favorito } from "../entities/Favorito";
import { CholloFacade } from "./CholloFacade";

export class FavoritoFacade extends AbstractFacade{
    
    public static FAVORITOS:Favorito[] = [
        new Favorito(1, CholloFacade.CHOLLOS[0], UsuarioFacade.USUARIOS[0]),
        new Favorito(2, CholloFacade.CHOLLOS[1], UsuarioFacade.USUARIOS[0])      
    ];

    public static removeWithSave(chollo:Chollo){
        FavoritoFacade.FAVORITOS = FavoritoFacade.FAVORITOS.filter(
            (favorito) => favorito.getChollo().getId() !== chollo.getId()
        )
    }

    public create(entity: Favorito) {
        FavoritoFacade.FAVORITOS.push(entity);
    }

    public edit(entity: Favorito) {
        // var favorito: Favorito = this.find(entity.getId());
    }

    public remove(entity: Favorito) {
        FavoritoFacade.FAVORITOS = FavoritoFacade.FAVORITOS.filter(
            (favorito) => favorito.getId() !== entity.getId()
        );
    }

    public find(id: Number) {
        return FavoritoFacade.FAVORITOS.find(
            (favorito) => favorito.getId() === id 
        );
    }
    
}