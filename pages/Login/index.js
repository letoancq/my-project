import Form from "./Form/index.js";
import FormHeader from "./Form/FormHeader";

const Login = (props) => (
  <div id="loginform">
    <FormHeader title="Login" />
    <Form />
    <OtherMethods />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = (props) => (
  <a  id="facebookIcon">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
      alt=""
    />
  </a>
);

const Twitter = (props) => <a  id="twitterIcon">
  <img
      src="https://iconape.com/wp-content/files/zb/110922/svg/twitter-3.svg"
      alt=""
    />
</a>;

const Google = (props) => <a  id="googleIcon">
  <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
      alt=""
    />
</a>;

export default Login;
