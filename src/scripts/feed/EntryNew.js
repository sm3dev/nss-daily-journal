// This is the form for a new journal entry
export const EntryNew = () => {
  const nowDateString = new Date();
  const rightNow = nowDateString.toLocaleString("en-US");
  return `<div class="new-entry__form">
    <h2 class="new-post-section__title">New Journal Entry </h2>
    <fieldset id="new-post__date-block">
    <legend>Journal Date</legend>
    <p><i class="far fa-clock fa-2x"></i><strong> ${rightNow}</strong></p>
            <input type="hidden" name="newJournalDate" id="newJournalDate">
    </fieldset>
    <fieldset id="mood-selector__block">
        <legend>Your Mood</legend>
        <select name="moods" id="selected__mood">
                <option value="">--Choose Your Mood--</option>
                <option value="awesome">Awesome</option>
                <option value="good">Good</option>
                <option value="meeh">Meeh</option>
                <option value="bad">Bad</option>
        </select>
        <section class="current-mood__icon"><img src="/images/" alt="current mood"></section>

    </fieldset>



    <fieldset>
    <legend>Journal Notes</legend>
        <p><strong>Subject:</strong><textarea class="textarea" id="post-subject"></textarea></p>
        <p class="remarks__block">
            <strong>Thoughts:</strong>
            <span class="textarea" role="textbox" id="post-message" contenteditable></span></p>
    </fieldset>

    <button id="submit-new-post__button" class="block-style__button" type="button">Save Journal Entry</button>
    <button id="cancel-new-post__button" class="block-style__button" type="button">Cancel</button>
    </div>`;
};
