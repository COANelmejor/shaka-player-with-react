import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/VideoSlider.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function VideoSlider ({videoList = [], onSelectVideo = () => {}}) {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const onClickHandler = (event) => {
        if (onSelectVideo) {
            onSelectVideo(event);
        }
    }

    return (
      <div>
        <h2>Select a video to play</h2>
        <Slider {...settings}>
          {videoList.map(video => (
            <div key={video.id} onClick={(event)=> {
              event.target.value = video.id;
              return onClickHandler(event)
            }}>
              <img src={video.thumbnail} alt={video.name} />
              <p>{video.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
}