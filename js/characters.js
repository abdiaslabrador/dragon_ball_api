const characters_url= "https://dragonball-api.com/api/characters?limit=58"

async function fetchApiJson() {
    const response = await fetch(characters_url);
    const characters = response.json();
    return characters;
}

fetchApiJson().then(characters =>{
    let image, name, race, gender, ki, maxKi, affiliation;

    for (let i = 0; i < characters.items.length; i++) {
        image = characters.items[i]["image"]; 
        image = image.replace(/ /g, "%20")
        name = characters.items[i]["name"];
        race = characters.items[i]["race"];
        gender = characters.items[i]["gender"];
        ki = characters.items[i]["ki"];
        maxKi = characters.items[i]["maxKi"];
        affiliation = characters.items[i]["affiliation"];

        characters_list.innerHTML += `
            <div class="char_card">
              <div class="char_card-img">
                <img
                  src=${image}
                  alt=""
                />
              </div>
              <div class="char_card-body">
                <div class="char_card-body-name">
                  <h2>${name}</h2>
                  <p>${race} - ${gender}</p>
                </div>
                <div class="char_card-body-text">
                  <h5>Base KI</h5>
                  <p>${ki}</p>
                </div>
                <div class="char_card-body-text">
                  <h5>Total KI</h5>
                  <p>${maxKi}</p>
                </div>
                <div class="char_card-body-text">
                  <h5>Afilliation</h5>
                  <p>${affiliation}</p>
                </div>
              </div>
            </div>`
    }
});



