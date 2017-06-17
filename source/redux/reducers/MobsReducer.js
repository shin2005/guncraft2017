const defaultState = {
  sections: [
    {
      title: 'Overworld Monsters',
      titleColor: '#0bc614',
      thumbs: [
        {
          title: 'Zombie',
          description: 'Zombies are one of the most common mobs in Minecraft. They spawn in caves and at night. They have 20 health(10 hearts, just like us)(when they don`t have armour) and give damage 2 HP(1 heart) in easy, 1.5 hearts in normal, and 2 hearts in hard. (easy, normal, and hard is the difficulty). Watch out for chicken jockeys- they`re REALLY fast!!!',
          src: '/images/mobs/newzombie.gif',
          topMargin: true
        },
        {
          title: 'Skeleton',
          description: 'Skeletons are also common mobs that spawn in the Overworld, and sometimes the Nether. DO NOT confuse with the wither skeleton-totally different.',
          src: '/images/mobs/newskeleton.gif',
          topMargin: true
        },
        {
          title: 'Creeper',
          description: 'Creepers are greenish mobs that blow up. When you hear a hissing sound behnd you, run!! That`s a creeper getting ready to blow up. You can summon a creeper hit by lightning, called a Charged Creeper, with </summon creeper [x] [y] [z] {powered:1}>',
          src: '/images/mobs/newcreeper.jpg',
          topMargin: true
        },
        {
          title: 'Spider',
          description: 'Spiders are mobs that give you damage by hitting you. Luckily, they only have 16 HP(8 hearts), so they are relatively easy to kill. Just don`t get them bunched up-that`s hard. Meanwhile, cave spiders are a lot more dangerous because they usually spawn in groups and give you poison effects. P.S.: The <Bane of Arthropods> enchant are effective for killing spiders.',
          src: '/images/mobs/newspider.gif',
          topMargin: true
        },
        {
          title: 'Endermen',
          description: 'Endermen are mobs that can teleport, which is pretty annonying. They have 40 HP(20 hearts) and attack if you attack first or look at its head. They can also carry blocks( And no, they can`t carry your bed away, so don`t worry about that.)Note: Endermen hate water. If you have cheats enabled, run home, close your door, and type \'/weather rain\' or \'/weather thunder\'in the command. Endermen will flee.',
          src: '/images/mobs/newenderman.gif',
          topMargin: true
        },
        {
          title: 'Witch',
          description: 'Witches have 13 hearts. Also, witches are annoying. They can throw potions of poison and instant damage potions, making them pretty darn challenging to just run at them. They also have fire resistance potions, so they won`t die even in lava, except when they had low HP. Also, they attack each other if a large number is left alone.',
          src: '/images/mobs/witch.png'
        },
        {
          title: 'Slime',
          description: 'Slimes bounce around like Magma Cubes. They don`t hurt that much, and easy to kill. Who made this??',
          src: '/images/mobs/newslime.gif'
        },
        {
          title: 'Cave Spider',
          description: 'Cave Spiders are basically spiders, but they give you POISON. They only work on difficulty over normal. P.S.: I adivise not going into mineshafts to look for them. ',
          src: 'images/mobs/cave-spider.gif'
        },
        {
          title: 'Silverfish',
          description: 'Silverfish spawn only in strongholds, and drops nothing. DANG IT!!',
          src: 'images/mobs/silverfish.gif'
        },
        {
          title: 'Spider Jockey',
          description: 'Spider jockeys are skeletons riding spiders. We had enough with the cavalry of Mongolia!! AHHHHHHHHHHHHH!!!!',
          src: 'images/mobs/spiderjockey.gif'
        }
      ]
    },
    {
      title: 'Nether monsters',
      titleColor: 'red',
      thumbs: [
        {
          title: 'Blaze',
          description: 'Blazes are crazy, scary monsters, throwing fireballs, and turning areas into mayhem. What can it be weak to? Rain, water, and ice. Pretty darn awesome. ',
          src: '/images/mobs/newblaze.gif',
          topMargin: true
        },
        {
          title: 'Ghast',
          description: 'Ghasts. Okay. Big, white, sad cubes floating around, occasionally throwing up fire charge. Typical. ',
          src: '/images/mobs/movingghast.gif',
          topMargin: true
        },
        {
          title: 'Zombie Pigmen',
          description: 'Zombie pigmen are monsters that are normally neutral if you don`t hit them. However, if you do hit them, every single neighboring pigmen will run over and crowd around to kill you. They give 2.5 hearts(5 HP)damage alone, so watch out!! ',
          src: '/images/mobs/newpigmen.jpg',
          topMargin: true
        },
        {
          title: 'Wither Skeletons',
          description: 'Wither skeletons are black skeletons holding swords. They give you the wither affect(making you hearts go black).',
          src: '/images/mobs/witherskeleton.png',
          topMargin: true
        },
        {
          title: 'Magma Cubes',
          description: 'Magma Cubes are red... cubes. They jump around and whack you on the head. If you kill them, they split in 4. Those "Magma Pups" split in 4 again when you kill them. Be careful with them!!',
          src: '/images/mobs/newmagma.jpeg',
          topMargin: true
        },
      ]
    },
    {
      title: 'Boss Mobs',
      titleColor: '#6b04d2',
      thumbs: [
        {
          title: 'Wither',
          description: 'Withers are spawned by you!! You use 4 soul sand, and 3 wither skeleton heads. Boss mobs. Yay. ',
          src: '/images/mobs/wither.png',
          topMargin: true
        },
        {
          title: 'Ender Dragon',
          description: 'Ender Dragons are the final mobs to face in the end. If you beat it, you get to see MINECRAFT CREDITS!!   YAY!!!!!',
          src: '/images/mobs/EnderDragon.png',
          topMargin: true
        }
      ]
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
