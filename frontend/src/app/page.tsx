import {
  Badge,
  Button,
  Card,
  CardSection,
  Center,
  Group,
  Image,
  Text,
} from "@mantine/core";

export default function Home() {
  return (
    <Center h={"100vh"}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <CardSection>
          <Image
            src="https://source.unsplash.com/random"
            height={160}
            alt="Random image from unsplash"
          />
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </Center>
  );
}
