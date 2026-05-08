export interface DonutChartProps {
  percentage: number
  size?: number
}

export interface DonutChart {
  element: HTMLElement
  animate: () => void
}

export function createDonutChart(props: DonutChartProps): DonutChart {
  const { percentage, size = 100 } = props

  const container = document.createElement('div')
  container.className = 'donut-chart-container'
  container.style.width = `${size}px`
  container.style.height = `${size}px`

  const pie = document.createElement('div')
  pie.className = 'donut-chart-pie'
  const targetAngle = (percentage / 100) * 360
  pie.style.setProperty('--ng', '0')
  pie.style.setProperty('--size', `${size}px`)

  const label = document.createElement('span')
  label.className = 'donut-chart-label'
  label.textContent = `${Math.round(percentage)}%`

  container.appendChild(pie)
  container.appendChild(label)

  function animate() {
    pie.style.setProperty('--ng', '0')
    // Two rAF calls ensure the reset paints before the target is set
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pie.style.setProperty('--ng', `${targetAngle}`)
    }))
  }

  // Animate on first scroll-into-view
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        animate()
        observer.disconnect()
      }
    }
  }, { threshold: 0.4 })
  observer.observe(container)

  return { element: container, animate }
}
