import react from "react";
import "../../../../css/panel/articleverificationpanel/topmostTray.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
//import axios from "axios";


const {ip} = require("../../../../appConstants")
class MainLoginAreaForPanel extends react.Component {
  ip=ip
  goButtonClicked =() => {
    try {
      const userId = document.getElementById("userId").value;
      const password = document.getElementById("password").value;
      const securityKey = document.getElementById("securityKey").value;
      const data = {
        userId,
        password,
        securityKey,
      };

    //  Made for fetch Post request
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: data
    // };

     axios.post
      (
          'http://'+ip,
          data
        )
        .then((res) => {
          // means file has been uploaded
          if (res.data.success === 1) {
            let uid;
            if(res.data.data.uid){
                uid = res.data.data.uid
            } else {
            uid = parseInt(userId)
            }
            this.props.authorizeUser(true,uid)
            // session changes are getting lost here
            this.props.navigation('/panel/articleverification/homepage')
          } else {
            alert(res.data.message);
          }
          
        })
        .catch((error) => {
          alert(`${error.message}`);
        })
    } catch (error) {
      alert(`${error.message}`);
    }
  }
  render() {
    return (
      <react.Fragment>
        <br />
        {/* <div id="mainLoginPanelArea">
          <br />
          <br />
          <br />
          <label htmlFor="userId" className="children">
          User id:
          </label>
          {"   "}
          <input type="text" id="userId" name="userId" className="children" />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          {"   "}
          <input type="text" id="password" name="password" />
          <br />
          <br />
          <label htmlFor="securityKey">Security Key:</label>
          {"   "}
          <input type="text" id="securityKey" name="securityKey" />
          <br />
          <br />
          <br />
         
          <button className="btn" onClick={this.goButtonClicked}>
          {"   "}GO
          </button>
        </div> */}
      </react.Fragment>
    );
  }
}

// Wrap and export
// eslint-disable-next-line
export default function(props) {
  const navigation = useNavigate();

  return <MainLoginAreaForPanel {...props} navigation={navigation} />;
}
