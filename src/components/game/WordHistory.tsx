import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Word } from "@/pages/Game";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface WordHistoryProps {
  words: Word[];
}

export const WordHistory = ({ words }: WordHistoryProps) => {
  return (
    <Card className="p-5 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Word History</h3>
      </div>

      <ScrollArea className="h-[300px] pr-4">
        {words.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No words yet
          </p>
        ) : (
          <div className="space-y-2">
            {words.map((word, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg animate-slide-up",
                  word.player === 1 ? "bg-primary-light" : "bg-secondary-light"
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      word.player === 1
                        ? "bg-primary text-white"
                        : "bg-secondary text-white"
                    )}
                  >
                    P{word.player}
                  </span>
                  <span className="font-medium text-foreground uppercase">
                    {word.word}
                  </span>
                </div>
                <span
                  className={cn(
                    "font-bold",
                    word.player === 1 ? "text-primary" : "text-secondary-foreground"
                  )}
                >
                  +{word.score}
                </span>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </Card>
  );
};
