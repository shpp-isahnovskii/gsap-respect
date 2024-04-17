export default {
  install: (app) => {
    app.config.globalProperties.$getImageURL = (path, name, size) => {
      return new URL(`../assets/images/${path}/${size}/${name}.webp`, import.meta.url).href;
    };
  },
};
