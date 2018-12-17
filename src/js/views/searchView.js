import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderResultRow = result => {
    const markup = `
        <li>${result.title}</li>
    `;
    elements.searchResults.insertAdjacentHTML('beforeend', markup);
}

const renderInfo = (results, query) => {
    const quantity = results.length;
    const markup = `
        <p class="search__info">"${query}" got ${quantity} results. ${quantity === 0 ? 'Please try a different search.' : ''}</p>
    `;
    elements.searchResults.insertAdjacentHTML('afterbegin', markup)
}

export const renderResults = (results, query) => {
    renderInfo(results, query);
    results.forEach(renderResultRow);
}

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResults.innerHTML = '';
}