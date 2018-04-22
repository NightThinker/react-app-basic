import React, { Component } from 'react';


// const withClass = (WrappdComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappdComponent {...props}/>
//     </div>
//   );
// };

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
      render () {
          return (
              <div className={className}>
                  <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
              </div>
          )
      }
  }

  return React.forwardRef((props, ref) => {
      return <WithClass {...props} forwardedRef={ref} />
  });
}

export default withClass;