import { elements } from './views/base';
import Search from './models/search';
import * as searchView from './views/searchView';

const state = {};

const controlSearch = async(query) => {
    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();

        await state.search.getResults();

        // Render result to UI
        searchView.renderResults(state.search.result, query);
    }
}



// EVENT LISTENERS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

elements.searchButton.addEventListener('click', e => {
    e.preventDefault();
    const query = searchView.getInput();
    controlSearch(query);
})

// on click of search on main page, add active class which expands search to fill full screen
elements.searchInput.addEventListener('click', e => {
    elements.search.classList.add('active');
})

// on click of close button on full screen search, remove active class, which will stop it being full screen
elements.searchClose.addEventListener('click', e => {
    searchView.clearResults();
    elements.search.classList.remove('active');
})


elements.menuBtn.addEventListener('click', e => {
    elements.menuBtn.classList.toggle('active'); // an active menu button changes appearance from hamburger icon to X
    elements.menu.classList.toggle('active'); // active class on the menu will display it. Hidden only on small screen
})