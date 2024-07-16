const prepareEmailContent = (subject, emailData) => {
    let pageTitle, preheaderText, heroSection, mainSection, footerContent;

    switch (subject) {
        case 'System Error - Critical Issue Detected':
            pageTitle = 'Critical System Alert for Administrators';
            preheaderText =
                'Urgent: Critical issue detected in the system that requires your immediate attention.';
            heroSection = `
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                          <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Attention Required: Critical System Alert</h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
            `;
            mainSection = `
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                          <p style="margin: 0;">A critical issue has been detected within our system infrastructure that requires your immediate investigation. Details of the error are as follows:</p>
                          <ul>
                            <li>Reason: ${emailData.reason}</li>
                            <li>Error Code: ${emailData.errorCode}</li>
                            <li>Component: ${emailData.component}</li>
                            <li>Path: ${emailData.path}</li>
                            <li>Address: ${emailData.address}</li>
                            <li>Port: ${emailData.port}</li>
                            <li>Time Detected: ${emailData.timeDetected}</li>
                          </ul>
                          <p>Please assess the situation and initiate the necessary protocols to mitigate the issue.</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                      <a href="${emailData.dashboardLink}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Go to Dashboard</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                          <p style="margin: 0;">For additional support or to report further issues, please contact our technical support team.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
            `;
            footerContent = `
                <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                      <p style="margin: 0;">You received this email because we received a password reset request for your account. If you didn't request this you can safely delete this email.</p>
                    </td>
                </tr>
            `;

            break;
        default:
            return null; // Return null if subject does not match known types
    }

    return {
        pageTitle,
        preheaderText,
        heroSection,
        mainSection,
        footerContent,
    };
};

export default prepareEmailContent;
