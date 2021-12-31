import { Field, InputType } from 'type-graphql';

@InputType()
class StoreProductInput {
  @Field()
    name!: string;

  @Field()
    quantity!: number;
}

export default StoreProductInput;
