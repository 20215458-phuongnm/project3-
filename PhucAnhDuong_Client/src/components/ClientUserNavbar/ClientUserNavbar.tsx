import { Button, Stack } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Alarm, Award, Bell, FileBarcode, Heart, Icon, MessageCircle, Settings, Star, User } from 'tabler-icons-react';

function ClientUserNavbar() {
  const location = useLocation();

  const navButton = (name: string, path: string, childPaths?: string[]) => (
    <Button
      component={Link}
      to={path}
      size="md"
      radius="md"
      variant={(location.pathname === path || childPaths
        ?.some(path => location.pathname.startsWith(path))) ? 'light' : 'subtle'}
      styles={{ root: { width: '100%', padding: '0 12px' }, inner: { justifyContent: 'start' } }}
    >
      {name}
    </Button>
  );

  return (
    <Stack spacing={5}>
      {navButton('Tài khoản', '/user')}
      {navButton('Thiết đặt', '/user/setting',
        ['/user/setting/personal', '/user/setting/phone', '/user/setting/email', '/user/setting/password'])}
      {navButton('Thông báo', '/user/notification')}
      {navButton('Quản lý đơn hàng', '/order', ['/order/detail'])}
      {navButton('Đánh giá sản phẩm', '/user/review')}
    </Stack>
  );
}

export default ClientUserNavbar;
