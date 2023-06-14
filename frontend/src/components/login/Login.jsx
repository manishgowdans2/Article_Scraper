import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
import Navbar from "../navbar/Navbar";
import Axios from 'axios';
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const pwd = bcrypt.hashSync(this.state.password, salt);

    Axios.post('http://localhost:2000/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      // this.props.history.push('/dashboard');
      this.props.navigate("/");
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  render() {
    return (
      <>
      <Navbar/>
      
      <div style={{ marginTop: '100px', marginLeft: '40%' }}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            // href="/register"
            component="button"
            style={{ fontFamily: "inherit", fontSize: "inherit" }}
            onClick={() => {
              this.props.navigate("/register");
            }}
          >
            Register
          </Link>
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(Login);

// import React, { Component } from "react";
// import swal from "sweetalert";
// import { Button, TextField, Link } from "@material-ui/core";
// import { withRouter } from "./utils";
// import Navbar from "../navbar/Navbar";
// import Axios from 'axios';
// const bcrypt = require("bcryptjs");
// var salt = bcrypt.genSaltSync(10);

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     };
//   }

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   login = () => {
//     const { username, password } = this.state;

//     // Call the authentication function
//     authenticateUser(username, password)
//       .then((isAuthenticated) => {
//         if (isAuthenticated) {
//           // Authentication successful
//           // Perform necessary actions (e.g., redirect to dashboard)
//           localStorage.setItem('user_id', username);
//           this.props.navigate("/");
//         } else {
//           // Authentication failed
//           swal({
//             text: "Invalid username or password",
//             icon: "error",
//             type: "error"
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("Error during authentication:", error);
//       });
//   }

//   render() {
//     return (
//       <>
//       <Navbar/>
      
//       <div style={{ marginTop: '100px', marginLeft: '40%' }}>
//         <div>
//           <h2>Login</h2>
//         </div>

//         <div>
//           <TextField
//             id="standard-basic"
//             type="text"
//             autoComplete="off"
//             name="username"
//             value={this.state.username}
//             onChange={this.onChange}
//             placeholder="User Name"
//             required
//           />
//           <br /><br />
//           <TextField
//             id="standard-basic"
//             type="password"
//             autoComplete="off"
//             name="password"
//             value={this.state.password}
//             onChange={this.onChange}
//             placeholder="Password"
//             required
//           />
//           <br /><br />
//           <Button
//             className="button_style"
//             variant="contained"
//             color="primary"
//             size="small"
//             disabled={this.state.username === '' || this.state.password === ''}
//             onClick={this.login}
//           >
//             Login
//           </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <Link
//             // href="/register"
//             component="button"
//             style={{ fontFamily: "inherit", fontSize: "inherit" }}
//             onClick={() => {
//               this.props.navigate("/register");
//             }}
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//       </>
//     );
//   }
// }

// // Authentication function
// export const authenticateUser = (username, password) => {
//   const hashedPassword = bcrypt.hashSync(password, salt);

//   return Axios.post('http://localhost:2000/login', {
//     username: username,
//     password: hashedPassword,
//   })
//     .then((res) => {
//       localStorage.setItem('token', res.data.token);
//       return true; // User is authenticated
//     })
//     .catch((err) => {
//       if (err.response && err.response.data && err.response.data.errorMessage) {
//         // Handle specific error response
//         swal({
//           text: err.response.data.errorMessage,
//           icon: "error",
//           type: "error"
//         });
//       }
//       return false; // Authentication failed
//     });
// };

// export default withRouter(Login);
