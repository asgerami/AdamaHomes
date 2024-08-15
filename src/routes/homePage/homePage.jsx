import SearchBar from "../../components/searchBar/SearchBar";
import ListPage from "../listPage/listPage";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Dream House in Adama</h1>
          <p>
            Adama Homes is your one-stop online platform for all your real
            estate needs in Adama, Oromia. Whether you're looking to buy your
            dream home, rent a cozy apartment, or sell your property, we've got
            you covered.
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
