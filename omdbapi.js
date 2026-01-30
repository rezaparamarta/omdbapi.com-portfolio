// $('.search-button').on('click', function () {
//     $.ajax({
//       url: 'http://www.omdbapi.com/?apikey=3642ab43&s=' + $('.input-keyword').val(),
//       success: results => {
//         const movies = results.Search;
//         console.log(movies);
    
//         let cards = '';
//         movies.forEach(m => {
//           cards += showCards(m);
//         });
    
//         $('.movie-container').html(cards);
    
//         // ketika tombol detail di-klik
//         $('.modal-detail-button').on('click', function () {
//           // console.log($(this).data('movie-id'));
//           $.ajax({
//             url: 'http://www.omdbapi.com/?apikey=3642ab43&i=' + $(this).data('movie-id'),
//             success: m => {
//               const movieDetail = showMovieDetail(m);
//               $('.modal-body').html(movieDetail);
//             },
//             error: e => {
//               console.log(e.responseText);
//             }
//           });
//         });
//       },
//       error: e => {
//         console.log(e.responseText);
//       }
//     });
// });

// Fetch API Version
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

  const inputKeyword = document.querySelector('.input-keyword');
  fetch('https://www.omdbapi.com/?apikey=3642ab43&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
      if (!response.Search) {
        console.log('No movies found');
        alert(response.Error || 'No movies found');
        return;
      }

      const movies = response.Search;
      let cards = '';
      movies.forEach(m => cards += showCards(m));

      // tampung movies ke dalam container
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;
      
      // ketika tombol detail di-klik
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      modalDetailButton.forEach(button => {
        button.addEventListener('click', function() {
          const movieId = button.dataset.movieId;
          fetch(`https://www.omdbapi.com/?apikey=3642ab43&i=${movieId}`)
            .then(response => response.json())
            .then(m => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = movieDetail;
            })
        })
      })
    })
})


function showCards(m) {
  return `
    <div class="col-md-4 my-5">
      <div class="card" style="width: 18rem;">
        <img src="${m.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-movie-id="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>
  `;
}

function showMovieDetail(m) {
  return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-m-3">
          <img src="${m.Poster}" class="img-fluid" alt="">
        </div>
        <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item">
              <h4>${m.Title} (${m.Year})</h4>
            </li>
            <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
            <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
            <li class="list-group-item">Actors: ${m.Actors}</li>
            <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
            <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
