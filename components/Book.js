class Book {
  constructor(props = {
    title: '',
    authors: [],
    rating: 0,
    image: 'https://picsum.photos/300/300',
  }) {
    Object.assign(this, props);
  }

  render() {
      return `
          <article class="book">
            <h2 class="book__title">${this.title}</h2>
            <h3 class="book__author">${this.authors.map(name => name).join(', ')}</h3>
            <h4 class="book__rating">${this.rating}</h4>
            <figure>
              <img src="${this.image}"/>
            </figure>
          </article>
      `;
  }

}

export default Book;
