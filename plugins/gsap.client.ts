import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin(() => {
  // 可放全域 gsap 設定
});
