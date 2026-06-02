export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="font-space font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
        {children}
      </h2>
      <div className="w-12 h-1 bg-linear-to-r from-cosmic-primary to-cosmic-purple rounded" />
    </div>
  );
}
