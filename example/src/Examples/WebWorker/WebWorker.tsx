import React, { useEffect } from "react";
import { View } from "react-native";

export const WebWorker = () => {
  useEffect(() => {
    const offscreenCanvas = document
      .getElementById("offscreen-canvas")
      .transferControlToOffscreen();
    const worker = new Worker(new URL("./worker.ts", import.meta.url));
    worker.postMessage({ offscreenCanvas }, [offscreenCanvas]);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <canvas id="offscreen-canvas" width={500} height={500} />
    </View>
  );
};
