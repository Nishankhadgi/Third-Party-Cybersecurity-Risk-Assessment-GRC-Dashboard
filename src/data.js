export const CONTROLS=[
{id:"IAM-01",domain:"Identity & access",title:"Multi-factor authentication",question:"Is MFA enforced for workforce access and all privileged or remote access paths?",weight:3,mandatory:true,mapping:"NIST CSF 2.0 PR.AA"},
{id:"IAM-02",domain:"Identity & access",title:"Privileged access management",question:"Are privileged accounts inventoried, approved, monitored, and periodically reviewed?",weight:3,mandatory:true,mapping:"NIST CSF 2.0 PR.AA"},
{id:"DAT-01",domain:"Data security",title:"Encryption and key management",question:"Is sensitive data encrypted in transit and at rest with managed key rotation?",weight:3,mandatory:true,mapping:"NIST CSF 2.0 PR.DS"},
{id:"DAT-02",domain:"Data security",title:"Data handling and retention",question:"Are data classification, minimization, retention, deletion, and return requirements defined?",weight:2,mandatory:false,mapping:"NIST CSF 2.0 PR.DS"},
{id:"VUL-01",domain:"Vulnerability management",title:"Vulnerability and patch management",question:"Are assets scanned, vulnerabilities risk-ranked, and critical patches remediated to defined SLAs?",weight:3,mandatory:false,mapping:"NIST CSF 2.0 ID.RA / PR.PS"},
{id:"IR-01",domain:"Incident response",title:"Incident notification and response",question:"Are incident response procedures tested and contractual notification timelines documented?",weight:3,mandatory:true,mapping:"NIST CSF 2.0 RS.MA"},
{id:"BCP-01",domain:"Resilience",title:"Business continuity and disaster recovery",question:"Are recovery objectives documented and backup restoration or DR tests performed?",weight:2,mandatory:false,mapping:"NIST CSF 2.0 RC.RP"},
{id:"LOG-01",domain:"Monitoring",title:"Security logging and monitoring",question:"Are security events centrally logged, monitored, retained, and escalated?",weight:2,mandatory:false,mapping:"NIST CSF 2.0 DE.CM"},
{id:"SDLC-01",domain:"Software supply chain",title:"Secure development and provenance",question:"Are secure SDLC practices, dependency inventory, code review, and build pipeline protections in place?",weight:2,mandatory:false,mapping:"NIST SP 800-161 Rev. 1"},
{id:"TPRM-01",domain:"Fourth-party risk",title:"Subprocessor and supply-chain oversight",question:"Are subcontractors identified, assessed, contractually controlled, and monitored?",weight:2,mandatory:false,mapping:"NIST CSF 2.0 GV.SC"}];
const vendorSeeds=[
["V-1001","AsterPay Gateway","Payment processing","Critical","United States","High",5,5],
["V-1002","Nimbus Cloud Services","Cloud infrastructure","Critical","United States","High",5,4],
["V-1003","BlueOak Identity","Identity provider","High","Ireland","High",4,4],
["V-1004","SentinelBridge MDR","Managed security","High","United States","Moderate",4,3],
["V-1005","HarborCRM","Customer platform","High","Canada","High",4,4],
["V-1006","LedgerLine Analytics","Data analytics","Moderate","United States","Moderate",3,4],
["V-1007","PeopleArc HR","HR technology","Moderate","United Kingdom","Moderate",3,3],
["V-1008","QuarryDev Studio","Software development","High","India","High",4,4],
["V-1009","Northstar Backup","Backup and recovery","Moderate","Germany","Moderate",3,3],
["V-1010","ClearRoute Support","Customer support","Low","Philippines","Moderate",2,3],
["V-1011","VectorFleet Network","Network services","Moderate","United States","Low",3,2],
["V-1012","CedarDocs Sign","Document services","Low","Australia","Low",2,2]];
function seededResponses(index){const patterns=[["implemented","verified"],["partial","limited"],["implemented","verified"],["partial","unverified"],["implemented","limited"],["implemented","verified"],["not_assessed","unverified"],["implemented","verified"],["partial","limited"],["not_assessed","unverified"]];const result={};CONTROLS.forEach((c,i)=>{let [status,evidence]=patterns[(i+index)%patterns.length];if((index+i)%7===0)status="not_implemented";if((index+i)%5===0){status="not_assessed";evidence="unverified";}result[c.id]={status,evidence,notes:""};});return result;}
export const INITIAL_VENDORS=vendorSeeds.map((s,i)=>({id:s[0],name:s[1],category:s[2],criticality:s[3],country:s[4],dataSensitivity:s[5],likelihood:s[6],impact:s[7],owner:["Alex Morgan","Jordan Lee","Priya Shah","Taylor Reed"][i%4],lastReviewed:"2026-10-"+String(8+i).padStart(2,"0"),nextReview:"2027-04-"+String(8+i).padStart(2,"0"),status:"In review",responses:seededResponses(i)}));
export const INITIAL_RISKS=[
{id:"R-2001",vendorId:"V-1001",controlId:"IR-01",title:"Incident notification evidence not validated",severity:"Critical",owner:"Security Assurance",dueDate:"2026-12-05",status:"Open",recommendation:"Obtain and review incident-response exercise results and contract notification terms."},
{id:"R-2002",vendorId:"V-1002",controlId:"IAM-02",title:"Privileged access review has exceptions",severity:"High",owner:"Cloud Governance",dueDate:"2026-12-12",status:"In progress",recommendation:"Reconcile privileged identities and retain evidence of quarterly recertification."},
{id:"R-2003",vendorId:"V-1003",controlId:"DAT-01",title:"Encryption key rotation evidence incomplete",severity:"High",owner:"Data Protection",dueDate:"2026-12-18",status:"Open",recommendation:"Validate key rotation configuration and obtain dated configuration evidence."},
{id:"R-2004",vendorId:"V-1005",controlId:"TPRM-01",title:"Subprocessor inventory requires refresh",severity:"Moderate",owner:"Vendor Management",dueDate:"2027-01-10",status:"Open",recommendation:"Obtain current subprocessor list and assess material fourth parties."},
{id:"R-2005",vendorId:"V-1008",controlId:"SDLC-01",title:"Software provenance artifacts not provided",severity:"High",owner:"Application Security",dueDate:"2026-12-20",status:"In progress",recommendation:"Request SBOM, dependency scanning evidence, and secure build pipeline controls."},
{id:"R-2006",vendorId:"V-1004",controlId:"VUL-01",title:"Remediation SLA exceptions need validation",severity:"Moderate",owner:"Security Operations",dueDate:"2027-01-15",status:"Open",recommendation:"Review vulnerability aging and approved exception records."},
{id:"R-2007",vendorId:"V-1006",controlId:"LOG-01",title:"Central monitoring coverage is partially evidenced",severity:"Moderate",owner:"Technology Risk",dueDate:"2027-01-22",status:"Closed",recommendation:"Validate log-source coverage and escalation workflow evidence."}];
export const INITIAL_ACTIONS=[
{id:"CAP-301",riskId:"R-2001",title:"Validate incident response evidence",owner:"Security Assurance",dueDate:"2026-12-05",status:"Open",priority:"Critical"},
{id:"CAP-302",riskId:"R-2002",title:"Complete privileged access recertification",owner:"Cloud Governance",dueDate:"2026-12-12",status:"In progress",priority:"High"},
{id:"CAP-303",riskId:"R-2003",title:"Collect key management evidence",owner:"Data Protection",dueDate:"2026-12-18",status:"Open",priority:"High"},
{id:"CAP-304",riskId:"R-2004",title:"Refresh fourth-party inventory",owner:"Vendor Management",dueDate:"2027-01-10",status:"Open",priority:"Moderate"},
{id:"CAP-305",riskId:"R-2005",title:"Review SBOM and build controls",owner:"Application Security",dueDate:"2026-12-20",status:"In progress",priority:"High"},
{id:"CAP-306",riskId:"R-2007",title:"Confirm central log-source coverage",owner:"Technology Risk",dueDate:"2026-11-15",status:"Closed",priority:"Moderate"}];