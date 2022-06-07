import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | Nomad Coffee</title>
    </Helmet>
  );
}

export default PageTitle;
