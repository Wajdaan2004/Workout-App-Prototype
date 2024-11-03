export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Workout Planner</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 GitGud Fitness</footer>
      </body>
    </html>
  );
}

