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
    title: "Elements Display",
    description: "A Display for Variations on Elements like buttons, graidants, ect",
    image: "src/Images/ButtonShowCaseImage.png",
    liveUrl: "https://elementsdisplay.netlify.app/",
    repoUrl: "https://github.com/Lordofrunning/Elements-Display-Anim.git",
    tags: ["JavaScript", "HTML", "CSS"],
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
