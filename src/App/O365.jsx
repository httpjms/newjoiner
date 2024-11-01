import React from "react";
import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

function O365({ employee }) {
  const copyO365 = `Connect-ExchangeOnline -Credential $UserCredential; Connect-AzureAD -Credential $UserCredential\n\n$newUserEmail= '${employee.emailAdd}'\n\n#Add Litigation Hold and set to 2555\nSet-Mailbox $newUserEmail -LitigationHoldEnabled $true -LitigationHoldDuration 2555\n#Enable Auto Archive\nEnable-Mailbox -Identity $newUserEmail -Archive\n#Add to distribution list\nAdd-DistributionGroupMember -Identity "<email of dl>" -Member $newUserEmail\n\n# Define the new user and group search string\n$groupSearchStrings = @("SSL MDM", "Intune User Group - for Mobile")\n# Get the user object\n$newUser = Get-AzureADUser -ObjectId $newUserEmail\n\nif ($newUser) {\n foreach ($groupSearchString in $groupSearchStrings) {\n #Get the group object\n$group = Get-AzureADGroup -SearchString $groupSearchString | Select-Object -First 1\n\n  if ($group) {\n            # Add the user to the group\n  Add-AzureADGroupMember -ObjectId $group.ObjectId -RefObjectId $newUser.ObjectId\n            Write-Host "Added $newUserEmail to $($group.DisplayName)."\n        } else {\n            Write-Host "Group not found: $groupSearchString"\n        }\n    }\n} else {\n    Write-Host "User not found: $newUserEmail"\n}`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <div className="emp-task">
      <div className="emp-details">
        {copyO365.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyO365.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button onClick={() => copyToClipboard(copyO365)}>Copy </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </div>
  );
}

export default O365;
