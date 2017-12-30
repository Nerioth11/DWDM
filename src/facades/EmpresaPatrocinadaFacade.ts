import { EmpresaPatrocinada } from "../entities/empresaPatrocinada";
import { Injectable } from "@angular/core";
import { AbstractEntityFacade } from "./AbstractEntityFacade";

@Injectable()
export class EmpresaPatrocinadaFacade extends AbstractEntityFacade{

    public static EMPRESAS_PATROCINADAS:EmpresaPatrocinada[] = [
        new EmpresaPatrocinada("Empresa 1", 1),
        new EmpresaPatrocinada("Empresa 2", 2), 
        new EmpresaPatrocinada("Empresa 3", 3),
    ];
    // INSERT INTO empresaPatrocinada (nombre) VALUES (?);
    public create(entity: EmpresaPatrocinada) { // INSERT + DEVOLVER ENTITY CON EL ULTIMO ID
        this.findAll().push(entity); 
        return entity;
    }
    // UPDATE empresaPatrocinada SET nombre="?" WHERE id=?;
    public edit(entity: EmpresaPatrocinada) { // EDIT
        var empresaPatrocinada: EmpresaPatrocinada = this.find(entity.getId());
        empresaPatrocinada.setNombre(entity.getNombre());
    }
    // DELETE FROM empresaPatrocinada WHERE id=?;
    public remove(entity: EmpresaPatrocinada) { // DELETE
        EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS = this.findAll().filter(
            (empresaPatrocinada) => empresaPatrocinada.getId() !== entity.getId()
        );
    }
    // SELECT * FROM empresaPatrocinada WHERE id=?;
    public find(id: Number) {
        return this.findAll().find(
            (empresaPatrocinada) => empresaPatrocinada.getId() === id 
        );
    }
    // SELECT * FROM empresaPatrocinada;
    public findAll() {
        return EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS;
    }
    
}