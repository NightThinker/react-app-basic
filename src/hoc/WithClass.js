import React, { Component } from 'react';


// const withClass = (WrappdComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappdComponent {...props}/>
//     </div>
//   );
// };

const withClass = (WrappdComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappdComponent {...this.props}/>
        </div>
      )
    }
  }
};

export default withClass;