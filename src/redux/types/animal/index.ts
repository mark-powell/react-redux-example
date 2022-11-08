export interface Animal {
  name: string;
  type: string;
  imageUrl: string;
  habitat: string;
}

export interface AnimalState {
    loadingAnimal: boolean;
    animals: Array<Animal>;
}