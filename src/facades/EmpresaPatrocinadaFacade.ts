import { AbstractFacade } from "./AbstractFacade";
import { Entity } from "../entities/Entity";
import { EmpresaPatrocinada } from "../entities/empresaPatrocinada";

export class EmpresaPatrocinadaFacade extends AbstractFacade{

    public static EMPRESAS_PATROCINADAS:EmpresaPatrocinada[] = [
        new EmpresaPatrocinada(1,"Empresa 1"),
        new EmpresaPatrocinada(2,"Empresa 2"), 
        new EmpresaPatrocinada(3,"Empresa 3"),
    ];
    
    public create(entity: EmpresaPatrocinada) {
        EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS.push(entity);
    }
    
    public edit(entity: EmpresaPatrocinada) {
        var empresaPatrocinada: EmpresaPatrocinada = this.find(entity.getId());
        empresaPatrocinada.setNombre(entity.getNombre());
    }

    public remove(entity: EmpresaPatrocinada) {
        EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS = EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS.filter(
            (empresaPatrocinada) => empresaPatrocinada.getId() !== entity.getId()
        );
    }

    public find(id: Number) {
        return EmpresaPatrocinadaFacade.EMPRESAS_PATROCINADAS.find(
            (empresaPatrocinada) => empresaPatrocinada.getId() === id 
        );
    }
    
}