import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() { }

    async validateUser(token: string): Promise<any> {
        // Validate if token passed along with HTTP request
        // is associated with any registered account in the database
        // TODO
        return {
            username: 'test'
        };
    }
}
