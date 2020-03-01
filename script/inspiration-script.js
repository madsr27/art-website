
let artists = ["Rembrandt+van+Rijn", "Michelangelo", "Johannes+Vermeer"];
artists.forEach((artist) => {
  const url = "https://www.rijksmuseum.nl/api/en/collection?key=92uuT9vr&format=json&involvedMaker=" + artist;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        const allArtwork = document.getElementById("insp-art-work");
        console.log(json);
        if(json.artObjects.length > 0){
          let artist = document.createElement("div");
          artist.className = "artist";
          allArtwork.appendChild(artist);

          let artistNameHeader = document.createElement("h3");
          artistNameHeader.className = "artist-name";
          let artistName = json.artObjects[0].principalOrFirstMaker;
          artistNameHeader.innerText = artistName;
          artist.appendChild(artistNameHeader);

          let artistWork = document.createElement("div");
          artistWork.className = "artist-work";
          artist.appendChild(artistWork);

          json.artObjects.forEach((artwork) => {
            if(artwork.principalOrFirstMaker !== artistName){
              return;
            }
            let image = document.createElement("img");
            image.src = artwork.webImage.url;

            let imageAndCap = document.createElement("div");
            imageAndCap.className = "image-and-caption";

            let caption = document.createElement("h6");
            caption.className = "caption";
            caption.innerText = artwork.title;

            imageAndCap.appendChild(image);
            imageAndCap.appendChild(caption);
            artistWork.appendChild(imageAndCap);
          });

        }
        // const weatherNode = document.getElementById("weatherResults");
        // if(json.name === undefined){
        //   weatherNode.appendChild(document.createTextNode("Please enter a valid city name."));
        //   return;
      });
});
