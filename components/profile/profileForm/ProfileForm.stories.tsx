import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { ProfileForm } from "./ProfileForm";

const meta: Meta<typeof ProfileForm> = {
  title: "Profile/ProfileForm",
  component: ProfileForm,
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          padding: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

// 1. The standard view when they first land
export const Default: Story = {
  args: {
    isLoading: false,
  },
};

// 2. Testing how it looks with a pre-filled name (e.g. from GitHub/Google auth)
export const PreFilled: Story = {
  args: {
    initialName: "Stevie Caballero",
    isLoading: false,
  },
};

// 3. Testing the "Saving" state to make sure the button and inputs lock correctly
export const Loading: Story = {
  args: {
    initialName: "Tony Hawk",
    isLoading: true,
  },
};
