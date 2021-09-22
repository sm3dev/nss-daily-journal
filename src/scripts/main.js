import { EntryList } from "./feed/EntryList.js";
import {
  getEntries,
  getLoggedInUser,
  getSingleEntry,
  newPost,
} from "./data/DataManager.js";
import { entryViewer } from "./feed/EntryViewer.js";
import { EntryNew } from "./feed/EntryNew.js";
import { entryEdit } from "./feed/EntryEdit.js";

// Add the new Entry form template to the DOM
const showEntryForm = () => {
  const entryElement = document.querySelector("#new-entry-form__block");
  entryElement.innerHTML = EntryNew();
};

const showEntryList = () => {
  const entryListElement = document.querySelector(".journal-entry__wrapper");
  getEntries().then((allPosts) => {
    entryListElement.innerHTML = EntryList(allPosts);
  });
};

// This is the new entry form element selector
const formElement = document.querySelector("#form-content__container");

// Create new post and Save to database
formElement.addEventListener("click", (event) => {
  // event.preventDefault();

  if (event.target.id === "submit-new-post__button") {
    // collect the input values into one object to be put into the database
    const subject = document.querySelector("textarea[id='post-subject']").value;
    const message = document.querySelector("span[id='post-message']").innerText;
    const mood = document.querySelector("input[name='mood']").value;

    // create the post object with the DateCreated date to be set with Date.now()
    const postObject = {
      authorId: getLoggedInUser().id,
      dateCreated: Date.now(),
      moodId: mood,
      subject: subject,
      message: message,
      dateModified: Date.now(),
      modifiedBy: getLoggedInUser().id,
    };

    newPost(postObject)
      .then((dbResponse) => {
        showEntryList();
      })
      .then(console.log("this is the mood information: ", mood));
  }
});

// This is the main OVERALL element selector
const applicationElement = document.querySelector(".main");

applicationElement.addEventListener("click", (event) => {
  // console.log("what was clicked", event.target);
  if (event.target.id === "logout") {
    console.log("You clicked on logout");
  }
});

// set an eventlistener for each Journal Entry card that displays the selected post in the element section.view-entry__wrapper
// This function will need to display a single entry
applicationElement.addEventListener("click", (event) => {
  // event.preventDefault();
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
  // event.preventDefault();
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

// The edit function that writes the clicked on article and displays it in the Viewer
applicationElement.addEventListener("click", (event) => {
  // event.preventDefault();

  if (event.target.id.startsWith("updateEntry")) {
    const postId = event.target.id.split("--")[1];

    // Collect all the details into an object
    const dateCreated = document.querySelector(
      "input[name='editJournalDate']"
    ).value;
    const subject = document.querySelector("input[name='post-subject']").value;
    // const mood = document.querySelector("input[name='mood']:checked").value;
    // const message = document.querySelector();
  }
});

const startDailyJournal = () => {
  showEntryForm();
  showEntryList();
};

startDailyJournal();
