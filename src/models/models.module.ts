import { Module } from "@nestjs/common";
import { ModelsRepository } from "./models.repository";
import { FetchRecentModelsService } from "./fetch-recent-models.service";
import { GetModelByIdService } from "./get-model-by-id.service";
import { EditModelService } from "./edit-model.service";
import { DeleteModelService } from "./delete-model.service";
import { CreateModelService } from "./create-model.service";
import { PrismaService } from "src/prisma.service";
import { GetModelByIdController } from "./get-model-by-id.controller";
import { FetchRecentModelsController } from "./fetch-recent-models.controller";
import { EditModelController } from "./edit-model.controller";
import { DeleteModelController } from "./delete-model.controller";
import { CreateModelController } from "./create-model.controller";

@Module({
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
export class ModelsModule {}
