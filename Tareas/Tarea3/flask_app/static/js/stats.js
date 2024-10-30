const predefinedColors = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
];

// Inicializar gráfico de productos
Highcharts.chart('productos-container', {
    chart: {
        type: 'column'
    },
    plotOptions: {
        column: {
            colorByPoint: true
        },
    },
    colors: predefinedColors,
    title: {
        text: 'Productos por tipo'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Cantidad'
        },
    },
    series: [
        {
            name: 'Productos',
            data: [],
        },
    ],
});

// Inicializar gráfico de pedidos
Highcharts.chart('pedidos-container', {
    chart: {
        type: 'column'
    },
    plotOptions: {
        column: {
            colorByPoint: true
        },
    },
    colors: predefinedColors,
    title: {
        text: 'Pedidos por comuna'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Cantidad'
        },
    },
    series: [
        {
            name: 'Pedidos',
            data: [],
        },
    ],
});

// Fetch data and update charts
fetch("/get-stats-data")
    .then((response) => response.json())
    .then((data) => {
        // Actualizar gráfico de productos
        let productos = data.productos;
        let tipos = productos.map((item) => item[0]);
        let totales = productos.map((item) => item[1]);

        const productosChart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === 'productos-container'
        );
        
        productosChart.update({
            xAxis: {
                categories: tipos
            },
            series: [
                {
                    data: totales,
                }
            ]
        });

        // Actualizar gráfico de pedidos
        let pedidos = data.pedidos;
        let comunas = pedidos.map((item) => item[0]);
        let totalesPedidos = pedidos.map((item) => item[1]);

        const pedidosChart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === 'pedidos-container'
        );

        pedidosChart.update({
            xAxis: {
                categories: comunas
            },
            series: [
                {
                    data: totalesPedidos,
                }
            ]
        });
    })
    .catch(error => console.error('Error:', error));