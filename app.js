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

//UI INDIA
function updateIndiaUI(dataIndia) {
    //total data
    const total = dataIndia.confirmed;
    const recoverd = dataIndia.recovered;
    const death = dataIndia.deaths;
    const active = dataIndia.active;

    //UI total
    confirmIN.textContent = numberWithCommas(total);
    activeIN.textContent = numberWithCommas(active);
    recoverIN.textContent = numberWithCommas(recoverd);
    deathIN.textContent = numberWithCommas(death);

    //today data
    const totalToday = dataIndia.deltaconfirmed;
    const recoverdToday = dataIndia.deltarecovered;
    const deathToday = dataIndia.deltadeaths;
    // const activeToday = totalToday - (recoverdToday + deathToday);

    // //ui update today data
    confirmINt.textContent = ` +${numberWithCommas(totalToday)}`;
    recoverINt.textContent = ` +${numberWithCommas(recoverdToday)}`;
    deathINt.textContent = ` +${numberWithCommas(deathToday)}`;
    // activeINt.textContent = ` +${activeToday}`;
}

//UI State UP 
function updateStateUI(dataUP){
    //total data
    const total = dataUP.total.confirmed;
    const recoverd = dataUP.total.recovered;
    const death = dataUP.total.deceased;
    const active = total - (recoverd + death);

    //total ui update
    confirmUP.textContent = numberWithCommas(total);
    activeUP.textContent = numberWithCommas(active);
    recoverUP.textContent = numberWithCommas(recoverd);
    deathUP.textContent = numberWithCommas(death);

    //today data
    const totalToday = dataUP.delta.confirmed;
    const recoverdToday = dataUP.delta.recovered;
    const deathToday = dataUP.delta.deceased;
    // const activeToday = totalToday - (recoverdToday + deathToday);
    if (typeof totalToday === 'undefined' &&
      typeof recoverdToday === 'undefined' && 
      typeof deathToday === 'undefined'){
      //ui update today data
      confirmTUP.textContent = `...`;
      recoverTUP.textContent = `...`;
      deathTUP.textContent = `...`;
    } else {
      confirmTUP.textContent = ` +${numberWithCommas(totalToday)}`;
      recoverTUP.textContent = ` +${numberWithCommas(recoverdToday)}`;
      deathTUP.textContent = ` +${numberWithCommas(deathToday)}`;
    }
}
//UI Ghaziabad
function updateCityUI(dataCity) {
    //total data
    const total = dataCity.total.confirmed;
    const recoverd = dataCity.total.recovered;
    const death = dataCity.total.deceased;
    const active = total - (recoverd + death);

    //ui update total data
    confirmGZB.textContent = numberWithCommas(total);
    activeGZB.textContent = numberWithCommas(active);
    recoverGZB.textContent = numberWithCommas(recoverd);
    deathGZB.textContent = numberWithCommas(death);

    //today data
    const totalToday = dataCity.delta.confirmed;
    const recoverdToday = dataCity.delta.recovered;
    const deathToday = dataCity.delta.deceased;
    // const activeToday = totalToday - (recoverdToday + deathToday);

    if (typeof totalToday === 'undefined' &&
        typeof recoverdToday === 'undefined' &&
        typeof deathToday === 'undefined') {
        //ui update today data
        confirmtGZB.textContent = `...`;
        recovertGZB.textContent = `...`;
        deathtGZB.textContent = `...`;
    } else {
        //ui update today data
        confirmtGZB.textContent = ` +${numberWithCommas(totalToday)}`;
        recovertGZB.textContent = ` +${numberWithCommas(recoverdToday)}`;
        deathtGZB.textContent = ` +${numberWithCommas(deathToday)}`;
    }
}
//UPdate World UI
function updateWorldUI(dataWorld) {
    //total data
    const total = dataWorld.Global.TotalConfirmed;
    const recoverd = dataWorld.Global.TotalRecovered;
    const death = dataWorld.Global.TotalDeaths;
    const active = total - (recoverd + death);

    //UI total
    confirmW.textContent = numberWithCommas(total);
    activeW.textContent = numberWithCommas(active);
    recoverW.textContent = numberWithCommas(recoverd);
    deathW.textContent = numberWithCommas(death);

    //today data
    const totalToday = dataWorld.Global.NewConfirmed;
    const recoverdToday = dataWorld.Global.NewRecovered;
    const deathToday = dataWorld.Global.NewDeaths;
    // const activeToday = totalToday - (recoverdToday + deathToday);
    if (typeof totalToday === 'undefined' &&
        typeof recoverdToday === 'undefined' &&
        typeof deathToday === 'undefined') {
        //ui update today data
        confirmWt.textContent = `...`;
        recoverWt.textContent = `...`;
        deathWt.textContent = `...`;
    } else {
        confirmWt.textContent = ` +${numberWithCommas(totalToday)}`;
        recoverWt.textContent = ` +${numberWithCommas(recoverdToday)}`;
        deathWt.textContent = ` +${numberWithCommas(deathToday)}`;
    }
}
//Function to add commama btwn numbers
function numberWithCommas(number){
    return parseInt(number).toLocaleString('en-IN');
}