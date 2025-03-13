export default function Layout(props) {
  const { children } = props;
  const header = (
    <header>
      <h1 className="text-gradient">PTimer</h1>
      <p>
        <strong>Pomodor</strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Build by{" "}
        <a href="/" target="_blank">
          Aman RK
        </a>
      </p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
