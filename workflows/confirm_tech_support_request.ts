import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

export const ConfirmTechSupportRequest = DefineWorkflow(
  {
    callback_id: "reply_to_message",
    title: "Reply to the message posted",
    description: "Reply with today's message",
    input_parameters: {
      properties: {
        channel_id: {
          description: "The id of the channel to join",
          type: Schema.slack.types.channel_id,
        },
        user_id: {
          description: "The id of the user being responded to",
          type: Schema.slack.types.user_id
        }
      },
      required: ["channel_id", "user_id"],
    },
  },
);

ConfirmTechSupportRequest.addStep(
  Schema.slack.functions.SendEphemeralMessage,
  {
    channel_id: ConfirmTechSupportRequest.inputs.channel_id,
    user_id: ConfirmTechSupportRequest.inputs.user_id,
    message: "Should this be the beginning of a tech support ticket?  If so, please delete your message and begin the tech support workflow using the shortcut in the top tab of this channel  Otherwise, you can ignore this message.",
  },
);
