import { createDonutChart } from '../components/donutChart'

export function initCharts() {
  const chartAPlusContainer = document.getElementById('chart-aplus')
  const chartNetworkPlusContainer = document.getElementById('chart-networkplus')

  if (chartAPlusContainer) {
    chartAPlusContainer.appendChild(createDonutChart({ percentage: 60, size: 100 }))
  }
  if (chartNetworkPlusContainer) {
    chartNetworkPlusContainer.appendChild(createDonutChart({ percentage: 35, size: 100 }))
  }
}
