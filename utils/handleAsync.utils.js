export const handleAsyncFunction = (promise) =>
  promise
    .then((data) => [data, undefined])
    .catch((error) => [undefined, error]);
