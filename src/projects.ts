export type Project = {
  id: string
  title: string
  description: string
  images: string[] // array of image URLs or paths under /public
  liveUrl?: string
  repoUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: "Elements Display",
    description: "A Display for Variations on Elements like buttons, graidants, ect",
    images: ["src/Images/ButtonShowCaseImage.png","src/Images/AnimatedShowCaseImage.png"],
    liveUrl: "https://elementsdisplay.netlify.app/",
    repoUrl: "https://github.com/Lordofrunning/Elements-Display-Anim.git",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 'sample-app',
    title: "Sample Web App",
    description: "A cool project with neat features.",
    images: [
      "https://via.placeholder.com/800x450?text=Screenshot+1",
      "https://via.placeholder.com/800x450?text=Screenshot+2",
      "https://via.placeholder.com/800x450?text=Screenshot+3"
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/tyler/example",
    tags: ["react", "api"],
  },
]
