class Button {
    constructor(type, color,width, height) {
      this.props = {
        type: type,
        color: color,
        width: width,
        height: height,
      };
    
    }
    onClick() {
      console.log(this.props);
    }
  }

  function testButton() {
    let clickButton = new Button("button","green",100, 30);
    console.log("Button properties:");
    clickButton.onClick()
  
    if (
      clickButton.props.type === "button" &&
      clickButton.props.color === "green" &&
      clickButton.props.width === 100 &&
      clickButton.props.height === 30
    ) {
      console.log("Button properties are correct.");
    } else {
      console.log("Button properties are not correct.");
    }
  }
  

  testButton();
  