import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateModelController } from "./create-model.controller";
import { DeleteModelController } from "./delete-model.controller";
import { EditModelController } from "./edit-model.controller";
import { FetchRecentModelsController } from "./fetch-recent-models.controller";
import { GetModelByIdController } from "./get-model-by-id.controller";
import { CreateModelService } from "./create-model.service";
import { DeleteModelService } from "./delete-model.service";
import { EditModelService } from "./edit-model.service";
import { FetchRecentModelsService } from "./fetch-recent-models.service";
import { GetModelByIdService } from "./get-model-by-id.service";
import { ModelsRepository } from "./models.repository";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [ProductsModule],
  controllers: [
    CreateModelController,
    DeleteModelController,
    EditModelController,
    FetchRecentModelsController,
    GetModelByIdController,
  ],
  providers: [
    PrismaService,
    CreateModelService,
    DeleteModelService,
    EditModelService,
    FetchRecentModelsService,
    GetModelByIdService,
    ModelsRepository,
  ],
})
export class AppModule {}
