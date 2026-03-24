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
    description: "A Display for Variations on Elements like buttons, gradients, etc",
    type: 'web',
    images: ["/Images/ButtonShowCaseImage.png", "/Images/AnimatedShowCaseImage.png", "/Images/GradiantShowCaseImage.png"],
    liveUrl: "https://elementsdisplay.netlify.app/",
    repoUrl: "https://github.com/Lordofrunning/Elements-Display-Anim.git",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 'StarWarsRPGApp',
    title: "A Star Wars Themed RPG Helper App",
    description: "A TTRPG StarWars Themed App Helper. Complete with Dice, Enemy Sheets, Rules, MiniGames, and a Galaxy Map. (no live code cause its a mobile app) ",
    type: 'mobile',
    images: ["/Images/Mobile/SWHomePage.jpg", "/Images/Mobile/SWThemePicker.jpg", "/Images/Mobile/SWFullDice.jpg", "/Images/Mobile/SWGalaxyMap.jpg", "/Images/Mobile/SWInfoMod.jpg", "/Images/Mobile/SWEmptyDice.jpg"],

    repoUrl: "https://github.com/Lordofrunning/starwarsRPGApp2.git",
    tags: ["React", "ExpoGo" ],
  },
   {
    id: 'ClothingAppDemo',
    title: "ClothingApp Demo",
    description: "A Demo Clothing App for viewing new clothes, keeping a digital wardrobe, and planning outfits. (this is my current project ive been working on)",
    type: 'mobile',
    images: [
      "/Images/clothingapp1.jpg",
      "/Images/clothingapp2.jpg",
      "/Images/clothingapp3.jpg",
      "/Images/clothingapp4.jpg",
      "/Images/clothingapp5.jpg"
    ],
    repoUrl: "https://github.com/Lordofrunning/clothingapp.git",
    tags: ["React", "ExpoGo", "Python" ],
  },
]
