// import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import Subscribe from "../components/subscribe/Subscribe";
import HtmlImg from "../assets/img/logo_html.png";
import CssImg from "../assets/img/logo_css.png";
import BrushImg from "../assets/img/logo_brush.png";

const Home = () => {
  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      <section className="Subscribe">
        <div>
          <Subscribe />
        </div>
      </section>
      <section id="boxes">
        <div className="container">
          <Card url="/Html" src={HtmlImg} title="HTML5 Markup" />
          <Card url="/Css" src={CssImg} title="CSS Styling" />
          <Card url="/Logo" src={BrushImg} title="Graphic Design" />
        </div>
      </section>
    </div>
  );
};

export default Home;
