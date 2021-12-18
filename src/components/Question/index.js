import "./style.css";

function Question({ question, options }) {
  return (
    <li className="question">
      <p className="question_question">{question}</p>
      <div className="question_options">
      {options.map((item) => (
          <div className="radio">
              <input
                type="radio"
                value={item}
                name={question}
                id={item}
              />
            <label for={item} >
              
              {item}
            </label>
          </div>
        ))}
      </div>
    </li>
  );
}

export default Question;


                // checked={this.state.selectedOption === "Female"}
                // onChange={this.onValueChange}
