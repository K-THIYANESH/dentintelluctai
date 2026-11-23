export type Role='Student'|'Faculty'|'HOD'|'Administrator';
export type Status='verified'|'pending'|'draft'|'returned';
export type SyncStatus='synced'|'pending'|'failed';
export interface Patient{id:string;age:number;gender:string;conditions:string[];lastVisit:string;toothConditions:Record<number,string>;}
export interface DentalCase{id:string;patientId:string;student:string;studentId:string;faculty:string;procedure:string;diagnosis:string;date:string;submittedAt:string;status:Status;syncStatus:SyncStatus;teeth:number[];notes:string;materials:string[];}
export interface Student{id:string;year:number;}
export interface Faculty{id:string;}
