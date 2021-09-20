// This is the form for a new journal entry
export const EntryNew = () => {
    return `<h2 class="new-post-section__title">New Journal Entry</h2>
    <form id="new-entry__form">
        <fieldset id="new-post__date-block">
            <label for="newJournalDate"><strong>Date of Entry: </strong></label>
            <input type="date" name="newJournalDate" id="newJournalDate">
        </fieldset>
        <fieldset id="selected__mood">
            <legend>Mood</legend>
            <section class="mood-selector__block">
                <div class="mood__selection">
                    <label for="mood1">
                        <input type="image" name="mood" id="mood1" class="mood-select-icon icon" src="images/mood-nailed-it-icon.png"  alt="Awesome mood">
                        <p class="mood-choice__text">Awesome</p>
                    </label>
                </div>
                <div class="mood__selection">
                    <label for="mood2">
                        <input type="image" name="mood" id="mood2" class="mood-select-icon icon" src="images/mood-good-icon.png" alt="Good mood">
                        <p class="mood-choice__text">Good</p>
                    </label>
                </div>
                <div class="mood__selection">
                    <label for="mood3">
                        <input type="image" name="mood" id="mood3" class="mood-select-icon icon" src="images/mood-meeeh-icon.png" alt="OK mood">
                        <p class="mood-choice__text">Meeeh</p>
                    </label>
                </div>
                <div class="mood__selection">
                    <label for="mood4">
                        <input type="image" name="mood" id="mood4" class="mood-select-icon icon" src="images/mood-bad-icon.png"  alt="Bad mood-choice__text">
                        <p class="mood-choice__text">Bad</p>
                    </label>
                </div>        
            </section>
        </fieldset>

        <fieldset>
            <legend>Journal Text</legend>
            <p><strong>Subject:</strong><textarea class="textarea" id="post-subject"></textarea></p>
            <p class="remarks__block">
                <strong>Thoughts:</strong>
                <span class="textarea" role="textbox" name="post-message" id="post-message" contenteditable></span></p>
        </fieldset>
        <button id="submit-new-post__button" class="block-style__button" type="button">Save Journal Entry</button>
        <button id="cancel-new-post__button" class="block-style__button" type="button">Cancel</button>
    </form>`
}