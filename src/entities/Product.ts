import { Field, Int, ObjectType } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@ObjectType()
@Entity('products')
class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
    id!: number;

  @Field(() => String)
  @Column({ type: 'varchar', length: 200, unique: true })
    name!: string;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
    quantity!: number;

  @Field(() => String)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
    createdAt!: string;

  @Field(() => String)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
    updatedAt!: string;
}

export default Product;
