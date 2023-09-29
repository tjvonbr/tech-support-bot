import { Manifest } from "deno-slack-sdk/mod.ts";
import { ConfirmTechSupportRequest } from "./workflows/confirm_tech_support_request.ts";

export default Manifest({
  name: "hal",
  displayName: "Tech Support Reminder Bot", // <-- You can change the public display name here
  description: "A starter template.",
  icon: "assets/icon.jpg",
  workflows: [
    ConfirmTechSupportRequest,
  ],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "channels:join",
    "channels:manage",
    "channels:history",
    "groups:write",
    "im:write",
    "im:history",
    "mpim:write",
    "chat:write",
    "chat:write.public",
    "triggers:write",
    "triggers:read",
  ],
});
