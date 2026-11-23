import {openDB} from 'idb';
const dbPromise=openDB('dentintellect-local',1,{upgrade(db){db.createObjectStore('cases',{keyPath:'id'});db.createObjectStore('patients',{keyPath:'id'});}});
export async function saveLocalCase(record:unknown){const db=await dbPromise;await db.put('cases',record)}
export async function getLocalCases(){const db=await dbPromise;return db.getAll('cases')}
