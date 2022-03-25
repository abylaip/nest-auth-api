import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const port = 6000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Учимся backend на nestjs")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("ULBI TV")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(port, () => {
    console.log(`go little rockstar - ${port}`);
  });
}

start();
