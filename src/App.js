import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
 state={
   bold:false,
   italic:false,
   underline:false,
   curcolor:"black",
 }
 changeColor=color =>{this.setState({curcolor:color})};

 changeStyle=style =>{this.setState({[style]: !this.state[style]})};

  render() {
    const stylingBoxes = stylings.map(style => (
      <button className={`btn ${this.state[style]?"btn-success":"btn-outline-primary"}`} style={styles[style]} key={style} onClick={() =>this.changeStyle(style)}>
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => {
      const isCurrentColor = color === this.state.curcolor;
      const size = isCurrentColor?35:30;
      
      return (
      <button
        style={{ backgroundColor: color, height: size, width: size ,borderRadius:5}}
        key={color}
        onClick={() =>this.changeColor(color)}
      />)
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea 
          style={{
            fontStyle:this.state.italic?"italic":"",
            color:this.state.curcolor,
            fontWeight:this.state.bold?"bold":"",
            textDecorationLine:this.state.underline?"underline":"",
            }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
