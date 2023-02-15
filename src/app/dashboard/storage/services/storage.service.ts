import { Injectable } from "@angular/core";
import { filter, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { StorageFile, StorageFolder } from "../models";


function makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    return outString;
}

function generateFiles(folders: StorageFolder[]): StorageFile[] {
    const folders_ids: number[] = folders.map(f => f.id);
    const filenames = ['resume.pdf', 'note.txt', 'c programming language.pdf', 'learn SQL.pdf',
        'Edvantures of Sherlock Holmes.pdf', 'Learn Python.pdf', 'passwords.pdf',
        'Google Privacy Policy.pdf', 'Youtube API.pdf'];
    const res: StorageFile[] = [];
    for (let index = 0; index < 128; index++) {
        res.push({
            id: Math.floor(Math.random() * (9999 - 1000 + 1) + 9999),
            name: filenames[Math.floor(Math.random() * filenames.length)],
            mime_type: 'application/pdf',
            size: Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000),
            hash: makeString(),
            public: false,
            parent: Math.random() < 0.5? folders_ids[Math.floor(Math.random() * folders_ids.length)]: null,
            created_at: new Date().toLocaleDateString('es-pa')
        });
    }

    return res;
}

function generateFolders(): StorageFolder[] {
    const res: StorageFolder[] = [
        { id: 1, name: 'images', public: false, parent: null, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 2, name: 'other', public: false, parent: null, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 3, name: 'courses', public: false, parent: null, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 4, name: 'vocations', public: false, parent: 1, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 5, name: 'mounants', public: false, parent: 4, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 6, name: 'sea', public: false, parent: 4, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 7, name: 'books', public: false, parent: null, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 8, name: 'literature', public: false, parent: 8, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 9, name: 'programming', public: false, parent: 8, created_at: new Date().toLocaleDateString('es-pa')},
        { id: 10, name: 'family', public: false, parent: 1, created_at: new Date().toLocaleDateString('es-pa')},
    ];
    return res;
}


const FOLDERS: StorageFolder[] = generateFolders();
const FILES: StorageFile[] = generateFiles(FOLDERS);


@Injectable()
export class StorageService {

    getFiles(parent: number|null): Observable<StorageFile[]> {
        return of(FILES).pipe(
            map(items => items.filter(f => f.parent === parent))
        );
    }

    getFolders(parent: number|null): Observable<StorageFolder[]> {
        return of(FOLDERS).pipe(
            map(items => items.filter(f => f.parent === parent))
        );
    }
}