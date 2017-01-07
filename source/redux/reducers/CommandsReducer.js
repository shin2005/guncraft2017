const defaultState = {
  commands: {
    columns: ['#', 'Command', 'description'],
    rows: [
      ['1', '/gamemode', '게임모드 (크리에티브, 서바이벌, 어드벤처, 관전) 중 하나로 바꾼다.'],
      ['2', '/spawnpoint', '스폰포인트 (죽으면 현 위치에 스폰이 되게 하는 커맨드)'],
      ['3', '/help [CommandName]', 'Provides more information on the given command.']
    ]
  }
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    default: return state;
  }
}
