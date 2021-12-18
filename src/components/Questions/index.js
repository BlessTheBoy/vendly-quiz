import Question from "../Question"
import './style.css';



function Questions({questions, activeIndex}) {
    return (
        <div className="questionsContainer">
            {questions.map((questionSet, index) => <ol key={index} className={`questions ${index === activeIndex && "active"}`}>
            {questionSet.map((item, index) => <Question key={index} question={item.question} options={item.option} />)}
            </ol>)}
        </div>

        
    )
}

export default Questions
