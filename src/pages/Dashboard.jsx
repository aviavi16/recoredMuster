import { useEffect, useRef } from "react";
import Highcharts from 'highcharts';

export function Dashboard(){

    const NUMBEROFCHARTS = 6

    useEffect( ()=> {
        loadCharts( NUMBEROFCHARTS )
    }, [])

    function loadCharts( numberOfCharts ){
        for ( var i =0 ; i< numberOfCharts ;i++){
            Highcharts.chart('chart' + i, {

                title: {
                    text: 'U.S Solar Employment Growth',
                    align: 'left'
                },
            
                subtitle: {
                    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
                    align: 'left'
                },
            
                yAxis: {
                    title: {
                        text: 'Noise'
                    }
                },
            
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2022'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
            
                series: [{
                    name: 'Installation & Developers',
                    data: [
                        43934, 48656, 65165, 81827, 112143, 142383,
                        171533, 165174, 155157, 161454, 154610, 168960, 171558
                    ]
                }],
            
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                    }]
                }
            
            });
        }
        
        
    }
    return (
        <section className="main-dashboard">
            <div className="charts-container">
                <div id="chart0" className="chart"></div>
                <div id="chart1" className="chart"></div>
                <div id="chart2" className="chart"></div>
                <div id="chart3" className="chart"></div>
                <div id="chart4" className="chart"></div>
                <div id="chart5" className="chart"></div>
            </div>
            
        </section>
    )
}