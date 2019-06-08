console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  const handleSuccess = json =>  {
    console.log(json)

    json.forEach(album => {
      $('.text-center').append(`<li><h4>
        ${album.title} by ${album.artist}
      </h4></li>`)
    });
  };

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');
  
  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });



   const handleResponse = (json) => {
     json.forEach(craving => {
       $('.text-center').before(`<li><h4>gimme ${craving.name}!
       </h4></li>`)
     });
   }
   $.ajax({
    method: 'GET',
    url: '/api/taquerias',
    success: handleResponse
  });
  
});
