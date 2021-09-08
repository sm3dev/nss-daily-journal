const loggedInUser = {
    id: 1,
    fullName: "Michael Wright",
    email: "mike@nss.pizza",
  };
  
  export const getLoggedInUser = () => {
    return loggedInUser;
  };

  export const getEntries = () => {
      return fet
  }

  const getJournalEntries = () => {
    return fetch("daily-journal.json")
      .then(response => response.json())
      .then((parsedData) => {
        console.log(parsedData);
      });
  };