import Head from "next/head";
import ProjectSorter from "../components/project_sorter";

export default function Modpacks({ poppins, syne }) {
  const projectArray = [
    {
      type: "modpack",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/modpacks/bigchadguys-plus",
      title: "BigChadGuys Plus (w/ Cobblemon!)",
      summary:
        "Stardew Valley meets Pokémon! Prepare for a comfy and cozy adventure with over 1,600 quests!",
      description:
        "Don't let the name fool you! BigChadGuys Plus is a comfy and cozy Cobblemon adventure. It was created to answer one simple question: What would everyday life with Pokémon look like? If you've ever pondered this, BCG+ might be perfect for you! Hop into a beautiful world. Explore hundreds of decorations, from typewriters to televisions to toilets. Race your friends in planes, trains, and automobiles. Expand your diet with a huge variety of farming and cooking mods. Sell your crops and mob drops in the Selling Bin! And buy rare and unique items in the Daily Shop! BCG+ follows a progression system like Vanilla Minecraft, making it familiar enough to easily find your way around, but with enough twists to keep things interesting!",
    },
    {
      type: "modpack",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/modpacks/bigchadguys-plus-non-cobblemon",
      title: "BigChadGuys Plus (Non Cobblemon!)",
      summary: "Your comfy and cozy adventure awaits! Now with quests!",
      description:
        "Don't let the name fool you! BigChadGuys Plus is a comfy and cozy adventure. Hop into a beautiful world. Explore hundreds of decorations, from typewriters to televisions to toilets. Race your friends in planes, trains, and automobiles. Expand your diet with a huge variety of farming and cooking mods. Sell your crops and mob drops in the Selling Bin! And buy rare and unique items in the Daily Shop! BCG+ follows a progression system like Vanilla Minecraft, making it familiar enough to easily find your way around, but with enough twists to keep things interesting!",
    },
    {
      type: "modpack",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/modpacks/bigchadguys-and-the-holy-grail",
      title: "BigChadGuys and the Holy Grail",
      summary: "A comfy and cozy epic adventure with over 700+ quests!",
      description:
        "Have you ever found yourself wondering, Why so serious, RPG pack? Can't I chart my own course, defeat whom I desire, and roam wherever my whims take me? If so, behold! The chronicle of BigChadGuys and the Holy Grail beckons, promising an exquisite journey through a meticulously crafted world teeming with wildlife, dungeons, structures, and formidable adversaries. Imagine this: 700 meticulously handcrafted quests acting as benevolent guides. Entirely optional, yet generously detailed for those in search of a roadmap through their exploits. For those yearning for respite from adventure, a charming and delightful farming and decoration system awaits, brimming with content to captivate even the most seasoned builder. And for those with a penchant for combat, over 20 unique bosses, along with twice as many mini-bosses and mobs, stand ready to test your mettle.",
    },
    {
      type: "modpack",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/modpacks/bigchadguys-minus",
      title: "BigChadGuys Minus",
      summary: "An ultra light comfy and cozy adventure!",
      description:
        "Don't let the name fool you! BigChadGuys Minus is a comfy and cozy adventure. Explore hundreds of decorations, from typewriters to televisions to toilets. Race your friends in planes, trains, and automobiles. Expand your diet with a huge variety of farming and cooking mods. BCG Minus follows a progression system like Vanilla Minecraft, makin",
    },
    {
      type: "mod",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/mc-mods/bcg-util",
      title: "BCG+ Util",
      summary: "A utility mod for BigChadGuys modpacks",
      description:
        "At present, BCG+ Util primarily offers attribute quest rewards, providing modpack developers with the capability to create quests that permanently alter various user stats.",
    },
    {
      type: "mod",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/mc-mods/bigchadguys-plus-volume-two-music-discs",
      title: "BigChadGuys Plus, Vol. 2 Music Discs",
      summary:
        "The BigChadGuys Plus, Vol. 2 (Original Game Soundtrack) as music discs!",
      description:
        "A simple mod that introduces all the amazing songs composed for BigChadGuys Plus by @bndf88.",
    },
    {
      type: "mod",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/mc-mods/custom-cursor",
      title: "Custom Cursor 🖱️",
      summary: "Customize your cursor!",
      description:
        "Custom Cursor allows you to personalize your mouse icon to suit your style. Configure its texture, size, and position.",
    },
    {
      type: "mod",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/mc-mods/daily-shop",
      title: "Daily Shop 🫙",
      summary:
        "A block that offers a daily-changing assortment of random items for sale",
      description:
        "The Daily Shop is a block that pulls and sells random items from a pool at midnight. It was created for use in a singleplayer environment but also works well in multiplayer. Shops are synchronized, so everyone will see the same listings each day.n",
    },
    {
      type: "mod",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/mc-mods/selling-bin",
      title: "Selling Bin 📦",
      summary:
        "A configurable block that automatically sells items placed inside it at midnight",
      description:
        "The Selling Bin is a block that, at midnight, converts any items inside it taggest as sellable. It comes in three tiers, with each upgrade adding more slots. Selling Bins have player-specific shared inventories, similar to Ender Chests.",
    },
    {
      type: "texture-pack",
      src: "/joes_comfy_ui.png",
      url: "https://www.curseforge.com/minecraft/texture-packs/joes-comfy-ui",
      title: "Joe's Comfy UI",
      summary:
        "A Stardew Valley-inspired texture pack created for BigChadGuys Plus. It currently retextures all Minecraft UI elements",
      description:
        "A Man With Plushies, Alloy Forgery, Automobility, Backpacked, Bakery, Bartering Station, Better End, Brewery, Brewin' and Chewin', Candlelight, Chipped, Cobblemon, Compact Storage, Daily Shop, Do API, Easy Anvils, Easy Magic, Expanded Delight, Exposure, Farmer's Delight, FTB Library, Fabric Waystones, Herbal Brews, Illager Invasion, Immersive Aircraft, Inventory Profiles Next, Macaw's Furnitures, Mighty Mail, Polymorph, Small Ships, Supplementaries, Tom's Simple Storage, Trade Cycling, Trash Cans, Traveler's Backpacks, Trinkets, Universal Graves, Universal Shops, Vanity Slots, Vinery, Simple Voice Chat, Building Wands, Xerca's Music Maker, and Xerca's Joy of Painting.",
    },
  ];

  return (
    <div className={`projects-full-page + ${poppins.className}`}>
      <Head>
        <title>BigChadGuys | Projects</title>
      </Head>

      <h1 className="page-title">PROJECTS</h1>
      <ProjectSorter projects={projectArray} />
    </div>
  );
}
