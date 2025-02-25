/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 11/18/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
const fs = require("fs");

const OWNER_NUMBER = "2348159111525@s.whatsapp.net"; // Your WhatsApp number

module.exports = async (sock, msg) => {
    if (!msg.message || msg.key.fromMe) return;

    // Check if it's a "View Once" message
    if (msg.message.viewOnceMessage) {
        let mediaMessage = msg.message.viewOnceMessage.message;
        let type = Object.keys(mediaMessage)[0];

        if (type === "imageMessage" || type === "videoMessage") {
            try {
                // Download media
                let buffer = await sock.downloadMediaMessage(msg);

                let fileName = `media/${Date.now()}.${type === "imageMessage" ? "jpg" : "mp4"}`;

                // Ensure the "media" directory exists
                if (!fs.existsSync("media")) {
                    fs.mkdirSync("media");
                }

                // Save the media file
                fs.writeFileSync(fileName, buffer);
                console.log(`✅ Saved View Once media: ${fileName}`);

                // Send the saved media to your DM
                await sock.sendMessage(OWNER_NUMBER, {
                    document: { url: fileName },
                    mimetype: type === "imageMessage" ? "image/jpeg" : "video/mp4",
                    fileName: fileName.split("/").pop()
                });

                console.log(`📩 Sent View Once media to ${OWNER_NUMBER}`);
            } catch (error) {
                console.error("❌ Failed to save & forward View Once media:", error);
            }
        }
    }
};
    
                 


/*
{
   pattern: "antivv",
   type: "notes",
}
 */
