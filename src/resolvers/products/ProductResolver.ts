import { isNumber } from 'class-validator';
import {
  Arg,
  Int,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import Product from '../../entities/Product';
import StoreProductInput from './inputs/StoreProductInput';
import UpdateProductInput from './inputs/UpdateProductInput';

@Resolver()
class ProductResolver {
  @Query(() => [Product])
  async products() {
    const products = await Product.find();

    return products;
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg('productData', () => StoreProductInput) productData: StoreProductInput,
  ): Promise<Product> {
    const newProduct = Product.create(productData);
    await newProduct.save();

    return newProduct;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg('id', () => Int) id: number,
    @Arg('fields', () => UpdateProductInput) fields: UpdateProductInput,
  ): Promise<boolean> {
    const updatedProduct = await Product.update({ id }, fields);

    return isNumber(updatedProduct.affected);
  }

  @Mutation(() => Boolean)
  async destroyProduct(@Arg('id', () => Int) id: number): Promise<boolean> {
    const productToDelete = await Product.findOneOrFail(id);
    await productToDelete.remove();

    return true;
  }
}

export default ProductResolver;
