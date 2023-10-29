interface PageTitleProps {
  usedStylingName: string;
}

const PageTitle = ({ usedStylingName }: PageTitleProps) => {
  return <h2>This page uses {usedStylingName} to style its content</h2>;
};

export default PageTitle;
