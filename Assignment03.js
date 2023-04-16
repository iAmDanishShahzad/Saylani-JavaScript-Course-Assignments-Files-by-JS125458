(async function() {
    const fileHandle = await fetch("./moviesData.json");
    const movies = await fileHandle.json();

    console.log(movies)
})();