export interface DonutChartProps {
  percentage: number
  size?: number
}

export function createDonutChart(props: DonutChartProps): HTMLElement {
  const { percentage, size = 100 } = props

  const container = document.createElement('div')
  container.className = 'donut-chart-container'
  container.style.width = `${size}px`
  container.style.height = `${size}px`

  const pie = document.createElement('div')
  pie.className = 'donut-chart-pie'
  const angleInDegrees = (percentage / 100) * 360
  pie.style.setProperty('--ng', `${angleInDegrees}`)
  pie.style.setProperty('--size', `${size}px`)

  const label = document.createElement('span')
  label.className = 'donut-chart-label'
  label.textContent = `${Math.round(percentage)}%`

  container.appendChild(pie)
  container.appendChild(label)

  return container
}
