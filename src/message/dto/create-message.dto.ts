import { IsDate, IsString, IsTimeZone } from "class-validator";

export class CreateMessageDto {
    @IsString()
    username: string;
    @IsString()
    message: string;
    @IsString()
    timestamp: string;
}
