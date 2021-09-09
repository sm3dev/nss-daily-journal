export const EntryNew = () => {
    return `
    <h2 class="new-post-section__title">New Daily Journal</h2>
    <div id="new-entry__form">
    <fieldset id="new-post__date-block">
        <label for="newJournalDate"><strong>Date of Entry: </strong></label>
        <input value="" type="date" name="newJournalDate" id="newJournalDate">
    </fieldset>
    <fieldset>
        <legend>Mood</legend>
        <section class="mood-selector__block">
            <div class="mood__selection selected">
                <input type="radio" name="mood" id="mood1" value="awesome" checked>
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
        <p><strong>Subject:</strong><textarea class="textarea" id="post-subject"></textarea></p>
        <p class="remarks__block">
            <strong>Thoughts:</strong>
            <span class="textarea" role="textbox" name="post-message" id="post-message" contenteditable></span></p>
    </fieldset>
    <button id="submit-new-post__button" class="block-style__button" type="button">Save Journal Entry</button>
    <button id="cancel-new-post__button" class="block-style__button" type="button">Save Journal Entry</button>
    </div>`
}