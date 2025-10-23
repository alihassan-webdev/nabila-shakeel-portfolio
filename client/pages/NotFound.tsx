import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-foreground font-display">
          404
        </h1>
        <p className="text-xl text-foreground/70 mb-6">Oops! Page not found</p>
        <p className="text-sm text-foreground/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
