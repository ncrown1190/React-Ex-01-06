import { useState } from "react";

interface Pet {
  name: string;
  breed: string;
}

export default function PetInfo() {
  const [pet] = useState<Pet>({ name: "Bill", breed: "Ostrich" });
  return (
    <p>
      My pet's {pet.breed} name is {pet.name}
    </p>
  );
}
