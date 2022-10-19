import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

export default function Home() {
  // Integrate Hotjar
  useEffect(() => {
    hotjar.initialize(3209433, 6)
  }, []);

  return (
    <div>
      <iframe
        src="https://pitch.com/embed/89b72070-8a4a-4319-be20-dc6fc54d5e2c"
        allow="fullscreen"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          padding: 0,
          margin: 0,
          overflow: "hidden"
        }}
      />
    </div>
  )
}
