function getRecommendations() {
  // Get the input value
  var movie = document.getElementById('movie').value;
  // Send a GET request to the server to get the recommendations
  fetch('/recommendations?movie=' + movie)
    .then(response => response.json())
    .then(data => {
      // Display the recommendations
      var recommendationsDiv = document.getElementById('recommendations');
      recommendationsDiv.innerHTML = '';
      data.forEach(recommendation => {
        var recommendationDiv = document.createElement('div');
        recommendationDiv.innerHTML = recommendation;
        recommendationsDiv.appendChild(recommendationDiv);
      });
    });
}
