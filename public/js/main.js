// $( document ).ready(function() {
//   console.log( "ready!" );
//   $.ajax({
//     type: 'GET',
//     url:'/albums',
//     data: ''
//     dataType: 'json',
//     success: function liveSearch(album) {
//       // console.log('here are a lot of ' + album);
//       var searchInput = $('#search-input');
//       var searchResults = $('#search-results');
//       if (searchInput == {album: album_name}) {
//         searchResults = {album: album_name};
//       } else {
//         searchResults = {albums: albums};
//       }
//     //   $('#search-input', function(album) {
//     //     $('#search-results').html(album);
//     //   });
//     }
//   });
// });

$( document ).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var currentQuery = $('#search-input').val();
    // console.log(currentQuery);
    $.ajax({
      type: 'GET',
      url:'/albums/search',
      data: {searchQuery: currentQuery}
      // dataType: 'json'
    });
    // $('index').each(function(err, albums) {
    // })
  });
});