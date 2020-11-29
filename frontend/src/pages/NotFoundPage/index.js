import React from "react";


class NotFoundPage extends React.Component {
  //class= classe vai estender atá o React Component
  constructor(props) {
    //props que recebe da router
    super(props);
  }

   render() {
    return (
        <p>Página não encontrada</p>
    )
  }
}

export default NotFoundPage;
