import "./StartScreen.css";

const GameStart = ({ startGame }) => {
  return (
    <div className="start">
      <h1>palavra secreta</h1>
      <p>É só clicar no botão abaixo e se divertir!</p>
      <button onClick={startGame}>Bora jogar!!! <span>&#128526;</span></button>
    </div>
  );
};

export default GameStart;