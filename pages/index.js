import Head from 'next/head';

const ascii = String.raw`    ____  ____  ____  __  _________________  __________  _______
   / __ \/ __ \/ __ \/  |/  / ____/_  __/ / / / ____/ / / / ___/
  / /_/ / /_/ / / / / /|_/ / __/   / / / /_/ / __/ / / / /\\__ \
 / ____/ _, _/ /_/ / /  / / /___  / / / __  / /___/ /_/ /___/ /
/_/   /_/ |_|\____/_/  /_/_____/ /_/ /_/ /_/_____/\____//____/`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Prometheus Labs</title>
        <meta
          name="description"
          content="Prometheus Labs — animated ASCII landing page."
        />
      </Head>

      <main className="screen">
        <div className="scanlines" />
        <pre className="ascii-mark" aria-label="Prometheus Labs ASCII logo">
          {ascii}
        </pre>
      </main>
    </>
  );
}
