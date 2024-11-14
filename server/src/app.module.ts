import { App } from "./app.controller";
import { Module } from "./decorators";

@Module({
  controllers: [
    App,
  ]
})
export class AppModule {}
