'use client';

const BottomMenu = () => (
  <footer className="container-fluid text-white text-center p-4" id="footer">
    <div className="row">
      <div className="col-12 col-md-4">
        <h5>Lunch</h5>
        <p>
          Monday - Friday: 11:00am - 2:30pm
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
      <div className="col-12 col-md-4">
        <h5>Bar</h5>
        <p>
          Monday - Friday: From 11:00am to closing
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
      <div className="col-12 col-md-4">
        <h5>Dinner</h5>
        <p>
          Monday - Friday: 5:00pm - 9:00pm
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
    </div>
  </footer>
);

export default BottomMenu;
