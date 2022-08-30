// This file mocks `windows.matchMedia` that is used by `react-slick`.

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {
      /* mocked */
    },
    removeListener() {
      /* mocked */
    },
  }));

export {};
