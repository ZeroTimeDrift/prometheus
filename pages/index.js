import Head from 'next/head';

const ascii = String.raw`    ____  ____  ____  __  _________________  __________  _______
   / __ \/ __ \/ __ \/  |/  / ____/_  __/ / / / ____/ / / / ___/
  / /_/ / /_/ / / / / /|_/ / __/   / / / /_/ / __/ / / / /\__ \
 / ____/ _, _/ /_/ / /  / / /___  / / / __  / /___/ /_/ /___/ /
/_/   /_/ |_|\____/_/  /_/_____/ /_/ /_/ /_/_____/\____//____/`;

const statusLines = [
  '> booting prometheus-labs.exe',
  '> mode: holding company',
  '> stack: vault / agent systems / capital formation',
  '> state: online',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Prometheus Labs</title>
        <meta
          name="description"
          content="Prometheus Labs — terminal-style holding company website."
        />
      </Head>

      <main className="shell">
        <div className="scanlines" />

        <section className="terminal">
          <div className="terminal__bar">
            <span className="terminal__dot red" />
            <span className="terminal__dot yellow" />
            <span className="terminal__dot green" />
            <span className="terminal__title">/usr/prometheus/labs</span>
          </div>

          <div className="terminal__body">
            <div className="status-block">
              {statusLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="hero">
              <pre aria-label="PROMETHEUS ASCII logo">{ascii}</pre>
              <p className="hero__subtitle">PROMETHEUS LABS</p>
              <p className="hero__copy">
                A terminal-native holding company building software, systems, and capital allocation around
                asymmetric leverage.
              </p>
            </div>

            <div className="grid">
              <div className="panel">
                <span className="panel__label">focus</span>
                <p>Vault, agentic infrastructure, and operator software.</p>
              </div>
              <div className="panel">
                <span className="panel__label">behavior</span>
                <p>Build fast. Compound context. Keep the control surface minimal.</p>
              </div>
              <div className="panel">
                <span className="panel__label">status</span>
                <p>Private systems. Public edge. Shipping continuously.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
