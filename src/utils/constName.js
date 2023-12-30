export const jump = (router, path, query) => {
  if (query) {
    router.push({
      path,
      query: query,
    });
  } else {
    router.push(path);
  }
};

export const SERVICE_LINK =
  "https://vm.atotoncumb.com/1ve81cmb38yw00vvwutc5ar99l";
