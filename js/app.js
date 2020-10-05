'use strict';
var form=document.getElementById('form');
var containerEl = document.getElementById('sales');
var tableEl = document.createElement('table');
containerEl.appendChild(tableEl);
var hourSales = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = [];
function Market(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.CookiesperHours = [];
  this.total = 0;
  locations.push(this);
}
new Market('Seattle', 23, 65, 6.3);
new Market('Tokyo', 3, 24, 1.2);
new Market('Dubai', 11, 38, 3.7);
new Market('Paris', 20, 38, 2.3);
new Market('Lima', 2, 16, 4.6);

Market.prototype.getCus = function () {
  return (getRandomNumber(this.min, this.max));
};
Market.prototype.getSales = function () {
  for (var k = 0; k < hourSales.length; k++) {
    var a = Math.ceil(this.getCus() * this.avg);
    this.CookiesperHours.push(a);
    this.total += this.CookiesperHours[k];
  }};
Market.prototype.render = function () {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl=document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent=this.name;
  for (var i = 0; i < hourSales.length; i++) {
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.CookiesperHours[i];
  }
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.total;
};
//table header
function header(){
  var headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  var thEl = document.createElement('th');
  headerRowEl.appendChild(thEl);
  thEl.textContent=' ';
  for(var j=0;j<hourSales.length;j++){
    var thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = hourSales[j];
  }
  var thEl = document.createElement('th');
  headerRowEl.appendChild(thEl);
  thEl.textContent = 'Daily location total';}
//table footer
function footer(){
  var footerRowEl = document.createElement('tr');
  tableEl.appendChild(footerRowEl);
  var tdEl = document.createElement('td');
  footerRowEl.appendChild(tdEl);
  tdEl.textContent='Totals';
  for(var j=0;j<hourSales.length;j++){
    var hourTotal=0;
    for(var m=0;m<locations.length;m++){
      hourTotal+=locations[m].CookiesperHours[j];
    }
    var tdEl = document.createElement('td');
    footerRowEl.appendChild(tdEl);
    tdEl.textContent = hourTotal;
  }
  var totalOfTotals=0;
  for(var t=0;t<locations.length;t++){
    totalOfTotals+=locations[t].total;
  }
  var tdEl = document.createElement('td');
  footerRowEl.appendChild(tdEl);
  tdEl.textContent = totalOfTotals;}

function callTheRender(){
  for (var i = 0; i < locations.length; i++) {
    locations[i].getSales();
    locations[i].render();
  }}

//helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//the form
form.addEventListener('submit',function (event) {
  event.preventDefault();
  var name=event.target.name.value;
  var min=event.target.min.value;
  var max=event.target.max.value;
  var avg=event.target.avg.value;
  var location=new Market(name,min,max,avg);
  var y = tableEl.rows.length;
  tableEl.deleteRow(y-1);
  location.getSales();
  location.render();
  form.reset();
  footer();
  localStorage.setItem('locations',JSON.stringify(locations));
  tableEl.textContent='';
  callTheRender();
  footer();
});

if(localStorage.getItem('locations')){
  locations=[];
  var localStorageArray=JSON.parse(localStorage.getItem('locations'));
  for (var i=0;i<localStorageArray.length;i++){
    new Market(localStorageArray[i].name,localStorageArray[i].min,localStorageArray[i].max,localStorageArray[i].avg);
  }
}
//calling the functions
header();
callTheRender();
footer();
