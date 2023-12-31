import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    
      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
  );
}

export default Demo;