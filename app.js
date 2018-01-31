const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get("/", async function(ctx)  {
    let name = ctx.request.query.name || "World";
    ctx.body = {message : `Hello ${name}!`}
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);