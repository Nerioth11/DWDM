import { Reaccion } from "../entities/Reaccion";
import { CholloFacade } from "../facades/CholloFacade";
import { UsuarioFacade } from "../facades/UsuarioFacade";
import { Categoria } from "../entities/Categoria";
import { Chollo } from "../entities/Chollo";
import { CategoriaFacade } from "../facades/CategoriaFacade";
import { EmpresaPatrocinadaFacade } from "../facades/EmpresaPatrocinadaFacade";
import { EmpresaPatrocinada } from "../entities/EmpresaPatrocinada";
import { Favorito } from "../entities/Favorito";
import { Usuario } from "../entities/Usuario";

export const CATEGORIAS:Categoria[] = [
    new Categoria("Categoría 1", 1),
    new Categoria("Categoría 2", 2), 
    new Categoria("Categoría 3", 3),
];

export const EMPRESAS_PATROCINADAS:EmpresaPatrocinada[] = [
    new EmpresaPatrocinada("Empresa 1", 1),
    new EmpresaPatrocinada("Empresa 2", 2), 
    new EmpresaPatrocinada("Empresa 3", 3),
];

export const USUARIOS:Usuario[] = [
    new Usuario("Admin", "111111111", true, 1),
    new Usuario("Usuario 2", "222222222", false, 2), 
    new Usuario("Usuario 3", "222222222", false, 3),
];

export const CHOLLOS:Chollo[] = [
    new Chollo(
        "Chollo 1",
        "http://enlace1.com",
        "El chollo 1",
        10.0,
        5.0,
        new Date(),
        new Date(),
        "EmpresaCualquiera",
        null,
        USUARIOS[0],
        CATEGORIAS[0],
        1
    ),
    new Chollo(
        "Chollo 2",
        "http://enlace2.com",
        "El chollo 2",
        100.0,
        50.0,
        new Date(),
        new Date(),
        null,
        EMPRESAS_PATROCINADAS[1],
        USUARIOS[1],
        CATEGORIAS[1],
        3
    ),  
    new Chollo(
        "Chollo 3",
        "http://enlace3.com",
        "El chollo 3",
        10.0,
        7.0,
        new Date(),
        new Date(),
        "EmpresaCualquiera",
        null,
        USUARIOS[0],
        CATEGORIAS[0],
        2
    )    
];

export const FAVORITOS:Favorito[] = [
    new Favorito(CHOLLOS[0], USUARIOS[0]),
    new Favorito(CHOLLOS[1], USUARIOS[0])      
];

export const REACCIONES:Reaccion[] = [
    new Reaccion(CHOLLOS[1], USUARIOS[1], true),
    new Reaccion(CHOLLOS[1], USUARIOS[2], true), 
    new Reaccion(CHOLLOS[2], USUARIOS[3], true), 
    new Reaccion(CHOLLOS[0], USUARIOS[0], false), 
];