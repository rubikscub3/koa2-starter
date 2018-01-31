const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(BodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);



router.get("/", async function(ctx)  {
    let name = ctx.request.body.name || "World";
    ctx.body = {message : `Hello ${name}!`}
});