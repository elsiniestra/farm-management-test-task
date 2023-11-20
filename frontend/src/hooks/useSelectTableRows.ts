import { Dispatch, Key, SetStateAction, useState } from 'react';

type useSelectTableRowsReturnProps = {
  hasSelected: boolean;
  selectedRowKeys: Key[];
  setSelectedRowKeys: Dispatch<SetStateAction<Key[]>>;
};

export const useSelectTableRows = (): useSelectTableRowsReturnProps => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const hasSelected = selectedRowKeys.length > 0;
  return { selectedRowKeys, setSelectedRowKeys, hasSelected };
};
