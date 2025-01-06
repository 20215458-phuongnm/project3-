import React from 'react';
import { ActionIcon, ColorSwatch, Group, Highlight, Stack, Text, useMantineTheme } from '@mantine/core';
import {
  FilterPanel,
  ManageHeader,
  ManageHeaderButtons,
  ManageHeaderTitle,
  ManageMain,
  ManagePagination,
  ManageTable,
  SearchPanel
} from 'components';
import DateUtils from 'utils/DateUtils';
import { OrderResponse } from 'models/Order';
import { ListResponse } from 'utils/FetchUtils';
import PageConfigs from 'pages/PageConfigs';
import OrderConfigs from 'pages/order/OrderConfigs';
import useResetManagePageState from 'hooks/use-reset-manage-page-state';
import useInitFilterPanelState from 'hooks/use-init-filter-panel-state';
import useGetAllApi from 'hooks/use-get-all-api';
import useAppStore from 'stores/use-app-store';
import MiscUtils from 'utils/MiscUtils';
import { Clipboard, Plus } from 'tabler-icons-react';
import NotifyUtils from 'utils/NotifyUtils';
import DocketConfigs from 'pages/docket/DocketConfigs';

function OrderManage() {
  const theme = useMantineTheme();

  useResetManagePageState();
  useInitFilterPanelState(OrderConfigs.properties);

  const {
    isLoading,
    data: listResponse = PageConfigs.initialListResponse as ListResponse<OrderResponse>,
  } = useGetAllApi<OrderResponse>(OrderConfigs.resourceUrl, OrderConfigs.resourceKey);

  const { searchToken } = useAppStore();

  const showedPropertiesFragment = (entity: OrderResponse) => {
    const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.paymentMethodType];

    return (
      <>
        <td>{entity.id}</td>
        <td>
          <Group spacing="xs">
            <Highlight
              highlight={searchToken}
              highlightColor="blue"
              size="sm"
              sx={{ fontFamily: theme.fontFamilyMonospace }}
            >
              {entity.code}
            </Highlight>
          </Group>
        </td>
        <td>
          <Stack spacing={0}>
            <Highlight highlight={searchToken} highlightColor="blue" size="sm">
              {entity.user.fullname}
            </Highlight>
            <Highlight highlight={searchToken} highlightColor="blue" size="xs" color="dimmed">
              {entity.user.username}
            </Highlight>
          </Stack>
        </td>
        <td>
          <Stack spacing={0}>
            <Highlight highlight={searchToken} highlightColor="blue" size="sm">
              {entity.toName}
            </Highlight>
            <Highlight highlight={searchToken} highlightColor="blue" size="xs">
              {entity.toPhone}
            </Highlight>
            <Highlight highlight={searchToken} highlightColor="blue" size="xs" color="dimmed">
              {entity.toAddress}
            </Highlight>
            <Highlight highlight={searchToken} highlightColor="blue" size="xs" color="dimmed">
              {[entity.toWardName, entity.toDistrictName].join(', ')}
            </Highlight>
            <Highlight highlight={searchToken} highlightColor="blue" size="xs" color="dimmed">
              {entity.toProvinceName}
            </Highlight>
          </Stack>
        </td>
        <td style={{ textAlign: 'right' }}>
          <Stack align="end" spacing={5}>
            <Text weight={500} size="sm">{MiscUtils.formatPrice(entity.totalPay) + ' ₫'}</Text>
            <PaymentMethodIcon color={theme.colors.gray[5]}/>
          </Stack>
        </td>
        <td>
          <Stack spacing="xs" sx={{ alignItems: 'start' }}>
            {OrderConfigs.orderStatusBadgeFragment(entity.status)}
            {OrderConfigs.orderPaymentStatusBadgeFragment(entity.paymentStatus)}
          </Stack>
        </td>
      </>
    );
  };

  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle
          titleLinks={OrderConfigs.manageTitleLinks}
          title={OrderConfigs.manageTitle}
        />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={OrderConfigs.resourceUrl}
          resourceKey={OrderConfigs.resourceKey}
        />
      </ManageHeader>

      <ManageMain
        listResponse={listResponse}
        isLoading={isLoading}
      >
        <ManageTable
          listResponse={listResponse}
          properties={OrderConfigs.properties}
          resourceUrl={OrderConfigs.resourceUrl}
          resourceKey={OrderConfigs.resourceKey}
          showedPropertiesFragment={showedPropertiesFragment}
          entityDetailTableRowsFragment={OrderConfigs.entityDetailTableRowsFragment}
        />
      </ManageMain>

      <ManagePagination listResponse={listResponse}/>
    </Stack>
  );
}

export default OrderManage;
