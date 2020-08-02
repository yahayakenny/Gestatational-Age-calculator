const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const submit = document.getElementById('submit');
const delivery = document.getElementById('delivery');
const gestation = document.getElementById('gestational');

const submitForm = (e) => {
    e.preventDefault();
    const lastMenses = new Date(`${year.value}, ${month.value}, ${day.value}`);
    lastMenses.setDate(lastMenses.getDate() + 282);
    delivery.innerHTML = `Estimated Delivery date : ${lastMenses}`; 
    const dateToday = new Date();
    const daysTillDelivery = lastMenses - dateToday;
    const gestationalAge = (2.436e+10) - (daysTillDelivery);
    const weeksLeft = Math.floor(gestationalAge/ 1000/ 60/ 60/ 24 /7);
    const daysLeft = Math.floor((gestationalAge/ 1000/ 60/ 60/ 24) % 7);
    delivery.innerHTML = `Estimated Delivery date : ${lastMenses}`; 
    gestation.innerHTML = `GESTATIONAL AGE TODAY : ${weeksLeft} weeks + ${daysLeft}days` 
}

submit.addEventListener('click', submitForm)





