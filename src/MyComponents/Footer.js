import React from 'react'

const Footer = () => {
  let footerStyle={
    width:"100%",
    backgroundColor:"black"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; StudywithMe.com
      </p>
        
    </footer>
  )
}

export default Footer

//class based components
// import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
