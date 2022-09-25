import {
    Anchor,
    Paper,
    Title,
    Container,
    Group,
    Checkbox,
    TextInput,
} from '@mantine/core';
import { useState } from 'react';

import { useAdminLogin } from 'api/admin';
import { inputs, buttons } from 'components';
import { useStyles } from './admin.styles'


const CustomTextInput = inputs.TextInput
const CustomPasswordInput = inputs.PasswordInput
const CustomCheckbox = inputs.Checkbox
const CustomButton = buttons.Button


export function AdminLogin() {
    const [checked, setChecked] = useState(false)
    const { classes } = useStyles();
    const { mutate, isSuccess, isError } = useAdminLogin();
    return (
        <>
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontSize: 45, fontWeight: 700 })}
                    className="primary-color"
                >
                    Admin Login
                </Title>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md" className="border-primary">
                    <CustomTextInput label="Email" placeholder="you@email.com" required />
                    <CustomPasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group position="apart" mt="md">
                        <CustomCheckbox label="Remember me" checked={checked} onChange={(event) => setChecked((prev) => !prev)} />
                        <Anchor className="primary-color" onClick={(event) => event.preventDefault()} href="#" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <CustomButton fullWidth mt="xl" >
                        Sign in
                    </CustomButton>
                </Paper>
            </Container>
        </>
    );
}
