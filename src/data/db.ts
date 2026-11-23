import type {Patient,DentalCase,Student,Faculty} from '../types/dental';

export const students:Student[]=[
  {id:'ST-301',year:3},{id:'ST-302',year:3},{id:'ST-303',year:3},
  {id:'ST-401',year:4},{id:'ST-402',year:4},{id:'ST-403',year:4},
  {id:'ST-404',year:4},{id:'ST-405',year:4}
];

export const faculty:Faculty[]=[
  {id:'FC-01'},{id:'FC-02'},{id:'FC-03'}
];

const patientRecords=[
  [42,'Female',['Hypertension'],'18 Nov 2026'],
  [28,'Male',[],'16 Nov 2026'],
  [35,'Female',['Drug allergy: Penicillin'],'14 Nov 2026'],
  [51,'Male',['Type 2 diabetes'],'12 Nov 2026'],
  [19,'Female',[],'10 Nov 2026'],
  [63,'Male',['Hypertension','Type 2 diabetes'],'08 Nov 2026'],
  [31,'Female',[],'06 Nov 2026'],
  [24,'Male',[],'04 Nov 2026'],
  [57,'Female',['Drug allergy: Sulfonamides'],'02 Nov 2026'],
  [16,'Male',[],'30 Oct 2026'],
  [46,'Female',['Hypothyroidism'],'28 Oct 2026'],
  [39,'Male',[],'26 Oct 2026']
] as const;

const toothConditions:Record<number,Record<number,string>>={
  0:{16:'caries',26:'restored',36:'caries'},
  1:{46:'restored',11:'healthy'},
  2:{36:'root canal',37:'caries'},
  3:{14:'restored',24:'restored'},
  4:{11:'healthy',21:'healthy'},
  5:{36:'missing',46:'missing'},
  6:{12:'caries',22:'restored'},
  7:{48:'missing'},
  8:{31:'caries',41:'restored'},
  9:{11:'healthy',21:'healthy'},
  10:{16:'missing',26:'missing'},
  11:{47:'abscess'}
};

export const patients:Patient[]=patientRecords.map((record,index)=>({
  id:`PT-2026-${String(index+1).padStart(3,'0')}`,
  age:record[0],
  gender:record[1],
  conditions:[...record[2]],
  lastVisit:record[3],
  toothConditions:toothConditions[index]||{}
}));

const base=Date.now();
const ago=(hours:number)=>new Date(base-hours*3600000).toISOString();
const caseRecords=[
  ['PT-2026-001','ST-301','FC-01','Periodontics','Chronic generalized periodontitis',5,[16,26],'Full-mouth scaling and root planing completed. BOP reduced.'],
  ['PT-2026-002','ST-302','FC-02','Operative dentistry','Dental caries — Class II',18,[46],'Composite restoration placed on 46 distal-occlusal surface.'],
  ['PT-2026-003','ST-303','FC-03','Endodontics','Irreversible pulpitis — tooth 36',31,[36],'Pulpectomy initiated. Working length confirmed radiographically.'],
  ['PT-2026-004','ST-401','FC-01','Oral surgery','Impacted mandibular third molar',52,[48],'Surgical extraction of impacted 48 under local anaesthesia.'],
  ['PT-2026-005','ST-402','FC-02','Prosthodontics','Partial edentulism',9,[36,46],'Preliminary impression recorded for mandibular cast partial denture.'],
  ['PT-2026-006','ST-403','FC-03','Orthodontics','Class II division 1 malocclusion',70,[11,21],'Initial orthodontic records and treatment planning completed.'],
  ['PT-2026-007','ST-404','FC-01','Oral diagnosis','Recurrent dental caries',80,[12,22],'Comprehensive oral examination and risk assessment documented.'],
  ['PT-2026-008','ST-405','FC-02','Operative dentistry','Dental caries — Class I',110,[16],'Occlusal composite restoration completed.']
] as const;

export const cases:DentalCase[]=caseRecords.map((record,index)=>({
  id:`CASE-2026-${String(1042+index).padStart(4,'0')}`,
  patientId:record[0],
  student:'Student',
  studentId:record[1],
  faculty:'Faculty',
  procedure:record[3],
  diagnosis:record[4],
  date:new Date(base-record[5]*3600000).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}),
  submittedAt:ago(record[5]),
  status:index===0||index===1||index===4||index===6?'verified':index===7?'draft':'pending',
  syncStatus:'synced',
  teeth:[...record[6]],
  notes:record[7],
  materials:index===1?['Nano-hybrid composite','37% phosphoric acid']:index===2?['Calcium hydroxide','Gutta-percha']:['Standard clinical materials']
}));

export const categories=['Oral diagnosis','Periodontics','Operative dentistry','Endodontics','Oral surgery','Prosthodontics','Orthodontics'];
export const requirements:Record<string,number[]>={'ST-301':[7,5,4,2,1,1,0],'ST-302':[8,3,7,2,1,0,0],'ST-303':[6,4,3,6,2,0,0],'ST-401':[9,8,8,7,6,5,4],'ST-402':[8,7,9,6,4,7,3],'ST-403':[7,6,8,8,7,4,5],'ST-404':[9,9,7,6,5,6,7],'ST-405':[6,5,8,5,4,3,6]};
export async function getPatients(){return patients}
export async function getCases(){return cases}
