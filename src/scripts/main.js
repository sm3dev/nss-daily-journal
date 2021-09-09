import { EntryList } from "./feed/EntryList.js";
import { getEntries, useEntryCollection } from "./data/DataManager.js";

const showEntryList = () => {

  const entryListElement = document.querySelector(".journal-entry__container");
  getEntries().then((allPosts) => {
    entryListElement.innerHTML = EntryList(allPosts);
  });
}

// const applicationElement = document.querySelector(".main");

// applicationElement.addEventListener("click", (event) => {
//   console.log("what was clicked", event.target);
//   if (event.target.id === "logout") {
//     console.log("You clicked on logout");
//   }
// });

const startDailyJournal = () => {
  showEntryList();

}

startDailyJournal();