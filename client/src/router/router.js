import React from "react";

// import { history } from "../../src/_components/_helpers";

import { Sidebar } from "../components/Sidebar/Sidebar2"
import { Header } from "../components/Header/Header2"

// CSS Files


import {Login} from "../pages/Login/Login";

import {Register} from "../pages/Register/Register";
import { AuthContext } from "../context/AuthContext";
import { useEffect,useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import { LoginSuccess,LoginStart } from "../context/AuthAction"


import {Export} from "../pages/Factory/ProductManagement/Export";
import {Import} from "../pages/Factory/ProductManagement/Import";
import {List} from "../pages/Factory/Statistics/List";
import {FacTransactionList} from "../pages/Factory/TransactionHistory/FacTransactionList";
import { SalesList } from "../pages/Factory/Statistics/SalesList";
import { ErrorStatistics } from "../pages/Factory/Statistics/ErrorStatistics";

import {AccountList} from "../pages/OC/Accounts/AccountsList";
import {AccountRequest} from "../pages/OC/Accounts/AccountsRequest";
import {AddAccount} from  "../pages/OC/Accounts/AddAccount";
import {OCTransactionList} from "../pages/OC/TransactionHistory/OCTransactionList";
import { ProductlineDashboard } from "../pages/OC/Management/ProductlineDashboard";
import { Factory } from "../pages/OC/Management/Factory";
import { Store } from "../pages/OC/Management/Store";
import { ServiceCenter } from "../pages/OC/Management/ServiceCenter";
import { FactoryStatistics } from "../pages/OC/Statistics/FactoryStatistics";
import { ServiceCenterStatistics } from "../pages/OC/Statistics/ServiceCenterStatistics";
import { StatusStatistics } from "../pages/OC/Statistics/StatusStatistics";
import { StoreStatistics } from "../pages/OC/Statistics/StoreStatistics";

import {SCInsuranceList} from "../pages/SC/InsuranceStatistics/SCInsuranceList";
import {SCTransactionList} from "../pages/SC/TransactionHistory/SCTransactionList";

import {StoreInsuranceList} from "../pages/Store/InsuranceSupport/StoreInsuranceList";
import {ProductRecall} from "../pages/Store/InsuranceSupport/ProductRecall";
import {ImportProduct} from "../pages/Store/ProductManagement/ImportProduct";
import {IssueInvoice} from "../pages/Store/ProductManagement/IssueInvoice";
import {StoreTransactionList} from "../pages/Store/TransactionHistory/StoreTransactionList";
import { ReceiveProduct } from "../pages/Store/InsuranceSupport/ReceiveProduct";
import { StoreSaleList } from "../pages/Store/TransactionHistory/StoreSaleList";

function RouterComponent() {

    const { user,role, dispatch } = useContext(AuthContext);

 



    return (
        <Router>
            <Routes>
               
                <Route path="/" element={user!=""  ? <Navigate to="/home" /> : <Navigate to="/signIn" />} />
                {role == "SeC" && <Route path="/home" element={user!=""  ? <Navigate to="/home/sec" /> : <Navigate to="/signIn" />} />}
                {role == "OpC" && <Route path="/home" element={user!=""  ? <Navigate to="/home/opc" /> : <Navigate to="/signIn" />} />}
                {role == "Sto" && <Route path="/home" element={user!=""  ? <Navigate to="/home/sto" /> : <Navigate to="/signIn" />} />}
                {role == "Fac" && <Route path="/home" element={user!=""  ? <Navigate to="/home/fac" /> : <Navigate to="/signIn" />} />}
                {role == null && <Route path="/home" element={<Navigate to="/signIn" />} />}

                <Route path="/home/sec" element={user!=""  ? <Navigate to="/home/sec/insurance-list" /> : <Navigate to="/signIn" />} />
                <Route path="/home/opc" element={user!=""  ? <Navigate to="/home/opc/dashboard" /> : <Navigate to="/signIn" />} />
                <Route path="/home/sto" element={user!=""  ?<Navigate to="/home/sto/import-product" />  : <Navigate to="/signIn" />} />
                <Route path="/home/fac" element={user!=""  ? <Navigate to="/home/fac/import-product" />  : <Navigate to="/signIn" />} />

                <Route path="/signIn" element={ <Login />} />
                <Route path="/register" element={ <Register />} />

            </Routes>

            <div className="main-wrapper">
                <Sidebar r={role} />

                <div>
                    <Header/>

                    <div className="page-wrapper">
                        <div className="content container-fluid">
                            <Routes>
                                {console.log(user!="" )}
                                <Route path="/home/sec/insurance-list" element={user!=""  ? <SCInsuranceList/> : <Navigate to="/signIn" />}  />
                                <Route path="/home/sec/transaction-list" element={user!=""  ? <SCTransactionList/> : <Navigate to="/signIn" /> } />

                                <Route path="/home/sto/import-product" element={user!=""  ? <ImportProduct/> : <Navigate to="/signIn" />} />
                                <Route path="/home/sto/issue-invoice" element={ user!=""  ? <IssueInvoice/>: <Navigate to="/signIn" />} />
                                <Route path="/home/sto/insurance-list" element={ user!=""  ? <StoreInsuranceList/>: <Navigate to="/signIn" />} />
                                <Route path="/home/sto/product-recall" element={user!=""  ? <ProductRecall/>: <Navigate to="/signIn" />} />
                                <Route path="/home/sto/transaction-list" element={ user!=""  ? <StoreTransactionList/>: <Navigate to="/signIn" />} />
                                <Route path="/home/sto/receive-product" element={ user!=""  ? <ReceiveProduct/>: <Navigate to="/signIn" />} />
                                <Route path="/home/sto/sale-list" element={ user!=""  ? <StoreSaleList/>: <Navigate to="/signIn" />} />
                                

                                <Route path="/home/fac/import-product" element={ user!="" ? <Import/>: <Navigate to="/signIn" />} />
                                <Route path="/home/fac/export-product" element={ user!="" ? <Export/>: <Navigate to="/signIn" />} />
                                <Route path="/home/fac/transaction-list" element={user!=""  ?<FacTransactionList/>: <Navigate to="/signIn" />} />
                                <Route path="/home/fac/statistics-list" element={user!=""  ? <List/>: <Navigate to="/signIn" />} />
                                <Route path="/home/fac/error-list" element={user!=""  ? <ErrorStatistics/>: <Navigate to="/signIn" />} />
                                <Route path="/home/fac/sales-list" element={user!=""  ? <SalesList/>: <Navigate to="/signIn" />} />

                                <Route path="/home/opc/dashboard" element={user!="" ? <ProductlineDashboard/> : <Navigate to="/signIn" />} />
                                <Route path="/home/opc/store-list" element={user!="" ?  <Store/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/factory-list" element={user!="" ?  <Factory/> : <Navigate to="/signIn" />} />
                                <Route path="/home/opc/sc-list" element={user!="" ?  <ServiceCenter/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/account-list" element={user!=""  ?<AccountList/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/account-request" element={user!=""  ?<AccountRequest/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/add-account" element={user!=""  ? <AddAccount/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/factory-statistics" element={ user!=""  ? <FactoryStatistics/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/status-statistics" element={ user!=""  ? <StatusStatistics/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/store-statistics" element={ user!=""  ? <StoreStatistics/>: <Navigate to="/signIn" />} />
                                <Route path="/home/opc/service-statistics" element={ user!=""  ? <ServiceCenterStatistics/>: <Navigate to="/signIn" />} />
                            </Routes>
                        </div>
                        {/* <Route render={(props) => <Footer {...props} />} /> */}
                    </div>
                </div>
            </div>

        </Router>
    )

}
export { RouterComponent };