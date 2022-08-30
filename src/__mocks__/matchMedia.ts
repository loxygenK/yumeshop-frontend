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
