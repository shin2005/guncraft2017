const defaultState = {
  commands: {
    columns: ['#', 'Command', 'description'],
    rows: [
      ['1', '/gamemode', 'change gamemode to either survival(0), creative(1), adventure(2), or spectator(3).'],
      ['2', '/spawnpoint', 'sets spawnpoint'],
      ['3', '/help [CommandName]', 'Provides more information on the given command.'],
      ['4', '/give', 'Gives you a specific item(including things not in your inventory)'],
      ['5', '/kill', 'Kills yourself'],
      ['6', '/kill @e', 'Kills you and all entitys, including mobs, minecarts, etc.'],
      ['7', '/give', 'Gives you specific items, like command blocks.']
    ]
  }
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
