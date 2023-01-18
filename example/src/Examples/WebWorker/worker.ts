import { LoadSkia } from "@shopify/react-native-skia/src/web";

const getOffscreenCanvas = (): Promise<{
  data: { offscreenCanvas: OffscreenCanvas };
}> => new Promise((resolve) => addEventListener("message", resolve));

(async () => {
  const {
    data: { offscreenCanvas },
  } = await getOffscreenCanvas();
  console.log({ offscreenCanvas });
  await LoadSkia();
  console.log({ Skia: global.CanvasKit });
})();
