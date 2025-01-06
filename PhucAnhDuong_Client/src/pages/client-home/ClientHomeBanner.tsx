// Thêm dòng này ở đầu tệp
import React from 'react';

import {
  Box,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core';
import { Car, HeartHandshake, Stars } from 'tabler-icons-react';
import { ClientCarousel } from 'components';

const useStyles = createStyles((theme) => ({
  rightBanner: {
    flexWrap:'unset',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
    borderRadius: theme.radius.md
  },
}));

function ClientHomeBanner() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={7} lg={8}>
        {/* <ClientCarousel>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(105, theme.colors.teal[3], theme.colors.lime[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.orange[3], theme.colors.red[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.indigo[3], theme.colors.cyan[3]),
            }}
          >
          </Box>
        </ClientCarousel> */}
        <ClientCarousel>
          <Box>
            <img
              src='https://dongphucatlan.vn/wp-content/uploads/2024/09/dong-phuc-hust-2.webp'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://media.licdn.com/dms/image/v2/C5112AQG_O5ZDHRGffw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520220680182?e=2147483647&v=beta&t=CbMDHz-Yh2S3tHDb6P2OmGskalOfqv5IPlRA9MhavhE'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://tiki.vn/blog/wp-content/uploads/2023/03/2Xq9EU32ciB99wavAPMcU0C-cewBnunDpxPK-6oem3SxkaHsvXgwDhKlfBph4DbP2QzwuHNsNERsziRtl8Qz4TWVUsQ8neLC5tLkqtg5U3dtQR1hMEc8s1kn73yvUJJemzAEKQ0jxyZesckWxGGCFc8.png'
              alt='Description of image 1'
              style={{ height: 200, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://product.hstatic.net/200000272737/product/switch.00_03_55_25.still006_b371329d1b27448f8620ec074c04fb7b_master.jpg'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
        </ClientCarousel>
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Stack>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Car size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Miễn phí vận chuyển
              </Text>
              <Text size='sm'>
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Stars size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Bảo hành tận tâm
              </Text>
              <Text size='sm'>
                Bất kể giấy tờ thế nào, công ty luôn cam kết sẽ hỗ trợ khách
                hàng tới cùng.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <HeartHandshake size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Đổi trả 1-1 hoặc hoàn tiền
              </Text>
              <Text size='sm'>
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                nhu cầu.
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ClientHomeBanner;
