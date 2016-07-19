class GameController{
  constructor(){
    this.gridSize = 6;
    this.gridRange = new Array(this.gridSize);
  }
}

export const game = {
  templateUrl: 'app/game.html',
  controller: GameController,
  controllerAs: 'vm'
};
