import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ name, email, password }: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile({ email, role }: {
        email: string;
        role: string;
    }): Promise<import("../users/entities/user.entity").User>;
}
