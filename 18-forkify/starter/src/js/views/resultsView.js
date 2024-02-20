import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes foun for your research. Try another word.';
  _message = '';

  _generateMarkup() {
    // console.log('Results markup: ', this._data);
    return this._data.map(result => previewView.render(result, false)).join();
  }
}

export default new ResultsView();
