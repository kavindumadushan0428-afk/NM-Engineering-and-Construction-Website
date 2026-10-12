"use client";
export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Arial,sans-serif",
          padding: "10vw",
          background: "#ffffff",
          color: "#111",
        }}
      >
        <main>
          <h1>We couldn’t load this page.</h1>
          <p>Please try again, or call N&M on +94 70 486 6966.</p>
          <button onClick={retry} style={{ padding: 16 }}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
