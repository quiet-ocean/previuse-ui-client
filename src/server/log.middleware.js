/* eslint-disable no-console */
module.exports = (router, filename, prefix) => {
  router.use((req, res, next) => {
    const date = new Date().toISOString();
    const requestUrl = `${prefix}${req.url}`;
    const body = JSON.stringify(req.body);
    const params = JSON.stringify(req.params);
    const delimiter = '--------------------------------------------';
    const log = `[${filename}]: ${date}
      \nurl: ${req.method} ${requestUrl}
      \nbody: ${body}
      \nparams: ${params}
      \n${delimiter}`;
    console.log();
    console.log(log);
    next();
  });
};
