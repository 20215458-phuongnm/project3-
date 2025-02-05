import React from 'react';
import useTitle from 'hooks/use-title';
import { Avatar, Button, Card, Container, Divider, Grid, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { Home, Lock, Mail, Mars, Phone, Venus } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import useAuthStore from 'stores/use-auth-store';
import { ClientUserNavbar } from 'components';

function ClientUser() {
  useTitle();

  const { user } = useAuthStore();

  return (
    <main>
      <Container size="xl">
        <Grid gutter="lg">
          <Grid.Col md={3}>
            <ClientUserNavbar/>
          </Grid.Col>

          <Grid.Col md={9}>
            <Card radius="md" shadow="sm" p="lg">
              <Stack>
                <Title order={2}>
                  Thông tin tài khoản
                </Title>

                <Grid gutter="lg">
                  <Grid.Col lg={6}>
                    <Stack>
                      <Text size="lg" color="dimmed" weight={500}>
                        Thông tin cá nhân
                      </Text>

                      <Group position="apart">
                        <Group>
                    
                          <Stack spacing={0}>
                            <Text weight={500}>{user?.fullname}</Text>
                            <Text color="dimmed">@{user?.username}</Text>
                          </Stack>
                        </Group>
                        
                      </Group>

                      <Divider my={3.5} variant="dotted"/>

                      <Group spacing="sm">
                        
                        <Stack spacing={0}>
                          <Text weight={500}>Giới tính</Text>
                          {user?.gender === 'M' ? 'Nam' : 'Nữ'}
                        </Stack>
                      </Group>

                      <Group spacing="sm" sx={{ flexWrap: 'nowrap' }}>
                        
                        <Stack spacing={0}>
                          <Text weight={500}>Địa chỉ</Text>
                          <Text>
                            {[user?.address.line, user?.address.ward?.name, user?.address.district?.name, user?.address.province?.name]
                              .filter(Boolean)
                              .join(', ')}
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Grid.Col>

                  <Grid.Col lg={6}>
                    <Stack>
                      <Text size="lg" color="dimmed" weight={500}>
                        Số điện thoại và Email
                      </Text>

                      <Group position="apart">
                        <Group spacing="sm">
                          
                          <Stack spacing={0}>
                            <Text weight={500}>Số điện thoại</Text>
                            <Text>{user?.phone}</Text>
                          </Stack>
                        </Group>
                      
                      </Group>

                      <Group position="apart">
                        <Group spacing="sm">
                          
                          <Stack spacing={0}>
                            <Text weight={500}>Email</Text>
                            <Text>{user?.email}</Text>
                          </Stack>
                        </Group>
                       
                      </Group>

                      <Text size="lg" color="dimmed" weight={500}>
                        Bảo mật
                      </Text>

                      <Group position="apart">
                        <Group spacing="sm">
                          
                          <Text weight={500}>Đổi mật khẩu</Text>
                        </Group>
                        <Button
                          component={Link}
                          to="/user/setting/password"
                          variant="outline"
                          radius="md"
                        >
                          Cập nhật
                        </Button>
                      </Group>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientUser;
