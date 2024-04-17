export default {
  install: (app) => {
    app.config.globalProperties.$getImageURL = (path, size, name) => {
      return new URL(`${path}/${size}/${name}.webp`, import.meta.url);
    };
  },
};
