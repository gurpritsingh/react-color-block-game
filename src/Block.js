import React from "react";

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     if(this.props.activeBlock !== this.props.blockIndex){
         console.log('click handler worked');
        this.props.setActiveBlockProp(this.props.blockIndex, this.props.blockColor);
     } 
  }

  styles = {
    width: 100,
    height: 100,
    display: "inline-block",
    border: "1px solid",
    cursor: "pointer",
    margin: 1
  };

  
  render(props) {
    return (
      <div
        className={(this.props.activeBlock === this.props.blockIndex || (this.props.selectedBlocks.indexOf(this.props.blockIndex) !== -1) )? 'active block' : 'inactive block'}
        style={{ ...this.styles, backgroundColor: this.props.blockColor }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Block;
