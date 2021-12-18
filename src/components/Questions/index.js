import Question from "../Question"
import './style.css';



function Questions({questions}) {
    return (
        <div className="questionsContainer">
            {questions.map((questionSet, index) => <ol className="questions">
            {questionSet.map(item => <Question key={item.id} question={item.question} options={item.option} />)}
            </ol>)}
        </div>

        
    )
}

export default Questions
