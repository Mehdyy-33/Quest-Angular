import { Skill } from "./skill.model";


export class Developer {
  lastName: string;
  firstName: string;
  gender: string;
  bio: string;
  age: number;
  skills: Skill[];
  constructor(
    lastName: string,
    firstName: string,
    gender: string,
    bio: string,
    age: number,
    skills: Skill[],
  ) {
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.lastName = lastName;
    this.firstName = firstName;
    this.skills = skills;
  }
}
