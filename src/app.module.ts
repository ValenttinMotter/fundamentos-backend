import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

import { CreateModelService } from "./models/create-model.service";
import { DeleteModelService } from "./models/delete-model.service";
import { EditModelService } from "./models/edit-model.service";
import { FetchRecentModelsService } from "./models/fetch-recent-models.service";
import { GetModelByIdService } from "./models/get-model-by-id.service";
import { ProductsModule } from "./products/products.module";
import { ModelsModule } from "./models/models.module";

@Module({
  imports: [ProductsModule, ModelsModule],
})
export class AppModule {}
