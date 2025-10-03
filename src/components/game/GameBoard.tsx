import { Card } from "@/components/ui/card";
import { GridCell } from "./GridCell";
import { Player } from "@/pages/Game";

interface GameBoardProps {
  grid: string[][];
  onCellChange: (row: number, col: number, value: string) => void;
  currentPlayer: Player;
  gameOver: boolean;
}

export const GameBoard = ({ grid, onCellChange, currentPlayer, gameOver }: GameBoardProps) => {
  return (
    <Card className="p-6 shadow-card bg-card">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">WordGrid Duel</h2>
        <p className="text-sm text-muted-foreground">
          {gameOver ? "Game Over!" : `Player ${currentPlayer}'s Turn`}
        </p>
      </div>

      <div 
        className="grid gap-2 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
          maxWidth: '600px',
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => onCellChange(rowIndex, colIndex, value)}
              disabled={gameOver || cell !== ""}
              player={currentPlayer}
            />
          ))
        )}
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Place letters to form words horizontally and vertically</p>
        <p className="text-xs mt-1">2-9 letter words score points • No repeats allowed</p>
      </div>
    </Card>
  );
};
