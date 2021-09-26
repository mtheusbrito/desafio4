import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user: User = new User();
    Object.assign(user, { name, email } as User);
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((u) => {
      return u.id === id;
    });
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui

    const user = this.users.find((u) => {
      return u.email === email;
    });
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const repositoryIndex = this.users.findIndex(
      (repository) => repository.id === receivedUser.id
    );
    const userUpdated = {
      ...receivedUser,
      admin: true,
      updated_at: new Date(),
    } as User;
    this.users[repositoryIndex] = userUpdated;
    return userUpdated;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
