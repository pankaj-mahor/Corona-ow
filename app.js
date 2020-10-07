const apiKey = '31f608b69d5e4247aa22a9e0ba1d66af';

async function worldData() {
    const response = await fetch('https://api.covid19api.com/summary');
    // const response = await fetch('https://coronavirus-19-api.herokuapp.com/all');
    const data = response.json();
    return data;
}

//get india data
async function countryData(){
    const response = await fetch('https://api.covid19india.org/data.json');
    const data = response.json();
    return data;
}

//get state data by api
async function upstateData() {
    const response = await fetch('https://api.covid19india.org/v4/data.json');
    const data = response.json();
    return data;
}
//GET city bt APi
async function gzbCityData() {
    const response = await fetch('https://api.covid19india.org/v4/data.json');
    const data = response.json();
    return data;
}
//GET data
//World
worldData().then(data =>{
    // console.log(data);
    updateWorldUI(data);
}).catch(err=>{
    console.log(err);
})
//India
countryData().then(data => {
    // console.log(data);
    // console.log(data.statewise[0]);
    updateIndiaUI(data.statewise[0]);
}).catch(err => {
    console.log(err);
});
//UP 
upstateData().then(data=>{
    // console.log(data.UP);
    updateStateUI(data.UP);
});
//GHaziabad
gzbCityData().then(data => {
    // console.log(data.UP.districts.Ghaziabad);
    updateCityUI(data.UP.districts.Ghaziabad);
});

async function newsCoronaIndia(){
    const response = await fetch('http://newsapi.org/v2/top-headlines?q=COVID&country=IN&apiKey=31f608b69d5e4247aa22a9e0ba1d66af');

    const data = response.json();

   return data;
}
//Worldwide
async function newsCoronaWorld() {
    const response = await fetch('http://newsapi.org/v2/top-headlines?q=COVID&apiKey=31f608b69d5e4247aa22a9e0ba1d66af');

    const data = response.json();

    return data;
}

newsCoronaIndia().then(data => {
    console.log(data);
    let html='';
    data.articles.forEach(article =>{
        html = `
            <div class="actual-news">
                <img src="${ifNull(article.urlToImage)}" alt="An image of news category" class="img-news">
                <h1>${article.title}</h1>
                <p>${article.content}</p>
                <a href="${article.url}" target="_blank">Read More..</a>
            </div>
        `;

        news.innerHTML += html;
    });

    
})


newsCoronaWorld().then(data => {
    console.log(data);
})
//Function to add commama btwn numbers
function numberWithCommas(number){
    return parseInt(number).toLocaleString('en-IN');
}

const date = new Date();
time.textContent = date