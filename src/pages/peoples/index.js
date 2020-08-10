import React, { useEffect, Fragment } from "react";
import PeopleCard from "../../components/card";
import { getAllPeople } from "../../store/actions/peoples";
import { getAllBarang } from "../../store/actions/barangs";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const PeoplesPage = ({ users, goods, getPeoples, getBarangs }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getPeoples();
    getBarangs();
  }, []);

  return (
    <Fragment>
      <div>
        {users.length
          ? users.map((people, key) => {
              return <PeopleCard key={key} people={people} />;
            })
          : null}
      </div>
      <div>
        {goods.length
          ? goods.map((barang, key) => {
              return <PeopleCard key={key} people={barang} />;
            })
          : null}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.peopleReducer.peoples,
    goods: state.barangReducer.barangs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeoples: () => dispatch(getAllPeople()),
    getBarangs: () => dispatch(getAllBarang()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeoplesPage)
);
