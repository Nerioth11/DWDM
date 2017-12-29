import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { Usuario } from "../entities/Usuario";
import { CholloFacade } from "./CholloFacade";
import { Chollo } from "../entities/Chollo";

export class UsuarioFacade extends AbstractFacade{
    
    public static USUARIOS:Usuario[] = [
        new Usuario(1,"Usuario 1", "111111111", true),
        new Usuario(2,"Usuario 2", "222222222", false), 
        new Usuario(3,"Usuario 3", "222222222", false),
    ];

    public create(entity: Usuario) {
        UsuarioFacade.USUARIOS.push(entity);
    }
    
    public edit(entity: Usuario) {
        var usuario: Usuario = this.find(entity.getId());
        usuario.setAlias(entity.getAlias());
        usuario.setTelefono(entity.getTelefono());
        usuario.setAdministrador(entity.getAdministrador());
    }

    public remove(entity: Usuario) {
        UsuarioFacade.USUARIOS = UsuarioFacade.USUARIOS.filter(
            (usuario) => usuario.getId() !== entity.getId()
        );
    }

    public find(id: Number) {
        return UsuarioFacade.USUARIOS.find(
            (usuario) => usuario.getId() === id 
        );
    }

    public reputationOf(usuario: Usuario){
        var chollos:Chollo[] = new CholloFacade().findByUser(usuario);
        var likes: number;
        var dislikes: number;

        chollos.forEach(
            (chollo) => {
                likes += new CholloFacade().getLikesCountFor(chollo);
                dislikes += new CholloFacade().getDislikesCountFor(chollo);
            }
        );

        return (likes / (likes + dislikes)) * 100;
    }
    
}