declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default defineNuxtPlugin(() => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-X5QEWVCYE3";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  // 用 rest parameters 取代 arguments
  function gtag(...args: unknown[]): void {
    window.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", "G-X5QEWVCYE3");

  return {
    provide: {
      gtag,
    },
  };
});
