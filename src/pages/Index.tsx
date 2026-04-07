import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNps } from "@/contexts/NpsContext";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

const Index = () => {
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();
  const { addResponse } = useNps();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (score === null) {
      toast({
        title: "Score required",
        description: "Please select a score from 0 to 10 before submitting.",
        variant: "destructive",
      });
      return;
    }

    addResponse(score, feedback);
    setScore(null);
    setFeedback("");

    toast({
      title: "Feedback submitted!",
      description: "Thank you for sharing your thoughts with us.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 animate-fade-in-up">
      <Card className="border-border shadow-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold tracking-tight mb-2">Customer Feedback</CardTitle>
          <CardDescription className="text-base">
            How likely are you to recommend our service to a friend or colleague?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-between">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <Button
                    key={num}
                    type="button"
                    variant={score === num ? "default" : "outline"}
                    className={cn(
                      "w-11 h-11 p-0 sm:w-12 sm:h-12 rounded-full font-semibold transition-all duration-200",
                      score === num && "scale-110 shadow-md ring-2 ring-primary ring-offset-2 ring-offset-background",
                      score !== null && score !== num && "opacity-50 hover:opacity-100"
                    )}
                    onClick={() => setScore(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-muted-foreground px-2 font-medium">
                <span>0 - Not likely at all</span>
                <span>10 - Extremely likely</span>
              </div>
            </div>

            <div className="space-y-4 bg-muted/30 p-6 rounded-lg border border-border/50">
              <label htmlFor="feedback" className="text-sm font-semibold text-foreground">
                What is the primary reason for your score? <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <Textarea
                id="feedback"
                placeholder="Tell us what you liked or what we can improve..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="resize-none h-32 bg-background"
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" size="lg" className="w-full sm:w-auto font-medium" disabled={score === null}>
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
