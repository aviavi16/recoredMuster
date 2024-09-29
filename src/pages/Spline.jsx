import { useEffect, useRef } from "react";
import Highcharts from 'highcharts/highstock';

export function Spline(){

    useEffect( ()=> {
        loadCharts()
    }, [])

    function loadCharts(){
        (async () => {

            // Load the dataset
            const data = await fetch(
                'https://demo-live-data.highcharts.com/aapl-c.json'
            ).then(response => response.json());
        
            // Create the chart
            Highcharts.stockChart('container', {
        
                rangeSelector: {
                    selected: 1
                },
        
                title: {
                    text: 'AAPL Stock Price'
                },
        
                series: [{
                    name: 'AAPL Stock Price',
                    data: data,
                    type: 'spline',
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        })();
    }
    return (
        <section className="main-dashboard">

            <div id="container"></div>
        </section>
    )
}