import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "../components/auth/AuthLayout";
import PageTitle from "../components/PageTitle";
import routes from "../routes";

const Header = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const HedaerText = styled.span`
  top: 10;
  font-size: 20px;
  font-weight: 800;
`;

const Content = styled.div`
  margin-top: 150px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;
`;

const CafeCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(285, 285, 285, 0.5);
  cursor: pointer;
`;

const CafeText = styled.span`
  color: ${(props) => props.theme.fontColor};
  font-size: 40px;
`;

const SClickButton = styled.button`
  margin-top: 20px;
  padding: 0.5rem 1rem;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 450px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
`;

function CoffeeShopList(data) {
  const { state } = useLocation();
  console.log(state);
  const shopArray = state?.coffeeShopData;
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <PageTitle title="Coffee Shops List" />
      <Header>
        <HeaderPart>
          <IconBox>
            <FontAwesomeIcon icon={faCoffee} size="2x" />
          </IconBox>
          <HedaerText>Nomad Coffee Shop</HedaerText>
        </HeaderPart>
      </Header>
      <Content>
        {shopArray.map(function (shop) {
          console.log(shop);
          return (
            <div>
              <CafeCard onClick={() => navigate(`/shop/${shop.id}`)}>
                <CafeText>cafe Name: {shop.name}</CafeText>
                <CafeText>latitude: {shop.latitude}</CafeText>
                <CafeText>longitude: {shop.longitude}</CafeText>
              </CafeCard>
            </div>
          );
        })}
      </Content>
    </AuthLayout>
  );
}

export default CoffeeShopList;
