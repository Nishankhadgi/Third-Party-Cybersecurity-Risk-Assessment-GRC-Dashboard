# Limitations, Assumptions, and Safe Use

1. Synthetic data: all vendors, assessments, findings, owners, evidence states, and dates are fictional.
2. No external integrations: the prototype does not connect to vendor portals, ticketing tools, identity providers, cloud accounts, or GRC platforms.
3. Browser-only persistence: changes are stored in browser localStorage. There is no authentication, authorization, server-side database, audit log, or multi-user workflow.
4. Illustrative scoring: weights, evidence multipliers, thresholds, and bands are design assumptions. They are not prescribed by NIST and require governance approval before operational use.
5. Evidence validation: the app captures response and evidence-confidence labels but does not ingest, inspect, cryptographically verify, or independently validate evidence artefacts.
6. No certification or audit opinion: framework references are partial mapping pointers, not evidence of compliance, certification, or audit assurance.
7. No automated legal assessment: country and data-sensitivity fields do not determine GDPR, HIPAA, or other legal applicability.
8. No real-time monitoring: scores and findings change only when users edit sample records.
9. No enforced risk approval: acceptance and action closure do not require approver authority, expiry, closure testing, or segregation of duties.
10. No production security claim: the public demo is for non-sensitive portfolio review. Do not enter real vendor, customer, employee, security, or contract information.

## Work required before production use

A real enterprise implementation needs identity and role-based access control, server-side persistence, immutable activity history, evidence storage and access controls, encryption, backups, tenant isolation, approval workflows, integration testing, vulnerability management, privacy review, retention controls, and a formally approved risk methodology.