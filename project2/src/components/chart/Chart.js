import React from 'react'
import { Bar } from 'react-chartjs-2';
import './Chart.css'

const Chart = ({ data }) => {


    const options = {
        responsive: true,
        legend: {
            display: false,
        },
        type: 'bar',
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
    return (
        <>
            <Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />

        </>
    )
}

export default Chart
