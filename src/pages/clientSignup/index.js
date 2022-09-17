import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';

export function ClientSignup() {
  return (
    <Container size={420} my={40}>
       <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Want to be our part?
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you already have an account ?{' '}
        <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Login here
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign up
        </Button>  
      </Paper>
    </Container>
  );
}
   