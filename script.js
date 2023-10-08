const container = document.createElement("div");
container.className = "container";

const row = document.createElement("div");
row.className = "row";

container.append(row);

const url = fetch("https://restcountries.com/v2/all")
    .then((data) => data.json())
    .then((result) => foo(result));

function foo(result) {
    for (var i = 0; i < result.length; i++) {
        row.innerHTML += `<div class="col-md-4">
        
        <div class="card" style="width: 18rem;">
        <h5>${result[i].name}</h5>
        <img src="${result[i].flags.png}" class="card-img-top" alt="..." style="height: 150px; width: 250px; margin-left:20px; border:1px solid black; border-raduis: 3px">
        <div class="card-body">
       
        <p class="card-text">Capital: ${result[i].capital}</p>
        <p class="card-text">Region: ${result[i].region}</p>
        <p class="card-text">Country Code: ${result[i].alpha3Code}</p>
        <a href="#" class="btn btn btn-dark">Click for Weather</a>
        </div>
        </div>
        </div>`
    }
    document.body.append(container)
}
