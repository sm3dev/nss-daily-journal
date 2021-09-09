// This is taken from giffy and has to be modified
export const EntryCard = (entryObj) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${entryObj.title}</h2>
        </header>
        <img class="post__image" src="./src/images${entryObj.imageURL}" />
      </section>
    `
  }