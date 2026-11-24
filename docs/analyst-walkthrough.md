# Analyst Walkthrough

## Scenario

A fictional financial technology company relies on external providers for payment processing, cloud infrastructure, identity, managed security, customer platforms, software development, and other services. The analyst maintains a vendor inventory, assesses cybersecurity controls, records gaps, and monitors corrective actions.

## Demonstration sequence

1. Start on Executive overview and explain why incomplete assessments do not receive residual risk ratings.
2. Open Vendor assessments and select AsterPay Gateway. Review inherent risk, coverage, and evidence confidence.
3. Change a control from Implemented to Partially implemented and select Limited evidence. Save and explain the recalculation.
4. Mark a mandatory control Not assessed and demonstrate why residual rating is withheld.
5. Open Risk register and explain the link between finding, vendor, control, owner, recommendation, and treatment status.
6. Open Remediation tracker and update an action. Explain that the prototype does not perform independent closure validation.
7. Open Scoring methodology and explain the formulas, assumptions, framework references, and limitations.
8. Export vendor inventory or risk register to CSV.

## Interview prompts

- Why separate implementation status from evidence confidence?
- Why suppress residual risk when assessment coverage is incomplete?
- What evidence would validate MFA, privileged access, encryption, incident response, and recovery testing?
- How should an exception or compensating control be documented?
- Who should approve risk acceptance and finding closure?
- How would the assessment differ for a critical payment processor and a low-criticality SaaS provider?
- What is required before migrating browser storage into an enterprise GRC workflow?

## Project explanation

"I built a third-party cybersecurity risk assessment prototype to demonstrate how a GRC analyst can organize a fictional vendor inventory, assess weighted security controls, distinguish implementation from evidence confidence, identify incomplete assessments, calculate illustrative inherent and residual risk, and monitor findings and corrective actions. The project includes transparent scoring methodology, synthetic data, CSV exports, scoring-engine tests, and explicit limitations so that the dashboard does not overstate assurance."