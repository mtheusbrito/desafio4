import { response } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw Error("User not found!");
    }
    if (!user.admin) {
      throw Error("This user not have permission!");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
