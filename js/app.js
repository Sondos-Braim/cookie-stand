'use strict';
var containerEl = document.getElementById('sales');
var tableEl = document.createElement('table');
containerEl.appendChild(tableEl);
var hourSales = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = [];
function Markets(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.CookiesperHours = [];
  this.total = 0;
  locations.push(this);
}
Markets.prototype.getCus = function () {
  return (getRandomNumber(this.min, this.max));
};
Markets.prototype.getSales = function () {
  for (var k = 0; k < hourSales.length; k++) {
    var a = Math.ceil(this.getCus() * this.avg);
    this.CookiesperHours.push(a);
    this.total += this.CookiesperHours[k];
  }};
  Markets.prototype.render = function () {
    for (var a=0;a<locations.length;a++){
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
  }};

new Markets('seattle', 23, 65, 6.3);
new Markets('tokyo', 3, 24, 1.2);
new Markets('dubai', 11, 38, 3.7);
new Markets('paris', 3, 24, 1.2);
new Markets('lima', 20, 65, 4.6);

for (var i = 0; i < locations.length; i++) {
  locations[i].getSales();
  locations[i].render();
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function table(){

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
  thEl.textContent = 'daily location total';}




//table footer
function footer(){
  
  var footerRowEl = document.createElement('tr');
    tableEl.appendChild(footerRowEl);
  var tdEl = document.createElement('td');
    footerRowEl.appendChild(tdEl);
    tdEl.textContent='totals';
    for(var j=0;j<hourSales.length;j++){
      var hourTotal=0;
      for(var m=0;m<locations.length;m++){
        hourTotal+=locations[m].CookiesperHours[i];
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

header();
footer();



