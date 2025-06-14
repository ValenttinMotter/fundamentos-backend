import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ModelsRepository } from "./models.repository";

interface DeleteModelServiceRequest {
  id: string;
}

@Injectable()
export class DeleteModelService {
  constructor(private modelsRepository: ModelsRepository) {}

  async execute({ id }: DeleteModelServiceRequest): Promise<void> {
    const model = await this.modelsRepository.findById(id);

    if (!model) {
      throw new HttpException("Model not found.", HttpStatus.NOT_FOUND);
    }

    await this.modelsRepository.delete(model);
  }
}
