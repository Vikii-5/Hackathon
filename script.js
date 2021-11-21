// Creating a Landing page divisions for Open Brewery API using DOM
let mainContainer = document.createElement("div");
mainContainer.className = "container-fluid";
let bgContainer = document.createElement("div");
bgContainer.className = "d-flex flex-column justify-content-center align-items-center backgroundImage img-fluid justify-content-sm-center";
let bgText = document.createElement("span");
bgText.className = "bgText";
let text = document.createTextNode("DRINK RESPONSIBLY");
let subText = document.createElement("span");
subText.className = "subText";
let stext = document.createTextNode("For more information on Breweries, Cideries, Brewpubs and Bottleshops");
let clickMore = document.createElement("button");
clickMore.className = "btn btn-warning buttonText";
let anchorLink = document.createElement("a");
anchorLink.href = "#result";
let clickText = document.createTextNode("Click Here");
let lineBreak = document.createElement("br");
let footer = document.createElement("footer");
footer.className = "footer";
let footText = document.createTextNode("BY VIGNESH");

document.body.appendChild(mainContainer);
mainContainer.appendChild(bgContainer);
bgContainer.appendChild(bgText);
bgContainer.appendChild(subText);
bgText.appendChild(text);
subText.appendChild(stext);
bgContainer.appendChild(lineBreak);
bgContainer.appendChild(clickMore);
clickMore.appendChild(anchorLink);
anchorLink.appendChild(clickText);

//Creating a div to display the fetched data
let fetchedData = document.createElement("div");
fetchedData.className = "container";
fetchedData.setAttribute("id", "result");
let inContainer = document.createElement("div");
inContainer.className = "insideContainer py-5 card-columns";

document.body.appendChild(fetchedData);
fetchedData.appendChild(inContainer);
document.body.appendChild(footer);
footer.appendChild(footText);

// // Selecting the target elements to display the data
// let clickButton = document.querySelector(".clickMore");
// let result = document.querySelector(".fetchedData");

// Creating a function to get the data from the API
async function getData() {
    let allData = [];
    try {
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let data = await response.json();
    allData = data;

    // Looping through the data to display the data 
    data.forEach((brewery) => {
        inContainer.innerHTML +=
        `<div class="">
        <div class="card boxData">
        <h5 class="card-header text-uppercase bg-dark text-white">${brewery.name}</h5>    
        <div class="card-body">
                <h6 class="card-subtitle text-muted text-capitalize">Type: ${brewery.brewery_type}</h6><br>
                <p class="card-text">Address: ${brewery.street}, ${brewery.city}, ${brewery.state}</p>
                <p class="card-text">Phone No: ${brewery.phone}</p>
                <p class="cardLink"> Website: <a href=${brewery.website_url} target="_blank"class="card-link">${brewery.website_url}</a></p>
            </div>
            </div></div>`;
    });
    } catch (error) {
        console.log(error);
    }
}
getData();