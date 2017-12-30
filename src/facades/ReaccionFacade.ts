import { Reaccion } from "../entities/Reaccion";
import { CholloFacade } from "./CholloFacade";
import { UsuarioFacade } from "./UsuarioFacade";
import { Chollo } from "../entities/Chollo";
import { Usuario } from "../entities/Usuario";
import { Injectable } from "@angular/core";
import { AbstractSaveUserRelationFacade } from "./AbstractSaveUserRelationFacade";
import { SaveUserRelation } from "../entities/SaveUserRelation";

@Injectable()
export class ReaccionFacade extends AbstractSaveUserRelationFacade{
    
    public static REACCIONES:Reaccion[] = [
        new Reaccion(CholloFacade.CHOLLOS[0], UsuarioFacade.USUARIOS[0], true),
        new Reaccion(CholloFacade.CHOLLOS[1], UsuarioFacade.USUARIOS[0], false), 
    ];
    // INSERT INTO reaccion (chollo,usuario,positiva) VALUES (?,?,?);
    public create(saveUserRelation:SaveUserRelation) { // INSERT
        this.findAll().push(saveUserRelation as Reaccion); 
    }
    // UPDATE reaccion SET positiva=? WHERE chollo=? AND usuario=?;
    public edit(saveUserRelation: Reaccion) { // EDIT
        this.find(saveUserRelation).setPositiva(saveUserRelation.getPositiva());
    }
    // DELETE FROM reaccion WHERE chollo=? AND usuario=?;
    public remove(saveUserRelation:SaveUserRelation) { // DELETE
        ReaccionFacade.REACCIONES = this.findAll().filter(
            (reaccion) => reaccion.getUsuario().getId() !== saveUserRelation.getUsuario().getId() || reaccion.getChollo().getId() !== saveUserRelation.getChollo().getId()
        );
    }
    // SELECT reaccion.positiva,
    // usuario.id AS usuarioId,usuario.telefono,usuario.alias,usuario.administrador,
    // chollo.id AS cholloId,chollo.titulo,chollo.enlace,chollo.descripcion,chollo.precioAntes,chollo.precioDespues,chollo.fechaCreacion,chollo.fechaActualizacion,chollo.empresaNoPatrocinada,
    // empresaPatrocinada.id AS empresaPatrocinadaID, empresaPatrocinada.nombre AS empresaPatrocinadaNombre,
    // categoria.id AS categoriaID, categoria.nombre AS categoriaNombre
    // FROM ((((reaccion
    // INNER JOIN usuario ON reaccion.usuario = usuario.id)
    // INNER JOIN chollo ON reaccion.chollo = chollo.id)
    // INNER JOIN categoria ON chollo.categoria = categoria.id)
    // INNER JOIN empresaPatrocinada ON chollo.empresaPatrocinada= empresaPatrocinada.id)
    // WHERE reaccion.chollo=? AND reaccion.usuario=?;
    public find(saveUserRelation: Reaccion) {
        return this.findAll().find(
            (reaccion) => reaccion.getUsuario().getId() === saveUserRelation.getUsuario().getId() && reaccion.getChollo().getId() === saveUserRelation.getChollo().getId()
        );
    }
    // SOBRA PARA LA BD
    public findAll() {
        return ReaccionFacade.REACCIONES;
    }
    // SOBRA PARA LA BD
    public removeWithSave(chollo:Chollo){
        ReaccionFacade.REACCIONES = this.findAll().filter(
            (reaccion) => reaccion.getChollo().getId() !== chollo.getId()
        )
    }

}