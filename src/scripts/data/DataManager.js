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
};

// Create a new post and save it to the database
export const newPost = (postObj) => {
  return fetch("http://localhost:8888/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  }).then((response) => response.json());
};

export const getEntries = () => {
  return fetch("http://localhost:8888/entries")
    .then((response) => response.json())
    .then((parsedResponse) => {
      entryCollection = parsedResponse;
      return parsedResponse;
    });
};

// This method will retrieve a single post. This ensures we have the latest and greatest information from the database
export const getSingleEntry = (entryId) => {
  return fetch(`http://localhost:8888/entries/${entryId}?_expand=mood`).then((response) =>
    response.json()
  );
};

// This method will update a post in the database. We will use the database verb PUT in the fetch call. This does not create a new item. This replaces the data with the matching id.
export const updateEntry = (entryObj) => {
  return fetch(`http://localhost:8888/entries/${entryObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entryObj),
  })
    .then((response) => response.json())
    .then(getEntries);
};
