import { NavLink } from "react-router-dom";
import glogo from "../assets/glogo.png";
import { connect } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Payments from "./Payments";
import { Fragment } from "react";

function Header(props) {
  function renderContent() {
    switch (props.auth) {
      case null:
        return <AiOutlineLoading3Quarters />;
      case false:
        return (
          <div className="bg-green-400 py-[4px] px-[12px] rounded-lg hover:bg-green-500">
            <a href="/auth/google" className="flex flex-row items-center">
              <p className="text-lg">Login with &nbsp;</p>
              <img src={glogo} alt="logo" className="h-[20px]" />
            </a>
          </div>
        );
      default:
        return (
          <div className="flex flex-row gap-[20px] items-center">
            <button className="bg-blue-400 py-[6px] px-[12px] rounded-lg hover:bg-blue-500">
              <Payments />
            </button>
            <div className="bg-green-400 py-[4px] px-[12px] rounded-lg hover:bg-green-500">
              <a href="/api/logout" className="flex flex-row items-center">
                <p className="text-lg">Logout</p>
              </a>
            </div>
          </div>
        );
    }
  }

  return (
    <nav className="w-screen h-[50px] flex flex-row px-[30px] items-center justify-between bg-yellow-400">
      <div>
        <NavLink to={props.auth ? "/surveys" : "/"}>
          <h2 className="text-xl font-semibold">Emaily</h2>
        </NavLink>
      </div>
      <Fragment>{renderContent()}</Fragment>
    </nav>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
