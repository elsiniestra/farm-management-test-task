import { Layout } from 'antd';
import { AnimalsPage } from '@/pages/animals';
import { Header } from './components/Header';

function App() {
  return (
    <Layout className="min-h-[100vh]">
      <Header />
      <Layout.Content className="p-[20px]">
        <AnimalsPage />
        {/*<Modal*/}
        {/*  title="Add animal"*/}
        {/*  visible={isCreatingModalOpen}*/}
        {/*  okText="Save"*/}
        {/*  onCancel={() => {*/}
        {/*    resetEditing();*/}
        {/*  }}*/}
        {/*  onOk={() => {*/}
        {/*    setDataSource((pre) => {*/}
        {/*      return pre.map((animal) => {*/}
        {/*        if (animal.id === editingAnimalID.id) {*/}
        {/*          return editingAnimalID;*/}
        {/*        } else {*/}
        {/*          return animal;*/}
        {/*        }*/}
        {/*      });*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Input*/}
        {/*    value={editingAnimalID?.name}*/}
        {/*    onChange={(e) => {*/}
        {/*      setEditingAnimalID((pre) => {*/}
        {/*        return { ...pre, name: e.target.value };*/}
        {/*      });*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Modal>*/}
      </Layout.Content>
    </Layout>
  );
}

export default App;
