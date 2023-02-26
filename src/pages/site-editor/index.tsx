import { LayoutWrapper } from '../../common/layouts';
import { SiteEditor } from '../../modules/site-editor';

export default function SiteEditorPage() {
  return <SiteEditor />;
}

SiteEditorPage.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
