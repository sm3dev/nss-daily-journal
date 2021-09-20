// This is the form for a new journal entry
export const EntryNew = () => {
    return `<h2 class="new-post-section__title">New Journal Entry</h2>
    <div id="new-entry__form">
        <fieldset id="new-post__date-block">
            <label for="newJournalDate"><strong>Date of Entry: </strong></label>
            <input type="date" name="newJournalDate" id="newJournalDate">
        </fieldset>
        <div id="selected__mood">
            <section class="mood-selector__block">
                <div class="mood__selection">
                        <input type="radio" id="mood1" name="mood" value="mood1" checked>
                        <label for="mood1">Awesome</label>
                </div>
                <div class="mood__selection">
                        <input type="radio" id="mood2" name="mood" value="mood2">
                        <label for="mood2">Good</label>
                </div>
                <div class="mood__selection">
                        <input type="radio" id="mood3" name="mood" value="mood3">
                        <label for="mood3">Meeeh</label>
                </div>
                <div class="mood__selection">
                        <input type="radio" id="mood4" name="mood" value="mood4">
                        <label for="mood4">Bad</label>
                </div>        
            </section>
        </div>

        <fieldset>
            <legend>Journal Text</legend>
            <p><strong>Subject:</strong><textarea class="textarea" id="post-subject"></textarea></p>
            <p class="remarks__block">
                <strong>Thoughts:</strong>
                <span class="textarea" role="textbox" name="post-message" id="post-message" contenteditable></span></p>
        </fieldset>
        <button id="submit-new-post__button" class="block-style__button" type="button ">Save Journal Entry</button>
        <button id="cancel-new-post__button" class="block-style__button" type="button">Cancel</button>
    </div>`
}