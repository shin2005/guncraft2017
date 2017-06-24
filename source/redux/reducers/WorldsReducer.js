const defaultState = {
  worlds: [
    {
      title: 'Overworld',
      titleColor: '#18991e',
      description: 'The overworld is where we live and spawn in.',
      imageSrc: '/images/worlds/newOverworld.png'
    },
    {
      title: 'Nether',
      titleColor: '#f10d0d',
      description: 'The nether is a sort of hell, where strange monsters like Zombie pigmen, blazes, and ghasts spawn.',
      imageSrc: '/images/worlds/newNether.jpeg'
    },
    {
      title: 'End',
      titleColor: '#6107ba',
      description: 'The end is a sort of empty world where Endermen(see mobs for information) and the ender dragon lives.You can only enter through an ender portal activated by an eye of end. They only exist in strongholds.',
      imageSrc: '/images/worlds/end.png'
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
