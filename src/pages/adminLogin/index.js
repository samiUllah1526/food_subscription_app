import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { useAdminLogin } from '../../api/admin';


export function AdminLogin() {
    const { mutate, isSuccess, isError } = useAdminLogin();
    return (
        <>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Login as an admin
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="you@mantine.dev" required />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group position="apart" mt="md">
                        <Checkbox label="Remember me" />
                        <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    {/* API payload */}
                    {/* <Button onClick={() => mutate({ email: "example@.com", password: 'password' })
                    } fullWidth mt="xl">
                        Sign in
                    </Button> */}
                </Paper>
            </Container>
        </>
    );
}
