document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('expensesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Despesas por Mês',
                data: [200, 450, 300, 500],
                backgroundColor: ['red', 'blue', 'green', 'yellow']
            }]
        },
        options: {}
    });
});
