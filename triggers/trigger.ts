import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";

const trigger: Trigger = {
  type: TriggerTypes.Event,
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    channel_ids: ["C05UG9HEJKE"],
    filter: {
      root: {
        operator: "AND",
        inputs: [{
          operator: "NOT",
          inputs: [{
            statement: "{{data.user_id}} == null",
          }],
        }, {
          statement: "{{data.thread_ts}} == null",
        }],
      },
      version: 1,
    },
  },
  name: "Reply to the posted message",
  workflow: `#/workflows/confirm_tech_support_request`,
  inputs: {
    channel_id: {
      value: TriggerContextData.Event.MessagePosted.channel_id,
    },
    user_id: {
      value: TriggerContextData.Event.MessagePosted.user_id
    }
  },
};

export default trigger;
