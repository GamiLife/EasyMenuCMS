import styled from "@emotion/styled";
import { Button, Container, Icon, Image } from "@gamiui/standard";

import Link from "next/link";
import * as React from "react";
import { lightTheme } from "../../../styles/design-system/theme";
import { useGetNewsByCompanyIdQuery } from "../../api";
import { LayoutWrapper } from "../../common/layouts";
import { ListBase, ListToolbar } from "../../common/resources";
import { New } from "../../common/types";
import { categorySlice } from "../../store";

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function News() {
  const columns = [
    { title: "NUMERO", dataIndex: "number" },
    { title: "TITULO", dataIndex: "title" },
    { title: "DESCRIPCION", dataIndex: "description" },
    {
      title: "IMAGEN",
      dataIndex: "imageUrl",
      render: (imageUrl: string) => (
        <Image
          src={imageUrl}
          alt=""
          maxWidth="200px"
          minHeight="20px"
          width="100%"
        />
      ),
    },
    { title: "FECHA INICIO", dataIndex: "startDate" },
    { title: "FECHA VENC.", dataIndex: "endDate" },
    {
      title: "ACCIONES",
      dataIndex: "actions",
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/news/${id}`}>
            <Button variant="secondary" bordered shadow="none">
              <Icon name="preview" color={lightTheme.primary.mediumPurple} />
            </Button>
          </Link>
          <Button variant="danger">
            <Icon name="brain" color={lightTheme.neutral[800]} />
          </Button>
        </Actions>
      ),
    },
  ];
  return (
    <ListBase
      Resource={New}
      columns={columns}
      slice={categorySlice}
      rtkHook={useGetNewsByCompanyIdQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/news/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

News.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
