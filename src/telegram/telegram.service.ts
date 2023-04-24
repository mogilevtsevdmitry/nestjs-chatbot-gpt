import { Start, Update, Ctx, On, Message } from 'nestjs-telegraf';
import { Scenes, Telegraf } from 'telegraf';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
    @Start()
    onStart(@Ctx() ctx: Context) {
        ctx.replyWithHTML(`<b>Привет, ${ctx.from.username}</b>
Это чат бот с ChatGPT!
Введите любую фразу и получите ответ!
        `);
    }

    @On('text')
    onMessage(@Message('text') message: string, @Ctx() ctx: Context) {
        ctx.replyWithHTML(`<i>${message}</i>`);
    }
}
