import React from 'react';
import {
  ActionIcon,
  Anchor,
  Box,
  Center,
  Container,
  createStyles,
  Grid,
  Group,
  SegmentedControl,
  Stack,
  Text,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { ElectroLogo } from 'components';
import {
  BrandFacebook,
  BrandInstagram,
  BrandMastercard,
  BrandTiktok,
  BrandVisa,
  BrandYoutube,
  BuildingBank,
  CurrencyDong,
  Headset,
  Moon,
  Sun
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: theme.spacing.xl * 2,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  footerLinks: {
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.xl,
    },
  },

  afterFooter: {
    marginTop: theme.spacing.xl * 2,
    paddingTop: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
  },
}));

function ClientFooter() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <footer className={classes.footer}>
      <Container size="xl">
        <Grid>
          <Grid.Col md={6}>
            <Stack spacing={theme.spacing.lg * 1.75}>
              <ElectroLogo width={135}/>
              <Group>
                <Headset size={52} color={theme.colors[theme.primaryColor][6]} strokeWidth={1.25}/>
                <Stack spacing={theme.spacing.xs / 4}>
                  <Text size="sm" color="dimmed">Hotline</Text>
                  <Text size="xl">0982565117</Text>
                </Stack>
              </Group>
              <Stack spacing={theme.spacing.xs / 2}>
                <Text weight={500}>Địa chỉ liên hệ</Text>
                <Text>Đại học Bách khoa Hà Nội</Text>
              </Stack>
            
            </Stack>
          </Grid.Col>
          <Grid.Col md={6}>
            <Grid>
              <Grid.Col xs={6} className={classes.footerLinks}>
                <Stack>
                  <Text weight={500}>Hỗ trợ khách hàng</Text>
                  <Stack spacing={theme.spacing.xs}>
                    <Anchor component={Link} to="/">Câu hỏi thường gặp</Anchor>
                    <Anchor component={Link} to="/">Hướng dẫn đặt hàng</Anchor>
                    <Anchor component={Link} to="/">Phương thức vận chuyển</Anchor>
                    <Anchor component={Link} to="/">Chính sách đổi trả</Anchor>
                    <Anchor component={Link} to="/">Chính sách thanh toán</Anchor>
                    <Anchor component={Link} to="/">Giải quyết khiếu nại</Anchor>
                    <Anchor component={Link} to="/">Chính sách bảo mật</Anchor>
                  </Stack>
                </Stack>
              </Grid.Col>
              <Grid.Col xs={6} className={classes.footerLinks}>
                <Stack justify="space-between" sx={{ height: '100%' }}>
                  <Stack>
                    <Text weight={500}>Giới thiệu</Text>
                    <Stack spacing={theme.spacing.xs}>
                      <Anchor component={Link} to="/">Về Công ty</Anchor>
                      <Anchor component={Link} to="/">Tuyển dụng</Anchor>
                      <Anchor component={Link} to="/">Hợp tác</Anchor>
                      <Anchor component={Link} to="/">Liên hệ mua hàng</Anchor>
                    </Stack>
                  </Stack>
                 
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
}

export default React.memo(ClientFooter);
