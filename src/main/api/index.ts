import '../config/module-alias'
import { PersonController, Speaker } from "@/application/controllers"

class Server {
  init (speaker: Speaker) {
    speaker.speak(speaker.speak('Jonas'))
    speaker.speak(speaker.speak())
  }
}

const server = new Server()
server.init(new PersonController())
