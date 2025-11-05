export function SpinnerOverlay({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-#FFFAF6/75 backdrop-blur-sm">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-#FFFAF6 border-t-#721B27" />
    </div>
  );
}