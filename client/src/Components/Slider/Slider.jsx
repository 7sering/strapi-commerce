import {useState} from "react";
import EastOutlined from "@mui/icons-material/EastOutlined"
import WestOutlined from "@mui/icons-material/WestOutlined"
import "./Slider.scss"
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://images.pexels.com/photos/5622935/pexels-photo-5622935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <div className="slider">
      <div className="container" style={{transform:`translate(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="slider1" />
        <img src={data[1]} alt="slider2" />
        <img src={data[2]} alt="slider3" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlined/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlined/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
