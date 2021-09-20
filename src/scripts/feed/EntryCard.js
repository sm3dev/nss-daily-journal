import { convertDate } from "../helpers.js";

export const EntryCard = (entryObj) => {

    const covertedEntryDate = convertDate(entryObj.dateCreated);
  
    return `<article id="entry-card--${entryObj.id}" class="entry__card entry__preview">
    <section class="entry__card mood-date__container">
        <div class="entry__card mood-icon__block">
            <img src="images/mood-good-icon.png" alt="${entryObj.moodId} icon" class="entry__card entry-mood__icon">
        </div>
        <div class="entry__card entry__date">${covertedEntryDate}</div>
    </section>
    <section class="entry__card entry-subject__block">
        <h4 class="entry__card entry-subject__text">${entryObj.subject}</h4>
    </section>
</article>`
  }