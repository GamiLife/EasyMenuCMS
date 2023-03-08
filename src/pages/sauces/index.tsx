import { LayoutWrapper } from '../../common/layouts';
import { ListBase } from '../../common/resources';

export default function Sauces() {
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    { title: 'PRECIO', dataIndex: 'price' },
    { title: 'IMAGEN', dataIndex: 'image' },
  ];
  return <ListBase Resource={Sauce}></ListBase>;
}

Sauces.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
