import { Link } from "react-router-dom";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="categoriesImage"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
        <img
            src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="categoriesImage"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
        <img
            src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"><img
            src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="categoriesImage"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
          </div>
          <div className="col">
            <div className="row"><img
            src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="categoriesImage"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
          </div>
        </div>
        <div className="row"><img
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="categoriesImage"
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button></div>
      </div>
    </div>
  );
};

export default Categories;
