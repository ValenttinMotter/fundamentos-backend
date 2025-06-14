import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { ProductsRepository } from "./products.repository";

interface CreateProductServiceRequest {
  name: string;
  description?: string;
  price: number;
  inStock: number;
  isAvailable: boolean;
  category: Category;
  tags: string[];
}

@Injectable()
export class CreateProductService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    description,
    price,
    inStock,
    isAvailable,
    category,
    tags,
  }: CreateProductServiceRequest): Promise<void> {
    const productWithSameName = await this.productsRepository.findByName(name);

    if (productWithSameName) {
      throw new HttpException(
        "Product with same name already exists.",
        HttpStatus.BAD_REQUEST
      );
    }

    const product = {
      name,
      description,
      price,
      inStock,
      isAvailable,
      category,
      tags,
    };

    await this.productsRepository.create(product);
  }
}
