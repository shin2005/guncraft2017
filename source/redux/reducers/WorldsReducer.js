const defaultState = {
  worlds: [
    {
      title: 'Overworld',
      titleColor: '#18991e',
      description: 'The overworld is where we live and spawn in.',
      imageSrc: '/images/worlds/overworld.jpg'
    },
    {
      title: 'Nether',
      titleColor: '#e81111',
      description: 'The nether is a sort of hell, where strange monsters like Zombie pigmen, blazes, and ghasts spawn.',
      imageSrc: '/images/worlds/nether.png'
    },
    {
      title: 'End',
      titleColor: '#6b04d2',
      description: 'The end is a sort of empty world where Endermen(see mobs for information) and the ender dragon lives.',
      imageSrc: '/images/worlds/end.png'
    }
  ]
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
