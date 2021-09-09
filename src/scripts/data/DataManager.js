const loggedInUser = {
    id: 1,
    fullName: "Michael Wright",
    email: "mike@nss.pizza",
  };
  
  export const getLoggedInUser = () => {
    return loggedInUser;
  };

  let entryCollection = [];
  
  export const useEntryCollection = () => {
    return [...entryCollection];
  }

  export const getEntries = () => {
      return fetch("http://localhost:8888/entries").then(response => response.json()).then(parsedResponse => {
        entryCollection = parsedResponse;
        console.log("Journal entry collection is this:", entryCollection);
        return parsedResponse;
      })
  }

  // const getJournalEntries = () => {
  //   return fetch("daily-journal.json")
  //     .then(response => response.json())
  //     .then((parsedData) => {
  //       console.log(parsedData);
  //     });
  // };