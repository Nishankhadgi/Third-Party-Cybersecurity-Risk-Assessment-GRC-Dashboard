# Risk Scoring and Assessment Methodology

## Purpose and status

This document describes the transparent, illustrative scoring model used by the Northstar Third-Party Risk Office portfolio application. It is a demonstration design, not an official NIST formula, certification, audit opinion, legal assessment, or substitute for an organization's approved risk methodology.

## 1. Inherent risk

Inherent score = likelihood (1–5) × impact (1–5). The result is bounded from 1 to 25.

| Score | Band |
|---:|---|
| 1–4 | Low |
| 5–9 | Moderate |
| 10–16 | High |
| 17–25 | Critical |

A real program should publish detailed likelihood and impact descriptors and calibrate them to its service tiers, loss scenarios, and risk appetite.

## 2. Control implementation and evidence confidence

Implementation and evidence confidence are considered separately.

| Implementation response | Base score |
|---|---:|
| Implemented | 1.00 |
| Partially implemented | 0.50 |
| Not implemented | 0.00 |
| Not assessed | Excluded from assessed weight; reduces coverage |
| Not applicable | Excluded from applicable denominator after documented applicability decision |

| Evidence confidence | Multiplier |
|---|---:|
| Verified | 1.00 |
| Limited | 0.80 |
| Unverified | 0.60 |

Illustrative contribution = implementation score × evidence confidence × control weight.

Control effectiveness = sum of weighted contributions ÷ assessed applicable control weight.

The multipliers are portfolio design assumptions. An unverified response is not proof that a control operates effectively. Real evidence review should consider control-specific requirements, scope, period, sampling, exceptions, and independent validation.

## 3. Coverage and completion gate

Coverage = assessed applicable control weight ÷ total applicable control weight.

Assessed responses are Implemented, Partially Implemented, and Not Implemented. Not Assessed reduces coverage. Not Applicable is removed from the denominator only after a defensible applicability decision.

Residual risk is withheld when coverage is below 80% or any mandatory control remains unanswered. The 80% threshold and mandatory controls are design choices, not NIST requirements.

## 4. Residual risk

For an assessment that passes the completion gate:

Residual score = max(1, ceil(inherent score × (1 − control effectiveness))).

The score is an illustrative indicator, not a calibrated probability or financial-loss estimate.

## 5. Evidence expectations

A real evidence record should identify source, owner, date received, review period, control objective, systems in scope, whether evidence is direct or self-attested, reviewer, limitations, exceptions, conclusion, and reassessment date. Examples include configuration extracts, access review records, vulnerability reports, incident exercise results, DR tests, independent audit reports, and contract artefacts.

## 6. Risk treatment

A real finding should document condition, criteria, cause, consequence, affected service, severity rationale, accountable owner, target date, recommendation, and closure evidence. Risk acceptance should include authorized approver, rationale, scope, compensating controls, expiry date, and review trigger. Marking an item Closed in this prototype is a status change only.

## 7. Framework references

- NIST CSF 2.0: https://www.nist.gov/cyberframework
- NIST SP 800-161 Rev. 1 Update 1: https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final
- NIST SP 1326 Final: https://csrc.nist.gov/pubs/sp/1326/final

Mappings are pointers to relevant outcomes and guidance, not full control-coverage or certification statements.