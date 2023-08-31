const Button = (props) => {
  const { className, text } = props;
  return <button className={`btn ${className}`}>{text}</button>;
};

const element = (
  <div className="main">
    <h1 className="head">Social Buttons</h1>
    <div className="subdiv">
      <Button className="like" text="Like" />
      <Button className="comment" text="Comment" />
      <Button className="share" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
