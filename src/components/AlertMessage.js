// import React from 'react'
// import Alert from 'react-bootstrap/Alert'

// class AlertMessage extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       show: true
//     }
//     this.timeoutId = null
//   }

//   componentDidMount () {
//     this.timeoutId = setTimeout(this.handleClose, 3000)
//   }

//   componentWillUnmount () {
//     clearTimeout(this.timeoutId)
//   }

//   handleClose = () => this.setState({ show: false })

//   render () {
//     const { variant, message, deleteAlert, id } = this.props

//     // Delete this alert after the fade animation time (300 ms by default)
//     if (!this.state.show) {
//       setTimeout(() => {
//         deleteAlert(id)
//       }, 300)
//     }

//     return (
//       <Alert
//         dismissible
//         show={this.state.show}
//         variant={variant}
//         onClose={this.handleClose}
//       >
//         <div className="alert-container">
//           <p className="alert-body">{message}</p>
//         </div>
//       </Alert>
//     )
//   }
// }

// export default AlertMessage
