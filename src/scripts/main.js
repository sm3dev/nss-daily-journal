import { EntryList } from "./feed/EntryList.js";
import { getEntries, useEntryCollection } from "./data/DataManager.js";

const showEntryList = () => {

  const entryListElement = document.querySelector(".journal-entry__container");
  getEntries().then((allPosts) => {
    entryListElement.innerHTML = EntryList(allPosts);
  });
}

const applicationElement = document.querySelector(".main");

// applicationElement.addEventListener("click", (event) => {
//   console.log("what was clicked", event.target);
//   if (event.target.id === "logout") {
//     console.log("You clicked on logout");
//   }
// });

// The Edit button function is the next two functions
applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const entryId = event.target.id.split("--")[1];
    getSinglePost(entryId)
      .then(response => {
        showEdit(response);
      })
  }
})

const showEdit = (postObj) => {
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEdit(postObj);
}

const startDailyJournal = () => {
  showEntryList();

}



startDailyJournal();