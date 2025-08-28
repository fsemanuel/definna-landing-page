"use client";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      {/* Base gradient background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% -20%, rgba(62, 207, 142, 0.3), transparent),
            radial-gradient(ellipse 80% 80% at 80% 60%, rgba(96, 165, 250, 0.2), transparent),
            radial-gradient(ellipse 80% 80% at 20% 80%, rgba(167, 139, 250, 0.2), transparent)
          `
        }}
      />

      {/* Moving aurora effect */}
      <div
        className="absolute inset-0 opacity-30 animate-aurora"
        style={{
          background: `
            linear-gradient(100deg, 
              transparent 20%,
              rgba(62, 207, 142, 0.4) 40%,
              rgba(96, 165, 250, 0.3) 50%,
              rgba(167, 139, 250, 0.3) 60%,
              transparent 80%
            )
          `,
          backgroundSize: '200% 100%',
        }}
      />

      {/* Additional glow effects */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg,
              rgba(62, 207, 142, 0.5) 60deg,
              transparent 120deg,
              rgba(96, 165, 250, 0.3) 180deg,
              transparent 240deg,
              rgba(167, 139, 250, 0.3) 300deg,
              transparent 360deg
            )
          `,
          animation: 'spin 30s linear infinite',
        }}
      />
    </div>
  );
};