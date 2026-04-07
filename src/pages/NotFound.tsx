import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in-up">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 shadow-sm">
        <FileQuestion className="w-10 h-10 text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-3">404 - Page Not Found</h1>
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved. Let's get you back home.
      </p>
      <Button asChild size="lg" className="gap-2">
        <Link to="/">
          <Home className="w-4 h-4" />
          Return to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
