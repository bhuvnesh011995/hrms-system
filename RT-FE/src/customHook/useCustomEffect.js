import { useEffect, useState } from "react";

export default function useCustomEffect(callback, arg) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (ready) {
      if (arg) callback(arg);
      else callback();
    } else setReady(true);
  }, [ready]);
}
