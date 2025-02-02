import React from "react";


interface NavProps {
  user: any
}

export const RccNav = ({ user }: NavProps) => {
  console.log(`🪲  ======>  | user:`, user)
  // const { me: { result: me } } = useSelector((state: RootState) => state);
  // const { isMenuSquareOpen, handleIsMenuSquare } = useContext(UIContext);
  // const router = useRouter();

  // const showBackButton = useMemo(() => {
  //   return ["/wishes", "/volunteer-things", "/debt", "/necessary", "/manage", "/lending", "/fixedCosts"]
  //     .includes(router.pathname) ? true : false;
  // }, [router])

  return (
    <React.Fragment>
      <div
        className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
        style={{ zIndex: 10 }}
      >
        {/* <Link href='/manage'>
          <button className={`btn ${router.pathname === "/manage" ? "btn-info" : "btn-secondary"}`}>Manage</button>
        </Link> */}
        <ul className="navbar-nav ms-md-auto" >
          {/* <WalletInformation /> */}
          <div className="card px-3">
            <div className="row justify-content-center align-items-center">
              {/* {settings?.navOptionsRenders({ router, showBackButton }).map((option, index) => (
                <React.Fragment
                  key={`nav-option-${index}`}
                >
                  {option.show &&
                    <ButtonCircleIcon
                      icon={option?.icon}
                      action={option?.action} />
                  }
                </React.Fragment>
              ))} */}

              {/* <UserInfoHead
                imageAction={handleIsMenuSquare}
                firstName={user?.firstName}
                lastName={user?.lastName}
                email={user?.email}
              /> */}
            </div>
          </div>
        </ul>
      </div >
      {/* {
        isMenuSquareOpen &&
        <BackModal
          toggle={() => handleIsMenuSquare()}
        >
          < FloatMenu options={[]} />
        </BackModal>
      } */}
    </React.Fragment>
  );
};