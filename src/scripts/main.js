import { EntryList } from "./feed/EntryList.js";
import {
  getEntries,
  getSingleEntry,
} from "./data/DataManager.js";
import { entryViewer } from "./feed/EntryViewer.js";
import { EntryNew } from "./feed/EntryNew.js";
import { entryEdit } from "./feed/EntryEdit.js";

// Add the new Entry form template to the DOM
const showEntryForm = () => {
  const entryElement = document.querySelector(".new-entry-form__block");
  entryElement.innerHTML = EntryNew();
};

showEntryForm();

const showEntryList = () => {
  const entryListElement = document.querySelector(".journal-entry__wrapper");
  getEntries().then((allPosts) => {
    entryListElement.innerHTML = EntryList(allPosts);
  });
};

const applicationElement = document.querySelector(".main");

applicationElement.addEventListener("click", (event) => {
  console.log("what was clicked", event.target);
  if (event.target.id === "logout") {
    console.log("You clicked on logout");
  }
});

// set an eventlistener for each Journal Entry card that displays the selected post in the element section.view-entry__wrapper
// This function will need to display a single entry
applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("entry-card")) {
    const entryId = event.target.id.split("--")[1];
    getSingleEntry(entryId).then((response) => {
      showViewer(response);
    });
  }
});

const showViewer = (entryObj) => {
  const entryElement = document.querySelector(".view-entry__wrapper");
  entryElement.innerHTML = entryViewer(entryObj);
};

// This lists for a click on the Edit button
applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const entryId = event.target.id.split("--")[1];
    getSingleEntry(entryId).then((response) => {
      showEdit(response);
    });
  }
});

// function that adds brings the form back to the selector element for editting
const showEdit = (entryObj) => {
  const entryElement = document.querySelector(".view-entry__wrapper");
  entryElement.innerHTML = entryEdit(entryObj);
};

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  
  if (event.target.id.startsWith("updateEntry"))

})


const startDailyJournal = () => {
  showEntryList();
};

startDailyJournal();
