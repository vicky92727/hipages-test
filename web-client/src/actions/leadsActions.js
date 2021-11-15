export const getLeads = async () => {
    await fetch("http://localhost/api/leads")
    .then(response => response.json())
    .then(res => {
      var invitedData = res.invited
      var acceptedData = res.accepted
      return {invited : invitedData, accepted : acceptedData};
    });
  }
