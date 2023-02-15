import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { StorageFile } from "../storage/models";


@Injectable()
export class StorageFileEntityService extends EntityCollectionServiceBase<StorageFile> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('files', serviceElementsFactory);
    }
}
