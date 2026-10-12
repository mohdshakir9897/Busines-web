/**
 * HEXBYTE Enterprise Email Templates
 * Configured for Firebase Trigger Email Extension (mail collection in Firestore)
 */

import { SITE_URL } from '../config/site';

export interface EmailTemplateConfig {
  subject: string;
  html: (data: Record<string, string>) => string;
  text: (data: Record<string, string>) => string;
}

export const EMAIL_TEMPLATES = {
  // 1. Newsletter Welcome Email
  newsletterWelcome: {
    subject: 'Welcome to The Autonomous Enterprise Journal | HEXBYTE',
    html: ({ email }: { email: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to HEXBYTE Journal</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070712; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #E2E8F0;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070712; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; padding: 40px;">
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <img src="${SITE_URL}/brand/hexbyte-logo-4x1-transparent.png" alt="HEXBYTE logo" height="40" style="display: block; border: 0;" />
            </td>
          </tr>
          <tr>
            <td>
              <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0 0 16px; text-align: left;">Welcome to The Autonomous Enterprise Journal</h1>
              <p style="color: #94A3B8; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for subscribing (${email}). Every second Tuesday, HEXBYTE Principal Systems Engineers deliver unvarnished architectural teardowns, peer benchmarks, and eBPF kernel incident analyses directly to your inbox.
              </p>
              <div style="background-color: #1E293B; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <p style="color: #38BDF8; font-size: 14px; font-weight: 600; margin: 0 0 8px;">Included with your subscription:</p>
                <ul style="color: #CBD5E1; font-size: 13px; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>2026 Enterprise Distributed Systems Benchmark Dossier</li>
                  <li>Kernel bypass vs. Envoy sidecar latency comparative metrics</li>
                  <li>Early invitations to closed architecture roundtables</li>
                </ul>
              </div>
              <p style="color: #64748B; font-size: 12px; line-height: 1.5; margin: 30px 0 0; border-top: 1px solid #1E293B; padding-top: 20px;">
                © 2026 HEXBYTE. All rights reserved. 500 Howard Street, Suite 400, San Francisco, CA 94105.<br/>
                You received this email because you subscribed on ${SITE_URL.replace("https://", "")}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    text: ({ email }: { email: string }) => `
HEXBYTE | The Autonomous Enterprise Journal
Welcome to the Executive Edition.

Thank you for subscribing (${email}). Every second Tuesday, HEXBYTE Principal Systems Engineers deliver unvarnished architectural teardowns, peer benchmarks, and eBPF kernel incident analyses directly to your inbox.

Access your research: ${SITE_URL}/resources

© 2026 HEXBYTE. All rights reserved.
`
  },

  // 2. Lead & Demo Request Confirmation
  demoConfirmation: {
    subject: 'HEXBYTE Architecture Consultation Confirmed [Docket Ref: HEX-REQ]',
    html: ({ name, docketId }: { name: string; docketId?: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>HEXBYTE Consultation Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070712; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #E2E8F0;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070712; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; padding: 40px;">
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <img src="${SITE_URL}/brand/hexbyte-logo-4x1-transparent.png" alt="HEXBYTE logo" height="40" style="display: block; border: 0;" />
            </td>
          </tr>
          <tr>
            <td>
              <div style="display: inline-block; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 9999px; padding: 4px 12px; margin-bottom: 16px;">
                <span style="color: #34D399; font-size: 11px; font-family: monospace; text-transform: uppercase;">Docket Assigned: ${docketId || 'HEX-REQ-ACTIVE'}</span>
              </div>
              <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0 0 16px;">Hello ${name}, your consultation request is confirmed.</h1>
              <p style="color: #94A3B8; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
                Your inquiry has been routed to our Enterprise Systems Architecture desk. A Principal Engineer will contact you within 4 business hours to review your cluster requirements and staging environment topology.
              </p>
              <p style="color: #64748B; font-size: 12px; line-height: 1.5; margin: 30px 0 0; border-top: 1px solid #1E293B; padding-top: 20px;">
                © 2026 HEXBYTE. All rights reserved.<br/>
                San Francisco · New York · London · Singapore · Zurich
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    text: ({ name, docketId }: { name: string; docketId?: string }) => `
HEXBYTE | Architecture Consultation Confirmed
Docket: ${docketId || 'HEX-REQ-ACTIVE'}

Hello ${name},
Your request has been routed to our Enterprise Systems Architecture desk. A Principal Engineer will reach out within 4 business hours.

© 2026 HEXBYTE. All rights reserved.
`
  }
};
