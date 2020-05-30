let url = `https://itunes.apple.com/search?term`;

const itunesSearchApi =  async function(searchTerm) {
    const results = await fetch(`${url}=${searchTerm}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        let results = res.results

        return {results}
    })
    .catch(error => {
        return {error}
    })

    return results
}

export default itunesSearchApi
