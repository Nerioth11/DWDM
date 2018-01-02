import { Injectable } from "@angular/core";
import { USUARIOS } from "../db/db";
import { Usuario } from "../entities/Usuario";

@Injectable()
export class UserService {
    private user: Usuario = USUARIOS[0];

    getUser(){
        return this.user;
    }

}