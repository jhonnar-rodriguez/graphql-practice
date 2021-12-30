import { Query, Resolver } from 'type-graphql';

@Resolver()
class PingResolver {
  @Query(() => String)
  ping(): string {
    return 'Pong';
  }
}

export default PingResolver;
