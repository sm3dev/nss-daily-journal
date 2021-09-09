// This will be the section that displays the journal entry clicked on
// This will also hold the edit and delete buttons
// When the edit button is clicked, the entry info should populate in the EntryNew form fields

import { convertDate } from "../helpers.js";

export const entryViewer = (entryObj) => {

  return `<div class="view-previous__block">
            <a href="#">
                <button id="view-previous__button" class="navigate-entry-button">Previous</button></a>
        </div>
<section class="viewer viewer-entry__block">
<article class="viewer entry__card" id="viewer-entry--${entryObj.id}">
    <section class="viewer entry__header">
        <section class="viewer mood-date__container">
            <div class="viewer mood-icon__block"><img src="images/mood-good-icon.png" alt="${entryObj.moodName} icon" class="entry-mood__icon icon"></div>
            <section class="viewer entry__date">Published: ${convertDate(entryObj.dateCreated)}</section>
        </section>
        <section class="viewer entry-subject__block">
            <h3 class="viewer entry-subject__text">${entryObj.subject}</h3>
        </section>
    </section>
    <section class="viewer entry__body">
            <p class="viewer entry__message">${entryObj.message}</p>
    </section>
    <section class="viewer entry__footer">
        <section class="viewer entry-author__block"><p class="entry__author">By: Michael Wright</p></section>
        <section class="viewer entry-modified__block"><p class="entry-modified__date">Last Modified: ${convertDate(entryObj.dateModified)}</p></section>
    </section>
</article>
<section class="viewer buttons__block">
    <button type="button" id="edit-entry__button--${entryObj.id}" class="viewer block-style__button">Edit Entry</button>
    <button type="button" id="save-entry__button" class="viewer block-style__button" disabled>Save Changes</button>
    <button type="button" id="delete-entry__button${entryObj.id}" class="viewer block-style__button">Delete Entry</button>
</section>
</section>
<div class="view-next__block">
    <a href="#"><button id="view-next__button" class="navigate-entry-button">Next</button></a></div>`;
};
