import React, { useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  Group,
  Loader,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import { CreateUpdateTitle, DefaultPropertyPanel, VariantFinder, VariantTable } from 'components';
import OrderConfigs from 'pages/order/OrderConfigs';
import useOrderUpdateViewModel from 'pages/order/OrderUpdate.vm';
import { useDebouncedValue } from '@mantine/hooks';
import { SelectOption } from 'types';
import useGetAllApi from 'hooks/use-get-all-api';
import { EntityType } from 'components/VariantTable/VariantTable';
import MiscUtils from 'utils/MiscUtils';
import { UserResponse } from 'models/User';
import UserConfigs from 'pages/user/UserConfigs';

function OrderUpdate() {
  const { id } = useParams();
  const {
    order,
    form,
    handleFormSubmit,
    handleClickVariantResultItem,
    handleQuantityInput,
    handleDeleteVariantButton,
    handleShippingCostInput,
    resetForm,
    orderResourceSelectList,
    orderCancellationReasonSelectList,
    paymentMethodSelectList,
    statusSelectList,
    paymentStatusSelectList,
    variants,
  } = useOrderUpdateViewModel(Number(id));

  const [userSelectKeyword, setUserSelectKeyword] = useState('');

  const [userSelectDebouncedKeyword] = useDebouncedValue(userSelectKeyword, 400);

  const [userSelectList, setUserSelectList] = useState<SelectOption[]>([]);

  const { isFetching: isFetchingUserListResponse } = useGetAllApi<UserResponse>(
    UserConfigs.resourceUrl,
    UserConfigs.resourceKey,
    {
      filter: (form.values.userId && userSelectDebouncedKeyword === '') ? `id==${form.values.userId}` : '',
      size: 5,
      search: userSelectDebouncedKeyword,
    },
    (userListResponse) => {
      const selectList: SelectOption[] = userListResponse.content.map((item) => ({
        value: String(item.id),
        label: item.fullname,
      }));
      setUserSelectList(selectList);
    }
  );

  if (!order) {
    return null;
  }

  return (
    <Stack pb={50}>
      <CreateUpdateTitle
        managerPath={OrderConfigs.managerPath}
        title={OrderConfigs.updateTitle}
      />

      <Grid>
        <Grid.Col xs={8}>
          <Paper shadow="xs">
            <Stack spacing="xs" p="sm">
              <VariantFinder
                selectedVariants={variants}
                onClickItem={handleClickVariantResultItem}
                errorSearchInput={form.errors.orderVariants}
              />
              {variants.length > 0 && (
                <VariantTable
                  type={EntityType.ORDER}
                  variants={variants}
                  variantRequests={form.values.orderVariants}
                  handleQuantityInput={handleQuantityInput}
                  handleDeleteVariantButton={handleDeleteVariantButton}
                />
              )}
            </Stack>

            <Divider mt={5}/>

            <Group position="right">
              <Grid p="sm" gutter="xs" style={{ width: '45%' }}>
                <Grid.Col span={6}>
                  <Text size="sm" weight={500}>Tổng thành tiền:</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" color="blue" weight={500} sx={{ textAlign: 'right' }}>
                    {MiscUtils.formatPrice(form.values.totalAmount) + ' ₫'}
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="sm" weight={500}>Thuế ({form.values.tax * 100 + '%'}):</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" color="blue" weight={500} sx={{ textAlign: 'right' }}>
                    {MiscUtils.formatPrice(Number((form.values.totalAmount * form.values.tax).toFixed(0))) + ' ₫'}
                  </Text>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Text size="sm" weight={500}>Tổng tiền trả:</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" color="blue" weight={500} sx={{ textAlign: 'right' }}>
                    {MiscUtils.formatPrice(form.values.totalPay) + ' ₫'}
                  </Text>
                </Grid.Col>
              </Grid>
            </Group>
          </Paper>
        </Grid.Col>

        <Grid.Col xs={4}>
          <form onSubmit={handleFormSubmit}>
            <Paper shadow="xs">
              <Stack spacing={0}>
                <Grid p="sm">
                  <Grid.Col>
                    <Select
                      required
                      rightSection={isFetchingUserListResponse ? <Loader size={16}/> : null}
                      label="Người đặt hàng"
                      placeholder="--"
                      searchable
                      onSearchChange={setUserSelectKeyword}
                      data={userSelectList}
                      {...form.getInputProps('userId')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label={OrderConfigs.properties.code.label}
                      {...form.getInputProps('code')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      required
                      label={OrderConfigs.properties.status.label}
                      placeholder="--"
                      data={statusSelectList}
                      {...form.getInputProps('status')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Tên người nhận"
                      {...form.getInputProps('toName')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Số điện thoại người nhận"
                      {...form.getInputProps('toPhone')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Tỉnh thành người nhận"
                      {...form.getInputProps('toProvinceName')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Quận huyện người nhận"
                      {...form.getInputProps('toDistrictName')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Phường xã người nhận"
                      {...form.getInputProps('toWardName')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      required
                      label="Địa chỉ người nhận"
                      {...form.getInputProps('toAddress')}
                    />
                  </Grid.Col>
              
                  
                  <Grid.Col>
                    <Textarea
                      label="Ghi chú đơn hàng"
                      {...form.getInputProps('note')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      required
                      label="Hình thức thanh toán"
                      placeholder="--"
                      data={paymentMethodSelectList}
                      {...form.getInputProps('paymentMethodType')}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      required
                      label="Trạng thái thanh toán"
                      placeholder="--"
                      data={paymentStatusSelectList}
                      {...form.getInputProps('paymentStatus')}
                    />
                  </Grid.Col>
                </Grid>

                <Divider mt="xs"/>

                <Group position="apart" p="sm">

                  <Button type="submit">Cập nhật</Button>
                </Group>
              </Stack>
            </Paper>
          </form>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default OrderUpdate;
