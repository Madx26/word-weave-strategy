import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Grid3x3, Trophy, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center p-6">
      <Card className="max-w-3xl w-full p-8 shadow-card animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-player1 rounded-2xl mb-4 shadow-player1">
            <Grid3x3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">WordGrid Duel</h1>
          <p className="text-muted-foreground">Strategic Letter Placement Game</p>
        </div>

        <div className="space-y-6">
          <div className="bg-accent rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              How to Play
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <span>Players take turns placing single letters on any empty cell</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <span>Words form horizontally (left to right) and vertically (top to bottom)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <span>Valid words (2-9 letters) score points based on length</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">4</span>
                </div>
                <span>Each word can only score once - no repeats!</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary-light rounded-xl p-5">
              <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Valid Words
              </h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Real English words</li>
                <li>• Minimum 2 letters</li>
                <li>• Maximum 9 letters</li>
                <li>• Meaningful plurals count</li>
              </ul>
            </div>

            <div className="bg-secondary-light rounded-xl p-5">
              <h3 className="font-semibold text-secondary-foreground mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Invalid
              </h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Random letter combos</li>
                <li>• Simple "s" plurals</li>
                <li>• Repeated words</li>
                <li>• Words over 9 letters</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-player2 rounded-xl p-6 text-center">
            <Trophy className="w-10 h-10 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Winning</h3>
            <p className="text-white/90">
              Game ends when the grid is full. Highest score wins!
            </p>
          </div>

          <Button 
            onClick={() => navigate('/game')}
            className="w-full h-14 text-lg font-semibold bg-gradient-player1 hover:shadow-player1 transition-all"
            size="lg"
          >
            Start Playing
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Rules;
