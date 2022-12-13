import { Link } from "react-router-dom";
import { Context } from "./CardContext";
import { useContext } from "react";
import "./About.css";

const About = () => {
  const [cart] = useContext(Context);

  return (
    <div className="bg-body">
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </header>
      <main>
        <div className="container-page">
          <div className="page-columns">
            <h1>ABOUT US</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
            Sollicitudin aliquam ultrices sagittis orci. Volutpat odio facilisis mauris sit amet massa. Tristique senectus et netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada. Platea dictumst quisque sagittis purus sit amet. Morbi tristique senectus et netus et malesuada fames ac. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Sagittis orci a scelerisque purus semper eget. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Nibh mauris cursus mattis molestie a iaculis at erat. Aliquam purus sit amet luctus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Vitae sapien pellentesque habitant morbi. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ac tortor vitae purus faucibus. Vel pretium lectus quam id leo in vitae turpis massa. Pretium vulputate sapien nec sagittis aliquam. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Neque sodales ut etiam sit amet nisl purus in mollis. Pellentesque diam volutpat commodo sed egestas.
            </p>
          </div>
          <div className="page-columns">
            <img src="images/creative-group.png" alt="img-about" />
          </div>
        </div>
        <div className="return-btn">
          <Link to={`/`} className="return-link">Return to Shop</Link>
        </div>
      </main>
      <footer>
        <div className="footer-aboutpage">
          <p>Copyright © 2022 Sunset Vibes </p>
        </div>
      </footer>
    </div>
  );
};
export default About;
