import "./styles.css";

const keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

export default class Matrix{
  constructor(size){
    this.size = size
    this.helper = new Array(size).fill('')
    this.setDogIndex()
    this.setBoneIndex()
    this.score = 0
    this.moves = 0
  }

  checkForNewBone(){
    this.moves++
    if(this.dogIndex === this.boneIndex){
      this.score++
      this.setBoneIndex()
    }
  }

  keyHandler(keyCode){
    console.log('no', keyCode)
    switch (keyCode) {
      case keyCodes.left:
        if(this.dogIndex%this.size !== 0){
          this.dogIndex = this.dogIndex - 1
          this.checkForNewBone()
        }
        break
      case keyCodes.right:
        if(this.dogIndex%this.size !== this.size-1){
          this.dogIndex = this.dogIndex + 1
          this.checkForNewBone()
        }
        break
      case keyCodes.up:
        if(this.dogIndex > this.size-1){
          this.dogIndex = this.dogIndex -this.size
          this.checkForNewBone()
        }
        break
      case keyCodes.down:
          if(this.dogIndex < this.size*(this.size-1)){
            this.dogIndex = this.dogIndex + this.size
            this.checkForNewBone()
          } 
        break
      default: console.log("invalid move!");
    }
  }

  setDogIndex(){
    let getDog = this.getRandomNumber()
    if(this.dogIndex === getDog){
      this.setDogIndex()
    }
    this.dogIndex = getDog
  }

  setBoneIndex(){
    let getBone = this.getRandomNumber()
    this.boneIndex = getBone
    if(this.boneIndex === this.dogIndex){
      this.setBoneIndex()
    }
  }

  getRandomNumber(){
    return Math.floor(Math.random()*this.size*this.size)
  }
  
  render(){
    return `<div>
    <h3>Dog & Bone Game</h3>
    <h4>Use arrow keys to play</h4>
    <h4>Total Moves:  ${this.moves}</h4>
    <h4>Your Score:  ${this.score}</h4>
      ${this.helper.map((_, index) => `
      <div class='row'>
      ${this.helper.map((_, innerIndex) => `
      <div class='col' 
        id=${index*this.size + innerIndex}
      >
            ${
              `${(this.dogIndex === this.size*index+innerIndex) ? `<img alt='dog' class='dog' src='../dog.png' />` : 
              (this.boneIndex === this.size*index+innerIndex) ? `<img alt='bone' class='bone' src='../bone.png' />` : ''}`
            }
          </div>`
          ).join('')}
          </div>
      `).join('')}
    </div>`
  }
}

// ${this.helper.map((_, index) => `<div class='col'>
            
//           </div>`
//           )}