import { WebVenueController } from "./controller/webVenue.controller";
import { Module } from "@nestjs/common";
import { VenueModule } from "../venue/venue.module";
import { EventModule } from "../event/event.module";
import { SystemModule } from "../system/system.module";
import { CloudModule } from "../cloud/cloud.module";
import { ScaleModule } from "../scale/scale.module";
import { RuleModule } from "../rule/rule.module";
import { MonitModule } from "../monit/monit.module";
import { GroupModule } from "../group/group.module";
import { ChannelModule } from "../channel/channel.module";
import { AudioModule } from "../audio/audio.module";
import { VideoModule } from "../video/video.module";
import { AdaptiveModule } from "../adaptive/adaptive.module";
import { SoftwareModule } from "../software/software.module";
import { InstanceModule } from "../instance/instance.module";
import { StorageModule } from "../storage/storage.module";

@Module({
  imports: [
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
    SoftwareModule,
    InstanceModule,
    StorageModule,
  ],
  // Web Controller들 생성한 후 controllers에 추가
  controllers: [WebVenueController],
  // providers: [],
})
export class ApiModule {}
