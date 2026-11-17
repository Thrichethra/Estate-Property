// Home.jsx
import Featured from "./Featured.jsx";
import Hero from "./Hero.jsx";
import Location from "./Location.jsx";
import Price from "./Price.jsx";
import Recent from "./Recent.jsx";
import Team from "./Team.jsx";

const Home = ({ savedIds, toggleSave }) => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent savedIds={savedIds} toggleSave={toggleSave} />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default Home;