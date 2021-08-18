import { Application, Router } from 'express';

/**
 * Define o domínio da API;
 * esse domínio precederá todas
 * as rotas registradas posteriormente
 * */

type registerRouterParams = {
  domain: string,
  router: Router
};

function registerRouter({ domain, router }: registerRouterParams) {
  return (app: Application): Application => {
    app.use(domain, router);
    return app
  }
}

export default registerRouter;