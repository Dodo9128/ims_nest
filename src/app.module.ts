import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EventModule } from "./event/event.module";
import { DatabaseModule } from "./db/database.module";
import { SystemModule } from "./system/system.module";
import { VenueModule } from "./venue/venue.module";
import { CloudModule } from "./cloud/cloud.module";
import { ScaleModule } from "./scale/scale.module";
import { RuleModule } from "./rule/rule.module";
import { MonitModule } from "./monit/monit.module";
import { GroupModule } from "./group/group.module";
import { ChannelModule } from "./channel/channel.module";
import { AudioModule } from "./audio/audio.module";
import { VideoModule } from "./video/video.module";
import { AdaptiveModule } from "./adaptive/adaptive.module";
import { NodeModule } from "./node/node.module";
import { NodeCategoryModule } from "./nodeCategory/nodeCategory.module";
import { SoftwareModule } from "./software/software.module";
import { InstanceModule } from "./instance/instance.module";
import { StorageModule } from "./storage/storage.module";
import configuration from "../config/configuration";
import { LoggerMiddleware } from "./libs/middlewares/logger.middleware";
import { VenueController } from "./venue/venue.controller";
import { EventController } from "./event/event.controller";
import { ScaleController } from "./scale/scale.controller";
import { CloudController } from "./cloud/cloud.controller";
import { NodeController } from "./node/node.controller";
import { NodeCategoryController } from "./nodeCategory/nodeCategory.controller";
import { AdaptiveController } from "./adaptive/adaptive.controller";
import { AudioController } from "./audio/audio.controller";
import { ChannelController } from "./channel/channel.controller";
import { GroupController } from "./group/group.controller";
import { InstanceController } from "./instance/instance.controller";
import { MonitController } from "./monit/monit.controller";
import { RuleController } from "./rule/rule.controller";
import { SoftwareController } from "./software/software.controller";
import { StorageController } from "./storage/storage.controller";
import { SystemController } from "./system/system.controller";
import { VideoController } from "./video/video.controller";

const node_env = process.env.NODE_ENV || "development";

let envPath = "";
switch (node_env) {
  case "development":
    envPath = ".env.development";
    break;
  case "production":
    envPath = ".env.production";
    break;
  case "local":
    envPath = ".env.local";
    break;
  case "test":
    envPath = ".env.test";
    break;

  default:
    envPath = ".env.development";
}

console.log(`Environment Path is: ${envPath}`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `${envPath}`,
    }),
    DatabaseModule,
    EventModule,
    SystemModule,
    VenueModule,
    CloudModule,
    ScaleModule,
    RuleModule,
    MonitModule,
    GroupModule,
    ChannelModule,
    AudioModule,
    VideoModule,
    AdaptiveModule,
    NodeModule,
    NodeCategoryModule,
    SoftwareModule,
    InstanceModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes("*");
    consumer.apply(LoggerMiddleware).forRoutes(VenueController);
    consumer.apply(LoggerMiddleware).forRoutes(EventController);
    consumer.apply(LoggerMiddleware).forRoutes(ScaleController);
    consumer.apply(LoggerMiddleware).forRoutes(CloudController);
    consumer.apply(LoggerMiddleware).forRoutes(NodeController);
    consumer.apply(LoggerMiddleware).forRoutes(NodeCategoryController);
    consumer.apply(LoggerMiddleware).forRoutes(EventController);
    consumer.apply(LoggerMiddleware).forRoutes(AdaptiveController);
    consumer.apply(LoggerMiddleware).forRoutes(AudioController);
    consumer.apply(LoggerMiddleware).forRoutes(ChannelController);
    consumer.apply(LoggerMiddleware).forRoutes(GroupController);
    consumer.apply(LoggerMiddleware).forRoutes(InstanceController);
    consumer.apply(LoggerMiddleware).forRoutes(MonitController);
    consumer.apply(LoggerMiddleware).forRoutes(RuleController);
    consumer.apply(LoggerMiddleware).forRoutes(SoftwareController);
    consumer.apply(LoggerMiddleware).forRoutes(StorageController);
    consumer.apply(LoggerMiddleware).forRoutes(SystemController);
    consumer.apply(LoggerMiddleware).forRoutes(VideoController);
  }
}
