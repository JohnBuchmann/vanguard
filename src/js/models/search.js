export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        let result = [];
        // can't use array functions like 'filter' on data for some reason. Resort to for loop
        for(let i=0; i<data.length; i++) {
            if (data[i].title.includes(this.query)) {
                result.push(data[i]);
            }
        }
        this.result = result;
    }
}