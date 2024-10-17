const planets_url= "https://dragonball-api.com/api/planets?limit=20"

async function fetchApiJson() {
    const response = await fetch(planets_url);
    const planets = response.json();
    return planets;
}

fetchApiJson().then(planets =>{
    let image;
    let name;
    let isDestroyed;
    let description;


    for (let i = 0; i < planets.items.length; i++) {
        image = planets.items[i]["image"]; 
        image = image.replace(/ /g, "%20")
        name = planets.items[i]["name"];
        isDestroyed = planets.items[i]["isDestroyed"];
        description = planets.items[i]["description"];

        planets_list.innerHTML += `
            <div class="pla_card">
              <div class="pla_card-img">
                <img
                  src=${image}
                  alt=""
                />
              </div>
              <div class="pla_card-body">
                <div class="pla_card-body-name">
                  <h2>${name}</h2>
                </div>
                <div class="pla_card-body-text">
                  <h5>Destroyable</h5>
                  <p>${isDestroyed ? "Yes": "No"}</p>
                </div>
                <div class="pla_card-body-text">
                  <h5>Description</h5>
                  <p>${description}</p>
                </div>
              </div>
            </div>`
    }
});



