import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Index from "./component/index/Index";
import Grooming from "./component/grooming/Grooming";
import Training from "./component/training/Training";
import Vet from "./component/vet/Vet";
import Adoption from "./component/adoption/Adoption";
import AdoptionListApi from "./component/adoptionListing/AdoptionListApi";
import Shop from "./component/shop/Shop";
import ShopListingApi from "./component/shopListing/ShopListingApi";
import ShopDetails from "./component/shopDetails/ShopDetails";
import AdoptionDetails from "./component/adoptionDetails/AdoptionDetails";
import PlaceOrder from "./component/orders/PlaceOrder";
import ViewOrder from "./component/orders/ViewOrder";
import PlaceDirectOrder from "./component/orders/PlaceDirectOrder";
import SignUp from "./component/login/SignUp";
import Login from "./component/login/Login";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path={"/"} component={Index} />
        <Route exact path={"/grooming"} component={Grooming} />
        <Route exact path={"/training"} component={Training} />
        <Route exact path={"/vet"} component={Vet} />
        <Route exact path={"/adoption"} component={Adoption} />
        <Route exact path={"/adopt-a-pet"} component={AdoptionListApi} />
        <Route exact path={"/shopping"} component={Shop} />
        <Route
          exact
          path={"/listing/:category_id"}
          component={ShopListingApi}
        />
        <Route
          exact
          path={"/details/:category_id/:id"}
          component={ShopDetails}
        />
        <Route
          exact
          path={"/adoption-details/:breed_id/:id"}
          component={AdoptionDetails}
        />
        <Route exact path={"/placeOrder/:category"} component={PlaceOrder} />
        <Route
          exact
          path={"/placeDirectOrder/:category"}
          component={PlaceDirectOrder}
        />

        <Route exact path={"/viewOrders"} component={ViewOrder} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={SignUp} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Routing;
