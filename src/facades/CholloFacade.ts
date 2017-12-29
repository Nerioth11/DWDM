import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { Chollo } from "../entities/Chollo";
import { UsuarioFacade } from "./UsuarioFacade";
import { CategoriaFacade } from "./CategoriaFacade";
import { EmpresaPatrocinadaFacade } from "./EmpresaPatrocinadaFacade";
import { Usuario } from "../entities/Usuario";
import { FavoritoFacade } from "./FavoritoFacade";
import { ReaccionFacade } from "./ReaccionFacade";
import { Categoria } from "../entities/Categoria";

export class CholloFacade extends AbstractFacade{
    
    public static CHOLLOS:Chollo[] = [
        new Chollo(
            1,
            "Chollo 1",
            "http://enlace1.com",
            "El chollo 1",
            10.0,
            5.0,
            new Date(),
            new Date(),
            "EmpresaCualquiera",
            null,
            UsuarioFacade.USUARIOS[0],
            CategoriaFacade.CATEGORIAS[0],
        ),
        new Chollo(
            2,
            "Chollo 2",
            "http://enlace2.com",
            "El chollo 2",
            100.0,
            50.0,
            new Date(),
            new Date(),
            null,
            EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS[0],
            UsuarioFacade.USUARIOS[1],
            CategoriaFacade.CATEGORIAS[1],
        )      
    ];

    public create(entity: Chollo) {
        CholloFacade.CHOLLOS.push(entity);
    }

    public edit(entity: Chollo) {
        var chollo: Chollo = this.find(entity.getId());
        chollo.setTitulo(entity.getTitulo());
        chollo.setEnlace(entity.getEnlace());
        chollo.setDescripcion(entity.getDescripcion());
        chollo.setPrecioAntes(entity.getPrecioAntes());
        chollo.setPrecioDespues(entity.getPrecioDespues());
        chollo.setFechaActualizacion(entity.getFechaActualizacion());
        chollo.setEmpresaPatrocinada(entity.getEmpresaPatrocinada());
        chollo.setEmpresaNoPatrocinada(entity.getEmpresaNoPatrocinada());
        chollo.setCategoria(entity.getCategoria());
    }
    
    public remove(entity: Chollo) {
        CholloFacade.CHOLLOS = CholloFacade.CHOLLOS.filter(
            (chollo) => chollo.getId() !== entity.getId()
        );

        FavoritoFacade.removeWithSave(entity);
        ReaccionFacade.removeWithSave(entity);
    }

    public find(id: Number) {
        return CholloFacade.CHOLLOS.find(
            (chollo) => chollo.getId() === id 
        );
    }

    public findByUser(user: Usuario){
        return CholloFacade.CHOLLOS.filter(
            (chollo) => chollo.getUsuario().getId() === user.getId() 
        );
    }

    public findByCategory(categoria:Categoria){
        return CholloFacade.CHOLLOS.filter(
            (chollo) => chollo.getCategoria().getId() === categoria.getId() 
        );
    }

    public findPopulars(){
        return CholloFacade.CHOLLOS.sort(
            (chollo1, chollo2) => (this.getLikesCountFor(chollo1) - this.getDislikesCountFor(chollo1)) - (this.getLikesCountFor(chollo2) - this.getDislikesCountFor(chollo2))
        );
    }

    public findFavouritesByUser(user: Usuario){
        return FavoritoFacade.FAVORITOS.filter(
            (favorito) => favorito.getUsuario().getId() === user.getId() 
        ).map(
            (favorito) => favorito.getChollo()
        );
    }

    public getLikesCountFor(chollo: Chollo){
        return ReaccionFacade.REACCIONES.filter(
            (reaccion) => reaccion.getChollo().getId() === chollo.getId() && reaccion.getPositiva() === true
        ).length;
    }

    public getDislikesCountFor(chollo: Chollo){
        return ReaccionFacade.REACCIONES.filter(
            (reaccion) => reaccion.getChollo().getId() === chollo.getId() && reaccion.getPositiva() === false
        ).length;
    }
    
}