export const RISK_BANDS=[{label:"Low",min:1,max:4},{label:"Moderate",min:5,max:9},{label:"High",min:10,max:16},{label:"Critical",min:17,max:25}];
const IMPLEMENTATION_SCORE={implemented:1,partial:.5,not_implemented:0,not_assessed:null,not_applicable:null};
const EVIDENCE_FACTOR={verified:1,limited:.8,unverified:.6};
export function bandFor(score){if(score===null||score===undefined||Number.isNaN(Number(score)))return"Unrated";const n=Number(score);return RISK_BANDS.find(b=>n>=b.min&&n<=b.max)?.label||"Unrated";}
export function calculateVendorRisk(vendor,controls){
 const applicable=controls.filter(c=>vendor.responses?.[c.id]?.status!=="not_applicable");
 const totalApplicableWeight=applicable.reduce((s,c)=>s+Number(c.weight),0);
 const assessed=applicable.filter(c=>{const x=vendor.responses?.[c.id];return x&&IMPLEMENTATION_SCORE[x.status]!==null&&IMPLEMENTATION_SCORE[x.status]!==undefined;});
 const assessedWeight=assessed.reduce((s,c)=>s+Number(c.weight),0);
 const coverage=totalApplicableWeight?assessedWeight/totalApplicableWeight:0;
 const effectivenessNumerator=assessed.reduce((s,c)=>{const x=vendor.responses[c.id];return s+IMPLEMENTATION_SCORE[x.status]*(EVIDENCE_FACTOR[x.evidence]??.6)*Number(c.weight);},0);
 const effectiveness=assessedWeight?effectivenessNumerator/assessedWeight:0;
 const criticalUnresolved=applicable.some(c=>c.mandatory&&IMPLEMENTATION_SCORE[vendor.responses?.[c.id]?.status]==null);
 const inherentScore=Math.max(1,Math.min(25,Number(vendor.likelihood)*Number(vendor.impact)));
 const assessmentComplete=coverage>=.8&&!criticalUnresolved;
 const residualScore=assessmentComplete?Math.max(1,Math.ceil(inherentScore*(1-effectiveness))):null;
 return{inherentScore,inherentBand:bandFor(inherentScore),coverage,assessedWeight,totalApplicableWeight,effectiveness,criticalUnresolved,assessmentComplete,residualScore,residualBand:bandFor(residualScore)};
}
export function formatPercent(value,digits=0){return(Number(value||0)*100).toFixed(digits)+"%";}
export function riskColorClass(band){return String(band||"unrated").toLowerCase();}