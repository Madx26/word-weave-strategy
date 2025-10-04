import { useState, useEffect } from "react";
import { GameBoard } from "@/components/game/GameBoard";
import { PlayerPanel } from "@/components/game/PlayerPanel";
import { WordHistory } from "@/components/game/WordHistory";
import { EndgameModal } from "@/components/game/EndgameModal";
import { validateWord } from "@/lib/wordValidator";
import { findWords } from "@/lib/wordFinder";
import { toast } from "sonner";

export type Player = 1 | 2;

export interface Word {
  word: string;
  score: number;
  player: Player;
}

const GRID_SIZE = 8;

const Game = () => {
  const [grid, setGrid] = useState<string[][]>(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(""))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [wordsFound, setWordsFound] = useState<Word[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const calculateScore = (wordLength: number): number => {
    if (wordLength < 2 || wordLength > 9) return 0;
    return wordLength;
  };

  const checkForNewWords = (newGrid: string[][]) => {
    const foundWords = findWords(newGrid);
    const newWords: Word[] = [];
    const processedWords = new Set<string>();
    
    foundWords.forEach(word => {
      const wordLower = word.toLowerCase();
      const wordExists = wordsFound.some(w => w.word.toLowerCase() === wordLower);
      const alreadyProcessed = processedWords.has(wordLower);
      
      if (!wordExists && !alreadyProcessed && validateWord(word)) {
        const score = calculateScore(word.length);
        if (score > 0) {
          newWords.push({
            word,
            score,
            player: currentPlayer,
          });
          processedWords.add(wordLower);
        }
      }
    });

    if (newWords.length > 0) {
      const totalScore = newWords.reduce((sum, w) => sum + w.score, 0);
      setScores(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + totalScore,
      }));
      setWordsFound(prev => [...prev, ...newWords]);
      
      newWords.forEach(w => {
        toast.success(`${w.word.toUpperCase()} - ${w.score} points!`, {
          description: `Player ${currentPlayer} scored!`,
        });
      });
    }
  };

  const handleCellChange = (row: number, col: number, value: string) => {
    if (gameOver) return;
    
    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);

    if (value) {
      checkForNewWords(newGrid);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      
      // Check if grid is full
      const isFull = newGrid.every(row => row.every(cell => cell !== ""));
      if (isFull) {
        setGameOver(true);
      }
    }
  };

  const handlePlayAgain = () => {
    setGrid(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill("")));
    setCurrentPlayer(1);
    setScores({ 1: 0, 2: 0 });
    setWordsFound([]);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-main p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[300px_1fr_300px] gap-6">
          {/* Player 1 Panel */}
          <div className="order-1">
            <PlayerPanel
              player={1}
              score={scores[1]}
              isActive={currentPlayer === 1 && !gameOver}
            />
          </div>

          {/* Game Board */}
          <div className="order-3 lg:order-2">
            <GameBoard
              grid={grid}
              onCellChange={handleCellChange}
              currentPlayer={currentPlayer}
              gameOver={gameOver}
            />
          </div>

          {/* Player 2 Panel & Word History */}
          <div className="order-2 lg:order-3 space-y-6">
            <PlayerPanel
              player={2}
              score={scores[2]}
              isActive={currentPlayer === 2 && !gameOver}
            />
            <WordHistory words={wordsFound} />
          </div>
        </div>
      </div>

      <EndgameModal
        isOpen={gameOver}
        scores={scores}
        onPlayAgain={handlePlayAgain}
      />
    </div>
  );
};

export default Game;
