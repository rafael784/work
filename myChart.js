
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, { 
	type: 'bar', 
	data: { 
		labels: ["January", "February" , "March" , "April"], 
		datasets: [ 
		{ label: '# Sales By Month for: ', 
			data: [0,0,0,0], 
			backgroundColor :['rgba(75, 192, 192, 0.2)', 
					'rgba(75, 192, 192, 0.2)', 
					'rgba(75, 192, 192, 0.2)', 
					'rgba(75, 192, 192, 0.2)'
	], 
	
	borderColor: [ 
					'rgba(75, 192, 192, 1)',  
					'rgba(75, 192, 192, 1)',  
					'rgba(75, 192, 192, 1)',  
					'rgba(75, 192, 192, 1)', 
					 
				], 
	borderWidth : 1 
		} 
		] 
	}, 
	options: { 
			scales: { 
				yAxes: [{ 
					ticks: { 
						beginAtZero:true 
					} 
				}] 
			} 
		} 
	}); 

function renderChart(datas) {
	 myChart.data.datasets[0].data = datas
	 myChart.update();

}
