import { useTheme } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { CustomChartProps } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function CustomChart(props: CustomChartProps) {
  const { data, labels, type } = props
  const theme = useTheme()

  const chartData = {
    labels,
    datasets: [
      {
        label: 'My Dataset',
        data: data,
        backgroundColor: 'rgba(12, 11, 242, 1)',
        borderColor: 'rgb(12, 11, 242)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    scaleShowGridLines: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: theme.typography.subtitle,
        },
      },
      y: {
        grid: {
          color: theme.appDefaultStroke,
        },
        border: {
          display: false,
        },
        ticks: {
          color: theme.typography.subtitle,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div>
      {type === 'bar' && <Bar data={chartData} options={options} />}
      {type === 'line' && <Line data={chartData} options={options} />}
    </div>
  )
}

export default CustomChart
