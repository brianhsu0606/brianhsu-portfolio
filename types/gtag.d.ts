/* eslint-disable @typescript-eslint/no-unused-vars */
import { NuxtApp } from "nuxt/app";

declare module "#app" {
  interface NuxtApp {
    $gtag: (...args: unknown[]) => void;
  }
}
