import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface EndgameModalProps {
  isOpen: boolean;
  scores: { 1: number; 2: number };
  onPlayAgain: () => void;
}

export const EndgameModal = ({ isOpen, scores, onPlayAgain }: EndgameModalProps) => {
  const winner = scores[1] > scores[2] ? 1 : scores[2] > scores[1] ? 2 : null;

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center",
              winner === 1 && "bg-gradient-player1 shadow-player1 animate-[scale-in_0.5s_ease-out]",
              winner === 2 && "bg-gradient-player2 shadow-player2 animate-[scale-in_0.5s_ease-out]",
              !winner && "bg-gradient-player1 animate-[scale-in_0.5s_ease-out]"
            )}>
              <Trophy className={cn(
                "w-8 h-8 text-white",
                winner && "animate-[pulse_1.5s_ease-in-out_infinite]"
              )} />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center animate-fade-in">
            Game Over!
          </DialogTitle>
          <DialogDescription className="text-center animate-fade-in">
            {winner ? `🎉 Player ${winner} wins! 🎉` : "It's a tie!"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 my-6">
          <div
            className={cn(
              "p-6 rounded-xl text-center transition-all duration-500 animate-fade-in",
              winner === 1
                ? "bg-gradient-player1 shadow-player1 ring-2 ring-primary scale-105 animate-[pulse_2s_ease-in-out_infinite]"
                : "bg-primary-light"
            )}
          >
            <p
              className={cn(
                "text-sm font-medium mb-2",
                winner === 1 ? "text-white" : "text-primary"
              )}
            >
              Player 1
            </p>
            <p
              className={cn(
                "text-4xl font-bold",
                winner === 1 ? "text-white" : "text-primary"
              )}
            >
              {scores[1]}
            </p>
            {winner === 1 && (
              <p className="text-white text-xs mt-2 font-bold animate-fade-in">🏆 WINNER 🏆</p>
            )}
          </div>

          <div
            className={cn(
              "p-6 rounded-xl text-center transition-all duration-500 animate-fade-in",
              winner === 2
                ? "bg-gradient-player2 shadow-player2 ring-2 ring-secondary scale-105 animate-[pulse_2s_ease-in-out_infinite]"
                : "bg-secondary-light"
            )}
          >
            <p
              className={cn(
                "text-sm font-medium mb-2",
                winner === 2 ? "text-white" : "text-secondary-foreground"
              )}
            >
              Player 2
            </p>
            <p
              className={cn(
                "text-4xl font-bold",
                winner === 2 ? "text-white" : "text-secondary-foreground"
              )}
            >
              {scores[2]}
            </p>
            {winner === 2 && (
              <p className="text-white text-xs mt-2 font-bold animate-fade-in">🏆 WINNER 🏆</p>
            )}
          </div>
        </div>

        <Button
          onClick={onPlayAgain}
          className="w-full bg-gradient-player1 hover:shadow-player1 transition-all hover:scale-105 animate-fade-in"
          size="lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Play Again
        </Button>
      </DialogContent>
    </Dialog>
  );
};
