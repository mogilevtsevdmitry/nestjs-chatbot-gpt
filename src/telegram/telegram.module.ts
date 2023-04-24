import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramService } from './telegram.service';
import { options } from './telegram-config.factory';

@Module({
    imports: [TelegrafModule.forRootAsync(options())],
    providers: [TelegramService],
})
export class TelegramModule {}
