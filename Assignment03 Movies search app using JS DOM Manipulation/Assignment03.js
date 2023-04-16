(async function () {
    // fetch JSON file contents into our JS file
    const fileHandle = await fetch("./data.json");
    const movies = await fileHandle.json();

    // html elements
    const elementGenre = document.getElementById("movieGenre");
    const elementYear = document.getElementById("movieYear");
    const elementLanguage = document.getElementById("movieLanguage");
    const elementRating = document.getElementById("movieRating");
    const elementResultTableBody = document.getElementById("resultTableBody");

    // method to search through the movies list in JSON file for the applied filters
    function searchMovies() {
        const searchResults = movies.filter(function (movie) {
            const queryGenre = elementGenre.value.toLowerCase();
            const queryYear = elementYear.value.toString().toLowerCase();
            const queryLanguage = elementLanguage.value.toString().toLowerCase();
            const queryRating = elementRating.value.toLowerCase();
            const queryRatingNumber = +queryRating;

            return (
                ((queryGenre === "all") || (movie.genres.toString().toLowerCase().includes(queryGenre))) &&
                ((queryYear === "all") || (movie.release_date.toString().includes(queryYear))) &&
                ((queryLanguage === "all") || (movie.original_language.toLowerCase().includes(queryLanguage))) &&
                ((queryRating === "all") || ((movie.vote_average) >= (+queryRatingNumber)))
            );

        });

        // method to display the search results in  table
        function displaySearchResults(searchResults) {
            elementResultTableBody.innerHTML = "";
            searchResults.forEach(function (value, index) {
                const newRow = document.createElement("tr");
                const newRowHtml = `
                <td>${index + 1}</td>
                <td id="resultMovieDetails">
                    <div>
                        <img src="./movieImage.jpg" height="50px">
                    </div>
                    <div>
                        <div id="resultMovieDetailsName">${value["title"]}</div>
                        <div><span id="resultMovieDetailsCertification">${value["certification"]}</span> ${value["genres"]} . ${Math.floor(value["runtime"] / 60)}h ${value["runtime"] % 60}m</div>
                    </div>
                </td>
                <td>${value["release_date"].slice(0, 4)}</td>
            `;
                newRow.innerHTML = newRowHtml;
                elementResultTableBody.appendChild(newRow);
            });
        }

        displaySearchResults(searchResults);
    }

    // onChange event listeners for the select elements
    elementGenre.addEventListener("change", searchMovies);
    elementYear.addEventListener("change", searchMovies);
    elementLanguage.addEventListener("change", searchMovies);
    elementRating.addEventListener("change", searchMovies);
})();