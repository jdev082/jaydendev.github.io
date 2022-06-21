import COLOR from '../..//randomColor.js'
const React = require('react')

class Motd extends React.Component {
    render() {
      return <p style={{color: COLOR}}>
        Hello, I am JaydenDev. My hobby is coding. 
        You can view my projects <a style={{color: COLOR}} href="https://github.com/JaydenDev">Here</a>!
        As you can see, the color changes every time you reload!
        <br></br>
        <br></br>
        <code-block>
            alert("Hello, World!");
        </code-block>
      </p>
      ;
    }
  }

export default Motd;