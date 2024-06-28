import { StoryFn, Meta } from "@storybook/react";
import YouTubeFeed from "./YouTubeFeed";
import React from "react";

export default {
    title: "components/YouTubeFeed",
    component: YouTubeFeed,
} as Meta<typeof YouTubeFeed> 

const Template: StoryFn<typeof YouTubeFeed> = (args) => <YouTubeFeed {...args} /> 

export const FeedTest = Template.bind({});
FeedTest.args = {
    channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    apiKey: "YOU_API_KEY"
}