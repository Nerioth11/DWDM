import { Entity } from "../entities/Entity";

export abstract class AbstractFacade {

    public abstract create(entity:Entity);

    public abstract edit(entity:Entity);

    public abstract remove(entity:Entity);

    public abstract find(id:Number);
}