import { useEffect, useState } from "react";

export default function useCustomEffect(callback) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (ready) callback();
    else setReady(true);
  }, [ready]);
}
