import React from 'react';
import { Group, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

const code = `import React from 'react';
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

export function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
