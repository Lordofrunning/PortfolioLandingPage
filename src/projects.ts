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
    images: ["src/Images/ButtonShowCaseImage.png","src/Images/AnimatedShowCaseImage.png","src/Images/GradiantShowCaseImage.png"],
    liveUrl: "https://elementsdisplay.netlify.app/",
    repoUrl: "https://github.com/Lordofrunning/Elements-Display-Anim.git",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 'StarWarsRPGApp',
    title: "A Star Wars Themed RPG Helper App",
    description: "A TTRPG StarWars Themed App Helper. Complete with Dice, Enemy Sheets, Rules, MiniGames, and a Galaxy Map. (no live code cause its a mobile app) ",
    type: 'mobile',
    images: [ "src/Images/Mobile/SWHomePage.jpg",
    "src/Images/Mobile/SWThemePicker.jpg",
    "src/Images/Mobile/SWFullDice.jpg",
    "src/Images/Mobile/SWGalaxyMap.jpg",
"src/Images/Mobile/SWInfoMod.jpg",
"src/Images/Mobile/SWEmptyDice.jpg"],

    repoUrl: "https://github.com/Lordofrunning/starwarsRPGApp2.git",
    tags: ["React", "ExpoGo" ],
  },
   {
    id: 'ClothingAppDemo',
    title: "ClothingApp Demo",
    description: "A Demo Clothing App for viewing new clothes, keeping a digital wardrobe, and planning outfits. (this is my current project ive been working on)",
    type: 'mobile',
    images: [
      "src/Images/clothingapp1.jpg",
      "src/Images/clothingapp2.jpg",
      "src/Images/clothingapp3.jpg",
      "src/Images/clothingapp4.jpg",
      "src/Images/clothingapp5.jpg"
    ],
    repoUrl: "https://github.com/Lordofrunning/clothingapp.git",
    tags: ["React", "ExpoGo", "Python" ],
  },
]
