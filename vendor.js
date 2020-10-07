//World UI
const confirmW = document.querySelector('#cW');
const activeW = document.querySelector('#aW');
const recoverW = document.querySelector('#rW');
const deathW = document.querySelector('#dW');
//world UI TODAY
const confirmWt = document.querySelector('#ctW');
const recoverWt = document.querySelector('#rtW');
const deathWt = document.querySelector('#dtW');
//INDIA UI
const confirmIN = document.querySelector('#cIN');
const activeIN = document.querySelector('#aIN');
const recoverIN = document.querySelector('#rIN');
const deathIN = document.querySelector('#dIN');
//INDIA UI TODAY
const confirmINt = document.querySelector('#ctIN');
const recoverINt = document.querySelector('#rtIN');
const deathINt = document.querySelector('#dtIN');

//State Level UI Components 
const confirmUP = document.querySelector('#cUP');
const activeUP = document.querySelector('#aUP');
const recoverUP = document.querySelector('#rUP');
const deathUP = document.querySelector('#dUP');

//State Level UI Components Todays 
//T stand for today
const confirmTUP = document.querySelector('#ctUP');
const recoverTUP = document.querySelector('#rtUP');
const deathTUP = document.querySelector('#dtUP');

//CIty UI
const confirmGZB = document.querySelector('#cGZB');
const activeGZB = document.querySelector('#aGZB');
const recoverGZB = document.querySelector('#rGZB');
const deathGZB = document.querySelector('#dGZB');

//CIty UI TODAY
const confirmtGZB = document.querySelector('#ctGzb');
// const activetGZB = document.querySelector('#atGzb');
const recovertGZB = document.querySelector('#rtGzb');
const deathtGZB = document.querySelector('#dtGzb');
//
const img = document.querySelector('.img-news');
const news = document.querySelector('.actual-all-news');
const time = document.querySelector('#time');


                              /*          USER INTERFACE UI UPDATE              */ 

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
function updateStateUI(dataUP) {
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
        typeof deathToday === 'undefined') {
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

function ifNull(data){
    // console.log(data);
    if(data === ""){
        return 'covid19.jpg'
    }else{
        return data
    }
}