import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { Reaccion } from "../entities/Reaccion";
import { CholloFacade } from "./CholloFacade";
import { UsuarioFacade } from "./UsuarioFacade";
import { Chollo } from "../entities/Chollo";
import { Usuario } from "../entities/Usuario";

export class ReaccionFacade extends AbstractFacade{
    
    public static REACCIONES:Reaccion[] = [
        new Reaccion(1, CholloFacade.CHOLLOS[0], UsuarioFacade.USUARIOS[0], true),
        new Reaccion(2, CholloFacade.CHOLLOS[1], UsuarioFacade.USUARIOS[0], false), 
    ];
    
    public static removeWithSave(chollo:Chollo){
        ReaccionFacade.REACCIONES = ReaccionFacade.REACCIONES.filter(
            (reaccion) => reaccion.getChollo().getId() !== chollo.getId()
        )
    }

    public create(entity: Reaccion) {
        ReaccionFacade.REACCIONES.push(entity);
    }
    
    public edit(entity: Reaccion) {
        var reaccion: Reaccion = this.find(entity.getId());
        reaccion.setPositiva(entity.getPositiva());
    }

    public remove(entity: Reaccion) {
        ReaccionFacade.REACCIONES = ReaccionFacade.REACCIONES.filter(
            (reaccion) => reaccion.getId() !== entity.getId()
        );
    }

    public find(id: Number) {
        return ReaccionFacade.REACCIONES.find(
            (reaccion) => reaccion.getId() === id 
        );
    }

    public findByUserAndSave(usuario: Usuario, chollo: Chollo) {
        return ReaccionFacade.REACCIONES.find(
            (reaccion) => reaccion.getUsuario().getId() === usuario.getId() && reaccion.getChollo().getId() === chollo.getId()
        );
    }

}