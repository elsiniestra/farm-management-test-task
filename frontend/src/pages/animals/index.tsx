import { DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Input, Modal, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import AnimalService from '@/services/animal.service';
import { useModalForm } from '@/hooks/useModalForm';
import { useSelectTableRows } from '@/hooks/useSelectTableRows';

export const AnimalsPage = () => {
  const {
    form,
    errors,
    open,
    showModal,
    handleChange,
    handleSubmit,
    handleCancel,
  } = useModalForm<AnimalCreate>({
    onSubmit: (values) => {
      return AnimalService.create(values).then(() => refetchData());
    },
  });
  const { selectedRowKeys, setSelectedRowKeys, hasSelected } =
    useSelectTableRows();
  const [dataSource, setDataSource] = useState<Animal[]>([]);

  const refetchData = () => {
    // TODO: use the redux or redux+react-query in the future
    AnimalService.list().then((resp) => setDataSource(resp.data));
  };

  useEffect(() => {
    refetchData();
  }, []);

  const onDeleteAnimal = (record: Animal) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete the animal?',
      okText: 'Yes',
      okType: 'danger',
      onOk: async () => {
        await AnimalService.delete(record.id).then(() => refetchData());
      },
    });
  };

  const onDeleteMultipleAnimals = (recordIds: number[]) => {
    Modal.confirm({
      title: `Are you sure, you want to delete ${recordIds.length} animals?`,
      okText: 'Yes',
      okType: 'danger',
      onOk: async () => {
        await Promise.all(recordIds.map(AnimalService.delete)).then(() =>
          refetchData()
        );
      },
    });
  };
  return (
    <>
      <Flex justify="space-between" align="center">
        <Flex gap="small">
          <Typography.Title level={4}>Animals</Typography.Title>
          {hasSelected && (
            <Button
              danger
              onClick={() => {
                onDeleteMultipleAnimals(selectedRowKeys.map(Number));
              }}
              disabled={!hasSelected}
            >
              {`Delete selected ${selectedRowKeys.length} animals`}
            </Button>
          )}
        </Flex>
        <Button
          className="mb-[10px]"
          type="primary"
          onClick={() => showModal()}
        >
          Add a new animal
        </Button>
      </Flex>
      <Table
        dataSource={dataSource}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        rowKey="id"
      >
        <Table.Column key="1" title="ID" dataIndex="id" width={10} />
        <Table.Column key="2" title="Name" dataIndex="name" />
        <Table.Column
          key="3"
          title="Actions"
          width={100}
          align="center"
          render={(record: Animal) => {
            return (
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  onDeleteAnimal(record);
                }}
              />
            );
          }}
        />
      </Table>
      <Modal open={open} onOk={form.submit} onCancel={handleCancel}>
        <Form form={form} onFinish={handleSubmit} onChange={handleChange}>
          <Typography.Title level={4}>Add an animal</Typography.Title>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.ErrorList
            errors={[
              errors &&
                Object.values(errors).map((value) => (
                  <span className="text-red-400">{value}</span>
                )),
            ]}
          />
        </Form>
      </Modal>
    </>
  );
};
