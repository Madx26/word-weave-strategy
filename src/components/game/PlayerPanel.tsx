import { Card } from "@/components/ui/card";
import { Player } from "@/pages/Game";
import { User, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayerPanelProps {
  player: Player;
  score: number;
  isActive: boolean;
}

export const PlayerPanel = ({ player, score, isActive }: PlayerPanelProps) => {
  const isPlayer1 = player === 1;
  
  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300",
        isActive && isPlayer1 && "shadow-player1 ring-2 ring-primary/20 bg-primary-light/30",
        isActive && !isPlayer1 && "shadow-player2 ring-2 ring-secondary/20 bg-secondary-light/30",
        !isActive && "opacity-70"
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            isPlayer1 ? "bg-gradient-player1" : "bg-gradient-player2",
            isActive && "animate-pulse-glow"
          )}
        >
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">
            Player {player}
          </h3>
          {isActive && (
            <p className={cn(
              "text-sm font-medium",
              isPlayer1 ? "text-primary" : "text-secondary-foreground"
            )}>
              Your Turn
            </p>
          )}
        </div>
      </div>

      <div className="bg-accent rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Score</span>
          </div>
          <span
            className={cn(
              "text-3xl font-bold",
              isPlayer1 ? "text-primary" : "text-secondary-foreground"
            )}
          >
            {score}
          </span>
        </div>
      </div>
    </Card>
  );
};
