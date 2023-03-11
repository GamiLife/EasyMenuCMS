import * as React from 'react';
import { LayoutWrapper } from '../common/layouts';
import { LastActivity, ReportResources } from '../modules/home';

export default function Home() {
  return (
    <React.Fragment>
      <ReportResources />
      <LastActivity />
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
