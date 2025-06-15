import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { ModelsModule } from "./models/models.module";
import { UsersModule } from "./users/users.module";
import { ProfilesModule } from "./profiles/profiles.module";

@Module({
  imports: [ProductsModule, ModelsModule, UsersModule, ProfilesModule],
})
export class AppModule {}
