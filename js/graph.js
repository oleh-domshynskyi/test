var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        datasets: [{
            label: 'Revenue',
            backgroundColor: 'transparent',
            borderColor: 'rgb(47, 128, 237)',
            data: [100, 250, 200, 250, 120, 110, 110, 150, 190, 250, 290, 350],
        },
    {
        label: '12MMA',
            backgroundColor: 'transparent',
            borderColor: 'rgb(99, 236, 219)',
            data: [250, 300, 400, 375, 350, 410, 420, 470, 600, 750, 729, 800],
    }]
    },
    options: {}
});