const player1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="40" fill="purple" />
    </svg>
  );
  const player2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="40" fill="darkblue" />
    </svg>
  );
  
  export default function GameBoard({  // const GameBoard = () => {}
    board,
    winner,
    selected_cell,
    dispatch,
  }) {
  
    const displayPlayer = (player) => {
      if (player === "a") {
        return "Player A";
      } else {
      
        return "Player B";
      }
    };
  
    // board is a two dimensional array 3x3
    return (
      <div>
        <h1>Game Board</h1>
        {winner && (
          <h1 style={{ color: "blue" }}>Winner: {displayPlayer(winner)}</h1>
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
                            payload: { row_index, cell_index, difficulty: "normal" },
                          });
                        }
                      }}
                    >
                      {cell === "a"
                        ? player2
                        : cell === "b"
                        ? player1
                        : "-"}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }