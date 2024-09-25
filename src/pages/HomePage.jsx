import { useEffect, useRef } from "react";
import Highcharts from 'highcharts';

export function HomePage() {
    function createChart(){
        const chart = Highcharts.chart('chart-container', {

            chart: {
                type: 'pie',
                renderTo: document.getElementById('chart-container')
            },
        
            title: {
                text: 'Born persons, by girls\' name'
            },
        
            subtitle: {
                text: 'Resize the frame or click buttons to change appearance'
            },
        
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
        
            xAxis: {
                categories: ['2019', '2020', '2021'],
                labels: {
                    x: -10
                }
            },
        
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Amount'
                }
            },
        
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 45.0],
                    ['IE',      26.8],
                    ['Safari',  8.5],
                    ['Opera',   6.2],
                    ['Others',  0.7]
                ]
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        // credits: {
                        //     enabled: false
                        // }
                    }
                }]
            }
        });
    }
    
    
    
    function onChangeChartSize( {target }){
        var chartEl = document.getElementById('chart-container')

        switch (target.value){
            case 'small': 
                chartEl.style.width= '250px'
                break;
            case 'big':
                chartEl.style.width= '550px'
                break;
            case 'auto':
                chartEl.style.width= '100%'
                break;
            default:
                chartEl.style.width= '350px'
                break;
        }

    }

    return (
        <section className="home-container">
            <h1>    Home sweet Home     </h1> 
            
            <div onClick={createChart}> 
                load graph
                <div id="chart-container"></div>
            </div>
            <div className="buttons-container">
                <input type="button" id="small-btn" value='small' onClick={onChangeChartSize} />
                <input type="button" id="large-btn" value='big'  onClick={onChangeChartSize} />
                <input type="button" id="auto-btn" value='auto'  onClick={onChangeChartSize} />
            </div>
            
         
        </section >
    )
}

