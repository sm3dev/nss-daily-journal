const getJournalEntries = () => {
  return fetch("daily-journal.json")
    .then((response) => response.json())
    .then((parsedData) => {
      console.log(parsedData);
    });
};
