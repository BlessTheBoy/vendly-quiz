import QuestionList from "../QuestionList";
import './style.css';



function Questions({questions, activeIndex, submitAnswer}) {
    return (
        <div className="questionsContainer">
            {questions.map((questionSet, index) => <QuestionList key={index} questionSet={questionSet} active={activeIndex === index} addAnswer={(x, answer) => submitAnswer([index, x], answer)} />)}
        </div>

        
    )
}

export default Questions
