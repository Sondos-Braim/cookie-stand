'use strict';
var hourSales= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm','Total'];
var seattle = {
  location: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgPerson: 0,
  getAgvCus: function (min, max) {
    this.avgPerson = getRandomNumber(min, max);
  },
};
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
seattle.getAgvCus(seattle.min, seattle.max);
console.log(seattle.avgPerson);
/////////////////
var tokyo = {
  location: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  avgPerson: 0,
  getAgvCus: function (min, max) {
    this.avgPerson = getRandomNumber2(min, max);
  },
};
function getRandomNumber2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
tokyo.getAgvCus(tokyo.min, tokyo.max);
console.log(tokyo.avgPerson);
////////////////
var dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  avgPerson: 0,
  getAgvCus: function (min, max) {
    this.avgPerson = getRandomNumber3(min, max);
  },
};
function getRandomNumber3(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
dubai.getAgvCus(dubai.min, dubai.max);
console.log(dubai.avgPerson);
//////////////////////
var paris = {
  location: 'paris',
  min: 3,
  max: 24,
  avg: 1.2,
  avgPerson: 0,
  getAgvCus: function (min, max) {
    this.avgPerson = getRandomNumber4(min, max);
  },
};
function getRandomNumber4(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
paris.getAgvCus(paris.min, paris.max);
console.log(paris.avgPerson);
///////////////////
var lima = {
  location: 'lima',
  min: 20,
  max: 65,
  avg: 4.6,
  avgPerson: 0,
  sales:[],
  total:0,

  },
  
  getsales: function () {
    for(var k=0;k<hourSales.length;k++){
      var a= Math.ceil(this.avgPerson * this.avg);
      console.log(a)
      this.sales.push(a);
      this.total+=a[k];
      console.log(this.total)
    }
  },

  render: function () {
    var container = document.getElementById('sales');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i < hourSales.length; i++) {
      var liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hourSales[i]}:${lima.sales[i]}`;
    }
  }
};



lima.getAgvCus(lima.min, lima.max);
console.log(lima.avgPerson);

lima.render();
lima.getsales();
function getRandomNumber5(min, max ,avg) {
console.log(min,max)
  return Math.floor(Math.random() * (max - min + 1) + min);
}



