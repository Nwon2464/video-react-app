import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class LoginModalForm extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1039122878379-b81ks1uqmmh4frc0dl9rm1ut4rg2708f.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      this.props.signIn(profile);
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  render() {
    return (
      <>
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <img
                src="https://semantic-ui.com/examples/assets/images/logo.png"
                className="image"
              />
              <div className="content">Log-in to your account</div>
            </h2>

            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail address"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="ui fluid large teal submit button">Login</div>
              </div>
              <div className="ui error message"></div>
            </form>
            <div class="ui horizontal divider">Or</div>
            <div onClick={this.onSignIn} class="ui red labeled icon button">
              Log In With Google
              <i class="google icon"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { signIn, signOut })(LoginModalForm);
