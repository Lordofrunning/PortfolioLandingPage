import { createDonutChart } from '../components/donutChart'

export function initCharts() {
  const chartAPlusContainer = document.getElementById('chart-aplus')
  const chartNetworkPlusContainer = document.getElementById('chart-networkplus')

  const aplusChart = chartAPlusContainer
    ? createDonutChart({ percentage: 60, size: 100 })
    : null
  const networkPlusChart = chartNetworkPlusContainer
    ? createDonutChart({ percentage: 35, size: 100 })
    : null

  if (aplusChart && chartAPlusContainer) {
    chartAPlusContainer.appendChild(aplusChart.element)
  }
  if (networkPlusChart && chartNetworkPlusContainer) {
    chartNetworkPlusContainer.appendChild(networkPlusChart.element)
  }

  // Re-animate every time the IT Security panel opens
  const itsecContent = document.getElementById('itsecurity-content')
  if (itsecContent && (aplusChart || networkPlusChart)) {
    new MutationObserver(() => {
      if (itsecContent.classList.contains('expanded')) {
        aplusChart?.animate()
        networkPlusChart?.animate()
      }
    }).observe(itsecContent, { attributes: true, attributeFilter: ['class'] })
  }
}
