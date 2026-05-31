// ======== SIMPLE SEARCH FUNCTIONALITY ========
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('simpleSearch');
    const searchBtn = document.querySelector('.simple-search-btn');

    if (!searchInput) return;

    // Search on button click
    searchBtn.addEventListener('click', () => {
        performSearch();
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (query.length === 0) {
            alert('Please enter a search term');
            return;
        }

        // Get all movie data
        const movies = getAllMovies();
        
        // Search in movies
        const results = movies.filter(movie => 
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            alert('No results found for: ' + query);
            return;
        }

        // Redirect to first result
        window.location.href = 'player.html?movie=' + encodeURIComponent(results[0].key);
    }

    function getAllMovies() {
        return [
            { key: 'Guardians of the Galaxy', title: 'Guardians of the Galaxy', genre: 'Action • Adventure' },
            { key: 'Spider-Man', title: 'Spider-Man: Brand New Day', genre: 'Action • Superhero' },
            { key: 'Avengers', title: 'Avengers: Doomsday', genre: 'Action • Superhero' },
            { key: 'Project Hailmary', title: 'Project Hailmary', genre: 'Sci-Fi • Adventure' },
            { key: 'Paradise', title: 'Paradise', genre: 'Action • Adventure' },
            { key: 'Terror', title: 'Terror', genre: 'Thriller • Mystery' },
            { key: 'Hai Jawani', title: 'Hai Jawani', genre: 'Romance • Drama' },
            { key: 'Athma', title: 'Athma', genre: 'Horror • Supernatural' },
            { key: 'Swapped', title: 'Swapped', genre: 'Adventure • Comedy' },
            { key: 'The Bluff', title: 'The Bluff', genre: 'Drama • Adventure' },
            { key: 'Street Fighter', title: 'Street Fighter', genre: 'Action • Sci-Fi' },
            { key: 'Anaconda', title: 'Anaconda', genre: 'Adventure • Thriller' },
            { key: 'Karuppu', title: 'Karuppu', genre: 'Action • Crime' },
            { key: 'Rahu Kethu', title: 'Rahu Kethu', genre: 'Comedy • Fantasy' },
            { key: 'Cocktail 2', title: 'Cocktail 2', genre: 'Romance • Drama' },
            { key: 'Dhurandhar 2', title: 'Dhurandhar 2', genre: 'Action • Thriller' },
            { key: 'KD The Devil', title: 'KD The Devil', genre: 'Thriller • Horror' },
            { key: 'Youth', title: 'Youth', genre: 'Comedy • Drama' },
            { key: 'AthiReady', title: 'AthiReady', genre: 'Drama • Action' },
            { key: 'Mercy', title: 'Mercy', genre: 'Sci-Fi • Drama' },
            { key: 'Booth Bangla', title: 'Booth Bangla', genre: 'Horror • Comedy' },
            { key: 'Copy Patil', title: 'Copy Patil', genre: 'Comedy • Crime' },
            { key: 'The Kapil Sharma Show', title: 'The Kapil Sharma Show', genre: 'Comedy • Entertainment' },
            { key: 'Breaking Bad', title: 'Breaking Bad', genre: 'Thriller • Crime' },
            { key: 'The Haunting', title: 'The Haunting', genre: 'Horror • Supernatural' },
            { key: 'Stranger Things', title: 'Stranger Things', genre: 'Sci-Fi • Mystery' },
            { key: 'The Office', title: 'The Office', genre: 'Comedy • Mockumentary' },
            { key: 'Game of Thrones', title: 'Game of Thrones', genre: 'Fantasy • Drama' },
            { key: 'Narcos', title: 'Narcos', genre: 'Crime • Thriller' },
            { key: 'Westworld', title: 'Westworld', genre: 'Sci-Fi • Thriller' },
            { key: 'The Mandalorian', title: 'The Mandalorian', genre: 'Sci-Fi • Action' },
            { key: 'The Witcher', title: 'The Witcher', genre: 'Fantasy • Adventure' },
            { key: 'Friends', title: 'Friends', genre: 'Comedy • Sitcom' },
            { key: 'Modern Family', title: 'Modern Family', genre: 'Comedy • Drama' },
            { key: 'Attack on Titan', title: 'Attack on Titan', genre: 'Action • Adventure' },
            { key: 'Death Note', title: 'Death Note', genre: 'Psychological • Thriller' },
            { key: 'Demon Slayer', title: 'Demon Slayer', genre: 'Action • Supernatural' },
            { key: 'My Hero Academia', title: 'My Hero Academia', genre: 'Action • School' },
            { key: 'Tokyo Ghoul', title: 'Tokyo Ghoul', genre: 'Dark • Fantasy' },
            { key: 'Naruto', title: 'Naruto', genre: 'Action • Adventure' },
            { key: 'Steins;Gate', title: 'Steins;Gate', genre: 'Sci-Fi • Thriller' },
            { key: 'One Punch Man', title: 'One Punch Man', genre: 'Action • Comedy' },
            { key: 'Fullmetal Alchemist', title: 'Fullmetal Alchemist', genre: 'Adventure • Fantasy' },
            { key: 'Jujutsu Kaisen', title: 'Jujutsu Kaisen', genre: 'Action • Dark' },
            { key: 'Hunter x Hunter', title: 'Hunter x Hunter', genre: 'Action • Adventure' },
            { key: 'Solo Leveling', title: 'Solo Leveling', genre: 'Action • Fantasy' },
            { key: 'Frieren', title: 'Frieren: Beyond Journey\'s End', genre: 'Fantasy • Adventure' }
        ];
    }
});