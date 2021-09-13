import { convertDate } from "../helpers.js";

export const entryEdit = (entryObj) => {

    // const covertedEntryDate = convertDate(entryObj.dateCreated);

return `<div id="edit-entry__form">
<article class="viewer entry__card edit-mode" id="viewer-entry--${entryObj.id}">
<fieldset id="edit-post__date-block">
    <label for="editJournalDate"><strong>Date of Entry: </strong></label>
    <input value="${entryObj.dateCreated}" type="date" name="editJournalDate" id="editJournalDate">
</fieldset>
<fieldset>
    <legend>Mood</legend>
    <section class="mood-selector__block">
        <div class="mood__selection">
            <input type="radio" name="mood" id="mood1" value="awesome">
            <label for="mood1">
                <img id="mood1__image" class="mood-select-icon icon" src="images/mood-nailed-it-icon.png" alt="Awesome mood-choice__text">
                <p class="mood-choice__text">Awesome</p>
            </label>
        </div>
        <div class="mood__selection">
            <input type="radio" name="mood" id="mood2" value="good">
            <label for="mood2">
                <img id="mood2__image" class="mood-select-icon icon" src="images/mood-good-icon.png" alt="Good mood-choice__text">
                <p class="mood-choice__text">Good</p>
            </label>
        </div>
        <div class="mood__selection">
            <input type="radio" name="mood" id="mood3" value="meeeh">
            <label for="mood3">
                <img id="mood3__image" class="mood-select-icon icon" src="images/mood-meeeh-icon.png" alt="Meeeh mood-choice__text">
                <p class="mood-choice__text">Meeeh</p>
            </label>
        </div>
        <div class="mood__selection">
            <input type="radio" name="mood" id="mood4" value="bad">
            <label for="mood4">
                <img id="mood4__image" class="mood-select-icon icon" src="images/mood-bad-icon.png" alt="Bad mood-choice__text">
                <p class="mood-choice__text">Bad</p>
            </label>
        </div>        
    </section>
</fieldset>

<fieldset>
    <legend>Journal Text</legend>
    <p><strong>Subject:</strong><textarea class="textarea" id="post-subject" name="post-subject">${entryObj.subject}</textarea></p>
    <p class="remarks__block">
        <strong>Thoughts:</strong>
        <span class="textarea" role="textbox" name="post-message" id="post-message" contenteditable>${entryObj.message}</span></p>
</fieldset>
<button id="updateEntry--${entryObj.id}" class="block-style__button" type="button">Save Changes</button>
<button id="cancel__button" class="block-style__button" type="button">Cancel</button>
</article>
</div>`
}