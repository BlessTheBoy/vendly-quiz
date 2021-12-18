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
  const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        // Retrieve carousel items (images and questions)
        const data = [
          {image: "liverbridge.png", caption: "Livebridge giving alms on any given Sunday.", questions: [{id: 1, question: "How many times has Vendly been redesigned?", option: ["Five times", "Four times", "Three times", "Two times"]}, {id: 2, question: "When was Vendly founded?", option: ["2021", "2020", "2019"]}]},
          {image: "voucher.jpg", caption: "voucher", questions: [{id: 1, question: "When was Vendly first redesign?", option: ["2021", "2020", "2019"]}]},
          {image: "character.png", caption: "character", questions: [{id: 1, question: "Who is the current C.E.O of Vendly?", option: ["Bob Nzelu", "Micheal Opara", "Vanessa Mdee"]}]},
      ]
        setCarouselList(data)
        setQuestions(data.map(item => item.questions))
        setImages(data.map(item => item.image))
        setCaptions(data.map(item => item.caption))      
    }, []);

    const updateIndex = (index) => {
      if (index < 0) {
        index = 0;
      } else if (index > images.length - 1) {
        index = images.length - 1;
      }

      setActiveIndex(index)
    }

    const addAnswer = (questionIndex, answer) => {
      const newQuestions = [...questions];
      newQuestions[questionIndex[0]][questionIndex[1]].answer = answer;
      console.log(newQuestions)
      setQuestions(newQuestions)
    }


  return (
    <div className="App">
      {carouselList ? 
      <>  
      <div className="container">
        <Header />
        {/* <Carousel /> */}
        <div className="mainCarousel">
        <LeftArrow trigger={updateIndex} activeIndex={activeIndex} />
        <CarouselImage images={images} activeIndex={activeIndex} />
        <RightArrow trigger={updateIndex} activeIndex={activeIndex} />
      </div>
      <Indicators arr={carouselList} trigger={updateIndex} activeIndex={activeIndex} />
      <p className="carouselCaption">{captions[activeIndex]}</p>
      {questions ? <Questions questions={questions} activeIndex={activeIndex} submitAnswer={addAnswer} /> : "loading"}
       <div className="submit">
        <button className="submitButton">Continue</button>
        <p className="instructions">Read <span>Instructions</span></p>
       </div>
      </div>
      </> : ""}
    </div>
  );
}

export default App;
