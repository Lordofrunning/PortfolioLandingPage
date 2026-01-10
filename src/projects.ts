export type Project = {
  id: string
  title: string
  description: string
  image: string // full URL or path under /public
  liveUrl?: string
  repoUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: "Portfolio Landing Page",
    description: "Vite + TypeScript starter for my portfolio.",
    image: "https://via.placeholder.com/800x450?text=Portfolio+Landing+Page",
    liveUrl: "https://your-live-site.example.com",
    repoUrl: "https://github.com/tyler/PortfolioLandingPage",
    tags: ["vite", "typescript"],
  },
  {
    id: 'sample-app',
    title: "Sample Web App",
    description: "A cool project with neat features.",
    image: "https://via.placeholder.com/800x450?text=Project+Screenshot",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/tyler/example",
    tags: ["react", "api"],
  },
]
