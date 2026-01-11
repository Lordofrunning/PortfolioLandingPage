export type Project = {
  id: string
  title: string
  description: string
  type: 'web' | 'mobile'
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
    type: 'web',
    images: ["src/Images/ButtonShowCaseImage.png","src/Images/AnimatedShowCaseImage.png","src/Images/GradiantShowCaseImage.png"],
    liveUrl: "https://elementsdisplay.netlify.app/",
    repoUrl: "https://github.com/Lordofrunning/Elements-Display-Anim.git",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 'StarWarsRPGApp',
    title: "A Star Wars Themed RPG Helper App",
    description: "A TTRPG StarWars Themed App Helper. Complete with Dice, Enemy Sheets, Rules, MiniGames, and a Galaxy Map. A simple Project Coded by me and my brother.",
    type: 'mobile',
    images: [
      "https://via.placeholder.com/450x800?text=Screenshot+1",
      "https://via.placeholder.com/450x800?text=Screenshot+2",
      "https://via.placeholder.com/450x800?text=Screenshot+3"
    ],
    repoUrl: "https://github.com/tyler/example",
    tags: ["React", "ExpoGo" ],
  },
]
