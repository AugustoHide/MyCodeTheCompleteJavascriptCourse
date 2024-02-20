import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      //   console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(numPages);
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupBtnPrev(currentPage);
    }
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupBtnNext(currentPage);
    }
    if (currentPage < numPages) {
      return `
      ${this._generateMarkupBtnPrev(currentPage)}
      ${this._generateMarkupBtnNext(currentPage)}
      `;
    }
    return '';
  }

  _generateMarkupBtnPrev(currentPage) {
    return `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>
    `;
  }

  _generateMarkupBtnNext(currentPage) {
    return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      `;
  }
}

export default new PaginationView();
