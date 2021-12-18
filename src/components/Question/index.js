import "./style.css";

function Question({ question, options, addAnswer }) {
  return (
    <li className="question">
      <p className="question_question">{question}</p>
      <div className="question_options">
      {options.map((item, index) => (
          <div className="radio" key={index}>
              <input
                type="radio"
                value={item}
                name={question}
                id={item}
                onChange={() => addAnswer(item)}
              />
            <label htmlFor={item} >
              
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
