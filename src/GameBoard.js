import React from "react";
import Block from "./Block.js";
import shuffleColor from "./utilities/shuffle";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        activeBlock: null,
        activeColor: null,
        selectedBlocks: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    let _this = this;
    window.setTimeout(function(){
        _this.setState({
            selectedBlocks: []
        });
    },1000);
  }

  setActiveBlock(index, color) {
    this.setState({
        activeBlock: index,
        activeColor: color,
        selectedBlocks: (this.state.activeColor === color) ? this.state.selectedBlocks.concat(this.state.activeBlock,index):this.state.selectedBlocks 
    });
  }

  styles = {
    maxWidth: 500,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  };

  blockColors = [
    "#E7E247",
    "#E7E247",
    "#3D3B30",
    "#3D3B30",
    "#4D5061",
    "#4D5061",
    "#5C80BC",
    "#5C80BC",
    "#EEB4B3",
    "#EEB4B3",
    "#2F242C",
    "#2F242C"
  ];

  blocks = [];

  randomColors = shuffleColor(this.blockColors);


  render() {
    this.blocks = this.randomColors.map((color, index) => {
        return <Block key={index} blockColor={color} 
        blockIndex={index} activeBlock={this.state.activeBlock} 
        setActiveBlockProp={this.setActiveBlock.bind(this)}
        selectedBlocks={this.state.selectedBlocks}
        />
      });
    return (
        <div className="board">
            <h1>Match colors</h1>
            <div className="" style={this.styles}>
                {this.blocks}
            </div>
        </div>
    );
  }
}

export default GameBoard;
