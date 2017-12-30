import { Chollo } from "../entities/Chollo";
import { UsuarioFacade } from "./UsuarioFacade";
import { Favorito } from "../entities/Favorito";
import { CholloFacade } from "./CholloFacade";
import { Injectable } from "@angular/core";
import { AbstractSaveUserRelationFacade } from "./AbstractSaveUserRelationFacade";
import { SaveUserRelation } from "../entities/SaveUserRelation";

@Injectable()
export class FavoritoFacade extends AbstractSaveUserRelationFacade{
    
    public static FAVORITOS:Favorito[] = [
        new Favorito(CholloFacade.CHOLLOS[0], UsuarioFacade.USUARIOS[0]),
        new Favorito(CholloFacade.CHOLLOS[1], UsuarioFacade.USUARIOS[0])      
    ];

    // INSERT INTO favorito (chollo,usuario) VALUES (?,?);
    public create(saveUserRelation:SaveUserRelation) { // INSERT
        this.findAll().push(saveUserRelation as Favorito); 
    }
    // DELETE FROM favorito WHERE chollo=? AND usuario=?;
    public remove(saveUserRelation:SaveUserRelation) { // DELETE
        FavoritoFacade.FAVORITOS = this.findAll().filter(
            (favorito) => favorito.getUsuario().getId() !== saveUserRelation.getUsuario().getId() || favorito.getChollo().getId() !== saveUserRelation.getChollo().getId()
        );
    }
    // SELECT usuario.id AS usuarioId,usuario.telefono,usuario.alias,usuario.administrador,
    // chollo.id AS cholloId,chollo.titulo,chollo.enlace,chollo.descripcion,chollo.precioAntes,chollo.precioDespues,chollo.fechaCreacion,chollo.fechaActualizacion,chollo.empresaNoPatrocinada,
    // empresaPatrocinada.id AS empresaPatrocinadaID, empresaPatrocinada.nombre AS empresaPatrocinadaNombre,
    // categoria.id AS categoriaID, categoria.nombre AS categoriaNombre
    // FROM ((((favorito
    // INNER JOIN usuario ON favorito.usuario = usuario.id)
    // INNER JOIN chollo ON favorito.chollo = chollo.id)
    // INNER JOIN categoria ON chollo.categoria = categoria.id)
    // INNER JOIN empresaPatrocinada ON chollo.empresaPatrocinada= empresaPatrocinada.id)
    // WHERE favorito.chollo=? AND favorito.usuario=?;
    public find(saveUserRelation:SaveUserRelation) {
        return this.findAll().find(
            (favorito) => favorito.getUsuario().getId() === saveUserRelation.getUsuario().getId() && favorito.getChollo().getId() === saveUserRelation.getChollo().getId()
        );
    }
    // SOBRA PARA LA BD
    public findAll() {
        return FavoritoFacade.FAVORITOS;
    }
    // SOBRA PARA LA BD
    public removeWithSave(chollo:Chollo){
        FavoritoFacade.FAVORITOS = this.findAll().filter(
            (favorito) => favorito.getChollo().getId() !== chollo.getId()
        )
    }
    
}