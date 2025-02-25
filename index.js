const viewOncePlugin = require("./plugins/view_once.smd");

sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    await viewOncePlugin(sock, msg);
});
const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`UwemDev ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
