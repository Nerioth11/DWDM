import { Injectable } from "@angular/core";
import { Usuario } from "../entities/Usuario";
import { UsuarioFacade } from "../facades/UsuarioFacade";

@Injectable()
export class UserService {
    // private user: Usuario = USUARIOS[0];
    private user: Usuario;

    constructor(private usuarioFacade: UsuarioFacade){
        var userId: string = localStorage.getItem("userId")
        if (userId == null) return;
        this.user = this.usuarioFacade.find(Number(userId));
     }

    getUser(){
        return this.user;
    }

    setUser(telefono: String){
        this.user = this.usuarioFacade.findByTelephone(telefono);
        if(this.user != null) this.storeUserInLocalStorage();
        return this.user;
    }

    createUser(telefono: String, alias: String){
        if(this.usuarioFacade.findByAlias(alias) != null) return null;
        this.user = this.usuarioFacade.create(new Usuario(
            alias,
            telefono,
            false,
            Math.trunc((Math.random() * 1000) + 5))
        )
        this.storeUserInLocalStorage();
        return this.user;
    }

    private storeUserInLocalStorage(){
        localStorage.setItem("userId", this.user.getId().toString())
    }

}