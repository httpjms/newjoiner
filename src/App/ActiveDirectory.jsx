import Notification from "../Utils/Notification";
import "./apps.css";
import useClipboard from "../Utils/CopyToClipboard";
import { useState } from "react";

function ActiveDirectory({ employee }) {
  let additionalApps = "";
  const [defaultApp, setDefaultApp] = useState(
    `AAD_Sync;Okta_Agent_Contact_Users;Okta_Citrix_${employee.selectedCountry}_Users;Okta_Concur_${employee.selectedCountry}_Users;Okta_Concur_${employee.selectedCountry}_Users;Okta_corp_philanthropy_Prod_Users;Okta_Coruson_Prod_Users;Okta_Dashlane_${employee.selectedCountry}_Users;Okta_Data_Asset_Register_Prod;Okta_GiftsAndHospitality_Prod_Users;Okta_Ideation_Portal_Users;Okta_Intranet_${employee.selectedCountry}_Users;Okta_K2PROD_Users;Okta_Litmos_${employee.selectedCountry}_Users;Okta_ME_Users;Okta_OnshoreEvent_Users;Okta_Percipio_${employee.selectedCountry}_Users;Okta_SwireConnect_${employee.selectedCountry}_Users;Okta_VIrtualGratitude_${employee.selectedCountry}_Users;Okta_Zendesk_SS_KB_Prod_Users;Okta_Zoom_CNCO;`
  );

  if (employee.selectedCountry === "SG") {
    additionalApps =
      "Okta_Condeco_Prod;Okta_Ramco_Prod_Users;Okta_OnshoreSafety_Prod_Users;Okta_MediusFlow_users;";
  } else if (employee.selectedCountry === "IN") {
    additionalApps = "Okta_Ramco_Prod_Users;";
  }

  const copyAD = `Fullname: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.emailAdd}\nADID: ${employee.adid}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nAddress: ${employee.address}\nZip Code: ${employee.zipCode}\nCountry: ${employee.country}\n\n Copy the below AD Groups to the "Member of" tab\n\n  ${defaultApp}${additionalApps}`;

  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyAD.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyAD.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div>
        <button onClick={() => copyToClipboard(copyAD)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default ActiveDirectory;
