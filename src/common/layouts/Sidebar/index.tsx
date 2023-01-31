import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

export interface ISidebar {}

export const Sidebar = ({}: ISidebar) => {
  const router = useRouter();
  const basePath = router.pathname
    .split('/')
    .filter((item) => item)
    .at(0);

  return (
    <S.Sidebar padding="3rem 1rem">
      <Link href="/">
        <S.Item
          className={classNames({
            active: !basePath,
          })}
        >
          Home
        </S.Item>
      </Link>
      <Link href="/static-pages">
        <S.Item
          className={classNames({
            active: basePath === 'static-pages',
          })}
        >
          Paginas Estaticas
        </S.Item>
      </Link>
      <Link href="/locations">
        <S.Item
          className={classNames({
            active: basePath === 'locations',
          })}
        >
          Locales
        </S.Item>
      </Link>
      <Link href="/categories">
        <S.Item
          className={classNames({
            active: basePath === 'categories',
          })}
        >
          Categorias
        </S.Item>
      </Link>
      <Link href="/news">
        <S.Item
          className={classNames({
            active: basePath === 'news',
          })}
        >
          Noticias
        </S.Item>
      </Link>
      <Link href="/sauces">
        <S.Item
          className={classNames({
            active: basePath === 'sauces',
          })}
        >
          Salsas
        </S.Item>
      </Link>
      <Link href="/dishes">
        <S.Item
          className={classNames({
            active: basePath === 'dishes',
          })}
        >
          Platos
        </S.Item>
      </Link>
    </S.Sidebar>
  );
};
