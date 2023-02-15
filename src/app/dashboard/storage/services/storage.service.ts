import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StorageFile } from "../models";


function makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    return outString;
}

function generateFiles(): StorageFile[] {
    const filenames = ['resume.pdf', 'note.txt', 'c programming language.pdf', 'learn SQL.pdf',
        'Edvantures of Sherlock Holmes.pdf', 'Learn Python.pdf', 'passwords.pdf',
        'Google Privacy Policy.pdf', 'Youtube API.pdf'];
    const res: StorageFile[] = [];
    for (let index = 0; index < 65; index++) {
        res.push({
            id: Math.floor(Math.random() * (9999 - 1000 + 1) + 9999),
            name: filenames[Math.floor(Math.random() * filenames.length)],
            mime_type: 'application/pdf',
            size: Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000),
            hash: makeString(),
            public: false,
            parent: null,
            created_at: new Date().toLocaleDateString('es-pa')
        });
    }

    return res;
}

const FILES: StorageFile[] = generateFiles();

const FOLDERS = [

]

@Injectable()
export class StorageService {

    getFiles(): Observable<StorageFile[]> {
        return of(FILES);
    }

}