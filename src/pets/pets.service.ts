import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) { }



  // newPet = new Pet(); new.name = input.name
  createPet(createPetInput: createPetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);

    return this.petsRepository.save(newPet); // insert
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find() // [SQL] => SELECT * from Pet

  }

  findOne(id): Promise<Pet> {
    return this.petsRepository.findOneOrFail(id)
  }
}
