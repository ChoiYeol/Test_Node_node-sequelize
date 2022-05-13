import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import * as sequelize from "./db";
const DB: any = sequelize;

const app = new Koa();
const router = new Router();
const port: number = 54004;

// DB.sync({ force: false }).catch((error: any) => {
//   //typescipt 이것도 타입에 따른 애러로 판명 sequelize 를 직접 붙이면 안붙지만 type 설정을 하면 붙음
//   console.error(error); //  orm 안되면 에러 뱉기
// });

router.get("/findone", async (ctx) => {
  let num: number = 1;
  let res = await sequelize.Test.findOne<sequelize.Test>({
    where: { no: num },
    attributes: ["no", "num", "str"],
  });
  console.log(res);
  ctx.body = res;
});

router.get("/findall", async (ctx) => {
  const res = await sequelize.Test.findAll();
  // let res = await sequelize.Test.findAll<sequelize.Test>({
  //   attributes: ["no", "num", "str"],
  // });
  console.log(res);
  ctx.body = res;
});

router.get("/create", async (ctx) => {
  let object: any = {
    num: 22,
    str: "asdf",
  };
  let res = await sequelize.Test.create<sequelize.Test>(object);

  // let res = await sequelize.Test.create<sequelize.Test>({
  //   num: 44,
  //   str: "asdf",
  // });
  console.log(res);
  ctx.body = res;
});
router.get("/update", async (ctx) => {
  let res = await sequelize.Test.update<sequelize.Test>(
    { str: "ggg" },
    {
      where: {
        num: 22,
      },
    }
  );
  console.log(res);
  ctx.body = res;
});
router.get("/delete", async (ctx) => {
  let res = await sequelize.Test.destroy({
    where: {
      num: 22,
    },
  });
  console.log(res);
  ctx.body = res;
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(port, () => {
  console.log("go");
});
