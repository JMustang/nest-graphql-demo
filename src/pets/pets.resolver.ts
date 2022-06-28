import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createPetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) { }

  @Query(returns => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(returns => Pet)
  createPet(@Args('createPetInput') createPetInput: createPetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
