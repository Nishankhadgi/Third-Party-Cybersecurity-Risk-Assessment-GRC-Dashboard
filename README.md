# Third-Party Cybersecurity Risk Assessment & GRC Analytics

A browser-based portfolio prototype demonstrating a third-party cybersecurity risk assessment workflow for Technology Risk, GRC, IT Audit, and Vendor Risk Analyst roles.

**Live dashboard:** [Open the production application](https://third-party-cybersecurity-risk-assessment-nishankhadgi091-1982.vercel.app/)  
**Repository:** https://github.com/Nishankhadgi/Third-Party-Cybersecurity-Risk-Assessment-GRC-Dashboard  
**Hosting:** Vercel · Vite production build · Static output in `dist/`

> **Important:** This project uses fictional vendor records and illustrative scoring assumptions. It is not an enterprise GRC platform, an audit opinion, a certification assessment, or an official NIST scoring implementation. Do not enter real or confidential vendor data.

## What the application demonstrates

- Vendor inventory and business criticality context.
- Weighted control assessment across identity, data protection, vulnerability management, incident response, resilience, monitoring, software supply chain, and fourth-party oversight.
- Separate implementation status and evidence confidence.
- Assessment coverage checks and a mandatory-control completion gate.
- Illustrative inherent and residual risk scoring.
- Risk register with ownership, recommendations, and treatment status.
- Corrective action tracking.
- CSV exports for vendor inventory, findings, actions, and summary data.
- Local browser persistence for demonstration edits.
- Automated unit tests for the scoring engine.

## Application screens

1. **Executive overview:** vendor exposure, incomplete assessments, residual risk distribution, and priority vendors.
2. **Vendor assessments:** search and filter vendors, add a fictional supplier, inspect control questions, update responses and evidence confidence, and recalculate scores.
3. **Risk register:** review findings, owners, severity, recommendations, due dates, and treatment status.
4. **Remediation tracker:** view corrective actions and update sample action status.
5. **Scoring methodology:** inspect formulas, assumptions, framework reference points, and limitations.

## Technology stack

| Layer | Technology |
|---|---|
| Application | Vanilla JavaScript ES modules |
| Build tooling | Vite |
| Styling | Responsive CSS |
| Risk calculation | Reusable JavaScript scoring module |
| Persistence | Browser localStorage |
| Export | Client-side CSV |
| Tests | Node.js built-in test runner |
| Hosting | Vercel static deployment |

The prototype does not use a backend database, authentication, server-side APIs, or external vendor integrations.

## Run locally

Requirements: Node.js 20.19+ (Node.js 22 recommended) and npm.

~~~bash
git clone https://github.com/Nishankhadgi/Third-Party-Cybersecurity-Risk-Assessment-GRC-Dashboard.git
cd Third-Party-Cybersecurity-Risk-Assessment-GRC-Dashboard
npm install
npm run dev
~~~

Open the local URL printed by Vite.

## Test and build

~~~bash
npm test
npm run build
npm run preview
~~~

## Deploy on Vercel

The production dashboard is already deployed at the live URL above. The repository includes `vercel.json` with the Vite build configuration:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

**Deployment workflow note:** the current production deployment was uploaded directly to Vercel and is not yet linked to this GitHub repository for automatic push deployments. To enable automatic deployments, open the Vercel project, go to **Settings → Git**, and connect this repository with `main` as the production branch.

## Illustrative scoring approach

### Inherent risk

Likelihood (1–5) × Impact (1–5).

### Control effectiveness

Implementation response scores:
- Implemented: 1.00
- Partially implemented: 0.50
- Not implemented: 0.00

Evidence confidence multipliers:
- Verified: 1.00
- Limited: 0.80
- Unverified: 0.60

Control contribution is implementation score × evidence confidence × control weight. Control effectiveness is the weighted contribution total divided by assessed applicable control weight.

### Coverage and residual risk

Coverage is assessed applicable weight divided by total applicable weight. Residual risk is withheld when coverage is below 80% or a mandatory control is unanswered.

For a complete assessment:

Residual = max(1, ceil(Inherent × (1 − Control Effectiveness)))

Bands: 1–4 Low, 5–9 Moderate, 10–16 High, and 17–25 Critical.

The coverage threshold, mandatory control flags, weights, evidence multipliers, and formulas are design choices for demonstration. They are not prescribed by NIST. See [docs/methodology.md](docs/methodology.md).

## Framework reference points

- NIST Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework
- NIST SP 800-161 Rev. 1 Update 1: https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final
- NIST SP 1326 Final, Due Diligence Assessment: https://csrc.nist.gov/pubs/sp/1326/final

The dashboard includes partial mapping references to relevant framework outcomes and guidance. These mappings do not imply full control coverage or certification.

## Repository structure

~~~text
src/
  data.js                 Fictional vendors, controls, findings, and actions
  main.js                 Dashboard screens and user interactions
  risk-engine.js          Reusable and tested risk calculations
  styles.css              Responsive dashboard styling
tests/
  risk-engine.test.js     Unit tests for scoring and coverage gates
docs/
  methodology.md          Formulas, assumptions, and evidence expectations
  data-dictionary.md      Field definitions and local persistence
  limitations.md          Safe-use and production-readiness boundaries
  analyst-walkthrough.md  Demonstration flow and interview prompts
.github/workflows/
  quality.yml             Test and build checks on push and pull request
~~~

## Data, privacy, and limitations

- Data is synthetic and intended only for portfolio demonstration.
- User edits persist in the current browser using localStorage.
- There is no user authentication, access control, server-side database, audit trail, or cross-device sync.
- Evidence files are not uploaded, read, or independently validated.
- Risk acceptance and action closure are not subject to approval workflows or independent verification.
- No legal, regulatory, or certification conclusion is generated.

A production service would require secure identity and role management, server-side storage, immutable activity history, evidence handling, encryption, backups, auditability, privacy and retention controls, formal governance approval of scoring, and security testing.

## Author

**Nishan Khadgi**  
Technology Risk / Cybersecurity GRC portfolio project.
