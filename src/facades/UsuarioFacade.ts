import { Usuario } from "../entities/Usuario";
import { CholloFacade } from "./CholloFacade";
import { Chollo } from "../entities/Chollo";
import { Injectable } from "@angular/core";
import { AbstractEntityFacade } from "./AbstractEntityFacade";

@Injectable()
export class UsuarioFacade extends AbstractEntityFacade{
    
    public static USUARIOS:Usuario[] = [
        new Usuario("Usuario 1", "111111111", true, 1),
        new Usuario("Usuario 2", "222222222", false, 2), 
        new Usuario("Usuario 3", "222222222", false, 3),
    ];

    constructor(private cholloFacade:CholloFacade) { super(); }
    // INSERT INTO usuario (telefono,alias,administrador) VALUES ("111111111","jaime",1);
    public create(entity: Usuario) { // INSERT + DEVOLVER ENTITY CON EL ULTIMO ID
        this.findAll().push(entity); 
        return entity;
    }
    // UPDATE usuario SET telefono="?",alias="?",administrador=? WHERE id=?;
    public edit(entity: Usuario) { // EDIT
        var usuario: Usuario = this.find(entity.getId());
        usuario.setAlias(entity.getAlias());
        usuario.setTelefono(entity.getTelefono());
        usuario.setAdministrador(entity.getAdministrador());
    }
    // DELETE FROM usuario WHERE id=?;
    public remove(entity: Usuario) { // DELETE
        UsuarioFacade.USUARIOS = this.findAll().filter(
            (usuario) => usuario.getId() !== entity.getId()
        );
    }

    // SELECT * FROM usuario WHERE id=?;
    public find(id: Number) {
        return this.findAll().find(
            (usuario) => usuario.getId() === id 
        );
    }
    // SELECT * FROM usuario;
    public findAll() {
        return UsuarioFacade.USUARIOS;
    }

    // SELECT * FROM usuario WHERE telefono=?;
    public findByTelephone(telefono: String) {
        return this.findAll().find(
            (usuario) => usuario.getTelefono() === telefono
        );
    }

    public reputationOf(usuario: Usuario){
        var chollos:Chollo[] = this.cholloFacade.findByUser(usuario);
        var likes: number;
        var dislikes: number;

        chollos.forEach(
            (chollo) => {
                likes += this.cholloFacade.getLikesCountFor(chollo);
                dislikes += this.cholloFacade.getDislikesCountFor(chollo);
            }
        );

        return (likes / (likes + dislikes)) * 100;
    }
    
}