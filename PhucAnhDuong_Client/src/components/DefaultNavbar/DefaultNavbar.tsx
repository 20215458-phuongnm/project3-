import React, { useState } from 'react';
import { Center, Navbar, ScrollArea, Stack, useMantineTheme } from '@mantine/core';
import {
  AddressBook,
  Award,
  Box,
  Building,
  BuildingWarehouse,
  Car,
  CurrencyDollar,
  FileBarcode,
  Fingerprint,
  Home,
  Icon,
  Message,
  Users
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import useAppStore from 'stores/use-app-store';
import useDefaultNavbarStyles from 'components/DefaultNavbar/DefaultNavbar.styles';
import useAdminAuthStore from 'stores/use-admin-auth-store';

interface NavbarLink {
  link: string;
  label: string;
  childLinks?: NavbarChildLink[];
  disableForEmployee?: boolean;
}

interface NavbarChildLink {
  link: string;
  label: string;
}

const navbarLinks: NavbarLink[] = [
  {
    link: '/admin',
    label: 'Trang chủ',
  },
  // {
  //   link: '/admin/address',
  //   label: 'Địa chỉ',
  //   icon: AddressBook,
  //   childLinks: [
  //     {
  //       link: '/admin/address/province',
  //       label: 'Tỉnh thành',
  //     },
  //     {
  //       link: '/admin/address/district',
  //       label: 'Quận huyện',
  //     },
  //     // {
  //     //   link: '/admin/address/ward',
  //     //   label: 'Phường xã',
  //     // },
  //   ],
  //   disableForEmployee: true,
  // },
  {
    link: '/admin/user',
    label: 'Người dùng',

  },
  {
    link: '/admin/user/role',
    label: 'Quyền',

  },
  // {
  //   link: '/admin/employee',
  //   label: 'Nhân viên',

  // },
  //   childLinks: [
  //     {
  //       link: '/admin/employee/office',
  //       label: 'Văn phòng',
  //     },
  //     {
  //       link: '/admin/employee/department',
  //       label: 'Phòng ban',
  //     },
  //     {
  //       link: '/admin/employee/job-type',
  //       label: 'Loại hình công việc',
  //     },
  //     {
  //       link: '/admin/employee/job-level',
  //       label: 'Cấp bậc công việc',
  //     },
  //     {
  //       link: '/admin/employee/job-title',
  //       label: 'Chức danh công việc',
  //     },
  //   ],
  //   disableForEmployee: true,
  // },
  // {
  //   link: '/admin/customer',
  //   label: 'Khách hàng',

  // },
  //   childLinks: [
  //     {
  //       link: '/admin/customer/group',
  //       label: 'Nhóm khách hàng',
  //     },
  //     {
  //       link: '/admin/customer/status',
  //       label: 'Trạng thái khách hàng',
  //     },
  //     {
  //       link: '/admin/customer/resource',
  //       label: 'Nguồn khách hàng',
  //     },
  //   ],
  //   disableForEmployee: true,
  // },
  {
    link: '/admin/category',
    label: 'Danh mục sản phẩm',

  },
  {
    link: '/admin/product',
    label: 'Sản phẩm',

    childLinks: [
      // {
      //   link: '/admin/category',
      //   label: 'Danh mục sản phẩm',
      // },
      // {
      //   link: '/admin/product/brand',
      //   label: 'Nhãn hiệu',
      // },
      // {
      //   link: '/admin/product/supplier',
      //   label: 'Nhà cung cấp',
      // },
      // {
      //   link: '/admin/product/unit',
      //   label: 'Đơn vị tính',
      // },
      // {
      //   link: '/admin/product/tag',
      //   label: 'Tag',
      // },
      // {
      //   link: '/admin/product/guarantee',
      //   label: 'Bảo hành',
      // },
      // {
      //   link: '/admin/product/property',
      //   label: 'Thuộc tính sản phẩm',
      // },
      // {
      //   link: '/admin/product/specification',
      //   label: 'Thông số sản phẩm',
      // },
    ],
    disableForEmployee: true,
  },
  {
    link: '/admin/inventory',
    label: 'Số lượng sản phẩm',
    childLinks: [
      // {
      //   link: '/admin/inventory/warehouse',
      //   label: 'Nhà kho',
      // },
      // // {
      // //   link: '/admin/inventory/purchase-order',
      // //   label: 'Đơn mua hàng',
      // // },
      // {
      //   link: '/admin/inventory/destination',
      //   label: 'Điểm nhập hàng',
      // },
      {
        link: '/admin/inventory/docket/update/24',
        label: 'Điều chỉnh số lượng',
      },
      // {
      //   link: '/admin/inventory/docket-reason',
      //   label: 'Lý do phiếu NXK',
      // },
      // {
      //   link: '/admin/inventory/count',
      //   label: 'Phiếu kiểm kho',
      // },
      // {
      //   link: '/admin/inventory/transfer',
      //   label: 'Phiếu chuyển kho',
      // },
    ],
  },
  {
    link: '/admin/product/guarantee',
    label: 'Bảo hành',

  },
  {
    link: '/admin/order',
    label: 'Đơn hàng',

    // childLinks: [
    //   {
    //     link: '/admin/order/resource',
    //     label: 'Nguồn đơn hàng',
    //   },
    //   {
    //     link: '/admin/order/cancellation-reason',
    //     label: 'Lý do hủy đơn hàng',
    //   },
    // ],
  },
  {
    link: '/admin/review',
    label: 'Đánh giá',

    childLinks: [],
  },
 
  // {
  //   link: '/admin/voucher',
  //   label: 'Sổ quỹ',
  //   icon: CurrencyDollar,
  //   childLinks: [
  //     {
  //       link: '/admin/payment-method',
  //       label: 'Hình thức thanh toán',
  //     },
  //     {
  //       link: '/admin/promotion',
  //       label: 'Khuyến mãi',
  //     },
  //   ],
  //   disableForEmployee: true,
  // },
];

export function DefaultNavbar() {
  const theme = useMantineTheme();
  const { opened } = useAppStore();
  const { classes, cx } = useDefaultNavbarStyles();
  const [active, setActive] = useState('Trang chủ');

  const { isOnlyEmployee } = useAdminAuthStore();

  const navbarLinksFragment = navbarLinks.map(navbarLink => (
    <Stack
      key={navbarLink.label}
      spacing={0}
      sx={{ borderRadius: theme.radius.sm, overflow: 'hidden' }}
    >
      <Link
        to={navbarLink.link}
        className={cx(classes.link, {
          [classes.linkActive]: navbarLink.label === active,
          [classes.linkDisabled]: isOnlyEmployee() && navbarLink.disableForEmployee,
        })}
        onClick={() => setActive(navbarLink.label)}
      >
     
        <span>{navbarLink.label}</span>
      </Link>
      {navbarLink.label === active && (navbarLink.childLinks || []).map(childLink => (
        <Link
          key={childLink.label}
          to={childLink.link}
          className={cx(classes.link, { [classes.childLinkActive]: navbarLink.label === active })}
        >
          <Center sx={{ width: 24, marginRight: theme.spacing.sm }}>
            <div className={classes.childLinkDot}/>
          </Center>
          <span>{childLink.label}</span>
        </Link>
      ))}
    </Stack>
  ));

  return (
    <Navbar
      p="md"
      width={{ md: 250 }}
      mt={50}
      hidden={!opened}
      
    >
      <Navbar.Section grow component={ScrollArea}>
        {navbarLinksFragment}
      </Navbar.Section>
    </Navbar>
  );
}
