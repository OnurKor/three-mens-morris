import player1image from "./assets/white.png";
import player2image from "./assets/black.webp";

const player1 = (
 <img style={{width:"50px", height:"50px"}} src={player1image} alt="" />
);
const player2 = (
 <img style={{width:"50px", height:"50px"}} src={player2image} alt="" />
);

const GameBoard = ({ board, winner, selected_cell, dispatch }) => {
  const displayPlayer = (player) => {
    if (player === "a") {
      return "Player A";
    } else {
      return "Player B";
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>WELCOME!</h1>
      <h1 style={{ color: "white" }}>Three Men's Morris</h1>
      {winner && (
        <h1 style={{ color: "green", fontSize: "45px" }}>Winner: {displayPlayer(winner)}</h1>
      )}

      <div className={`board ${winner ? "disabled" : ""}`}>
        {board.map((row, row_index) => {
          return (
            <div className="row" key={row_index}>
              {row.map((cell, cell_index) => {
                return (
                  <div
                    className={`cell ${
                      selected_cell &&
                      selected_cell[0] === row_index &&
                      selected_cell[1] === cell_index
                        ? "selected"
                        : ""
                    }`}
                    key={cell_index}
                    onClick={() => {
                      if (winner) {
                        return;
                      } else {
                        dispatch({
                          type: "CELL_CLICKED",
                          payload: {
                            row_index,
                            cell_index,
                            difficulty: "normal",
                          },
                        });
                      }
                    }}
                  >
                    {cell === "a" ? player2 : cell === "b" ? player1 : ""}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
