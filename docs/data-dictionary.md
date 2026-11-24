# Data Dictionary

All records shipped with the app are fictional. No real supplier information, credentials, personal data, or confidential evidence is included.

## Vendor
- id: internal sample vendor identifier.
- name: fictional supplier name.
- category: service category.
- criticality: business service criticality label.
- country: illustrative operating / jurisdiction field.
- dataSensitivity: simplified sensitivity label.
- likelihood and impact: inherent risk inputs, each 1–5.
- owner: sample business owner.
- lastReviewed and nextReview: illustrative review dates.
- responses: control response object keyed by control ID.

## Control
- id: stable control reference.
- domain: risk domain.
- title and question: control title and assessment prompt.
- weight: relative scoring weight from 1 to 3.
- mandatory: unanswered response blocks residual rating.
- mapping: pointer to a relevant framework outcome or publication.

## Control response
- status: implemented, partial, not_implemented, not_assessed, or not_applicable.
- evidence: verified, limited, or unverified.
- notes: local text evidence reference or reviewer note.

## Risk finding
- id: sample finding identifier.
- vendorId: related vendor.
- controlId: related control.
- severity: illustrative priority band.
- owner: accountable remediation owner.
- dueDate: target date.
- status: Open, In progress, Accepted, or Closed.
- recommendation: proposed treatment action.

## Remediation action
- id: sample corrective-action identifier.
- riskId: related finding.
- title: action description.
- owner: accountable owner.
- dueDate: target completion date.
- status: Open, In progress, Blocked, or Closed.
- priority: illustrative action priority.

## Persistence

Edits are stored in browser localStorage under northstar-third-party-grc-v1. Data is not synchronized across users or devices and is not stored in a server-side database. Clearing site storage resets sample data. Do not enter sensitive or real vendor information.