'use strict';
var hourSales= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = {
  location: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  CookiesperHours: [],
  total:0,
  getCus: function () {
    return( getRandomNumber(this.min, this.max));
  },
  getSales: function(){
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.getCus()*this.avg);
      this.CookiesperHours.push(a);
      this.total+=this.CookiesperHours[k];}
  },
  render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${this.CookiesperHours[i]}`;
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total}`;
  }
};

// /////////////////
var tokyo = {
  location: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  CookiesperHours: [],
  total:0,
  getCus: function () {
    return getRandomNumber(this.min, this.max);
  },
  getSales: function(){
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.getCus()*this.avg);
      this.CookiesperHours.push(a);
      this.total+=this.CookiesperHours[k];}
  },
  render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${this.CookiesperHours[i]}`;
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total}`;
  }
};

// ////////////////
var dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  CookiesperHours: [],
  total:0,
  getCus: function () {
    return getRandomNumber(this.min, this.max);
  },
  getSales: function(){
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.getCus()*this.avg);
      this.CookiesperHours.push(a);
      this.total+=this.CookiesperHours[k];}
  },
 render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${this.CookiesperHours[i]}`;
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total}`;
  }
};





// //////////////////////
var paris = {
  location: 'paris',
  min: 3,
  max: 24,
  avg: 1.2,
  CookiesperHours: [],
  total:0,
  getCus: function () {
    return getRandomNumber(this.min, this.max);
  },
  getSales:function() {
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.getCus()*this.avg);
      this.CookiesperHours.push(a);
      this.total+=this.CookiesperHours[k];
    }
  },
  render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${this.CookiesperHours[i]}`;
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total}`;
  }
};

// ///////////////////
var lima = {
  location: 'lima',
  min: 20,
  max: 65,
  avg: 4.6,
  CookiesperHours: [],
  total:0,
  getCus: function () {
    return( getRandomNumber(this.min,this.max));
  },
  getSales:function() {
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.getCus()*this.avg);
      this.CookiesperHours.push(a);
      this.total+=this.CookiesperHours[k];
    }
  },

  render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${this.CookiesperHours[i]}`;
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.total}`;
  }



};

seattle.getCus();
seattle.getSales();
seattle.render();
tokyo.getCus();
tokyo.getSales();
tokyo.render();
dubai.getCus();
dubai.getSales();
dubai.render();
paris.getCus();
paris.getSales();
paris.render();
lima.getCus();
lima.getSales();
lima.render();



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
