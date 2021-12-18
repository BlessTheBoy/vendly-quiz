import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";
import CarouselImage from "./components/CarouselImage";
import Indicators from './components/Indicators';
import Questions from './components/Questions';


function App() {
  const [carouselList, setCarouselList] = useState([]);
  const [images, setImages] = useState([])
  const [captions, setCaptions] = useState([])
  const [questions, setQuestions] = useState([])

    useEffect(() => {
        // Retrieve carousel items (images and questions)
        const data = [
          {image: "liverbridge.png", caption: "Livebridge giving alms on any given Sunday.", questions: [{id: 1, question: "How many times has Vendly been redesigned?", option: ["Five times", "Four times", "Three times", "Two times"]}, {id: 2, question: "When was Vendly founded?", option: ["2021", "2020", "2019"]}]},
          {image: "voucher.jpg", caption: "voucher", questions: [{id: 1, question: "When was Vendly founded?", option: ["2021", "2020", "2019"]}]},
      ]
        setCarouselList(data)
        setQuestions(data.map(item => item.questions))
        setImages(data.map(item => item.image))
        setCaptions(data.map(item => item.caption))      
    }, []);


  return (
    <div className="App">
      <div className="container">
        <Header />
        {/* <Carousel /> */}
        <div className="mainCarousel">
        <LeftArrow />
        <CarouselImage />
        <RightArrow />
      </div>
      <Indicators arr={["a", "b", "c"]} />
      <p className="carouselCaption">Livebridge giving alms on any given Sunday.</p>
      {questions ? <Questions questions={questions} /> : "loading"}
       <div className="submit">
        <button className="submitButton">Continue</button>
        <p className="instructions">Read <span>Instructions</span></p>
       </div>
      </div>
    </div>
  );
}

export default App;
