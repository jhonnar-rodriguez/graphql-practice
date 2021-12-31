import { Field, InputType, Int } from 'type-graphql';

@InputType()
class UpdateProductInput {
  @Field(() => String, { nullable: true })
    name?: string;

  @Field(() => Int, { nullable: true })
    quantity?: number;
}

export default UpdateProductInput;
