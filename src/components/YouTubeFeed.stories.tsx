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
    apiKey: "AIzaSyDnW_o96HcL1F_p_M0D3aJfWiI1G9apCn8",
    color: 'blue',
    maxResults: 2,
}