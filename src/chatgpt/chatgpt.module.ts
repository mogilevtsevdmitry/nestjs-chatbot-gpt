import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChatgptService } from './chatgpt.service';

@Module({
    imports: [HttpModule],
    providers: [ChatgptService],
    exports: [ChatgptService],
})
export class ChatgptModule {}
