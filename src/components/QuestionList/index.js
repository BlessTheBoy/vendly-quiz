import Question from "../Question"
import './style.css';

function QuestionList({index, questionSet, active, addAnswer}) {
    return (
        <ol key={index} className={`questionlist ${active && "active"}`}>
            {questionSet.map((item, index) => <Question key={index} question={item.question} options={item.option} addAnswer = {(answer) => addAnswer(index, answer)}  />)}
        </ol>
    )
}

export default QuestionList
