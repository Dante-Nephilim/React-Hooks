import { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [val, valSet] = useState<number>(1);
  useEffect(() => {
    const timer = window.setInterval(() => valSet((v) => v + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <>{val}</>;
}
