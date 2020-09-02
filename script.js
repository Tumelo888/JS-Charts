let labels3 = ['2018', '2017', '2016', '2015', '2014', '2013', '2012'];
let data3 = [ 33.8, 35.3, 36.6, 37.7, 39.5, 41.2, 43.3];
let colors3 = ['black', 'blue', 'brown', 'red', 'gray', 'maroon', 'yellow'];

let myChart3 = document.getElementById('myChart3').getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
    labels: labels3,
    datasets: [{
        data: data3,
        backgroundColor: colors3
     }]
    }, 
    options: {
        title: {
            text: 'Child mortality rate in south africa',
            display: true
        }
    }
});
